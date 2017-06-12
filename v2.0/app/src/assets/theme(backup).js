function onYouTubeIframeAPIReady() {
    theme.SlideshowVideo.loadVideos()
}

function gm_authFailure() {
    $(".map-section").addClass("map-section--load-error"), $(".map-section__container").remove(), $(".map-section__link").remove(), $(".map-section__overlay").after('<div class="errors text-center">' + theme.strings.authError + "</div>")
}


window.theme = window.theme || {},
window.theme = window.theme || {},
theme.Sections = function () {
    this.constructors = {}, this.instances = [], $(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this))
},
theme.Sections.prototype = _.assignIn({},
    theme.Sections.prototype, {
        _createInstance: function (a, b) {
            var c = $(a),
                d = c.attr("data-section-id"),
                e = c.attr("data-section-type");
            if (b = b || this.constructors[e], !_.isUndefined(b)) {
                var f = _.assignIn(new b(a), {
                    id: d,
                    type: e,
                    container: a
                });
                this.instances.push(f)
            }
        },
        _onSectionLoad: function (a) {
            var b = $("[data-section-id]", a.target)[0];
            b && this._createInstance(b)
        },
        _onSectionUnload: function (a) {
            this.instances = _.filter(this.instances, function (b) {
                var c = b.id === a.detail.sectionId;
                return c && _.isFunction(b.onUnload) && b.onUnload(a), !c
            })
        },
        _onSelect: function (a) {
            var b = _.find(this.instances, function (b) {
                return b.id === a.detail.sectionId
            });
            !_.isUndefined(b) && _.isFunction(b.onSelect) && b.onSelect(a)
        },
        _onDeselect: function (a) {
            var b = _.find(this.instances, function (b) {
                return b.id === a.detail.sectionId
            });
            !_.isUndefined(b) && _.isFunction(b.onDeselect) && b.onDeselect(a)
        },
        _onBlockSelect: function (a) {
            var b = _.find(this.instances, function (b) {
                return b.id === a.detail.sectionId
            });
            !_.isUndefined(b) && _.isFunction(b.onBlockSelect) && b.onBlockSelect(a)
        },
        _onBlockDeselect: function (a) {
            var b = _.find(this.instances, function (b) {
                return b.id === a.detail.sectionId
            });
            !_.isUndefined(b) && _.isFunction(b.onBlockDeselect) && b.onBlockDeselect(a)
        },
        register: function (a, b) {
            this.constructors[a] = b, $("[data-section-type=" + a + "]").each(function (a, c) {
                this._createInstance(c, b)
            }.bind(this))
        }
    }),
window.slate = window.slate || {},
slate.rte = {
    wrapTable: function () {
        $(".rte table").wrap('<div class="rte__table-wrapper"></div>')
    },
    iframeReset: function () {
        var a = $('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]'),
            b = a.add(".rte iframe#admin_bar_iframe");
        a.each(function () {
            $(this).wrap('<div class="video-wrapper"></div>')
        }), b.each(function () {
            this.src = this.src
        })
    }
},
window.slate = window.slate || {},
slate.a11y = {
    pageLinkFocus: function (a) {
        function c() {
            a.first().removeClass(b).removeAttr("tabindex")
        }

        var b = "js-focus-hidden";
        a.first().attr("tabIndex", "-1").focus().addClass(b).one("blur", c)
    },
    focusHash: function () {
        var a = window.location.hash;
        a && document.getElementById(a.slice(1)) && this.pageLinkFocus($(a))
    },
    bindInPageLinks: function () {
        $("a[href*=#]").on("click", function (a) {
            this.pageLinkFocus($(a.currentTarget.hash))
        }.bind(this))
    },
    trapFocus: function (a) {
        var b = a.namespace ? "focusin." + a.namespace : "focusin";
        a.$elementToFocus || (a.$elementToFocus = a.$container), a.$container.attr("tabindex", "-1"), a.$elementToFocus.focus(), $(document).off("focusin"), $(document).on(b, function (b) {
            a.$container[0] === b.target || a.$container.has(b.target).length || a.$container.focus()
        })
    },
    removeTrapFocus: function (a) {
        var b = a.namespace ? "focusin." + a.namespace : "focusin";
        a.$container && a.$container.length && a.$container.removeAttr("tabindex"), $(document).off(b)
    }
},
theme.Images = function () {
    function a(a, b) {
        "string" == typeof a && (a = [a]);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.loadImage(this.getSizedImageUrl(d, b))
        }
    }

    function b(a) {
        (new Image).src = a
    }

    function c(a, b, c) {
        var d = this.imageSize(b.src),
            e = this.getSizedImageUrl(a.src, d);
        c ? c(e, a, b) : b.src = e
    }

    function d(a) {
        var b = a.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
        return null !== b ? b[1] : null
    }

    function e(a, b) {
        if (null == b) return a;
        if ("master" === b) return this.removeProtocol(a);
        var c = a.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (null != c) {
            var d = a.split(c[0]),
                e = c[0];
            return this.removeProtocol(d[0] + "_" + b + e)
        }
        return null
    }

    function f(a) {
        return a.replace(/http(s)?:/, "")
    }

    return {
        preload: a,
        loadImage: b,
        switchImage: c,
        imageSize: d,
        getSizedImageUrl: e,
        removeProtocol: f
    }
}(),
theme.Currency = function () {
    function b(b, c) {
        function g(a, b, c, d) {
            if (b = b || 2, c = c || ",", d = d || ".", isNaN(a) || null == a) return 0;
            a = (a / 100).toFixed(b);
            var e = a.split(".");
            return e[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + c) + (e[1] ? d + e[1] : "")
        }

        "string" == typeof b && (b = b.replace(".", ""));
        var d = "",
            e = /\{\{\s*(\w+)\s*\}\}/,
            f = c || a;
        switch (f.match(e)[1]) {
            case "amount":
                d = g(b, 2);
                break;
            case "amount_no_decimals":
                d = g(b, 0);
                break;
            case "amount_with_comma_separator":
                d = g(b, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                d = g(b, 0, ".", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                d = g(b, 0, " ")
        }
        return f.replace(e, d)
    }

    var a = "${{amount}}";
    return {
        formatMoney: b
    }
}(),
slate.Variants = function () {
    function a(a) {
        this.$container = a.$container, this.product = a.product, this.singleOptionSelector = a.singleOptionSelector, this.originalSelectorId = a.originalSelectorId, this.enableHistoryState = a.enableHistoryState, this.currentVariant = this._getVariantFromOptions(), $(this.singleOptionSelector, this.$container).on("change", this._onSelectChange.bind(this))
    }

    return a.prototype = _.assignIn({}, a.prototype, {
        _getCurrentOptions: function () {
            var a = _.map($(this.singleOptionSelector, this.$container), function (a) {
                var b = $(a),
                    c = b.attr("type"),
                    d = {};
                return "radio" === c || "checkbox" === c ? !!b[0].checked && (d.value = b.val(), d.index = b.data("index"), d) : (d.value = b.val(), d.index = b.data("index"), d)
            });
            return a = _.compact(a)
        },
        _getVariantFromOptions: function () {
            var a = this._getCurrentOptions(),
                b = this.product.variants;
            return _.find(b, function (b) {
                return a.every(function (a) {
                    return _.isEqual(b[a.index], a.value)
                })
            })
        },
        _onSelectChange: function () {
            var a = this._getVariantFromOptions();
            this.$container.trigger({
                type: "variantChange",
                variant: a
            }), a && (this._updateMasterSelect(a), this._updateImages(a), this._updatePrice(a), this._updateSKU(a), this.currentVariant = a, this.enableHistoryState && this._updateHistoryState(a))
        },
        _updateImages: function (a) {
            var b = a.featured_image || {},
                c = this.currentVariant.featured_image || {};
            a.featured_image && b.src !== c.src && this.$container.trigger({
                type: "variantImageChange",
                variant: a
            })
        },
        _updatePrice: function (a) {
            a.price === this.currentVariant.price && a.compare_at_price === this.currentVariant.compare_at_price || this.$container.trigger({
                type: "variantPriceChange",
                variant: a
            })
        },
        _updateSKU: function (a) {
            a.sku !== this.currentVariant.sku && this.$container.trigger({
                type: "variantSKUChange",
                variant: a
            })
        },
        _updateHistoryState: function (a) {
            if (history.replaceState && a) {
                var b = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + a.id;
                window.history.replaceState({
                    path: b
                }, "", b)
            }
        },
        _updateMasterSelect: function (a) {
            $(this.originalSelectorId, this.$container).val(a.id)
        }
    }), a
}(),
theme.Drawers = function () {
    function a(a, b, c) {
        var d = {
            close: ".js-drawer-close",
            open: ".js-drawer-open-" + b,
            openClass: "js-drawer-open",
            dirOpenClass: "js-drawer-open-" + b
        };
        if (this.nodes = {
                $parent: $("html").add("body"),
                $page: $("#PageContainer")
            }, this.config = $.extend(d, c), this.position = b, this.$drawer = $("#" + a), !this.$drawer.length) return !1;
        this.drawerIsOpen = !1, this.init()
    }

    return a.prototype.init = function () {
        $(this.config.open).on("click", $.proxy(this.open, this)), this.$drawer.on("click", this.config.close, $.proxy(this.close, this))
    }, a.prototype.open = function (a) {
        var b = !1;
        return a ? a.preventDefault() : b = !0, a && a.stopPropagation && (a.stopPropagation(), this.$activeSource = $(a.currentTarget)), this.drawerIsOpen && !b ? this.close() : (this.$drawer.prepareTransition(), this.nodes.$parent.addClass(this.config.openClass + " " + this.config.dirOpenClass), this.drawerIsOpen = !0, slate.a11y.trapFocus({
            $container: this.$drawer,
            namespace: "drawer_focus"
        }), this.config.onDrawerOpen && "function" == typeof this.config.onDrawerOpen && (b || this.config.onDrawerOpen()), this.$activeSource && this.$activeSource.attr("aria-expanded") && this.$activeSource.attr("aria-expanded", "true"), this.bindEvents(), this)
    }, a.prototype.close = function () {
        this.drawerIsOpen && ($(document.activeElement).trigger("blur"), this.$drawer.prepareTransition(), this.nodes.$parent.removeClass(this.config.dirOpenClass + " " + this.config.openClass), this.drawerIsOpen = !1, slate.a11y.removeTrapFocus({
            $container: this.$drawer,
            namespace: "drawer_focus"
        }), this.unbindEvents())
    }, a.prototype.bindEvents = function () {
        this.nodes.$parent.on("keyup.drawer", $.proxy(function (a) {
            return 27 !== a.keyCode || (this.close(), !1)
        }, this)), this.nodes.$page.on("touchmove.drawer", function () {
            return !1
        }), this.nodes.$page.on("click.drawer", $.proxy(function () {
            return this.close(), !1
        }, this))
    }, a.prototype.unbindEvents = function () {
        this.nodes.$page.off(".drawer"), this.nodes.$parent.off(".drawer")
    }, a
}(),
window.theme = window.theme || {},
theme.Header = function () {
    function b() {
        $(a.navigationTarget).html(""), $(a.navigationSource).detach().appendTo(a.navigationTarget)
    }

    function c() {
        $(a.navigation).mmenu({
            offCanvas: !1,
            navbar: {
                title: !1
            }
        }), $(a.navigationTrigger).on("click", function (a) {
            a.preventDefault(), $(".mm-listview > li").velocity("transition.slideLeftIn", {
                delay: 500,
                duration: 300,
                stagger: 100
            })
        })
    }

    function d() {
        function o() {
            m = l.height(), h = g.height(), i = g.scrollTop(), k = j - i, f.toggleClass(c, i > d), i <= 0 ? f.removeClass(b) : k > 0 && f.hasClass(b) ? f.removeClass(b) : k < 0 && (i + h >= m && f.hasClass(b) ? f.removeClass(b) : f.addClass(b)), j = i
        }

        if ("true" == $(a.header).attr("data-my-sticky")) {
            var b = "header--hidden",
                c = "header--narrow",
                d = 20,
                e = 50,
                f = $(a.header);
            if (!f.length) return !0;
            "false" == $(a.header).attr("data-my-sticky-scroll") && (b = ""), "true" == $(a.header).attr("data-my-sticky-mobile") && $(a.header).addClass("mobile");
            var g = $(window),
                h = 0,
                i = 0,
                j = 0,
                k = 0,
                l = $(document),
                m = 0,
                n = function (a, b) {
                    var c, d;
                    return function () {
                        var e = this,
                            f = arguments,
                            g = +new Date;
                        c && g < c + a ? (clearTimeout(d), d = setTimeout(function () {
                            c = g, b.apply(e, f)
                        }, a)) : (c = g, b.apply(e, f))
                    }
                };
            g.on("scroll", n(e, function () {
                o()
            })), o()
        }
    }

    function e() {
        $(a.navigation).length && (b(), c(), d())
    }

    var a = {
        header: ".site-header",
        navigation: "nav#menu",
        navigationTrigger: ".site-header .menu-trigger",
        navigationSource: ".site-header .menu-offcanvas",
        navigationTarget: ".offcanvas_aside_left #menu-offcanvas"
    };
    return {
        init: e
    }
}(),
window.theme = window.theme || {},
theme.Search = function () {
    function b() {
        $(a.searchTarget).html(""), $(a.search).detach().appendTo(a.searchTarget)
    }

    function c() {
        function g() {
            var g = e.val();
            if (g.length < 2) return c.removeClass("searching found-products found-no-product").addClass("invalid-length"), void c.find(".search_suggestion").slideDown();
            var h = "/search?" + d.serialize();
            if (c.find(".search_suggestion").slideUp(function () {
                    c.removeClass("found-products found-no-product").addClass("searching")
                }), g in b) {
                var i = b[g];
                c.removeClass("searching"), i.found ? (c.addClass("found-products"), f.find(".search_result .suggestion_unlisted").html(i.products), f.find(".search_result .suggestion_more a").attr("href", h), f.find(".search_result .suggestion_unlisted, .search_result .suggestion_more").slideDown(function () {
                    c.removeClass("invalid-length")
                })) : (c.addClass("found-no-product"), f.find(".search_result .suggestion_unlisted").html($('<div class="not-found text-center" />').text(i.text)), f.find(".search_result .suggestion_more a").attr("href", "#"), f.find(".search_result .suggestion_more").slideUp(), f.find(".search_result .suggestion_unlisted").slideDown(function () {
                    c.removeClass("invalid-length")
                })), c.addClass("searched")
            } else a = $.get(h, function (a) {
                var d = $(a),
                    e = d.find("#content-position .products"),
                    i = d.find("#content-position .no-products .empty");
                c.removeClass("searching"), e.length ? (e.children(".last").nextAll().remove(), c.addClass("found-products"), f.find(".search_result .suggestion_unlisted").html(e), f.find(".search_result .suggestion_more a").attr("href", h), f.find(".search_result .suggestion_unlisted, .search_result .suggestion_more").slideDown(function () {
                    c.removeClass("invalid-length")
                }), b[g] = {
                    found: !0,
                    products: e
                }) : i.length && (c.addClass("found-no-product"), f.find(".search_result .suggestion_unlisted").html($('<div class="not-found text-center" />').text(i.text())), f.find(".search_result .suggestion_more a").attr("href", "#"), f.find(".search_result .suggestion_more").slideUp(), f.find(".search_result .suggestion_unlisted").slideDown(function () {
                    c.removeClass("invalid-length")
                }), b[g] = {
                    found: !1,
                    text: i.text()
                }), theme.CurrencyPicker.convert(".search_result .products .product .money"), c.addClass("searched")
            }, "html")
        }

        var a = null,
            b = {},
            c = $("#search-offcanvas"),
            d = c.find("form"),
            e = d.find("input.search-field"),
            f = c.find(".suggestion_results");
        c.on("keyup", ".search-field", function (b) {
            var c = !1;
            void 0 === b.which ? c = !0 : "number" == typeof b.which && b.which > 0 && (c = !b.ctrlKey && !b.metaKey && !b.altKey), c && (a && (a.abort(), e.focus()), g())
        }).on("focusout", ".search-field", function () {
            e.val().length < 2 && f.find(".search_result .suggestion_unlisted, .buttons").slideUp(function () {
                c.removeClass("searching searched found-products found-no-product invalid-length")
            })
        })
    }

    function d() {
        $(a.search).length && (b(), c())
    }

    var a = {
        search: "#search-section",
        searchTarget: ".offcanvas_aside_right .offcanvas_search"
    };
    return {
        init: d
    }
}(),
window.theme = window.theme || {},
theme.CurrencyPicker = function () {
    function c() {
        var c = $(a.currency).closest(".language_currency");
        b.currency_format = c.find(".currency_format").val(), b.shop_currency = c.find(".shop_currency").val(), b.default_currency = c.find(".default_currency").val(), b.money_with_currency_format = c.find(".money_with_currency_format").val(), b.money_format = c.find(".money_format").val(), Currency.format = b.currency_format;
        var d = b.shop_currency;
        Currency.moneyFormats[d].money_with_currency_format = b.money_with_currency_format, Currency.moneyFormats[d].money_format = b.money_format;
        var e = b.default_currency;
        try {
            var f = Currency.cookie.read();
            $("span.money span.money").each(function () {
                $(this).parents("span.money").removeClass("money")
            }), $("span.money").each(function () {
                $(this).attr("data-currency-" + b.shop_currency, $(this).html())
            }), null == f ? d !== e ? Currency.convertAll(d, e) : Currency.currentCurrency = e : $(a.currency).length && 0 === $(a.currency + " .currency[data-code=" + f + "]").size() ? (Currency.currentCurrency = d, Currency.cookie.write(d)) : f === d ? Currency.currentCurrency = d : Currency.convertAll(d, f), $(a.currency).on("click", ".currency:not(.active)", function () {
                var b = $(this).attr("data-code");
                Currency.convertAll(Currency.currentCurrency, b), $(a.currencyPicker).removeClass("active"), $(this).addClass("active")
            });
            window.selectCallback;
            $("body").on("ajaxCart.afterCartLoad", function (b) {
                Currency.convertAll(d, $(a.currencyActive).attr("data-code")), $(a.currencyPicker).removeClass("active"), $(a.currency + " .currency[data-code=" + Currency.currentCurrency + "]").addClass("active")
            }), $(a.currencyPicker).removeClass("active"), $(a.currency + " .currency[data-code=" + Currency.currentCurrency + "]").addClass("active")
        } catch (a) {
            console.log(a.message)
        }
    }

    function d(c) {
        if ($(a.currency).length) try {
            $(c).each(function () {
                $(this).attr("data-currency-" + b.shop_currency, $(this).html())
            }), Currency.convertAll(b.shop_currency, Currency.cookie.read(), c, b.currency_format)
        } catch (a) {
            console.log(a.message)
        }
    }

    function e() {
        $(a.currency).length && c()
    }

    var a = {
            currency: ".language_currency .currency_switcher",
            currencyPicker: ".language_currency .currency_switcher .currency",
            currencyActive: ".language_currency .currency_switcher .currency.active"
        },
        b = {
            currency_format: "",
            shop_currency: "",
            default_currency: "",
            money_with_currency_format: "",
            money_format: "USD"
        };
    return {
        init: e,
        convert: d
    }
}(),
function () {
    function c(a) {
        var b = document.createElement("a");
        return b.ref = a, b.hostname
    }

    var a = {
            backButton: ".return-link"
        },
        b = $(a.backButton);
    document.referrer && b.length && window.history.length && b.one("click", function (a) {
        a.preventDefault();
        var b = c(document.referrer);
        return c(window.location.href) === b && history.back(), !1
    })
}(),
theme.Slideshow = function () {
    function b(b) {
        this.$slideshow = $(b), this.$wrapper = this.$slideshow.closest("." + a.wrapper), this.$pause = this.$wrapper.find("." + a.pauseButton), this.settings = {
            accessibility: !0,
            arrows: !0,
            dots: !1,
            fade: !0,
            draggable: !0,
            touchThreshold: 20,
            autoplay: this.$slideshow.data("autoplay"),
            autoplaySpeed: this.$slideshow.data("speed")
        }, this.$slideshow.on("beforeChange", f.bind(this)), this.$slideshow.on("init", e.bind(this)), this.$slideshow.slick(this.settings), this.$pause.on("click", this.togglePause.bind(this)), d(), c()
    }

    function c() {
        function b() {
            var b = $(window).height();
            $("." + a.slideshowWindow).css("height", b)
        }

        $("." + a.slideshowWindow).length && (b(), $(window).on("resize", function () {
            b()
        }))
    }

    function d() {
        $("." + a.imageBackground).bgLoaded({
            afterLoaded: function () {
                $("." + a.wrapper).removeClass("loading"), $("." + a.wrapper).find(".tp-loader").hide()
            }
        })
    }

    function e(b, c) {
        var d = c.$slider,
            e = c.$list,
            f = this.$wrapper,
            g = this.settings.autoplay;
        e.removeAttr("aria-live"), f.on("focusin", function (a) {
            f.has(a.target).length && (e.attr("aria-live", "polite"), g && d.slick("slickPause"))
        }), f.on("focusout", function (b) {
            if (f.has(b.target).length && (e.removeAttr("aria-live"), g)) {
                if ($(b.target).hasClass(a.closeVideoBtn)) return;
                d.slick("slickPlay")
            }
        }), c.$dots && c.$dots.on("keydown", function (a) {
            37 === a.which && d.slick("slickPrev"), 39 === a.which && d.slick("slickNext"), 37 !== a.which && 39 !== a.which || c.$dots.find(".slick-active button").focus()
        })
    }

    function f(b, c, d, e) {
        var f = c.$slider,
            h = f.find("." + a.currentSlide),
            i = f.find('.slideshow__slide[data-slick-index="' + e + '"]');
        if (g(h)) {
            var j = h.find("." + a.video),
                k = j.attr("id");
            theme.SlideshowVideo.pauseVideo(k), j.attr("tabindex", "-1")
        }
        if (g(i)) {
            var l = i.find("." + a.video),
                m = l.attr("id");
            l.hasClass(a.videoBackground) ? theme.SlideshowVideo.playVideo(m) : l.attr("tabindex", "0")
        }
    }

    function g(b) {
        return b.find("." + a.video).length
    }

    function h(a) {
        return "#Slideshow-" + a.data("id")
    }

    this.$slideshow = null;
    var a = {
        wrapper: "slideshow-wrapper",
        slideshow: "slideshow",
        slideshowWindow: "slideshow--window",
        imageBackground: "slideshow__image",
        currentSlide: "slick-current",
        video: "slideshow__video",
        videoBackground: "slideshow__video--background",
        closeVideoBtn: "slideshow__video-control--close",
        pauseButton: "slideshow__pause",
        isPaused: "is-paused"
    };
    return b.prototype.togglePause = function () {
        var b = h(this.$pause);
        this.$pause.hasClass(a.isPaused) ? (this.$pause.removeClass(a.isPaused), $(b).slick("slickPlay")) : (this.$pause.addClass(a.isPaused), $(b).slick("slickPause"))
    }, b
}(),
theme.SlideshowVideo = function () {
    function j(a) {
        if (a.length && (f[a.attr("id")] = {
                id: a.attr("id"),
                videoId: a.data("id"),
                type: a.data("type"),
                status: "chrome" === a.data("type") ? "closed" : "background",
                videoSelector: a.attr("id"),
                $parentSlide: a.closest("." + i.slide),
                $parentSlideshowWrapper: a.closest("." + i.slideshowWrapper),
                controls: "background" === a.data("type") ? 0 : 1,
                slideshow: a.data("slideshow")
            }, !e)) {
            var b = document.createElement("script");
            b.src = "https://www.youtube.com/iframe_api";
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(b, c)
        }
    }

    function k(a) {
        (c || d) && a && "function" == typeof g[a].playVideo && o(a)
    }

    function l(a) {
        g[a] && "function" == typeof g[a].pauseVideo && g[a].pauseVideo()
    }

    function m() {
        for (var a in f)
            if (f.hasOwnProperty(a)) {
                var b = $.extend({}, h, f[a]);
                b.playerVars.controls = b.controls, g[a] = new YT.Player(a, b)
            }
        F(), e = !0
    }

    function n(a) {
        if (e) {
            var b = $.extend({}, h, f[a]);
            b.playerVars.controls = b.controls, g[a] = new YT.Player(a, b), F()
        }
    }

    function o(c, e) {
        var h = f[c],
            j = g[c],
            k = f[c].$parentSlide;
        if (d) w(h);
        else if (e || a && b) return k.removeClass(i.loading), w(h), void j.playVideo();
        a || q(j, k)
    }

    function p(b) {
        var c = b ? i.supportsAutoplay : i.supportsNoAutoplay;
        $(document.documentElement).addClass(c), b || (d = !0), a = !0
    }

    function q(b, c) {
        b.playVideo(), r(b).then(function () {
            p(!0)
        }).fail(function () {
            p(!1), b.stopVideo()
        }).always(function () {
            a = !0, c.removeClass(i.loading)
        })
    }

    function r(a) {
        var d, e, c = $.Deferred();
        return d = setInterval(function () {
            a.getCurrentTime() <= 0 || (b = !0, clearInterval(d), clearTimeout(e), c.resolve())
        }, 500), e = setTimeout(function () {
            clearInterval(d), c.reject()
        }, 4e3), c
    }

    function s() {
        c || ($(window).width() < 750 ? d = !0 : window.mobileCheck() && (d = !0), d && p(!1), c = !0)
    }

    function t(a) {
        a.target.setPlaybackQuality("hd1080");
        var b = z(a);
        switch (s(), $("#" + b.id).attr("tabindex", "-1"), B(), b.type) {
            case "background-chrome":
            case "background":
                a.target.mute(), b.$parentSlide.hasClass(i.currentSlide) && o(b.id)
        }
        b.$parentSlide.addClass(i.loaded)
    }

    function u(a) {
        var b = z(a);
        switch (a.data) {
            case 0:
                v(b);
                break;
            case 1:
                w(b);
                break;
            case 2:
                x(b)
        }
    }

    function v(a) {
        switch (a.type) {
            case "background":
                g[a.id].seekTo(0);
                break;
            case "background-chrome":
                g[a.id].seekTo(0), y(a.id);
                break;
            case "chrome":
                y(a.id)
        }
    }

    function w(a) {
        var b = a.$parentSlideshowWrapper,
            c = a.$parentSlide;
        if (c.removeClass(i.loading), "background" !== a.status) {
            switch ($("#" + a.id).attr("tabindex", "0"), a.type) {
                case "chrome":
                case "background-chrome":
                    b.removeClass(i.paused).addClass(i.playing), c.removeClass(i.paused).addClass(i.playing)
            }
            c.find("." + i.closeVideoBtn).focus()
        }
    }

    function x(a) {
        var b = a.$parentSlideshowWrapper,
            c = a.$parentSlide;
        if ("background-chrome" === a.type) return void y(a.id);
        "closed" !== a.status && "background" !== a.type && (b.addClass(i.paused), c.addClass(i.paused)), "chrome" === a.type && "closed" === a.status && (b.removeClass(i.paused), c.removeClass(i.paused)), b.removeClass(i.playing), c.removeClass(i.playing)
    }

    function y(a) {
        var b = f[a],
            c = b.$parentSlideshowWrapper,
            d = b.$parentSlide,
            e = [i.pause, i.playing].join(" ");
        switch ($("#" + b.id).attr("tabindex", "-1"), b.status = "closed", b.type) {
            case "background-chrome":
                g[a].mute(), E(a);
                break;
            case "chrome":
                g[a].stopVideo(), x(b)
        }
        c.removeClass(e), d.removeClass(e)
    }

    function z(a) {
        return f[a.target.h.id]
    }

    function A(a) {
        var b = f[a];
        switch (b.$parentSlide.addClass(i.loading), b.status = "open", b.type) {
            case "background-chrome":
                D(a, b), g[a].unMute(), o(a, !0);
                break;
            case "chrome":
                o(a, !0)
        }
        $(document).on("keydown.videoPlayer", function (b) {
            27 === b.keyCode && y(a)
        })
    }

    function B() {
        $("." + i.videoBackground).each(function (a, b) {
            C($(b))
        })
    }

    function C(a) {
        var b = a.closest("." + i.slide);
        if (!b.hasClass(i.slickClone)) {
            var c = b.width(),
                d = a.width(),
                e = a.height();
            c / h.ratio < e ? (d = Math.ceil(e * h.ratio), a.width(d).height(e).css({
                left: (c - d) / 2,
                top: 0
            })) : (e = Math.ceil(c / h.ratio), a.width(c).height(e).css({
                left: 0,
                top: (e - e) / 2
            })), a.prepareTransition().addClass(i.loaded)
        }
    }

    function D(a) {
        $("#" + a).removeAttr("style").removeClass(i.videoBackground).addClass(i.videoChrome), f[a].$parentSlideshowWrapper.removeClass(i.slideBackgroundVideo).addClass(i.playing), f[a].$parentSlide.removeClass(i.slideBackgroundVideo).addClass(i.playing), f[a].status = "open"
    }

    function E(a) {
        var b = $("#" + a).addClass(i.videoBackground).removeClass(i.videoChrome);
        f[a].$parentSlide.addClass(i.slideBackgroundVideo), f[a].status = "background", C(b)
    }

    function F() {
        $(document).on("click.videoPlayer", "." + i.playVideoBtn, function (a) {
            A($(a.currentTarget).data("controls"))
        }), $(document).on("click.videoPlayer", "." + i.closeVideoBtn, function (a) {
            y($(a.currentTarget).data("controls"))
        }), $(window).on("resize.videoPlayer", $.debounce(250, function () {
            e && B()
        }))
    }

    function G() {
        $(document).off(".videoPlayer"), $(window).off(".videoPlayer")
    }

    var a = !1,
        b = !1,
        c = !1,
        d = !1,
        e = !1,
        f = {},
        g = [],
        h = {
            ratio: 16 / 9,
            playerVars: {
                iv_load_policy: 3,
                modestbranding: 1,
                autoplay: 0,
                controls: 0,
                showinfo: 0,
                wmode: "opaque",
                branding: 0,
                autohide: 0,
                rel: 0
            },
            events: {
                onReady: t,
                onStateChange: u
            }
        },
        i = {
            playing: "video-is-playing",
            paused: "video-is-paused",
            loading: "video-is-loading",
            loaded: "video-is-loaded",
            slideshowWrapper: "slideshow-wrapper",
            slide: "slideshow__slide",
            slideBackgroundVideo: "slideshow__slide--background-video",
            slideDots: "slick-dots",
            videoChrome: "slideshow__video--chrome",
            videoBackground: "slideshow__video--background",
            playVideoBtn: "slideshow__video-control--play",
            closeVideoBtn: "slideshow__video-control--close",
            currentSlide: "slick-current",
            slickClone: "slick-cloned",
            supportsAutoplay: "autoplay",
            supportsNoAutoplay: "no-autoplay"
        };
    return {
        init: j,
        loadVideos: m,
        loadVideo: n,
        playVideo: k,
        pauseVideo: l,
        removeEvents: G
    }
}(),
function () {
    var a = $("#BlogTagFilter");
    a.length && a.on("change", function () {
        location.href = $(this).val()
    })
}(),
window.theme = theme || {},
theme.customerTemplates = function () {
    function a() {
        $("#RecoverPassword").on("click", function (a) {
            a.preventDefault(), b()
        }), $("#HideRecoverPasswordLink").on("click", function (a) {
            a.preventDefault(), b()
        })
    }

    function b() {
        $("#RecoverPasswordForm").toggleClass("hide"), $("#CustomerLoginForm").toggleClass("hide")
    }

    function c() {
        $(".reset-password-success").length && $("#ResetSuccess").removeClass("hide")
    }

    function d() {
        var a = $("#AddressNewForm");
        a.length && (Shopify && new Shopify.CountryProvinceSelector("AddressCountryNew", "AddressProvinceNew", {
            hideElement: "AddressProvinceContainerNew"
        }), $(".address-country-option").each(function () {
            var a = $(this).data("form-id"),
                b = "AddressCountry_" + a,
                c = "AddressProvince_" + a,
                d = "AddressProvinceContainer_" + a;
            new Shopify.CountryProvinceSelector(b, c, {
                hideElement: d
            })
        }), $(".address-new-toggle").on("click", function () {
            a.toggleClass("hide")
        }), $(".address-edit-toggle").on("click", function () {
            var a = $(this).data("form-id");
            $("#EditAddress_" + a).toggleClass("hide")
        }), $(".address-delete").on("click", function () {
            var a = $(this),
                b = a.data("form-id"),
                c = a.data("confirm-message");
            confirm(c || "Are you sure you wish to delete this address?") && Shopify.postLink("/account/addresses/" + b, {
                parameters: {
                    _method: "delete"
                }
            })
        }))
    }

    function e() {
        "#recover" === window.location.hash && b()
    }

    return {
        init: function () {
            e(), a(), c(), d()
        }
    }
}(),
window.theme = window.theme || {},
theme.Filters = function () {
    function c() {
        $(b.filter).length && ($(b.fiterTarget).html(""), $(b.filter).clone().appendTo(b.fiterTarget), $(".offcanvas_shop_sidebar").fitVids())
    }

    function d(a) {
        var d = this.$container = $(a);
        c(), this.$sortSelect = $(b.sortSelection, d), this.defaultSort = this._getDefaultSortValue(), this.$sortSelect.on("change", this._onSortChange.bind(this))
    }

    var a = {
            SORT_BY: "sort_by"
        },
        b = {
            sortSelection: ".filters-toolbar__input--sort",
            defaultSort: ".collection-header__default-sort",
            filter: ".shop-page #secondary",
            fiterTarget: ".offcanvas_aside_left .offcanvas_shop_sidebar .widget-area"
        };
    return d.prototype = _.assignIn({}, d.prototype, {
        _onSortChange: function (a) {
            var b = this._sortValue();
            b.length ? window.location.search = b : window.location.href = window.location.href.replace(window.location.search, "")
        },
        _getSortValue: function () {
            return this.$sortSelect.val() || this.defaultSort
        },
        _getDefaultSortValue: function () {
            return $(b.defaultSort, this.$container).val()
        },
        _sortValue: function () {
            var b = this._getSortValue(),
                c = "";
            return b !== this.defaultSort && (c = a.SORT_BY + "=" + b), c
        },
        onUnload: function () {
            this.$sortSelect.off("change", this._onSortChange)
        }
    }), d
}(),
window.theme = window.theme || {},
theme.HeaderSection = function () {
    function a() {
        theme.Header.init(), theme.Search.init(), theme.CurrencyPicker.init()
    }

    return a
}(),
theme.Maps = function () {
    function e(a) {
        this.$container = $(a), "loaded" === b ? this.createMap() : (c.push(this), "loading" !== b && (b = "loading", void 0 === window.google && $.getScript("https://maps.googleapis.com/maps/api/js?key=" + d).then(function () {
            b = "loaded", f()
        })))
    }

    function f() {
        $.each(c, function (a, b) {
            b.createMap()
        })
    }

    function g(a) {
        var b = $.Deferred(),
            c = new google.maps.Geocoder,
            d = a.data("address-setting");
        return c.geocode({
            address: d
        }, function (a, c) {
            c !== google.maps.GeocoderStatus.OK && b.reject(c), b.resolve(a)
        }), b
    }

    var a = {
            zoom: 14
        },
        b = null,
        c = [],
        d = theme.mapKey ? theme.mapKey : "";
    return e.prototype = _.assignIn({}, e.prototype, {
        createMap: function () {
            var b = this.$container.find(".map-section__container");
            return g(b).then(function (c) {
                var d = {
                        zoom: a.zoom,
                        center: c[0].geometry.location,
                        disableDefaultUI: !0
                    },
                    e = this.map = new google.maps.Map(b[0], d),
                    f = this.center = e.getCenter();
                new google.maps.Marker({
                    map: e,
                    position: e.getCenter()
                });
                google.maps.event.addDomListener(window, "resize", $.debounce(250, function () {
                    google.maps.event.trigger(e, "resize"), e.setCenter(f)
                }))
            }.bind(this)).fail(function () {
                var a;
                switch (status) {
                    case "ZERO_RESULTS":
                        a = theme.strings.addressNoResults;
                        break;
                    case "OVER_QUERY_LIMIT":
                        a = theme.strings.addressQueryLimit;
                        break;
                    default:
                        a = theme.strings.addressError
                }
                b.parent().addClass("page-width map-section--load-error").html('<div class="errors text-center">' + a + "</div>")
            })
        },
        onUnload: function () {
            google.maps.event.clearListeners(this.map, "resize")
        }
    }), e
}(),
theme.Product = function () {
    function a(a) {
        var b = this.$container = $(a),
            c = b.attr("data-section-id");
        this.settings = {
            mediaQueryMediumUp: "screen and (min-width: 750px)",
            mediaQuerySmall: "screen and (max-width: 749px)",
            bpSmall: !1,
            enableHistoryState: b.data("enable-history-state") || !1,
            imageSize: null,
            namespace: ".slideshow-" + c,
            sectionId: c,
            sliderActive: !1
        }, this.selectors = {
            product: "#ProductSection-" + c,
            addToCart: "#AddToCart-" + c,
            addToCartText: "#AddToCartText-" + c,
            stockText: ".stock-" + c,
            comparePrice: "#ComparePrice-" + c,
            originalPrice: "#ProductPrice-" + c,
            SKU: ".variant-sku",
            originalPriceWrapper: ".product-price__price-" + c,
            originalSelectorId: "#ProductSelect-" + c,
            productFeaturedImage: ".FeaturedImage-" + c,
            productImageWrap: "#FeaturedImageZoom-" + c,
            productPrices: ".product-single__price-" + c,
            productThumbImages: "#product_thumbnails_swiper_container-" + c,
            productMainImages: "#product-images-carousel-" + c,
            saleLabel: ".product-price__sale-label-" + c,
            singleOptionSelector: ".single-option-selector-" + c
        }, $("#ProductJson-" + c).html() && (this.productSingleObject = JSON.parse(document.getElementById("ProductJson-" + c).innerHTML), this._stringOverrides(), this._initVariants(), this._initImages(), this._initImagesScroll(), this._initGallery(), this._initTab(), this._socialSharing(), this._relatedProducts())
    }

    return a.prototype = _.assignIn({}, a.prototype, {
        _stringOverrides: function () {
            theme.productStrings = theme.productStrings || {}, $.extend(theme.strings, theme.productStrings)
        },
        _initBreakpoints: function () {
            enquire.register(this.settings.mediaQuerySmall, {
                match: function () {
                },
                unmatch: function () {
                }
            }), enquire.register(this.settings.mediaQueryMediumUp, {
                match: function () {
                }
            })
        },
        _relatedProducts: function () {
            var a = $(this.selectors.product + " .single_product_summary_related .products-carousel .products");
            if (a.length) {
                var b = a.attr("data-per-view");
                a.owlCarousel({
                    items: b,
                    margin: 30,
                    lazyLoad: !0,
                    dots: !0,
                    responsiveClass: !0,
                    nav: !0,
                    mouseDrag: !0,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            margin: 20,
                            items: 2,
                            nav: !1
                        },
                        600: {
                            margin: 25,
                            items: 3,
                            nav: !1
                        },
                        1e3: {
                            items: 4,
                            nav: !0,
                            dots: !1
                        },
                        1200: {
                            items: b,
                            nav: !0,
                            dots: !1
                        }
                    }
                })
            }
        },
        _initTab: function () {
            $(this.selectors.product + " .product-tabs").off("click").on("click", "ul.tabs li a", function (a) {
                if (a.preventDefault(), $(this).parent("li").hasClass("active")) return !1;
                var b = $(this),
                    c = b.closest(".product-tabs");
                return c.find("ul.tabs").find("li").removeClass("active"), $(this).parent("li").addClass("active"), c.find(".panel:visible").fadeOut(300, function () {
                    c.find(b.attr("href")).fadeIn(300)
                }), !1
            })
        },
        _socialSharing: function () {
            var a = $(this.selectors.product + " .box-share-master-container").attr("data-share-elem");
            $(this.selectors.product + " .social-sharing").socialShare({
                social: a,
                animation: "launchpadReverse",
                blur: !0
            })
        },
        _initGallery: function () {
            !function (a) {
                function d(a, b) {
                    return (" " + a.className + " ").indexOf(" " + b + " ") > -1
                }

                for (var b = function (a) {
                    for (var e, f, g, h, b = $(a).find(".photoswipe-item").get(), c = b.length, d = [], i = 0; i < c; i++) e = b[i], 1 === e.nodeType && (f = e.children[0], g = f.getAttribute("data-size").split("x"), h = "video" == $(f).data("type") ? {
                        html: $(f).data("video")
                    } : {
                        src: f.getAttribute("href"),
                        w: parseInt(g[0], 10),
                        h: parseInt(g[1], 10)
                    }, e.children.length > 1 && (h.title = $(e).find(".caption").html()), f.children.length > 0 && (h.msrc = f.children[0].getAttribute("src")), h.el = e, d.push(h));
                    return d
                }, c = function a(b, c) {
                    return b && (c(b) ? b : a(b.parentNode, c))
                }, e = function (a) {
                    a = a || window.event, a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    var b = a.target || a.srcElement,
                        e = c(b, function (a) {
                            return d(a, "photoswipe-item")
                        });
                    if (e) {
                        for (var k, f = e.closest(".photoswipe-wrapper"), h = $(e.closest(".photoswipe-wrapper")).find(".photoswipe-item").get(), i = h.length, j = 0, l = 0; l < i; l++)
                            if (1 === h[l].nodeType) {
                                if (h[l] === e) {
                                    k = j;
                                    break
                                }
                                j++
                            }
                        return k >= 0 && g(k, f), !1
                    }
                }, f = function () {
                    var a = window.location.hash.substring(1),
                        b = {};
                    if (a.length < 5) return b;
                    for (var c = a.split("&"), d = 0; d < c.length; d++)
                        if (c[d]) {
                            var e = c[d].split("=");
                            e.length < 2 || (b[e[0]] = e[1])
                        }
                    return b.gid && (b.gid = parseInt(b.gid, 10)), b
                }, g = function (a, c, d, e) {
                    var g, h, i, f = document.querySelectorAll(".pswp")[0];
                    if (i = b(c), h = {
                            closeOnScroll: !1,
                            galleryUID: c.getAttribute("data-pswp-uid"),
                            getThumbBoundsFn: function (a) {
                                var b = i[a].el.getElementsByTagName("img")[0],
                                    c = window.pageYOffset || document.documentElement.scrollTop,
                                    d = b.getBoundingClientRect();
                                return {
                                    x: d.left,
                                    y: d.top + c,
                                    w: d.width
                                }
                            }
                        }, e)
                        if (h.galleryPIDs) {
                            for (var j = 0; j < i.length; j++)
                                if (i[j].pid == a) {
                                    h.index = j;
                                    break
                                }
                        } else h.index = parseInt(a, 10) - 1;
                    else h.index = parseInt(a, 10);
                    isNaN(h.index) || (d && (h.showAnimationDuration = 0), g = new PhotoSwipe(f, PhotoSwipeUI_Default, i, h), g.init(), g.listen("beforeChange", function () {
                        var a = $(g.currItem.container);
                        $(".pswp__video").removeClass("active");
                        a.find(".pswp__video").addClass("active");
                        $(".pswp__video").each(function () {
                            $(this).hasClass("active") || $(this).attr("src", $(this).attr("src"))
                        })
                    }), g.listen("close", function () {
                        $(".pswp__video").each(function () {
                            $(this).attr("src", $(this).attr("src"))
                        })
                    }))
                }, h = document.querySelectorAll(a), i = 0, j = h.length; i < j; i++) h[i].setAttribute("data-pswp-uid", i + 1), h[i].onclick = e;
                var k = f();
                k.pid && k.gid && g(k.pid, h[k.gid - 1], !0, !0)
            }(this.selectors.product + " .photoswipe-wrapper")
        },
        _initImagesScroll: function () {
            if ($(this.selectors.productImageWrap).hasClass("module")) {
                $.fn.visible = function (a) {
                    var b = $(this),
                        c = $(window),
                        d = c.scrollTop(),
                        e = d + c.height(),
                        f = b.offset().top,
                        g = f + b.height(),
                        h = !0 === a ? g : f;
                    return (!0 === a ? f : g) <= e && h >= d
                }, "false" == $("header.site-header").attr("data-my-sticky") && $(this.selectors.product + " .product_infos").attr("data-margin-top", "1"), $(document).foundation();
                var a = $(".module");
                a.each(function (a, b) {
                    var b = $(b);
                    b.visible(!0) && b.addClass("already-visible")
                }), $(window).scroll(function (b) {
                    $(window).width() > 1024 && a.each(function (a, b) {
                        var b = $(b);
                        b.visible(!0) && b.addClass("come-in")
                    })
                })
            }
        },
        _initImages: function () {
            function d(c) {
                0 != b && b.slideTo(c - 1, 300, !1), $(a.selectors.productThumbImages).find(".swiper-slide").removeClass("active").eq(c).addClass("active")
            }

            var a = this,
                b = !1;
            if ($(a.selectors.productThumbImages).length > 0) var b = new Swiper(a.selectors.productThumbImages, {
                direction: "vertical",
                slidesPerView: "auto",
                mousewheelControl: !1,
                preventClicks: !1
            });
            $(a.selectors.productMainImages).owlCarousel({
                items: 1,
                lazyLoad: !0,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                nav: !0,
                dots: !0,
                navText: ["", ""],
                responsive: {
                    0: {
                        dots: !0,
                        nav: !1
                    },
                    1024: {
                        dots: !1,
                        nav: !0
                    }
                }
            });
            var c = $(a.selectors.productMainImages);
            if ($(".product_content_wrapper").each(function () {
                    $(a.selectors.productThumbImages).find(".swiper-slide").eq(0).addClass("active"), 0 != b && b.on("onTap", function () {
                        d(b.clickedIndex), c.trigger("to.owl.carousel", [b.clickedIndex, 300])
                    })
                }), c.on("changed.owl.carousel", function (c) {
                    if (jQuery(".product_thumbnails").length) {
                        var d = c.item.index;
                        0 != b && b.slideTo(d - 1, 300, !1), $(a.selectors.productThumbImages).find(".swiper-slide").removeClass("active").eq([d]).addClass("active")
                    }
                }), $(".easyzoom").length)
                if ($(window).width() > 1024) {
                    var e = $(".easyzoom").easyZoom({
                        loadingNotice: "",
                        errorNotice: "",
                        preventClicks: !0
                    });
                    e.data("easyZoom");
                    $(".variations").on("change", "select", function () {
                        $("#product-images-carousel").length > 0 && c.trigger("to.owl.carousel", [0, 300])
                    })
                } else $(".easyzoom a").click(function (a) {
                    a.preventDefault()
                }), $(".variations").on("change", "select", function () {
                    $("#product-images-carousel").length > 0 && c.trigger("to.owl.carousel", [0, 300])
                });
            else $(window).width() > 1024 && $(".variations").on("change", "select", function () {
                $("#product-images-carousel").length > 0 && c.trigger("to.owl.carousel", [0, 300])
            })
        },
        _initVariants: function () {
            var a = {
                $container: this.$container,
                enableHistoryState: this.$container.data("enable-history-state") || !1,
                singleOptionSelector: this.selectors.singleOptionSelector,
                originalSelectorId: this.selectors.originalSelectorId,
                product: this.productSingleObject
            };
            this.variants = new slate.Variants(a), this.$container.on("variantChange" + this.settings.namespace, this._updateAddToCart.bind(this)), this.$container.on("variantImageChange" + this.settings.namespace, this._updateImages.bind(this)), this.$container.on("variantPriceChange" + this.settings.namespace, this._updatePrice.bind(this)), this.$container.on("variantSKUChange" + this.settings.namespace, this._updateSKU.bind(this))
        },
        _updateAddToCart: function (a) {
            var b = a.variant;
            b ? ($(this.selectors.productPrices).removeClass("invisible").attr("aria-hidden", "true"), b.available ? ($(this.selectors.addToCart).prop("disabled", !1).toggleClass("hide", !1), $(this.selectors.addToCartText).text(theme.strings.addToCart), $(this.selectors.stockText).text(theme.strings.inStock).removeClass("out-of-stock").addClass("in-stock"), "shopify" == b.inventory_management && "continue" != b.inventory_policy && b.inventory_quantity > 0 && $(this.selectors.stockText).text(b.inventory_quantity + " " + theme.strings.inStock)) : ($(this.selectors.addToCart).prop("disabled", !0).toggleClass("hide", !0), $(this.selectors.addToCartText).text(theme.strings.soldOut), $(this.selectors.stockText).text(theme.strings.outStock).removeClass("in-stock").addClass("out-of-stock"))) : ($(this.selectors.addToCart).prop("disabled", !0).toggleClass("hide", !0), $(this.selectors.addToCartText).text(theme.strings.unavailable), $(this.selectors.stockText).text(theme.strings.unavailable).removeClass("in-stock").addClass("out-of-stock"), $(this.selectors.productPrices).addClass("invisible").attr("aria-hidden", "false"))
        },
        _updateImages: function (a) {
            var b = a.variant,
                c = this,
                d = b.featured_image.src.replace("https:", "").replace("http:", "").split("?v=")[0];
            $(this.selectors.productFeaturedImage).each(function (a) {
                if ($(this).attr("href").indexOf(d) >= 0) return void $(c.selectors.productMainImages).trigger("to.owl.carousel", [a, 300])
            })
        },
        _updatePrice: function (a) {
            var b = a.variant;
            if ($(this.selectors.originalPrice).html('<span class="money">' + theme.Currency.formatMoney(b.price, theme.moneyFormat) + "</span>"), b.compare_at_price > b.price) {
                if ($(this.selectors.comparePrice).html('<span class="money">' + theme.Currency.formatMoney(b.compare_at_price, theme.moneyFormat) + "</span>").removeClass("hide"), $(this.selectors.saleLabel).find("span").text(theme.strings.sale), "" != theme.sale_percentages) {
                    var c = Math.round(100 * (b.compare_at_price - b.price) / b.compare_at_price);
                    $(this.selectors.saleLabel).find("span").text("-" + c + "%")
                }
                $(this.selectors.saleLabel).removeClass("hide")
            } else $(this.selectors.comparePrice).addClass("hide"), $(this.selectors.saleLabel).addClass("hide");
            theme.CurrencyPicker.convert(this.selectors.product + " .money")
        },
        _updateSKU: function (a) {
            var b = a.variant;
            "" != b.sku ? $(this.selectors.SKU).removeClass("hide").find(".sku").text(b.sku) : $(this.selectors.SKU).addClass("hide")
        },
        onUnload: function () {
            this.$container.off(this.settings.namespace)
        }
    }), a
}(),
theme.Products = function () {
    function a(a) {
        var b = this.$container = $(a),
            c = b.attr("data-section-id");
        this.settings = {
            slider: "#products-" + c + " .products-carousel .products"
        }, this._initSlider()
    }

    return a.prototype = _.assignIn({}, a.prototype, {
        _initSlider: function () {
            if ($(this.settings.slider).length) {
                var a = $(this.settings.slider).attr("data-per-view");
                $(this.settings.slider).owlCarousel({
                    items: a,
                    margin: 30,
                    lazyLoad: !0,
                    dots: !1,
                    responsiveClass: !0,
                    nav: !0,
                    mouseDrag: !0,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            margin: 20,
                            items: 2,
                            nav: !1
                        },
                        600: {
                            margin: 25,
                            items: 3,
                            nav: !1
                        },
                        1e3: {
                            items: 4,
                            nav: !0,
                            dots: !1
                        },
                        1200: {
                            items: a,
                            nav: !0,
                            dots: !1
                        }
                    }
                })
            }
        },
        onUnload: function () {
            var a = $(this.settings.slider);
            a.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"), a.find(".owl-stage-outer").children().unwrap()
        },
        onBlockSelect: function (a) {
        }
    }), a
}(),
theme.Blog = function () {
    function a(a) {
        var b = this.$container = $(a),
            c = b.attr("data-section-id");
        this.settings = {
            slider: "#blog-" + c + " .from-the-blog"
        }, this._initSlider()
    }

    return a.prototype = _.assignIn({}, a.prototype, {
        _initSlider: function () {
            $(this.settings.slider).length && $(this.settings.slider).each(function () {
                $(this).owlCarousel({
                    items: 3,
                    dots: !1,
                    responsiveClass: !0,
                    nav: !0,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1,
                            dots: !0
                        },
                        600: {
                            items: 2,
                            nav: !1,
                            dots: !0
                        },
                        1e3: {
                            items: 3,
                            nav: !0
                        },
                        1200: {
                            items: 3,
                            nav: !0
                        }
                    }
                })
            })
        },
        onUnload: function () {
            var a = $(this.settings.slider);
            a.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"), a.find(".owl-stage-outer").children().unwrap()
        },
        onBlockSelect: function (a) {
        }
    }), a
}(),
theme.Collections = function () {
    function a(a) {
        var b = this.$container = $(a),
            c = b.attr("data-section-id");
        this.settings = {
            slider: "#collections-" + c + " .product-category-carousel"
        }, this._initSlider()
    }

    return a.prototype = _.assignIn({}, a.prototype, {
        _initSlider: function () {
            if ($(this.settings.slider).length) {
                var a = $(this.settings.slider).attr("data-per-view");
                $(this.settings.slider).owlCarousel({
                    items: a,
                    margin: 30,
                    lazyLoad: !0,
                    dots: !1,
                    responsiveClass: !0,
                    nav: !0,
                    mouseDrag: !0,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            margin: 20,
                            items: 2,
                            nav: !1
                        },
                        600: {
                            margin: 25,
                            items: 3,
                            nav: !1
                        },
                        1e3: {
                            items: 4,
                            nav: !0,
                            dots: !1
                        },
                        1200: {
                            items: a,
                            nav: !0,
                            dots: !1
                        }
                    }
                })
            }
        },
        onUnload: function () {
            var a = $(this.settings.slider);
            a.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"), a.find(".owl-stage-outer").children().unwrap()
        },
        onBlockSelect: function (a) {
        }
    }), a
}(),
theme.slideshows = {},
theme.SlideshowSection = function () {
    function a(a) {
        var b = this.$container = $(a),
            c = b.attr("data-section-id"),
            d = this.slideshow = "#Slideshow-" + c;
        $(".slideshow__video", d).each(function () {
            var a = $(this);
            theme.SlideshowVideo.init(a), theme.SlideshowVideo.loadVideo(a.attr("id"))
        }), theme.slideshows[d] = new theme.Slideshow(d)
    }

    return a
}(),
theme.SlideshowSection.prototype = _.assignIn({},
    theme.SlideshowSection.prototype, {
        onUnload: function () {
            delete theme.slideshows[this.slideshow]
        },
        onBlockSelect: function (a) {
            var b = $(this.slideshow),
                c = $(".slideshow__slide--" + a.detail.blockId + ":not(.slick-cloned)"),
                d = c.data("slick-index");
            b.slick("slickGoTo", d).slick("slickPause")
        },
        onBlockDeselect: function () {
            $(this.slideshow).slick("slickPlay")
        }
    }),
$(document).ready(function () {
    var a = new theme.Sections;
    a.register("collection-template", theme.Filters), a.register("product-template", theme.Product), a.register("header-section", theme.HeaderSection), a.register("page-contact-template", theme.Maps), a.register("slideshow-section", theme.SlideshowSection), a.register("products", theme.Products), a.register("blog", theme.Blog), a.register("collections", theme.Collections)
}),
window.offcanvas_isopen = !1,
window.offcanvas_close = function () {
    window.offcanvas_isopen = !1, $("body").removeClass("offcanvas_open offcanvas_left offcanvas_right"), $(".offcanvas_main_content").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
        setTimeout(function () {
            $(window).trigger("resize")
        }, 600)
    })
},
window.offcanvas_open = function (a) {
    1 == window.offcanvas_isopen && window.offcanvas_close(), window.offcanvas_isopen = !0, $("body").removeClass("no-offcanvas-animation").addClass("offcanvas_open offcanvas_" + a), $(".nano").nanoScroller({
        iOSNativeScrolling: !0
    })
},
window.theme = theme || {},

theme.roarApplication = function () {
    function a() {
        $(document.body).on("click", '[data-toggle="offcanvas"]', function (a) {
            a.preventDefault();
            var c = $(this),
                d = $("#" + c.data("target")),
                e = c.data("src");
            d.length && b(d, e)
        }), $(document.body).on("click", ".offcanvas_overlay, .offcanvas_close", function (a) {
            a.preventDefault(), c()
        }), $(document).on("keyup", function (a) {
            27 == a.keyCode && c()
        })
    }

    function b(a, b) {
        $(".offcanvas_target").hide(), $(a).show().find(".offcanvas_target").show(), $(".offcanvas_aside_right").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
            a.find(".search-field").length && a.find(".search-field").focus().end().off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")
        }), window.offcanvas_open(b), "left" == b ? "sidebar-offcanvas" == a.attr("id") ? $.Velocity.RunSequence([{
            e: $(".offcanvas_sidebars .offcanvas_close, .offcanvas_shop_sidebar"),
            p: {
                opacity: [1, 0]
            },
            o: {
                duration: 700,
                delay: 800
            }
        }]) : $.Velocity.RunSequence([{
            e: $(".offcanvas_mainmenu nav#menu"),
            p: {
                opacity: [1, 0]
            },
            o: {
                duration: 600,
                delay: 400
            }
        }, {
            e: $(".offcanvas_mainmenu .offcanvas_close, .language_currency, .mob_inputbox"),
            p: {
                opacity: [1, 0]
            },
            o: {
                duration: 700,
                delay: 100
            }
        }, {
            e: $(".offcanvas_mainmenu nav#menu .hr-menu-item hr"),
            p: {
                opacity: [1, 0],
                width: [50]
            },
            o: {
                duration: 600,
                delay: 0
            }
        }]) : $.Velocity.RunSequence([{
            e: a,
            p: {
                opacity: [1, 0]
            },
            o: {
                duration: 700,
                delay: 800
            }
        }])
    }

    function c() {
        window.offcanvas_close(), $.Velocity.RunSequence([{
            e: $(".offcanvas_target"),
            p: {
                opacity: [0, 1]
            },
            o: {
                duration: 700,
                delay: 0
            }
        }, {
            e: $(".offcanvas_mainmenu nav#menu .hr-menu-item hr"),
            p: {
                width: [0]
            },
            o: {
                duration: 700,
                delay: 0
            }
        }])
    }

    function d() {
        $(document.body).on("focus", ".minimal-form-input input, .minimal-form-input textarea, .spr-form input.spr-form-input, .spr-form textarea.spr-form-input", function () {
            $(this).closest(".minimal-form-input").addClass("filled").removeClass("no-text"), $(this).closest('div[class^="spr-form-"]').addClass("filled").removeClass("no-text")
        }), $(document.body).on("blur", '.minimal-form-input input, .minimal-form-input textarea, [class^="spr-form-"] input, [class^="spr-form-"] textarea', function () {
            $(this).val().length > 0 ? ($(this).closest(".minimal-form-input").addClass("has-text").removeClass("no-text"), $(this).closest('div[class^="spr-form-"]').addClass("has-text").removeClass("no-text")) : ($(this).closest(".minimal-form-input").removeClass("has-text").addClass("no-text"), $(this).closest('div[class^="spr-form-"]').removeClass("has-text").addClass("no-text")), $(this).closest(".minimal-form-input").removeClass("filled"), $(this).closest('div[class^="spr-form-"]').removeClass("filled")
        })
    }

    function e() {
        "undefined" != typeof SPR && (SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges())
    }

    function f() {
        if ($(".products .product").addClass("eva_ajax_load_more_item_visible"), $(document.body).on("click", ".eva_ajax_load_button a", function (a) {
                if (a.preventDefault(), $(".pagination a.next").length) {
                    $(".eva_ajax_load_button a").attr("data-processing", 1);
                    var b = $(".pagination a.next").attr("href"),
                        c = $(".eva_ajax_load_button a").attr("data-loading-items"),
                        d = $(".eva_ajax_load_button a").attr("data-no-more");
                    $(".eva_ajax_load_button").hide(), $(".pagination").before('<div class="eva_ajax_load_more_loader animated fadeIn"><a href="#"><i class="icon-px-outline-load"></i>&nbsp;&nbsp;<span>' + c + "</span></a></div>"), $.get(b, function (a) {
                        $(".pagination").html($(a).find(".pagination").html()), $(a).find(".products .product").each(function () {
                            $(this).addClass("hidden"), $(".products .product:last").after($(this)), e(), theme.CurrencyPicker.convert(".products .product:not(.eva_ajax_load_more_item_visible) .money")
                        }), $(".eva_ajax_load_more_loader").fadeOut("slow"), $(".eva_ajax_load_button").fadeIn("slow"), $(".eva_ajax_load_button a").attr("data-processing", 0), setTimeout(function () {
                            $(".products .product").not(".eva_ajax_load_more_item_visible").addClass("animated fadeIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                $(this).removeClass("hidden animated fadeIn").addClass("eva_ajax_load_more_item_visible")
                            })
                        }, 500), 0 == $(".pagination a.next").length && ($(".eva_ajax_load_button").addClass("finished").removeClass("eva_ajax_load_more_hidden"), $(".eva_ajax_load_button a").show().html(d).addClass("disabled"))
                    })
                } else {
                    var d = $(".eva_ajax_load_button a").attr("data-no-more");
                    $(".eva_ajax_load_button").addClass("finished").removeClass("eva_ajax_load_more_hidden"), $(".eva_ajax_load_button a").show().html(d).addClass("disabled")
                }
            }), $(".eva_ajax_load_button").hasClass("eva_ajax_load_more_hidden")) {
            var a = Math.abs(0);
            $(window).scroll(function () {
                if ($(".products").length) {
                    $(".products").offset().top + $(".products").outerHeight() - $(window).scrollTop() - a < $(window).height() && 0 == $(".eva_ajax_load_button a").attr("data-processing") && $(".eva_ajax_load_button a").trigger("click")
                }
            })
        }
    }

    function i() {
        var a = $(".list_shop_categories.mobile a"),
            b = $(".list_shop_categories.mobile"),
            c = $(".list_shop_categories.desktop");
        a.on("click", function (a) {
            a.preventDefault(), b.toggleClass("active"), c.toggleClass("active")
        }), $(".catalog-ordering .shop-filter").click(function () {
            $(".offcanvas_mainmenu").hide(), $(".offcanvas_sidebars").show(), $(".offcanvas_blog_sidebar").hide(), $(".offcanvas_shop_sidebar").show()
        })
    }

    function j() {
        i(), f()
    }

    function k() {
        $.ajax({
            url: "/search",
            beforeSend: function () {
                $(".offcanvas_aside_content .loading-overlay").fadeIn(200), $(".widget_shopping_cart_content").removeClass("blurcontent-off").addClass("blurcontent")
            },
            success: function (a) {
                var b = '.cart-button [data-toggle="offcanvas"]',
                    c = "#cart_block";
                $(b).html($(a).find(b).html()), $(c).html($(a).find(c).html()), theme.CurrencyPicker.convert("#cart_block .money")
            },
            error: function (a) {
                console.log(a)
            }
        }).done(function () {
            $(".offcanvas_aside_content .loading-overlay").fadeOut(100), $(".offcanvas_minicart .widget_shopping_cart_content").removeClass("blurcontent").addClass("blurcontent-off"), $(".offcanvas_minicart .widget_shopping_cart_content").removeClass("blurcontent-off")
        })
    }

    function l() {
        $(document).on("click", ".add_to_cart_button", function () {
            var a = $(this),
                b = a.closest("form");
            return "" == theme.cart_ajax ? (b.submit(), !1) : ($.ajax({
                type: "POST",
                url: "/cart/add.js",
                async: !0,
                cache: !1,
                data: b.serialize(),
                dataType: "json",
                beforeSend: function () {
                    a.addClass("loading")
                },
                complete: function () {
                    k()
                },
                error: function (b) {
                    var c = $.parseJSON(b.responseText),
                        d = c.message + ": " + c.description;
                    a.removeClass("loading"), alert(d)
                },
                success: function (a) {
                }
            }).done(function () {
                p(s, t), setTimeout(function () {
                    $('.cart-button [data-toggle="offcanvas"]').trigger("click"), a.removeClass("loading")
                }, 500)
            }), !1)
        })
    }

    function m() {
        $(document).on("focus", "#cart_block .update", function () {
            $(this).select()
        }).on("blur", "#cart_block .update", function () {
            var a = $(this),
                b = a.val(),
                c = a.attr("data-id"),
                d = {
                    type: "POST",
                    url: "/cart/change.js",
                    data: "quantity=" + b + "&id=" + c,
                    dataType: "json",
                    beforeSend: function () {
                        $(".offcanvas_aside_content .loading-overlay").show(), $(".widget_shopping_cart_content").removeClass("blurcontent-off").addClass("blurcontent")
                    },
                    success: function () {
                        k()
                    },
                    error: function (a, b) {
                        Shopify.onError(a, b)
                    }
                };
            $.ajax(d)
        })
    }

    function n() {
        $(document).on("click", "#cart_block .remove", function (a) {
            a.preventDefault();
            var b = $(this),
                c = b.attr("data-id"),
                d = {
                    type: "POST",
                    url: "/cart/change.js",
                    data: "quantity=0&id=" + c,
                    dataType: "json",
                    beforeSend: function () {
                        $(".offcanvas_aside_content .loading-overlay").show(), $(".widget_shopping_cart_content").removeClass("blurcontent-off").addClass("blurcontent")
                    },
                    success: function () {
                        k()
                    },
                    error: function (a, b) {
                        Shopify.onError(a, b)
                    }
                };
            $.ajax(d)
        })
    }

    function o() {
        var a = ($(window).width() - $(".cd-quick-view").width()) / 2,
            b = ($(window).height() - $(".cd-quick-view").height()) / 2;
        $(".cd-quick-view").css({
            top: b,
            left: a
        })
    }

    function p(a, b) {
        var d = ($(".cd-close"), $(".empty-box").find("img"));
        d.length && (!$(".cd-quick-view").hasClass("velocity-animating") && $(".cd-quick-view").hasClass("add-content") ? q(d, a, b, "close") : r(d, a, b))
    }

    function q(a, b, c, d) {
        var e = a.closest(".product"),
            f = a.offset().top - $(window).scrollTop(),
            g = a.offset().left,
            h = a.width(),
            j = (a.height(), $(window).width()),
            k = $(window).height(),
            l = (j - b) / 2,
            m = 596,
            n = (k - m) / 2,
            o = .8 * j < c ? .8 * j : c,
            p = (j - o) / 2;
        "open" == d ? ($("body").addClass("overlay-layer"), e.addClass("empty-box"), $(".cd-quick-view").css({
            top: f,
            left: g,
            width: h,
            height: m
        }).velocity({
            top: n + "px",
            left: l + "px",
            width: b + "px"
        }, 1e3, [400, 20], function () {
            $(".cd-quick-view").addClass("animate-width").velocity({
                left: p + "px",
                width: o + "px"
            }, 300, "ease", function () {
                $(".cd-quick-view").addClass("add-content");
                new Swiper(".cd-quick-view .swiper-container", {
                    pagination: ".swiper-pagination",
                    nextButton: ".swiper-button-next",
                    prevButton: ".swiper-button-prev",
                    preventClick: !0,
                    preventClicksPropagation: !0,
                    grabCursor: !0,
                    onTouchStart: function () {
                        u = !1
                    },
                    onTouchMove: function () {
                        u = !1
                    },
                    onTouchEnd: function () {
                        setTimeout(function () {
                            u = !0
                        }, 300)
                    }
                });
                (new theme.Sections).register("product-quickview-template", theme.Product), theme.CurrencyPicker.convert("#ProductSection-product-quickview-template .money")
            })
        }).addClass("is-visible")) : $(".cd-quick-view").removeClass("add-content").velocity({
            top: n + "px",
            left: l + "px",
            width: b + "px"
        }, 300, "ease", function () {
            $("body").removeClass("overlay-layer"), $(".cd-quick-view").removeClass("animate-width").velocity({
                top: f,
                left: g,
                width: h
            }, 500, "ease", function () {
                $(".cd-quick-view").removeClass("is-visible"), e.removeClass("empty-box")
            })
        })
    }

    function r(a, b, c) {
        var d = a.closest(".product"),
            e = a.offset().top - $(window).scrollTop(),
            f = a.offset().left,
            g = a.width();
        $("body").removeClass("overlay-layer"), d.removeClass("empty-box"), $(".cd-quick-view").velocity("stop").removeClass("add-content animate-width is-visible").css({
            top: e,
            left: f,
            width: g
        })
    }

    function v() {
        $(document).on("click", ".eva_product_quick_view_button", function (a) {
            a.preventDefault();
            var b = $(this);
            b.closest(".product").find(".product_thumbnail").addClass("loading");
            var c = $(this).data("product_id"),
                d = $(this).closest(".product").find(".product_thumbnail img");
            $.ajax({
                url: "/products/" + c + "?view=quickview",
                success: function (a) {
                    $(".cd-quick-view").empty().html(a), q(d, s, t, "open")
                },
                error: function (a) {
                    console.log(a)
                }
            }).done(function () {
                b.parent().find(".product_thumbnail").removeClass("loading")
            })
        })
    }

    function w() {
        l(), n(), m(), v()
    }

    function x() {
        $(".format-gallery-swiper").each(function (a, b) {
            function e(a) {
                setTimeout(function () {
                    a.closest(".gallery-slider-wrapper").css("visibility", "visible"), a.closest(".gallery-slider-wrapper").css("opacity", "1")
                }, 300)
            }

            var c = $(this);
            new Swiper(this, {
                speed: 300,
                centeredSlides: !0,
                mode: "horizontal",
                loop: !0,
                slidesPerView: 1,
                paginationClickable: !0,
                pagination: ".pagination",
                grabCursor: !0,
                nextButton: c.find(".swiper-button-next")[0],
                prevButton: c.find(".swiper-button-prev")[0],
                onSwiperCreated: e(c),
                onInit: function () {
                    BackgroundCheck.init({
                        targets: c.closest(".gallery-slider"),
                        images: c.find(".swiper-slide img"),
                        minComplexity: 80,
                        maxDuration: 1250,
                        threshold: 50,
                        minOverlap: 10
                    })
                },
                onSlideChangeEnd: function () {
                    BackgroundCheck.refresh()
                },
                paginationBulletRender: function (a, b, c) {
                    return '<div class="' + c + '"><span></span></div>'
                }
            })
        })
    }

    function y() {
        function b() {
            var b = 0;
            [].slice.call(document.querySelectorAll(".tilter")).forEach(function (c, d) {
                b = d % 30 == 0 ? b + 1 : b, new TiltFx(c, a[b - 1])
            })
        }

        var a = [{}, {
            movement: {
                imgWrapper: {
                    translation: {
                        x: 10,
                        y: 10,
                        z: 30
                    },
                    rotation: {
                        x: 0,
                        y: -10,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                },
                lines: {
                    translation: {
                        x: 10,
                        y: 10,
                        z: [0, 70]
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: -2
                    },
                    reverseAnimation: {
                        duration: 2e3,
                        easing: "easeOutExpo"
                    }
                },
                caption: {
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 2
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                },
                overlay: {
                    translation: {
                        x: 10,
                        y: -10,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 2
                    },
                    reverseAnimation: {
                        duration: 2e3,
                        easing: "easeOutExpo"
                    }
                },
                shine: {
                    translation: {
                        x: 100,
                        y: 100,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                }
            }
        }, {
            movement: {
                imgWrapper: {
                    rotation: {
                        x: -5,
                        y: 10,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 900,
                        easing: "easeOutCubic"
                    }
                },
                caption: {
                    translation: {
                        x: 30,
                        y: 30,
                        z: [0, 40]
                    },
                    rotation: {
                        x: [0, 15],
                        y: 0,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 1200,
                        easing: "easeOutExpo"
                    }
                },
                overlay: {
                    translation: {
                        x: 10,
                        y: 10,
                        z: [0, 20]
                    },
                    reverseAnimation: {
                        duration: 1e3,
                        easing: "easeOutExpo"
                    }
                },
                shine: {
                    translation: {
                        x: 100,
                        y: 100,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 900,
                        easing: "easeOutCubic"
                    }
                }
            }
        }, {
            movement: {
                imgWrapper: {
                    rotation: {
                        x: -5,
                        y: 10,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 50,
                        easing: "easeOutQuad"
                    }
                },
                caption: {
                    translation: {
                        x: 20,
                        y: 20,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                },
                overlay: {
                    translation: {
                        x: 5,
                        y: -5,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 6
                    },
                    reverseAnimation: {
                        duration: 1e3,
                        easing: "easeOutQuad"
                    }
                },
                shine: {
                    translation: {
                        x: 50,
                        y: 50,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 50,
                        easing: "easeOutQuad"
                    }
                }
            }
        }, {
            movement: {
                imgWrapper: {
                    translation: {
                        x: 0,
                        y: -8,
                        z: 0
                    },
                    rotation: {
                        x: 3,
                        y: 3,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 1200,
                        easing: "easeOutExpo"
                    }
                },
                lines: {
                    translation: {
                        x: 15,
                        y: 15,
                        z: [0, 15]
                    },
                    reverseAnimation: {
                        duration: 1200,
                        easing: "easeOutExpo"
                    }
                },
                overlay: {
                    translation: {
                        x: 0,
                        y: 8,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 600,
                        easing: "easeOutExpo"
                    }
                },
                caption: {
                    translation: {
                        x: 10,
                        y: -15,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 900,
                        easing: "easeOutExpo"
                    }
                },
                shine: {
                    translation: {
                        x: 50,
                        y: 50,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 1200,
                        easing: "easeOutExpo"
                    }
                }
            }
        }, {
            movement: {
                lines: {
                    translation: {
                        x: -5,
                        y: 5,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 1e3,
                        easing: "easeOutExpo"
                    }
                },
                caption: {
                    translation: {
                        x: 15,
                        y: 15,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    },
                    reverseAnimation: {
                        duration: 1500,
                        easing: "easeOutElastic",
                        elasticity: 700
                    }
                },
                overlay: {
                    translation: {
                        x: 15,
                        y: -15,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 500,
                        easing: "easeOutExpo"
                    }
                },
                shine: {
                    translation: {
                        x: 50,
                        y: 50,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 500,
                        easing: "easeOutExpo"
                    }
                }
            }
        }, {
            movement: {
                imgWrapper: {
                    translation: {
                        x: 5,
                        y: 5,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 800,
                        easing: "easeOutQuart"
                    }
                },
                caption: {
                    translation: {
                        x: 10,
                        y: 10,
                        z: [0, 50]
                    },
                    reverseAnimation: {
                        duration: 1e3,
                        easing: "easeOutQuart"
                    }
                },
                shine: {
                    translation: {
                        x: 50,
                        y: 50,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 800,
                        easing: "easeOutQuart"
                    }
                }
            }
        }, {
            movement: {
                lines: {
                    translation: {
                        x: 40,
                        y: 40,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 1500,
                        easing: "easeOutElastic"
                    }
                },
                caption: {
                    translation: {
                        x: 20,
                        y: 20,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: -5
                    },
                    reverseAnimation: {
                        duration: 1e3,
                        easing: "easeOutExpo"
                    }
                },
                overlay: {
                    translation: {
                        x: -30,
                        y: -30,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    },
                    reverseAnimation: {
                        duration: 750,
                        easing: "easeOutExpo"
                    }
                },
                shine: {
                    translation: {
                        x: 100,
                        y: 100,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 750,
                        easing: "easeOutExpo"
                    }
                }
            }
        }];
        b()
    }

    function z() {
        $(document).on("click", ".add_to_wishlist:not(.added)", function (a) {
            if (!$(this).hasClass("need-login")) {
                a.preventDefault();
                var b = $(this),
                    c = b.closest("form"),
                    d = {
                        action: "add_wishlist"
                    };
                return d = c.serialize() + "&" + $.param(d), $.ajax({
                    type: "POST",
                    url: "/a/wishlist",
                    async: !0,
                    cache: !1,
                    data: d,
                    dataType: "json",
                    beforeSend: function () {
                        b.hasClass("tooltip") ? b.addClass("loading") : b.attr("title", b.attr("data-loading-text")).find("span").text(b.attr("data-loading-text"))
                    },
                    error: function (a) {
                        console.log(a)
                    },
                    success: function (a) {
                        b.hasClass("tooltip") && b.removeClass("loading");
                        var c = $(".wishlist" + b.prev().val());
                        1 == a.code ? (c.attr("title", b.attr("data-added")).addClass("added").find("span").text(b.attr("data-added")), $(".wishlist_items_number").text(a.json)) : (c.attr("title", b.attr("data-title")).find("span").text(b.attr("data-title")), alert(a.json), console.log(a.json))
                    }
                }), !1
            }
        })
    }

    function A() {
        $(document).on("click", ".remove_from_wishlist", function (a) {
            a.preventDefault();
            var b = $(this),
                c = b.closest("form"),
                d = {
                    action: "remove_wishlist"
                };
            return d = c.serialize() + "&" + $.param(d), $.ajax({
                type: "POST",
                url: "/a/wishlist",
                async: !0,
                cache: !1,
                data: d,
                dataType: "json",
                beforeSend: function () {
                    $(".page-wishlist").addClass("loading")
                },
                error: function (a) {
                    console.log(a), $(".page-wishlist").removeClass("loading")
                },
                success: function (a) {
                    1 == a.code ? b.closest("tr").slideUp("fast", function () {
                        b.closest("tr").remove(), $(".page-wishlist .infos").removeClass("hide"), $(".wishlist_items_number").text(a.json), 0 == a.json && $(".wishlist-empty").removeClass("hide")
                    }) : (alert(a.json), console.log(a.json)), $(".page-wishlist").removeClass("loading")
                }
            }), !1
        })
    }

    function B() {
        $(".blog-content-area, .content-area").fitVids()
    }

    function C() {
        if ($("#footer-instagram").length) {
            var a = $("#footer-instagram"),
                b = a.attr("data-id"),
                c = a.attr("data-token"),
                d = a.attr("data-limit");
            new Instafeed({
                get: "user",
                target: "footer-instagram",
                accessToken: c,
                userId: parseInt(b),
                limit: parseInt(d),
                resolution: "low_resolution",
                resolution2: "standard_resolution",
                template: '<li><a target="_blank" href="{{link}}"><img src="{{image}}" alt="{{caption}}" /></a></li>'
            }).run()
        }
    }

    function D() {
        $(".toggle_simple .toggle_title").on("click", function () {
            var a = $(this),
                b = a.closest(".toggle_simple");
            b.find(".toggle_content").slideToggle(function () {
                b.toggleClass("toggle_active")
            })
        })
    }

    $("body").on("click", function (a) {
        ($(a.target).is(".cd-close") || $(a.target).is("body.overlay-layer")) && !0 === u && (a.preventDefault(), p(s, t))
    }), $(document).keyup(function (a) {
        "27" == a.which && p(s, t)
    }), $(window).on("resize", function () {
        $(".cd-quick-view").hasClass("is-visible") && window.requestAnimationFrame(o)
    });
    var s = 480,
        t = 960,
        u = !0;
    return {
        init: function () {
            a(), d(), j(), w(), x(), y(), z(), A(), B(), C(), D()
        }
    }
}(),
theme.init = function () {
    theme.roarApplication.init(), theme.customerTemplates.init(), slate.rte.wrapTable(), slate.rte.iframeReset(), slate.a11y.pageLinkFocus($(window.location.hash)), $(".in-page-link").on("click", function (a) {
        slate.a11y.pageLinkFocus($(a.currentTarget.hash))
    }), $('a[href="#"]').on("click", function (a) {
        a.preventDefault()
    })
};
try {
    $(theme.init)
} finally {
    setTimeout(function () {
        $("body").addClass("loaded")
    }, 2e3)
}