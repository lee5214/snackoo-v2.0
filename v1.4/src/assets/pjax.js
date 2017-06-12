function Pjax(callback) {

  if (typeof callback == 'function' ) {
    this.callback = callback;
  }

  var $this = this;

  this.DOM = {};
  this.DOM.oldContent; // setting in changePage()
  this.DOM.mainPageContainer  = document.querySelector('main');
  this.DOM.footer             = document.querySelector('footer');
  this.DOM.pageTitle          = document.head.getElementsByTagName('title')[0];

  window.addEventListener('popstate', function(){
    var url = window.location.href;
    $this.changePage(url);
  });

  document.addEventListener('click', function(e) {
    $this.getLink(e);
  });
}

Pjax.prototype.getLink = function(e) {
  var el = e.target;
  var $this = this;

  // Go up in the nodelist until we find a node with .href (HTMLAnchorElement)
  while ( el && !el.href ) {
    el = el.parentNode;
  }

  if ( this.checkLink(el) ) {

    e.preventDefault();
    this.changePage(el.href);

    return;
  }
};

Pjax.prototype.checkLink = function(link) {

  // If link exist
  if (!link) {
    return false;
  }

  // Check if the link is disabled manually
  if (link.getAttribute('data-load') == 'none') {
    return false;
  }

  // Ignore target="_blank"
  if (link.target == '_blank') {
    return false;
  }

  // Ignore link from 'blogs' and links with hash
  if (link.href.indexOf('blog') <= -1 || link.href.indexOf('#') > -1) {
    return false;
  }

  // Check if it is the some domain
  if (window.location.protocol !== link.protocol || window.location.hostname !== link.hostname) {
    return false;
  }

  return true;
};

Pjax.prototype.loadPage = function(url) {

  return fetch(url, {
    method: 'GET'
  }).then(function(response) {
    return response.text();
  });
}

Pjax.prototype.changePage = function(url) {

  var $this =  this;
  var animTakePlace = false;
  var pageLoaded    = false;

  this.DOM.oldContent = this.DOM.mainPageContainer.querySelector('.js-page-content');

  // Hide the old content and footer
  this.DOM.oldContent.classList.add('fade-out-opacity');
  this.DOM.footer.classList.add('fade-out-opacity');

  // Scroll the page to top
  this.scrollToY(0, window.pageYOffset * 0.875, 'easeInOutQuint');

  // Add new content after animation
  this.animationEnd(this.DOM.oldContent, function(){
    animTakePlace = true;

    // If page haven't loaded show progress bar
    if ( !pageLoaded ) {
      $this.DOM.mainPageContainer.classList.add('progress-bar');
    }
  });

  this.loadPage(url).then(function(responseText) {

    // Remove progress-bar
    pageLoaded = true;
    $this.DOM.mainPageContainer.classList.add('progress-bar--loaded');
    
    setTimeout(function(){
      $this.DOM.mainPageContainer.classList.remove('progress-bar', 'progress-bar--loaded');
    }, 150);    

    var wrapper       = document.createElement('div');
    wrapper.innerHTML = responseText;

    var newContentDOM = wrapper.querySelector('.js-page-content');
    newContentDOM.classList.remove('fade-in-opacity');
    
    // New title
    var title = wrapper.getElementsByTagName('title')[0].innerHTML;

    function waitAnimEnding() {
      if (animTakePlace) {

        // Load new content
        $this.loadNewContent(newContentDOM, url, title);

        window.cancelAnimationFrame(waitAnimEnding);
      } else {
        window.requestAnimationFrame(waitAnimEnding);
      }
    }

    // The first launching
    waitAnimEnding();
  }).catch(function(error){

    console.error(error);

    // Change URL in address line and history
    window.history.pushState(null, null, url);
    window.location.href = url;
  });
};

Pjax.prototype.loadNewContent = function(newContentDOM, url, title) {

  // Remove old content from the page
  this.DOM.oldContent.parentElement.removeChild(this.DOM.oldContent);

  // Add new content into the page
  this.DOM.mainPageContainer.appendChild(newContentDOM);

  // Change URL in address line and history
  window.history.pushState(null, null, url);

  // Change page title
  this.DOM.pageTitle.innerHTML = title;

  newContentDOM.classList.add('fade-in-opacity');

  // Animation for footer
  this.DOM.footer.classList.remove('fade-out-opacity');
  this.DOM.footer.classList.add('fade-in-opacity');

  // run callback
  this.callback();
}

Pjax.prototype.animationEnd = function(elWithAnim, callback) {

  if ( !elWithAnim ) {
    return null;
  }

  // Safari, Chrome, Opera
  elWithAnim.addEventListener('webkitAnimationEnd', function webkitAnimEnd() {
    callback();
    elWithAnim.removeEventListener('webkitAnimationEnd', webkitAnimEnd);
  });

  // Standart syntax
  elWithAnim.addEventListener('animationend', function animEnd() {
    callback();
    elWithAnim.removeEventListener('animationend', animEnd);
  });

}

// main function
Pjax.prototype.scrollToY = function (scrollTargetY, speed, easing) {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use

  var scrollY = window.scrollY,
      scrollTargetY = scrollTargetY || 0,
      speed = speed || 2000,
      easing = easing || 'easeOutSine',
      currentTime = 0;

  // min time .1, max time .8 seconds
  var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  var PI_D2 = Math.PI / 2,
      easingEquations = {
          easeOutSine: function(pos) {
              return Math.sin(pos * (Math.PI / 2));
          },
          easeInOutSine: function(pos) {
              return (-0.5 * (Math.cos(Math.PI * pos) - 1));
          },
          easeInOutQuint: function(pos) {
              if ((pos /= 0.5) < 1) {
                  return 0.5 * Math.pow(pos, 5);
              }
              return 0.5 * (Math.pow((pos - 2), 5) + 2);
          }
      };

  // add animation loop
  function tick() {
      currentTime += 1 / 60;

      var p = currentTime / time;
      var t = easingEquations[easing](p);

      if (p < 1) {
          window.requestAnimationFrame(tick);

          window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
      } else {
          window.scrollTo(0, scrollTargetY);
      }
  }

  // call it once to get started
  tick();
}