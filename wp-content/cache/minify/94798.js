! function(e) {
    "use strict";

    function t() {
        mkdf.scroll = e(window).scrollTop(), mkdf.body.hasClass("mkdf-dark-header") && (mkdf.defaultHeaderStyle = "mkdf-dark-header"), mkdf.body.hasClass("mkdf-light-header") && (mkdf.defaultHeaderStyle = "mkdf-light-header")
    }

    function a() {}

    function d() {
        mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height()
    }

    function o() {
        mkdf.scroll = e(window).scrollTop()
    }
    switch (window.mkdf = {}, mkdf.modules = {}, mkdf.scroll = 0, mkdf.window = e(window), mkdf.document = e(document), mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height(), mkdf.body = e("body"), mkdf.html = e("html, body"), mkdf.htmlEl = e("html"), mkdf.menuDropdownHeightSet = !1, mkdf.defaultHeaderStyle = "", mkdf.minVideoWidth = 1500, mkdf.videoWidthOriginal = 1280, mkdf.videoHeightOriginal = 720, mkdf.videoRatio = 1.61, mkdf.mkdfOnDocumentReady = t, mkdf.mkdfOnWindowLoad = a, mkdf.mkdfOnWindowResize = d, mkdf.mkdfOnWindowScroll = o, e(document).ready(t), e(window).load(a), e(window).resize(d), e(window).scroll(o), !0) {
        case mkdf.body.hasClass("mkdf-grid-1300"):
            mkdf.boxedLayoutWidth = 1350;
            break;
        case mkdf.body.hasClass("mkdf-grid-1200"):
            mkdf.boxedLayoutWidth = 1250;
            break;
        case mkdf.body.hasClass("mkdf-grid-1000"):
            mkdf.boxedLayoutWidth = 1050;
            break;
        case mkdf.body.hasClass("mkdf-grid-800"):
            mkdf.boxedLayoutWidth = 850;
            break;
        default:
            mkdf.boxedLayoutWidth = 1150
    }
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        var t, a, d;
        h().init(), navigator.appVersion.toLowerCase().indexOf("mac") > -1 && mkdf.body.hasClass("mkdf-smooth-scroll") && mkdf.body.removeClass("mkdf-smooth-scroll"), r().init(), e("#mkdf-back-to-top").on("click", function(e) {
            e.preventDefault(), mkdf.html.animate({
                scrollTop: 0
            }, mkdf.window.scrollTop() / 3, "linear")
        }), mkdf.window.scroll(function() {
            var t = e(this).scrollTop(),
                a = e(this).height();
            l((t > 0 ? t + a / 2 : 1) < 1e3 ? "off" : "on")
        }), m(), f(), c(), g(), (t = e(".mkdf-preload-background")).length && t.each(function() {
            var t = e(this);
            if ("" !== t.css("background-image") && "none" !== t.css("background-image")) {
                var a = t.attr("style");
                if (a = (a = a.match(/url\(["']?([^'")]+)['"]?\)/)) ? a[1] : "") {
                    var d = new Image;
                    d.src = a, e(d).load(function() {
                        t.removeClass("mkdf-preload-background")
                    })
                }
            } else e(window).load(function() {
                t.removeClass("mkdf-preload-background")
            })
        }), u(), (a = e(".mkdf-search-post-type")).length && a.each(function() {
            var t = e(this),
                a = t.find(".mkdf-post-type-search-field"),
                d = t.siblings(".mkdf-post-type-search-results"),
                o = t.find(".mkdf-search-loading"),
                i = t.find(".mkdf-search-icon");
            o.addClass("mkdf-hidden");
            var n, s = t.data("post-type");
            a.on("keyup paste", function() {
                var t = e(this);
                t.attr("autocomplete", "off"), o.removeClass("mkdf-hidden"), i.addClass("mkdf-hidden"), clearTimeout(n), n = setTimeout(function() {
                    var a = t.val();
                    if (a.length < 3) d.html(""), d.fadeOut(), o.addClass("mkdf-hidden"), i.removeClass("mkdf-hidden");
                    else {
                        var n = {
                            action: "పెళ్లి పూల మాల_mikado_search_post_types",
                            term: a,
                            postType: s
                        };
                        e.ajax({
                            type: "POST",
                            data: n,
                            url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                            success: function(e) {
                                var t = JSON.parse(e);
                                "success" === t.status && (o.addClass("mkdf-hidden"), i.removeClass("mkdf-hidden"), d.html(t.data.html), d.fadeIn())
                            },
                            error: function(e, t, a) {
                                console.log("Status: " + t), console.log("Error: " + a), o.addClass("mkdf-hidden"), i.removeClass("mkdf-hidden"), d.fadeOut()
                            }
                        })
                    }
                }, 500)
            }), a.on("focusout", function() {
                o.addClass("mkdf-hidden"), i.removeClass("mkdf-hidden"), d.fadeOut()
            })
        }), (d = e(".mkdf-dashboard-form")).length && d.each(function() {
            var t = e(this),
                a = t.find("button"),
                d = a.data("updating-text"),
                o = a.data("updated-text"),
                i = t.data("action");
            t.on("submit", function(t) {
                t.preventDefault();
                var n = a.html(),
                    s = e(this).find(".mkdf-dashboard-gallery-upload-hidden"),
                    r = [];
                a.html(d);
                var l = new FormData;
                s.each(function() {
                    var t, a = e(this),
                        d = a.attr("name"),
                        o = a.attr("id"),
                        i = a[0].files;
                    if ("-1" != d.indexOf("[")) {
                        t = d.substring(0, d.indexOf("[")) + "_mkdf_regarray_";
                        var n = o.indexOf("["),
                            s = o.indexOf("]"),
                            m = o.substring(n + 1, s);
                        r.push(t), t = t + m + "_"
                    } else t = d + "_mkdf_reg_";
                    0 == i.length && l.append(t, new File([""], "mkdf-dummy-file.txt", {
                        type: "text/plain"
                    }));
                    for (var f = 0; f < i.length; f++) 1 == i[f].name.match(/\./g).length && -1 !== e.inArray(i[f].type, ["image/png", "image/jpg", "image/jpeg", "application/pdf"]) && l.append(t + f, i[f])
                }), l.append("action", i);
                var m = e(this).serialize();
                return l.append("data", m), e.ajax({
                    type: "POST",
                    data: l,
                    contentType: !1,
                    processData: !1,
                    url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                    success: function(e) {
                        var t;
                        t = JSON.parse(e), mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(t), "success" == t.status ? (a.html(o), window.location = t.redirect) : a.html(n)
                    }
                }), !1
            })
        })
    }

    function d() {
        k(),
            function() {
                if (mkdf.body.hasClass("mkdf-smooth-page-transitions")) {
                    if (mkdf.body.hasClass("mkdf-smooth-page-transitions-preloader")) {
                        var t = e("body > .mkdf-smooth-transition-loader.mkdf-mimic-ajax");
                        t.fadeOut(500), e(window).bind("pageshow", function(e) {
                            e.originalEvent.persisted && t.fadeOut(500)
                        })
                    }
                    if (mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout")) {
                        var a = e("a");
                        a.on("click", function(t) {
                            var a = e(this);
                            (a.parents(".mkdf-shopping-cart-dropdown").length || a.parent(".product-remove").length) && a.hasClass("remove") || 1 === t.which && a.attr("href").indexOf(window.location.host) >= 0 && void 0 === a.data("rel") && void 0 === a.attr("rel") && !a.hasClass("lightbox-active") && (void 0 === a.attr("target") || "_self" === a.attr("target")) && a.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (t.preventDefault(), e(".mkdf-wrapper-inner").fadeOut(1e3, function() {
                                window.location = a.attr("href")
                            }))
                        })
                    }
                }
            }(), v(), p().init()
    }

    function o() {
        f()
    }

    function i(e) {
        s(e)
    }

    function n(e) {
        for (var t = [37, 38, 39, 40], a = t.length; a--;)
            if (e.keyCode === t[a]) return void s(e)
    }

    function s(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
    }
    mkdf.modules.common = t, t.mkdfFluidVideo = c, t.mkdfEnableScroll = function() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", i, !1);
        window.onmousewheel = document.onmousewheel = document.onkeydown = null
    }, t.mkdfDisableScroll = function() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", i, !1);
        window.onmousewheel = document.onmousewheel = i, document.onkeydown = n
    }, t.mkdfOwlSlider = g, t.mkdfAlterSliderPagination = v, t.mkdfInitParallax = k, t.mkdfInitSelfHostedVideoPlayer = m, t.mkdfSelfHostedVideoSize = f, t.mkdfPrettyPhoto = u, t.mkdfStickySidebarWidget = p, t.getLoadMoreData = function(e) {
        var t = e.data(),
            a = {};
        for (var d in t) t.hasOwnProperty(d) && void 0 !== t[d] && !1 !== t[d] && (a[d] = t[d]);
        return a
    }, t.setLoadMoreAjaxData = function(e, t) {
        var a = {
            action: t
        };
        for (var d in e) e.hasOwnProperty(d) && void 0 !== e[d] && !1 !== e[d] && (a[d] = e[d]);
        return a
    }, t.setFixedImageProportionSize = function(e, t, a, d) {
        if (e.hasClass("mkdf-masonry-images-fixed") || !0 === d) {
            var o = parseInt(t.css("paddingLeft"), 10),
                i = a - 2 * o,
                n = e.find(".mkdf-masonry-size-small"),
                s = e.find(".mkdf-masonry-size-large-width"),
                r = e.find(".mkdf-masonry-size-large-height"),
                l = e.find(".mkdf-masonry-size-large-width-height");
            n.css("height", i), r.css("height", Math.round(2 * (i + o))), mkdf.windowWidth > 680 ? (s.css("height", i), l.css("height", Math.round(2 * (i + o)))) : (s.css("height", Math.round(i / 2)), l.css("height", i))
        }
    }, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, t.mkdfOnWindowResize = o, e(document).ready(a), e(window).load(d), e(window).resize(o);
    var r = function() {
        var t = function(t) {
                e(".mkdf-main-menu, .mkdf-mobile-nav, .mkdf-fullscreen-menu").each(function() {
                    var a = e(this);
                    t.parents(a).length && (a.find(".mkdf-active-item").removeClass("mkdf-active-item"), t.parent().addClass("mkdf-active-item"), a.find("a").removeClass("current"), t.addClass("current"))
                })
            },
            a = function(a) {
                var o, i = e(".mkdf-main-menu a, .mkdf-mobile-nav a, .mkdf-fullscreen-menu a"),
                    n = a,
                    s = "" !== n ? e('[data-mkdf-anchor="' + n + '"]') : "";
                if ("" !== n && s.length > 0) {
                    var r = s.offset().top;
                    return o = r - d(r) - mkdfGlobalVars.vars.mkdfAddForAdminBar, i.length && i.each(function() {
                        var a = e(this);
                        a.attr("href").indexOf(n) > -1 && t(a)
                    }), mkdf.html.stop().animate({
                        scrollTop: Math.round(o)
                    }, 1e3, function() {
                        history.pushState && history.pushState(null, "", "#" + n)
                    }), !1
                }
            },
            d = function(e) {
                "mkdf-sticky-header-on-scroll-down-up" === mkdf.modules.stickyHeader.behaviour && (mkdf.modules.stickyHeader.isStickyVisible = e > mkdf.modules.header.stickyAppearAmount), "mkdf-sticky-header-on-scroll-up" === mkdf.modules.stickyHeader.behaviour && e > mkdf.scroll && (mkdf.modules.stickyHeader.isStickyVisible = !1);
                var t = mkdf.modules.stickyHeader.isStickyVisible ? mkdfGlobalVars.vars.mkdfStickyHeaderTransparencyHeight : mkdfPerPageVars.vars.mkdfHeaderTransparencyHeight;
                return mkdf.windowWidth < 1025 && (t = 0), t
            };
        return {
            init: function() {
                var o, i, n;
                e("[data-mkdf-anchor]").length && (mkdf.document.on("click", ".mkdf-main-menu a, .mkdf-fullscreen-menu a, .mkdf-btn, .mkdf-anchor, .mkdf-mobile-nav a", function() {
                    var a, o = e(this),
                        i = o.prop("hash").split("#")[1],
                        n = "" !== i ? e('[data-mkdf-anchor="' + i + '"]') : "";
                    if ("" !== i && n.length > 0) {
                        var s = n.offset().top;
                        return a = s - d(s) - mkdfGlobalVars.vars.mkdfAddForAdminBar, t(o), mkdf.html.stop().animate({
                            scrollTop: Math.round(a)
                        }, 1e3, function() {
                            history.pushState && history.pushState(null, "", "#" + i)
                        }), !1
                    }
                }), i = e("[data-mkdf-anchor]"), "/" !== (n = window.location.href.split("#")[0]).substr(-1) && (n += "/"), i.waypoint(function(a) {
                    "down" === a && (o = e(this.element).length > 0 ? e(this.element).data("mkdf-anchor") : e(this).data("mkdf-anchor"), t(e("a[href='" + n + "#" + o + "']")))
                }, {
                    offset: "50%"
                }), i.waypoint(function(a) {
                    "up" === a && (o = e(this.element).length > 0 ? e(this.element).data("mkdf-anchor") : e(this).data("mkdf-anchor"), t(e("a[href='" + n + "#" + o + "']")))
                }, {
                    offset: function() {
                        return -(e(this.element).outerHeight() - 150)
                    }
                }), e(window).load(function() {
                    var t;
                    "" !== (t = window.location.hash.split("#")[1]) && e('[data-mkdf-anchor="' + t + '"]').length > 0 && a(t)
                }))
            }
        }
    };

    function l(t) {
        var a = e("#mkdf-back-to-top");
        a.removeClass("off on"), "on" === t ? a.addClass("on") : a.addClass("off")
    }

    function m() {
        var t = e(".mkdf-self-hosted-video");
        t.length && t.mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function f() {
        var t = e(".mkdf-self-hosted-video-holder .mkdf-video-wrap");
        t.length && t.each(function() {
            var t = e(this),
                a = t.closest(".mkdf-self-hosted-video-holder").outerWidth(),
                d = a / mkdf.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (t.parent().width(a), t.parent().height(d)), t.width(a), t.height(d), t.find("video, .mejs-overlay, .mejs-poster").width(a), t.find("video, .mejs-overlay, .mejs-poster").height(d)
        })
    }

    function c() {
        fluidvids.init({
            selector: ["iframe"],
            players: ["www.youtube.com", "player.vimeo.com"]
        })
    }

    function u() {
        e("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: "data-rel",
            animation_speed: "normal",
            slideshow: !1,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: "/",
            theme: "pp_default",
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            overlay_gallery: !1,
            keyboard_shortcuts: !0,
            deeplinking: !1,
            custom_markup: "",
            social_tools: !1,
            markup: '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"> \t\t\t\t\t\t\t\t\t\t\t\t<svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="16.667px" viewBox="0 0 75.417 16.667" enable-background="new 0 0 75.417 16.667" xml:space="preserve"> \t\t\t\t\t\t\t\t\t\t\t\t\t<line fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="1.681" y1="7.817" x2="73.257" y2="7.817"/> \t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="67.235,1.351 73.985,7.817 67.235,15.316"/> \t\t\t\t\t\t\t\t\t\t\t\t</svg> \t\t\t\t\t\t\t\t\t\t\t</a>                                             <a class="pp_previous" href="#">\t\t\t\t\t\t\t\t\t\t\t\t<svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="16.667px" viewBox="0 0 75.417 16.667" enable-background="new 0 0 75.417 16.667" xml:space="preserve">\t\t\t\t\t\t\t\t\t\t\t\t\t<line fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="1.681" y1="7.817" x2="73.257" y2="7.817"/>\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="8.235,1.351 1.681,7.817 8.235,15.316"/>\t\t\t\t\t\t\t\t\t\t\t\t</svg>\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous"></a> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next"></a> \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t\t\t\t{pp_social} \t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<div class="pp_overlay"></div>'
        })
    }
    var h = function() {
        var t = e(".mkdf-icon-has-hover");
        return {
            init: function() {
                t.length && t.each(function() {
                    ! function(e) {
                        if (void 0 !== e.data("hover-color")) {
                            var t = function(e) {
                                    e.data.icon.css("color", e.data.color)
                                },
                                a = e.data("hover-color"),
                                d = e.css("color");
                            "" !== a && (e.on("mouseenter", {
                                icon: e,
                                color: a
                            }, t), e.on("mouseleave", {
                                icon: e,
                                color: d
                            }, t))
                        }
                    }(e(this))
                })
            }
        }
    };

    function k() {
        var t = e(".mkdf-parallax-row-holder");
        t.length && t.each(function() {
            var t = e(this),
                a = t.data("parallax-bg-image"),
                d = .4 * t.data("parallax-bg-speed"),
                o = 0;
            void 0 !== t.data("parallax-bg-height") && !1 !== t.data("parallax-bg-height") && (o = parseInt(t.data("parallax-bg-height"))), t.css({
                "background-image": "url(" + a + ")"
            }), o > 0 && t.css({
                "min-height": o + "px",
                height: o + "px"
            }), t.parallax("50%", d)
        })
    }

    function p() {
        var t = e(".mkdf-widget-sticky-sidebar"),
            a = e(".mkdf-page-header"),
            d = a.length ? a.outerHeight() : 0,
            o = 0,
            i = 0,
            n = 0,
            s = 0,
            r = [];

        function l() {
            r.length && e.each(r, function(t) {
                r[t].object;
                var a = r[t].offset,
                    o = r[t].position,
                    i = r[t].height,
                    n = r[t].width,
                    s = r[t].sidebarHolder,
                    l = r[t].sidebarHolderHeight;
                if (mkdf.body.hasClass("mkdf-fixed-on-scroll")) {
                    var m = e(".mkdf-fixed-wrapper.fixed");
                    m.length && (d = m.outerHeight() + mkdfGlobalVars.vars.mkdfAddForAdminBar)
                } else mkdf.body.hasClass("mkdf-no-behavior") && (d = mkdfGlobalVars.vars.mkdfAddForAdminBar);
                if (mkdf.windowWidth > 1024 && s.length) {
                    var f = -(o - d),
                        c = i - o - 40,
                        u = l + a - d - o - mkdfGlobalVars.vars.mkdfTopBarHeight;
                    if (mkdf.scroll >= a - d && i < l)
                        if (s.hasClass("mkdf-sticky-sidebar-appeared") ? s.css({
                                top: f + "px"
                            }) : s.addClass("mkdf-sticky-sidebar-appeared").css({
                                position: "fixed",
                                top: f + "px",
                                width: n,
                                "margin-top": "-10px"
                            }).animate({
                                "margin-top": "0"
                            }, 200), mkdf.scroll + c >= u) {
                            var h = l - c + f - d;
                            s.css({
                                position: "absolute",
                                top: h + "px"
                            })
                        } else s.hasClass("mkdf-sticky-sidebar-appeared") && s.css({
                            position: "fixed",
                            top: f + "px"
                        });
                    else s.removeClass("mkdf-sticky-sidebar-appeared").css({
                        position: "relative",
                        top: "0",
                        width: "auto"
                    })
                } else s.removeClass("mkdf-sticky-sidebar-appeared").css({
                    position: "relative",
                    top: "0",
                    width: "auto"
                })
            })
        }
        return {
            init: function() {
                t.length && t.each(function() {
                    var t = e(this),
                        a = t.parents("aside.mkdf-sidebar"),
                        d = t.parents(".wpb_widgetised_column"),
                        l = "",
                        m = 0;
                    if (o = t.offset().top, i = t.position().top, n = 0, s = 0, a.length) {
                        n = a.outerHeight(), s = a.outerWidth(), l = a, m = a.parent().parent().outerHeight();
                        var f = a.parent().parent().find(".mkdf-blog-holder");
                        f.length && (m -= parseInt(f.css("marginBottom")))
                    } else d.length && (n = d.outerHeight(), s = d.outerWidth(), l = d, m = d.parents(".vc_row").outerHeight());
                    r.push({
                        object: t,
                        offset: o,
                        position: i,
                        height: n,
                        width: s,
                        sidebarHolder: l,
                        sidebarHolderHeight: m
                    })
                }), l(), e(window).scroll(function() {
                    l()
                })
            },
            reInit: l
        }
    }

    function g() {
        var t = e(".mkdf-owl-slider");
        t.length && t.each(function() {
            var t, a = e(this),
                d = e(this),
                o = a.children().length,
                i = 1,
                n = 1,
                s = !0,
                r = !0,
                l = !0,
                m = 5e3,
                f = 600,
                c = 0,
                u = 0,
                h = 0,
                p = 0,
                g = !1,
                v = !1,
                y = !1,
                w = !1,
                b = !1,
                C = !0,
                x = !1,
                S = !1,
                I = !!a.hasClass("mkdf-pl-is-slider"),
                _ = I ? a.parent() : a;
            if (void 0 === a.data("number-of-items") || !1 === a.data("number-of-items") || I || (i = a.data("number-of-items")), void 0 !== _.data("number-of-columns") && !1 !== _.data("number-of-columns") && I && (i = _.data("number-of-columns")), void 0 !== _.data("number-of-rows") && !1 !== _.data("number-of-rows") && 1 != _.data("number-of-rows")) {
                n = _.data("number-of-rows");
                var O = a.children();
                if (!a.hasClass("owl-loaded"))
                    for (var z = 0; z <= o; z += n) O.slice(z, z + n).wrapAll('<div class="mkdf-item-outer-holder" />')
            }
            "no" === _.data("enable-autoplay") && (r = !1), "no" === _.data("enable-autoplay-hover-pause") && (l = !1), void 0 !== _.data("slider-speed") && !1 !== _.data("slider-speed") && (m = _.data("slider-speed")), void 0 !== _.data("slider-speed-animation") && !1 !== _.data("slider-speed-animation") && (f = _.data("slider-speed-animation")), void 0 !== _.data("slider-margin") && !1 !== _.data("slider-margin") ? c = "no" === _.data("slider-margin") ? 0 : _.data("slider-margin") : a.parent().hasClass("mkdf-huge-space") ? c = 60 : a.parent().hasClass("mkdf-large-space") ? c = 50 : a.parent().hasClass("mkdf-medium-space") ? c = 40 : a.parent().hasClass("mkdf-normal-space") ? c = 30 : a.parent().hasClass("mkdf-small-space") ? c = 20 : a.parent().hasClass("mkdf-tiny-space") && (c = 10), "yes" === _.data("slider-padding") && (g = !0, p = parseInt(.28 * a.outerWidth()), c = 50), "yes" === _.data("enable-center") && (v = !0), "yes" === _.data("enable-auto-width") && (y = !0), void 0 !== _.data("slider-animate-in") && !1 !== _.data("slider-animate-in") && (w = _.data("slider-animate-in")), void 0 !== _.data("slider-animate-out") && !1 !== _.data("slider-animate-out") && (b = _.data("slider-animate-out")), "no" === _.data("enable-navigation") && (C = !1), "yes" === _.data("enable-pagination") && (x = !0), "yes" === _.data("enable-thumbnail") && (S = !0), C && x && a.addClass("mkdf-slider-has-both-nav"), o <= 1 && (s = !1, r = !1, C = !1, x = !1);
            var A = 2,
                D = 3,
                P = i;
            if (i < 3 && (A = i, D = i), i > 4 && (P = 4), (g || c > 30) && (u = 20, h = 30), c > 0 && c <= 30 && (u = c, h = c), a.waitForImages(function() {
                    d = a.owlCarousel({
                        items: i,
                        loop: s,
                        slideBy: i,
                        autoplay: r,
                        autoplayHoverPause: l,
                        autoplayTimeout: m,
                        smartSpeed: f,
                        margin: c,
                        stagePadding: p,
                        center: v,
                        autoWidth: y,
                        animateIn: w,
                        animateOut: b,
                        dots: x,
                        nav: C,
                        navText: ['<span class="mkdf-prev-icon"><svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="16.667px" viewBox="0 0 75.417 16.667" enable-background="new 0 0 75.417 16.667" xml:space="preserve"><line fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="1.681" y1="7.817" x2="73.257" y2="7.817"/><polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="8.235,1.351 1.681,7.817 8.235,15.316"/></svg></span>', '<span class="mkdf-next-icon"><svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="16.667px" viewBox="0 0 75.417 16.667" enable-background="new 0 0 75.417 16.667" xml:space="preserve"><line fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="1.681" y1="7.817" x2="73.257" y2="7.817"/><polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="67.235,1.351 73.985,7.817 67.235,15.316"/></svg></span>'],
                        responsive: {
                            0: {
                                items: 1,
                                margin: u,
                                stagePadding: 0,
                                center: !1,
                                autoWidth: !1
                            },
                            681: {
                                items: A,
                                margin: h
                            },
                            769: {
                                items: D,
                                margin: h
                            },
                            1025: {
                                items: P
                            },
                            1281: {
                                items: i
                            }
                        },
                        onInitialize: function() {
                            a.css("visibility", "visible"), k(), S && t.find(".mkdf-slider-thumbnail-item:first-child").addClass("active")
                        },
                        onTranslate: function(e) {
                            if (S) {
                                var a = e.item.index + 1;
                                t.find(".mkdf-slider-thumbnail-item.active").removeClass("active"), t.find(".mkdf-slider-thumbnail-item:nth-child(" + a + ")").addClass("active")
                            }
                        },
                        onDrag: function(e) {
                            mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") && (e.isTrigger > 0 && a.addClass("mkdf-slider-is-moving"))
                        },
                        onDragged: function() {
                            mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") && a.hasClass("mkdf-slider-is-moving") && setTimeout(function() {
                                a.removeClass("mkdf-slider-is-moving")
                            }, 500)
                        }
                    })
                }), S) {
                t = a.parent().find(".mkdf-slider-thumbnail");
                var T = "";
                switch (parseInt(t.data("thumbnail-count")) % 6) {
                    case 2:
                        T = "two";
                        break;
                    case 3:
                        T = "three";
                        break;
                    case 4:
                        T = "four";
                        break;
                    case 5:
                        T = "five";
                        break;
                    case 0:
                    default:
                        T = "six"
                }
                "" !== T && t.addClass("mkdf-slider-columns-" + T), t.find(".mkdf-slider-thumbnail-item").on("click", function() {
                    e(this).siblings(".active").removeClass("active"), e(this).addClass("active"), d.trigger("to.owl.carousel", [e(this).index(), f])
                })
            }
        })
    }

    function v() {
        var t = e(".mkdf-owl-slider");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find(".owl-dots"),
                d = t.find(".owl-dot"),
                o = a.find(".owl-dot:first-of-type"),
                i = a.find(".owl-dot:last-of-type"),
                n = d.length;
            o.prepend('<div class="mkdf-owl-dot-num mkdf-first-dot">01</div>'), n < 10 && (n = "0" + n), i.prepend('<div class="mkdf-owl-dot-num">' + n + "</div>");
            t.on("translate.owl.carousel", function(e) {
                var a;
                (a = e.page.index + 1) < 10 && (a = "0" + a), t.find(".mkdf-first-dot").html(a)
            })
        })
    }
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        n(), s()
    }

    function d() {
        r().init()
    }

    function o() {
        s()
    }

    function i() {
        r().scroll()
    }

    function n() {
        var t = e("audio.mkdf-blog-audio");
        t.length && t.mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function s() {
        var t = e(".mkdf-blog-holder.mkdf-blog-type-masonry");
        t.length && t.each(function() {
            var t = e(this),
                a = t.children(".mkdf-blog-holder-inner"),
                d = t.find(".mkdf-blog-masonry-grid-sizer").width();
            a.waitForImages(function() {
                a.isotope({
                    layoutMode: "packery",
                    itemSelector: "article",
                    percentPosition: !0,
                    packery: {
                        gutter: ".mkdf-blog-masonry-grid-gutter",
                        columnWidth: ".mkdf-blog-masonry-grid-sizer"
                    }
                }), mkdf.modules.common.setFixedImageProportionSize(t, t.find("article"), d), a.isotope("layout").css("opacity", "1")
            })
        })
    }

    function r() {
        var t = e(".mkdf-blog-holder"),
            a = function(e) {
                var t = e.outerHeight() + e.offset().top - mkdfGlobalVars.vars.mkdfAddForAdminBar;
                !e.hasClass("mkdf-blog-pagination-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > t && d(e)
            },
            d = function(t) {
                var a, d, s = t.children(".mkdf-blog-holder-inner");
                void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (d = t.data("max-num-pages")), t.hasClass("mkdf-blog-pagination-infinite-scroll") && t.addClass("mkdf-blog-pagination-infinite-scroll-started");
                var r = mkdf.modules.common.getLoadMoreData(t),
                    l = t.find(".mkdf-blog-pag-loading");
                if ((a = r.nextPage) <= d) {
                    l.addClass("mkdf-showing");
                    var m = mkdf.modules.common.setLoadMoreAjaxData(r, "పెళ్లి పూల మాల_mikado_blog_load_more");
                    e.ajax({
                        type: "POST",
                        data: m,
                        url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                        success: function(d) {
                            a++, t.data("next-page", a);
                            var r = e.parseJSON(d).html;
                            t.waitForImages(function() {
                                t.hasClass("mkdf-blog-type-masonry") ? (o(s, l, r), mkdf.modules.common.setFixedImageProportionSize(t, t.find("article"), size)) : i(s, l, r), setTimeout(function() {
                                    n(), mkdf.modules.common.mkdfOwlSlider(), mkdf.modules.common.mkdfFluidVideo(), mkdf.modules.common.mkdfInitSelfHostedVideoPlayer(), mkdf.modules.common.mkdfSelfHostedVideoSize(), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit(), e(document.body).trigger("blog_list_load_more_trigger")
                                }, 400)
                            }), t.hasClass("mkdf-blog-pagination-infinite-scroll-started") && t.removeClass("mkdf-blog-pagination-infinite-scroll-started")
                        }
                    })
                }
                a === d && t.find(".mkdf-blog-pag-load-more").hide()
            },
            o = function(e, t, a) {
                e.append(a).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), t.removeClass("mkdf-showing"), setTimeout(function() {
                    e.isotope("layout")
                }, 600)
            },
            i = function(e, t, a) {
                t.removeClass("mkdf-showing"), e.append(a)
            };
        return {
            init: function() {
                t.length && t.each(function() {
                    var t, o = e(this);
                    o.hasClass("mkdf-blog-pagination-load-more") && (t = o).find(".mkdf-blog-pag-load-more a").on("click", function(e) {
                        e.preventDefault(), e.stopPropagation(), d(t)
                    }), o.hasClass("mkdf-blog-pagination-infinite-scroll") && a(o)
                })
            },
            scroll: function() {
                t.length && t.each(function() {
                    var t = e(this);
                    t.hasClass("mkdf-blog-pagination-infinite-scroll") && a(t)
                })
            }
        }
    }
    mkdf.modules.blog = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, t.mkdfOnWindowResize = o, t.mkdfOnWindowScroll = i, e(document).ready(a), e(window).load(d), e(window).resize(o), e(window).scroll(i)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            if (e("body:not(.error404) .mkdf-footer-uncover").length && !mkdf.htmlEl.hasClass("touch")) {
                var t = e("footer"),
                    a = t.outerHeight(),
                    d = e(".mkdf-content"),
                    o = function() {
                        d.css("margin-bottom", a), t.css("height", a)
                    };
                o(), e(window).resize(function() {
                    a = t.find(".mkdf-footer-inner").outerHeight(), o()
                })
            }
        }()
    }
    mkdf.modules.footer = t, t.mkdfOnWindowLoad = a, e(window).load(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        o(), setTimeout(function() {
            e(".mkdf-drop-down > ul > li").each(function() {
                var t = e(this);
                t.find(".second").length && t.waitForImages(function() {
                    var a = t.find(".second"),
                        d = mkdf.menuDropdownHeightSet ? 0 : a.outerHeight();
                    if (t.hasClass("wide")) {
                        var o = 0,
                            i = a.find("> .inner > ul > li");
                        i.each(function() {
                            var t = e(this).outerHeight();
                            t > o && (o = t)
                        }), i.css("height", "").height(o), mkdf.menuDropdownHeightSet || (d = a.outerHeight())
                    }
                    if (mkdf.menuDropdownHeightSet || a.height(0), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) t.on("touchstart mouseenter", function() {
                        a.css({
                            height: d,
                            overflow: "visible",
                            visibility: "visible",
                            opacity: "1"
                        })
                    }).on("mouseleave", function() {
                        a.css({
                            height: "0px",
                            overflow: "hidden",
                            visibility: "hidden",
                            opacity: "0"
                        })
                    });
                    else if (mkdf.body.hasClass("mkdf-dropdown-animate-height")) {
                        var n = {
                            interval: 0,
                            over: function() {
                                setTimeout(function() {
                                    a.addClass("mkdf-drop-down-start").css({
                                        visibility: "visible",
                                        height: "0",
                                        opacity: "1"
                                    }), a.stop().animate({
                                        height: d
                                    }, 400, "easeInOutQuint", function() {
                                        a.css("overflow", "visible")
                                    })
                                }, 100)
                            },
                            timeout: 100,
                            out: function() {
                                a.stop().animate({
                                    height: "0",
                                    opacity: 0
                                }, 100, function() {
                                    a.css({
                                        overflow: "hidden",
                                        visibility: "hidden"
                                    })
                                }), a.removeClass("mkdf-drop-down-start")
                            }
                        };
                        t.hoverIntent(n)
                    } else {
                        var s = {
                            interval: 0,
                            over: function() {
                                setTimeout(function() {
                                    a.addClass("mkdf-drop-down-start").stop().css({
                                        height: d
                                    })
                                }, 150)
                            },
                            timeout: 150,
                            out: function() {
                                a.stop().css({
                                    height: "0"
                                }).removeClass("mkdf-drop-down-start")
                            }
                        };
                        t.hoverIntent(s)
                    }
                })
            }), e(".mkdf-drop-down ul li.wide ul li a").on("click", function(t) {
                if (1 === t.which) {
                    var a = e(this);
                    setTimeout(function() {
                        a.mouseleave()
                    }, 500)
                }
            }), mkdf.menuDropdownHeightSet = !0
        }, 100)
    }

    function d() {
        i()
    }

    function o() {
        var t = e(".mkdf-drop-down > ul > li.narrow.menu-item-has-children");
        t.length && t.each(function(t) {
            var a, d = e(this),
                o = d.offset().left,
                i = d.find(".second"),
                n = i.find(".inner ul"),
                s = n.outerWidth(),
                r = mkdf.windowWidth - o;
            mkdf.body.hasClass("mkdf-boxed") && (r = mkdf.boxedLayoutWidth - (o - (mkdf.windowWidth - mkdf.boxedLayoutWidth) / 2)), d.find("li.sub").length > 0 && (a = r - s), i.removeClass("right"), n.removeClass("right"), (r < s || a < s) && (i.addClass("right"), n.addClass("right"))
        })
    }

    function i() {
        var t = e(".mkdf-drop-down > ul > li.wide");
        t.length && t.each(function(a) {
            var d = e(this),
                o = e(t[a]).find(".second");
            if (o.length && !d.hasClass("left_position") && !d.hasClass("right_position"))
                if (d.hasClass("mkdf-wide-menu-full-width") || d.hasClass("mkdf-wide-menu-in-grid"))
                    if (o.css("left", 0), mkdf.body.hasClass("mkdf-boxed")) {
                        var i = e(".mkdf-boxed .mkdf-wrapper .mkdf-wrapper-inner").outerWidth();
                        n = o.offset().left - (mkdf.windowWidth - i) / 2, o.css({
                            left: -n,
                            width: i
                        })
                    } else d.hasClass("mkdf-wide-menu-full-width") ? (s = mkdf.windowWidth, n = o.offset().left) : (s = o.find(".inner>ul").outerWidth(), n = o.offset().left - (mkdf.windowWidth - s) / 2), o.css({
                        left: -n,
                        width: s
                    });
            else if (d.hasClass("mkdf-wide-menu-centered")) {
                var n, s, r, l = (n = o.offset().left) - (s = o.find(".inner>ul").outerWidth()) / 2 + d.outerWidth() / 2;
                r = l <= 40 ? 40 - n : l + s > mkdf.windowWidth - 40 ? mkdf.windowWidth - 40 - n - s : -s / 2 + d.outerWidth() / 2, o.css({
                    left: r
                })
            }
        })
    }
    mkdf.modules.header = t, t.mkdfSetDropDownMenuPosition = o, t.mkdfSetDropDownWideMenuPosition = i, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, e(document).ready(a), e(window).load(d)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        e(document).on("click", ".mkdf-like", function() {
            var t, a = e(this),
                d = a.attr("id");
            if (a.hasClass("liked")) return !1;
            void 0 !== a.data("type") && (t = a.data("type"));
            var o = {
                action: "పెళ్లి పూల మాల_mikado_like",
                likes_id: d,
                type: t
            };
            return e.post(mkdfGlobalVars.vars.mkdfAjaxUrl, o, function(e) {
                a.html(e).addClass("liked").attr("title", "You already like this!")
            }), !1
        })
    }
    e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        var t;
        ! function() {
            var t, a = e(".mkdf-wrapper"),
                d = e(".mkdf-side-menu"),
                o = e("a.mkdf-side-menu-button-opener"),
                i = !1,
                n = !1,
                s = !1;
            mkdf.body.hasClass("mkdf-side-menu-slide-from-right") ? (e(".mkdf-cover").remove(), t = "mkdf-right-side-menu-opened", a.prepend('<div class="mkdf-cover"/>'), i = !0) : mkdf.body.hasClass("mkdf-side-menu-slide-with-content") ? (t = "mkdf-side-menu-open", n = !0) : mkdf.body.hasClass("mkdf-side-area-uncovered-from-content") && (t = "mkdf-right-side-menu-opened", s = !0);
            e("a.mkdf-side-menu-button-opener, a.mkdf-close-side-menu").on("click", function(r) {
                if (r.preventDefault(), o.hasClass("opened")) {
                    if (o.removeClass("opened"), mkdf.body.removeClass(t), s) var l = setTimeout(function() {
                        d.css({
                            visibility: "hidden"
                        }), clearTimeout(l)
                    }, 400)
                } else {
                    o.addClass("opened"), mkdf.body.addClass(t), i && e(".mkdf-wrapper .mkdf-cover").on("click", function() {
                        mkdf.body.removeClass("mkdf-right-side-menu-opened"), o.removeClass("opened")
                    }), s && d.css({
                        visibility: "visible"
                    });
                    var m = e(window).scrollTop();
                    e(window).scroll(function() {
                        if (Math.abs(mkdf.scroll - m) > 400 && (mkdf.body.removeClass(t), o.removeClass("opened"), s)) var e = setTimeout(function() {
                            d.css({
                                visibility: "hidden"
                            }), clearTimeout(e)
                        }, 400)
                    })
                }
                n && (r.stopPropagation(), a.on("click", function() {
                    r.preventDefault(), o.removeClass("opened"), mkdf.body.removeClass("mkdf-side-menu-open")
                }))
            })
        }(), (t = e(".mkdf-side-menu")).length && t.perfectScrollbar({
            wheelSpeed: .6,
            suppressScrollX: !0
        })
    }
    mkdf.modules.sidearea = t, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            var t = e(".mkdf-title-holder.mkdf-bg-parallax");
            if (t.length > 0 && mkdf.windowWidth > 1024) {
                var a = t.hasClass("mkdf-bg-parallax-zoom-out"),
                    d = parseInt(t.data("height")),
                    o = parseInt(t.data("background-width")),
                    i = d / 1e4 * 7,
                    n = -mkdf.scroll * i,
                    s = mkdfGlobalVars.vars.mkdfAddForAdminBar;
                t.css({
                    "background-position": "center " + (n + s) + "px"
                }), a && a.css({
                    "background-size": o - mkdf.scroll + "px auto"
                }), e(window).scroll(function() {
                    n = -mkdf.scroll * i, t.css({
                        "background-position": "center " + (n + s) + "px"
                    }), a && a.css({
                        "background-size": o - mkdf.scroll + "px auto"
                    })
                })
            }
        }()
    }
    mkdf.modules.title = t, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        var t, a, d, o, i;
        e(document).on("click", ".mkdf-quantity-minus, .mkdf-quantity-plus", function(t) {
                t.stopPropagation();
                var a, d = e(this),
                    o = d.siblings(".mkdf-quantity-input"),
                    i = parseFloat(o.data("step")),
                    n = parseFloat(o.data("max")),
                    s = !1,
                    r = parseFloat(o.val());
                d.hasClass("mkdf-quantity-minus") && (s = !0), s ? (a = r - i) >= 1 ? o.val(a) : o.val(0) : (a = r + i, void 0 === n ? o.val(a) : a >= n ? o.val(n) : o.val(a)), o.trigger("change")
            }),
            function() {
                var t = e(".woocommerce-ordering .orderby");
                t.length && t.select2({
                    minimumResultsForSearch: 1 / 0
                });
                var a = e(".mkdf-woocommerce-page .mkdf-content .variations td.value select");
                a.length && a.select2();
                var d = e("#calc_shipping_country");
                d.length && d.select2();
                var o = e(".cart-collaterals .shipping select#calc_shipping_state");
                o.length && o.select2()
            }(), (t = e(".mkdf-woo-single-page.mkdf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image")).length && (t.children("a").attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"), "function" == typeof mkdf.modules.common.mkdfPrettyPhoto && mkdf.modules.common.mkdfPrettyPhoto()), (a = e(".mkdf-pl-holder"), d = {}, o = function(t, a) {
                var o = t.find(".mkdf-pl-outer"),
                    i = mkdf.modules.common.getLoadMoreData(t),
                    n = t.find(".mkdf-prl-loading");
                ! function(e, t) {
                    for (var a in t) e[a] = t[a];
                    switch (e.ordering) {
                        case "menu_order":
                            e.metaKey = "", e.order = "asc", e.orderby = "menu_order title";
                            break;
                        case "popularity":
                            e.metaKey = "total_sales", e.order = "desc", e.orderby = "meta_value_num";
                            break;
                        case "rating":
                            e.metaKey = "_wc_average_rating", e.order = "desc", e.orderby = "meta_value_num";
                            break;
                        case "newness":
                            e.metaKey = "", e.order = "desc", e.orderby = "date";
                            break;
                        case "price":
                            e.metaKey = "_price", e.order = "asc", e.orderby = "meta_value_num";
                            break;
                        case "price-desc":
                            e.metaKey = "_price", e.order = "desc", e.orderby = "meta_value_num"
                    }
                }(d, a.data()), i.category = void 0 !== d.category ? d.category : "", i.metaKey = void 0 !== d.metaKey ? d.metaKey : "", i.order = void 0 !== d.order ? d.order : "", i.orderby = void 0 !== d.orderby ? d.orderby : "", i.minPrice = void 0 !== d.minprice ? d.minprice : "", i.maxPrice = void 0 !== d.maxprice ? d.maxprice : "", n.fadeIn();
                var s = mkdf.modules.common.setLoadMoreAjaxData(i, "పెళ్లి పూల మాల_mikado_product_ajax_load_category");
                e.ajax({
                    type: "POST",
                    data: s,
                    url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                    success: function(d) {
                        var i = e.parseJSON(d),
                            s = i.html;
                        t.waitForImages(function() {
                            var e, d, i, r, l;
                            a.parent().siblings().find("a").removeClass("active"), a.addClass("active"), t.hasClass("mkdf-masonry-layout") ? (r = n, l = s, (i = o).find(".mkdf-pli").remove(), i.append(l).isotope("reloadItems").isotope({
                                sortBy: "original-order"
                            }), mkdfProductImageSizes(i), setTimeout(function() {
                                i.isotope("layout"), r.fadeOut()
                            }, 400)) : (e = n, d = s, o.html(d), e.fadeOut())
                        })
                    }
                })
            }, i = function(e, t) {
                e.on("click", function() {
                    mkdf.windowWidth <= 768 && (e.hasClass("opened") ? (e.removeClass("opened"), t.slideUp()) : (e.addClass("opened"), t.slideDown()))
                })
            }, {
                init: function(t) {
                    a.length && a.each(function() {
                        var t, a = e(this);
                        (t = a).find(".mkdf-pl-categories a, .mkdf-pl-ordering a").on("click", function(a) {
                            a.preventDefault(), a.stopPropagation();
                            var d = e(this);
                            d.hasClass("active") || o(t, d)
                        }), i(a.find(".mkdf-pl-ordering-outer h6"), a.find(".mkdf-pl-ordering")), i(a.find(".mkdf-pl-categories-label"), a.find(".mkdf-pl-categories-label").next("ul"))
                    })
                }
            }).init()
    }

    function d() {
        i()
    }

    function o() {
        i()
    }

    function i() {
        var t = e(".mkdf-pl-holder.mkdf-masonry-layout .mkdf-pl-outer");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-pl-sizer").width();
            t.waitForImages(function() {
                t.isotope({
                    itemSelector: ".mkdf-pli",
                    resizable: !1,
                    masonry: {
                        columnWidth: ".mkdf-pl-sizer",
                        gutter: ".mkdf-pl-gutter"
                    }
                }), t.find(".mkdf-woo-fixed-masonry").length && mkdf.modules.common.setFixedImageProportionSize(t, t.find(".mkdf-pli"), a, !0), t.isotope("layout").css("opacity", 1)
            })
        })
    }
    mkdf.modules.woocommerce = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, t.mkdfOnWindowResize = o, e(document).ready(a), e(window).load(d), e(window).resize(o)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        var t;
        (t = e(".mkdf-blog-list-holder.mkdf-bl-masonry")).length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-blog-list");
            a.waitForImages(function() {
                a.isotope({
                    layoutMode: "packery",
                    itemSelector: ".mkdf-bl-item",
                    percentPosition: !0,
                    packery: {
                        gutter: ".mkdf-bl-grid-gutter",
                        columnWidth: ".mkdf-bl-grid-sizer"
                    }
                }), a.css("opacity", "1")
            })
        })
    }

    function d() {
        i().init()
    }

    function o() {
        i().scroll()
    }

    function i() {
        var t = e(".mkdf-blog-list-holder"),
            a = function(e) {
                var t = e.outerHeight() + e.offset().top - mkdfGlobalVars.vars.mkdfAddForAdminBar;
                !e.hasClass("mkdf-bl-pag-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > t && d(e)
            },
            d = function(t, a) {
                var d, l, m = t.find(".mkdf-blog-list");
                void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (l = t.data("max-num-pages")), t.hasClass("mkdf-bl-pag-standard-shortcodes") && t.data("next-page", a), t.hasClass("mkdf-bl-pag-infinite-scroll") && t.addClass("mkdf-bl-pag-infinite-scroll-started");
                var f = mkdf.modules.common.getLoadMoreData(t),
                    c = t.find(".mkdf-blog-pag-loading");
                if ((d = f.nextPage) <= l) {
                    t.hasClass("mkdf-bl-pag-standard-shortcodes") ? (c.addClass("mkdf-showing mkdf-standard-pag-trigger"), t.addClass("mkdf-bl-pag-standard-shortcodes-animate")) : c.addClass("mkdf-showing");
                    var u = mkdf.modules.common.setLoadMoreAjaxData(f, "పెళ్లి పూల మాల_mikado_blog_shortcode_load_more");
                    e.ajax({
                        type: "POST",
                        data: u,
                        url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                        success: function(a) {
                            t.hasClass("mkdf-bl-pag-standard-shortcodes") || d++, t.data("next-page", d);
                            var f = e.parseJSON(a).html;
                            t.hasClass("mkdf-bl-pag-standard-shortcodes") ? (o(t, l, d), t.waitForImages(function() {
                                t.hasClass("mkdf-bl-masonry") ? i(t, m, c, f) : (n(t, m, c, f), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit())
                            })) : t.waitForImages(function() {
                                t.hasClass("mkdf-bl-masonry") ? s(m, c, f) : (r(m, c, f), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit())
                            }), t.hasClass("mkdf-bl-pag-infinite-scroll-started") && t.removeClass("mkdf-bl-pag-infinite-scroll-started")
                        }
                    })
                }
                d === l && t.find(".mkdf-blog-pag-load-more").hide()
            },
            o = function(e, t, a) {
                var d = e.find(".mkdf-bl-standard-pagination"),
                    o = d.find("li.mkdf-bl-pag-number"),
                    i = d.find("li.mkdf-bl-pag-prev a"),
                    n = d.find("li.mkdf-bl-pag-next a");
                o.removeClass("mkdf-bl-pag-active"), o.eq(a - 1).addClass("mkdf-bl-pag-active"), i.data("paged", a - 1), n.data("paged", a + 1), a > 1 ? i.css({
                    opacity: "1"
                }) : i.css({
                    opacity: "0"
                }), a === t ? n.css({
                    opacity: "0"
                }) : n.css({
                    opacity: "1"
                })
            },
            i = function(e, t, a, d) {
                t.html(d).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-bl-pag-standard-shortcodes-animate"), setTimeout(function() {
                    t.isotope("layout"), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit()
                }, 600)
            },
            n = function(e, t, a, d) {
                a.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-bl-pag-standard-shortcodes-animate"), t.html(d)
            },
            s = function(e, t, a) {
                e.append(a).isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), t.removeClass("mkdf-showing"), setTimeout(function() {
                    e.isotope("layout"), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit()
                }, 600)
            },
            r = function(e, t, a) {
                t.removeClass("mkdf-showing"), e.append(a)
            };
        return {
            init: function() {
                t.length && t.each(function() {
                    var t, o, i, n = e(this);
                    n.hasClass("mkdf-bl-pag-standard-shortcodes") && (o = (t = n).find(".mkdf-bl-standard-pagination li")).length && o.each(function() {
                        var a = e(this).children("a"),
                            o = 1;
                        a.on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), void 0 !== a.data("paged") && !1 !== a.data("paged") && (o = a.data("paged")), d(t, o)
                        })
                    }), n.hasClass("mkdf-bl-pag-load-more") && (i = n).find(".mkdf-blog-pag-load-more a").on("click", function(e) {
                        e.preventDefault(), e.stopPropagation(), d(i)
                    }), n.hasClass("mkdf-bl-pag-infinite-scroll") && a(n)
                })
            },
            scroll: function() {
                t.length && t.each(function() {
                    var t = e(this);
                    t.hasClass("mkdf-bl-pag-infinite-scroll") && a(t)
                })
            }
        }
    }
    mkdf.modules.blogListSC = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, t.mkdfOnWindowScroll = o, e(document).ready(a), e(window).load(d), e(window).scroll(o)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        o()
    }

    function d() {
        o()
    }

    function o() {
        if (mkdf.body.hasClass("mkdf-header-divided")) {
            var t = e(".mkdf-menu-area, .mkdf-sticky-header"),
                a = t.width(),
                d = e(".mkdf-main-menu > ul > li > a"),
                o = 0,
                i = parseInt(t.children(".mkdf-vertical-align-containers").css("paddingLeft"), 10),
                n = t.find(".mkdf-logo-wrapper .mkdf-normal-logo"),
                s = 0;
            t.waitForImages(function() {
                t.find(".mkdf-grid").length && (a = t.find(".mkdf-grid").outerWidth()), d.length && (o = parseInt(d.css("paddingLeft"))), n.length && (s = n.width() / 2);
                var e = Math.round(a / 2 - o - s - i);
                t.find(".mkdf-position-left").width(e), t.find(".mkdf-position-right").width(e), t.css("opacity", 1), "function" == typeof mkdf.modules.header.mkdfSetDropDownMenuPosition && mkdf.modules.header.mkdfSetDropDownMenuPosition(), "function" == typeof mkdf.modules.header.mkdfSetDropDownWideMenuPosition && mkdf.modules.header.mkdfSetDropDownWideMenuPosition()
            })
        }
    }
    mkdf.modules.headerDivided = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowResize = d, e(document).ready(a), e(window).resize(d)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            var t = e(".mkdf-mobile-header .mkdf-mobile-menu-opener, .mkdf-close-mobile-side-area-holder"),
                a = e(".mkdf-mobile-header .mkdf-mobile-side-area"),
                d = e('.mkdf-mobile-nav .mobile_arrow, .mkdf-mobile-nav h6, .mkdf-mobile-nav a[href*="#"]');
            t.length && a.length && t.on("tap click", function(e) {
                e.stopPropagation(), e.preventDefault(), a.hasClass("opened") ? a.removeClass("opened") : a.addClass("opened")
            });
            d.length && d.each(function() {
                e(this).on("tap click", function(t) {
                    var a = e(this).nextAll("ul").first();
                    if (a.length) {
                        t.preventDefault(), t.stopPropagation();
                        var d = e(this).parent("li");
                        a.is(":visible") ? (a.slideUp(200), d.removeClass("mkdf-opened")) : (a.slideDown(200), d.addClass("mkdf-opened"))
                    }
                })
            });
            e(".mkdf-mobile-nav a, .mkdf-mobile-logo-wrapper a").on("click tap", function(t) {
                "http://#" !== e(this).attr("href") && e(this).attr("href")
            })
        }(), o(),
            function() {
                var t = e(".mkdf-mobile-header"),
                    a = (t.find(".mkdf-mobile-menu-opener"), t.length ? t.outerHeight() : 0),
                    d = e(".mkdf-mobile-header .mkdf-mobile-side-area");
                mkdf.body.hasClass("mkdf-content-is-behind-header") && a > 0 && mkdf.windowWidth <= 1024 && e(".mkdf-content").css("marginTop", -a);
                if (mkdf.body.hasClass("mkdf-sticky-up-mobile-header")) {
                    var o, i = e("#wpadminbar"),
                        n = e(document).scrollTop();
                    o = a + mkdfGlobalVars.vars.mkdfAddForAdminBar, e(window).scroll(function() {
                        var a = e(document).scrollTop();
                        a > o && !d.hasClass("opened") ? t.addClass("mkdf-animate-mobile-header") : t.removeClass("mkdf-animate-mobile-header"), a > n && a > o || a < o || d.hasClass("opened") ? (t.removeClass("mobile-header-appear"), t.css("margin-bottom", 0), i.length && t.find(".mkdf-mobile-header-inner").css("top", 0)) : (t.addClass("mobile-header-appear"), t.css("margin-bottom", o)), n = e(document).scrollTop()
                    })
                }
            }()
    }

    function d() {
        o()
    }

    function o() {
        if (mkdf.windowWidth <= 1024) {
            var t = e(".mkdf-mobile-header").find(".mkdf-mobile-side-area-inner"),
                a = t.outerHeight(),
                d = mkdf.windowHeight - 100,
                o = a > d ? d : a;
            t.height(o).perfectScrollbar({
                wheelSpeed: .6,
                suppressScrollX: !0
            })
        }
    }
    mkdf.modules.mobileHeader = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowResize = d, e(document).ready(a), e(window).resize(d)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        mkdf.windowWidth > 1024 && function() {
            var t, a, d = e(".mkdf-page-header"),
                o = e(".mkdf-sticky-header"),
                i = e(".mkdf-fixed-wrapper"),
                n = i.children(".mkdf-menu-area").outerHeight(),
                s = e(".mkdf-slider"),
                r = s.length ? s.outerHeight() : 0,
                l = i.length ? i.offset().top - mkdfGlobalVars.vars.mkdfAddForAdminBar : 0;
            switch (!0) {
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-up"):
                    mkdf.modules.stickyHeader.behaviour = "mkdf-sticky-header-on-scroll-up";
                    var m = e(document).scrollTop();
                    t = parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) + parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfStickyHeaderHeight), (a = function() {
                        var a = e(document).scrollTop();
                        a > m && a > t || a < t ? (mkdf.modules.stickyHeader.isStickyVisible = !1, o.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"), mkdf.body.removeClass("mkdf-sticky-header-appear")) : (mkdf.modules.stickyHeader.isStickyVisible = !0, o.addClass("header-appear"), mkdf.body.addClass("mkdf-sticky-header-appear")), m = e(document).scrollTop()
                    })(), e(window).scroll(function() {
                        a()
                    });
                    break;
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-down-up"):
                    mkdf.modules.stickyHeader.behaviour = "mkdf-sticky-header-on-scroll-down-up", 0 !== mkdfPerPageVars.vars.mkdfStickyScrollAmount ? mkdf.modules.stickyHeader.stickyAppearAmount = parseInt(mkdfPerPageVars.vars.mkdfStickyScrollAmount) : mkdf.modules.stickyHeader.stickyAppearAmount = parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) + parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) + parseInt(r), (a = function() {
                        mkdf.scroll < mkdf.modules.stickyHeader.stickyAppearAmount ? (mkdf.modules.stickyHeader.isStickyVisible = !1, o.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"), mkdf.body.removeClass("mkdf-sticky-header-appear")) : (mkdf.modules.stickyHeader.isStickyVisible = !0, o.addClass("header-appear"), mkdf.body.addClass("mkdf-sticky-header-appear"))
                    })(), e(window).scroll(function() {
                        a()
                    });
                    break;
                case mkdf.body.hasClass("mkdf-fixed-on-scroll"):
                    mkdf.modules.stickyHeader.behaviour = "mkdf-fixed-on-scroll";
                    var f = function() {
                        mkdf.scroll < l ? (i.removeClass("fixed"), mkdf.body.removeClass("mkdf-fixed-header-appear"), d.css("margin-bottom", "0")) : (i.addClass("fixed"), mkdf.body.addClass("mkdf-fixed-header-appear"), d.css("margin-bottom", n + "px"))
                    };
                    f(), e(window).scroll(function() {
                        f()
                    })
            }
        }()
    }
    mkdf.modules.stickyHeader = t, t.isStickyVisible = !1, t.stickyAppearAmount = 0, t.behaviour = "", t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            if (mkdf.body.hasClass("mkdf-search-covers-header")) {
                var t = e("a.mkdf-search-opener");
                t.length > 0 && t.on("click", function(t) {
                    t.preventDefault();
                    var a, d = e(this),
                        o = e(".mkdf-page-header"),
                        i = e(".mkdf-top-bar"),
                        n = o.find(".mkdf-fixed-wrapper.fixed"),
                        s = e(".mkdf-mobile-header"),
                        r = e(".mkdf-search-cover"),
                        l = !!d.parents(".mkdf-top-bar").length,
                        m = !!d.parents(".mkdf-fixed-wrapper.fixed").length,
                        f = !!d.parents(".mkdf-sticky-header").length,
                        c = !!d.parents(".mkdf-mobile-header").length;
                    r.removeClass("mkdf-is-active"), l ? (a = mkdfGlobalVars.vars.mkdfTopBarHeight, i.find(".mkdf-search-cover").addClass("mkdf-is-active")) : m ? (a = n.outerHeight(), o.children(".mkdf-search-cover").addClass("mkdf-is-active")) : f ? (a = o.find(".mkdf-sticky-header").outerHeight(), o.children(".mkdf-search-cover").addClass("mkdf-is-active")) : c ? (a = s.hasClass("mobile-header-appear") ? s.children(".mkdf-mobile-header-inner").outerHeight() : s.outerHeight(), s.find(".mkdf-search-cover").addClass("mkdf-is-active")) : (a = o.outerHeight(), o.children(".mkdf-search-cover").addClass("mkdf-is-active")), r.hasClass("mkdf-is-active") && r.height(a).stop(!0).fadeIn(600).find('input[type="text"]').focus(), r.find(".mkdf-search-close").on("click", function(e) {
                        e.preventDefault(), r.stop(!0).fadeOut(450)
                    }), r.blur(function() {
                        r.stop(!0).fadeOut(450)
                    }), e(window).scroll(function() {
                        r.stop(!0).fadeOut(450)
                    })
                })
            }
        }()
    }
    mkdf.modules.searchCoversHeader = t, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            if (mkdf.body.hasClass("mkdf-fullscreen-search")) {
                var t = e("a.mkdf-search-opener");
                if (t.length > 0) {
                    var a = e(".mkdf-fullscreen-search-holder"),
                        d = e(".mkdf-search-close");
                    t.on("click", function(t) {
                        t.preventDefault(), a.hasClass("mkdf-animate") ? (mkdf.body.removeClass("mkdf-fullscreen-search-opened mkdf-search-fade-out"), mkdf.body.removeClass("mkdf-search-fade-in"), a.removeClass("mkdf-animate"), setTimeout(function() {
                            a.find(".mkdf-search-field").val(""), a.find(".mkdf-search-field").blur()
                        }, 300), mkdf.modules.common.mkdfEnableScroll()) : (mkdf.body.addClass("mkdf-fullscreen-search-opened mkdf-search-fade-in"), mkdf.body.removeClass("mkdf-search-fade-out"), a.addClass("mkdf-animate"), setTimeout(function() {
                            a.find(".mkdf-search-field").focus()
                        }, 900), mkdf.modules.common.mkdfDisableScroll()), d.on("click", function(e) {
                            e.preventDefault(), mkdf.body.removeClass("mkdf-fullscreen-search-opened mkdf-search-fade-in"), mkdf.body.addClass("mkdf-search-fade-out"), a.removeClass("mkdf-animate"), setTimeout(function() {
                                a.find(".mkdf-search-field").val(""), a.find(".mkdf-search-field").blur()
                            }, 300), mkdf.modules.common.mkdfEnableScroll()
                        }), e(document).mouseup(function(t) {
                            var d = e(".mkdf-form-holder-inner");
                            d.is(t.target) || 0 !== d.has(t.target).length || (t.preventDefault(), mkdf.body.removeClass("mkdf-fullscreen-search-opened mkdf-search-fade-in"), mkdf.body.addClass("mkdf-search-fade-out"), a.removeClass("mkdf-animate"), setTimeout(function() {
                                a.find(".mkdf-search-field").val(""), a.find(".mkdf-search-field").blur()
                            }, 300), mkdf.modules.common.mkdfEnableScroll())
                        }), e(document).keyup(function(e) {
                            27 === e.keyCode && (mkdf.body.removeClass("mkdf-fullscreen-search-opened mkdf-search-fade-in"), mkdf.body.addClass("mkdf-search-fade-out"), a.removeClass("mkdf-animate"), setTimeout(function() {
                                a.find(".mkdf-search-field").val(""), a.find(".mkdf-search-field").blur()
                            }, 300), mkdf.modules.common.mkdfEnableScroll())
                        })
                    });
                    var o = e(".mkdf-fullscreen-search-holder .mkdf-search-field"),
                        i = e(".mkdf-fullscreen-search-holder .mkdf-field-holder .mkdf-line");
                    o.focus(function() {
                        i.css("width", "100%")
                    }), o.blur(function() {
                        i.css("width", "0")
                    })
                }
            }
        }()
    }
    mkdf.modules.searchFullscreen = t, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            if (mkdf.body.hasClass("mkdf-fullscreen-search-with-sidebar")) {
                var t = e("a.mkdf-search-opener");
                if (t.length > 0) {
                    var a = e(".mkdf-fullscreen-with-sidebar-search-holder"),
                        d = e(".mkdf-search-close");
                    t.on("click", function(t) {
                        t.preventDefault(), a.perfectScrollbar({
                            wheelSpeed: .6,
                            suppressScrollX: !0
                        }), a.hasClass("mkdf-animate") ? (mkdf.body.removeClass("mkdf-fullscreen-search-opened mkdf-search-fade-out"), mkdf.body.removeClass("mkdf-search-fade-in"), a.removeClass("mkdf-animate"), setTimeout(function() {
                            a.find(".mkdf-search-field").val(""), a.find(".mkdf-search-field").blur()
                        }, 300), mkdf.modules.common.mkdfEnableScroll()) : (mkdf.body.addClass("mkdf-fullscreen-search-opened mkdf-search-fade-in"), mkdf.body.removeClass("mkdf-search-fade-out"), a.addClass("mkdf-animate"), setTimeout(function() {
                            a.find(".mkdf-search-field").focus()
                        }, 900), mkdf.modules.common.mkdfDisableScroll()), d.on("click", function(e) {
                            e.preventDefault(), mkdf.body.removeClass("mkdf-fullscreen-search-opened mkdf-search-fade-in"), mkdf.body.addClass("mkdf-search-fade-out"), a.removeClass("mkdf-animate"), setTimeout(function() {
                                a.find(".mkdf-search-field").val(""), a.find(".mkdf-search-field").blur()
                            }, 300), mkdf.modules.common.mkdfEnableScroll()
                        }), e(document).keyup(function(e) {
                            27 == e.keyCode && (mkdf.body.removeClass("mkdf-fullscreen-search-opened mkdf-search-fade-in"), mkdf.body.addClass("mkdf-search-fade-out"), a.removeClass("mkdf-animate"), setTimeout(function() {
                                a.find(".mkdf-search-field").val(""), a.find(".mkdf-search-field").blur()
                            }, 300), mkdf.modules.common.mkdfEnableScroll())
                        })
                    })
                }
            }
        }()
    }
    mkdf.modules.searchFullscreenWithSidebar = t, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            if (mkdf.body.hasClass("mkdf-slide-from-header-bottom")) {
                var t = e("a.mkdf-search-opener");
                t.length > 0 && t.on("click", function(t) {
                    t.preventDefault();
                    var a = e(this),
                        d = parseInt(mkdf.windowWidth - a.offset().left - a.outerWidth());
                    mkdf.body.hasClass("mkdf-boxed") && mkdf.windowWidth > 1024 && (d -= parseInt((mkdf.windowWidth - e(".mkdf-boxed .mkdf-wrapper .mkdf-wrapper-inner").outerWidth()) / 2));
                    var o = e(".mkdf-page-header"),
                        i = "100%",
                        n = e(".mkdf-top-bar"),
                        s = o.find(".mkdf-fixed-wrapper.fixed"),
                        r = e(".mkdf-mobile-header"),
                        l = e(".mkdf-slide-from-header-bottom-holder"),
                        m = !!a.parents(".mkdf-top-bar").length,
                        f = !!a.parents(".mkdf-fixed-wrapper.fixed").length,
                        c = !!a.parents(".mkdf-sticky-header").length,
                        u = !!a.parents(".mkdf-mobile-header").length;
                    l.removeClass("mkdf-is-active"), m ? n.find(".mkdf-slide-from-header-bottom-holder").addClass("mkdf-is-active") : f ? (i = s.outerHeight() + mkdfGlobalVars.vars.mkdfAddForAdminBar, o.children(".mkdf-slide-from-header-bottom-holder").addClass("mkdf-is-active")) : c ? (i = mkdfGlobalVars.vars.mkdfStickyHeaderHeight + mkdfGlobalVars.vars.mkdfAddForAdminBar, o.children(".mkdf-slide-from-header-bottom-holder").addClass("mkdf-is-active")) : u ? (r.hasClass("mobile-header-appear") && (i = r.children(".mkdf-mobile-header-inner").outerHeight() + mkdfGlobalVars.vars.mkdfAddForAdminBar), r.find(".mkdf-slide-from-header-bottom-holder").addClass("mkdf-is-active")) : o.children(".mkdf-slide-from-header-bottom-holder").addClass("mkdf-is-active"), l.hasClass("mkdf-is-active") && l.css({
                        right: d,
                        top: i
                    }).stop(!0).slideToggle(300, "easeOutBack"), e(document).keyup(function(e) {
                        27 == e.keyCode && l.stop(!0).fadeOut(0)
                    }), e(window).scroll(function() {
                        l.stop(!0).fadeOut(0)
                    })
                })
            }
        }()
    }
    mkdf.modules.searchSlideFromHB = t, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        ! function() {
            if (mkdf.body.hasClass("mkdf-search-slides-from-window-top")) {
                var t = e("a.mkdf-search-opener");
                if (t.length > 0) {
                    var a = e(".mkdf-search-slide-window-top"),
                        d = e(".mkdf-search-close");
                    t.on("click", function(t) {
                        t.preventDefault(), "0" == a.height() ? (e('.mkdf-search-slide-window-top input[type="text"]').focus(), mkdf.body.addClass("mkdf-search-open")) : mkdf.body.removeClass("mkdf-search-open"), e(window).scroll(function() {
                            "0" != a.height() && mkdf.scroll > 50 && mkdf.body.removeClass("mkdf-search-open")
                        }), d.on("click", function(e) {
                            e.preventDefault(), mkdf.body.removeClass("mkdf-search-open")
                        })
                    })
                }
            }
        }()
    }
    mkdf.modules.searchSlideFromWT = t, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    e(document).ready(function() {
        var t, a;
        (t = e(".mkdf-prod-cats-holder")).length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-prod-cat.mkdf-cat-with-image");
            t.waitForImages(function() {
                a.each(function(a) {
                    var d = e(this);
                    t.hasClass("mkdf-two-columns") ? (a + 1) % 4 == 1 ? d.next() : (a + 1) % 4 == 0 && d.prev() : (a + 1) % 6 == 1 ? d.next() : (a + 1) % 2 == 1 && d.prev()
                })
            })
        }), (a = e(".mkdf-prod-cats-holder.mkdf-parallax-items")).length && !mkdf.htmlEl.hasClass("touch") && (a.each(function() {
            var t = e(this),
                a = t.find(".mkdf-prod-cat"),
                d = t.attr("data-y-axis-translation");
            a.each(function() {
                var t = e(this),
                    a = (t.outerHeight(), t.find(".mkdf-prod-cat-inner")),
                    o = (a.height(), Math.floor(Math.random() * (d - d / 2 + 1) + d / 2)),
                    i = '{"y":' + o + ', "smoothness":20}';
                a.attr("data-parallax", i)
            })
        }), setTimeout(function() {
            ParallaxScroll.init()
        }, 100))
    })
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        e(document.body).on("blog_list_load_more_trigger", function() {
            o()
        })
    }

    function d() {
        o()
    }

    function o() {
        var t = e(".mkdf-blog-holder.mkdf-blog-masonry-gallery");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find("article"),
                d = t.find(".mkdf-blog-pagination-holder"),
                o = 0;
            a.each(function() {
                var t = e(this);
                setTimeout(function() {
                    t.appear(function() {
                        7 === ++o && (o = 0), setTimeout(function() {
                            t.addClass("mkdf-appeared")
                        }, 200 * o)
                    }, {
                        accX: 0,
                        accY: 0
                    })
                }, 150)
            }), d.appear(function() {
                d.addClass("mkdf-appeared")
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }
    mkdf.modules.blogMasonryGallery = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, e(document).ready(a), e(window).load(d)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        n()
    }

    function d() {
        i().init()
    }

    function o() {
        n()
    }
    mkdf.modules.portfolio = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, t.mkdfOnWindowResize = o, e(document).ready(a), e(window).load(d), e(window).resize(o);
    var i = function() {
        var t = e(".mkdf-follow-portfolio-info .mkdf-portfolio-single-holder .mkdf-ps-info-sticky-holder");
        if (t.length) var a = t.parent(),
            d = a.offset().top,
            o = a.height(),
            i = e(".mkdf-ps-image-holder").height(),
            n = e(".header-appear, .mkdf-fixed-wrapper"),
            s = n.length ? n.height() : 0,
            r = 30;
        return {
            init: function() {
                ! function() {
                    if (t.length && i >= o && mkdf.scroll >= d - s - mkdfGlobalVars.vars.mkdfAddForAdminBar - r) {
                        var e = mkdf.scroll - d + mkdfGlobalVars.vars.mkdfAddForAdminBar + s + r;
                        e + o > i && (e = i - o + r), t.stop().animate({
                            marginTop: e
                        })
                    }
                }(), e(window).scroll(function() {
                    t.length && i >= o && (mkdf.scroll > 0 && n.length && (s = n.height()), mkdf.scroll >= d - s - mkdfGlobalVars.vars.mkdfAddForAdminBar - r ? mkdf.scroll + s + mkdfGlobalVars.vars.mkdfAddForAdminBar + r + o < d + i ? (t.stop().animate({
                        marginTop: mkdf.scroll - d + mkdfGlobalVars.vars.mkdfAddForAdminBar + s + r
                    }), s = 0) : t.stop().animate({
                        marginTop: i - o
                    }) : t.stop().animate({
                        marginTop: 0
                    }))
                })
            }
        }
    };

    function n() {
        var t = e(".mkdf-portfolio-single-holder .mkdf-ps-masonry-images").children();
        if (t.length) {
            var a = t.find(".mkdf-ps-grid-sizer").width(),
                d = t.find('.mkdf-ps-image[class*="mkdf-masonry-size-"]').length > 0;
            t.waitForImages(function() {
                t.isotope({
                    layoutMode: "packery",
                    itemSelector: ".mkdf-ps-image",
                    percentPosition: !0,
                    packery: {
                        gutter: ".mkdf-ps-grid-gutter",
                        columnWidth: ".mkdf-ps-grid-sizer"
                    }
                }), mkdf.modules.common.setFixedImageProportionSize(t, t.find(".mkdf-ps-image"), a, d), t.isotope("layout").css("opacity", "1")
            })
        }
    }
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-accordion-holder");
        t.length && t.each(function() {
            var t = e(this);
            if (t.hasClass("mkdf-accordion") && t.accordion({
                    animate: "swing",
                    collapsible: !0,
                    active: 0,
                    icons: "",
                    heightStyle: "content"
                }), t.hasClass("mkdf-toggle")) {
                var a = e(this),
                    d = a.find(".mkdf-accordion-title"),
                    o = d.next();
                a.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), d.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), o.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), d.each(function() {
                    var t = e(this);
                    t.hover(function() {
                        t.toggleClass("ui-state-hover")
                    }), t.on("click", function() {
                        t.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), t.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                    })
                })
            }
        })
    }
    mkdf.modules.accordions = t, t.mkdfInitAccordions = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t, a, d = e(".mkdf-grow-in, .mkdf-fade-in-down, .mkdf-element-from-fade, .mkdf-element-from-left, .mkdf-element-from-right, .mkdf-element-from-top, .mkdf-element-from-bottom, .mkdf-flip-in, .mkdf-x-rotate, .mkdf-z-rotate, .mkdf-y-translate, .mkdf-fade-in, .mkdf-fade-in-left-x-rotate");
        d.length && d.each(function() {
            var d = e(this);
            d.appear(function() {
                if (t = d.data("animation"), a = parseInt(d.data("animation-delay")), void 0 !== t && "" !== t) {
                    var e = t + "-on";
                    setTimeout(function() {
                        d.addClass(e)
                    }, a)
                }
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }
    mkdf.modules.animationHolder = t, t.mkdfInitAnimationHolder = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d().init()
    }
    mkdf.modules.button = t, t.mkdfButton = d, t.mkdfOnDocumentReady = a, e(document).ready(a);
    var d = function() {
        var t = e(".mkdf-btn");
        return {
            init: function() {
                t.length && t.each(function() {
                    ! function(e) {
                        if (void 0 !== e.data("hover-color")) {
                            var t = function(e) {
                                    e.data.button.css("color", e.data.color)
                                },
                                a = e.css("color"),
                                d = e.data("hover-color");
                            e.on("mouseenter", {
                                button: e,
                                color: d
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(e(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-bg-color")) {
                            var t = function(e) {
                                    e.data.button.css("background-color", e.data.color)
                                },
                                a = e.css("background-color"),
                                d = e.data("hover-bg-color");
                            e.on("mouseenter", {
                                button: e,
                                color: d
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(e(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-border-color")) {
                            var t = function(e) {
                                    e.data.button.css("border-color", e.data.color)
                                },
                                a = e.css("borderTopColor"),
                                d = e.data("hover-border-color");
                            e.on("mouseenter", {
                                button: e,
                                color: d
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: a
                            }, t)
                        }
                    }(e(this))
                })
            }
        }
    }
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t, a, d, o, i, n, s, r, l, m, f, c = e(".mkdf-countdown"),
            u = (new Date).getMonth();
        c.length && c.each(function() {
            var c, h, k = e(this).attr("id"),
                p = e("#" + k);
            t = p.data("year"), a = p.data("month"), d = p.data("day"), o = p.data("hour"), i = p.data("minute"), n = p.data("timezone"), s = p.data("month-label"), r = p.data("day-label"), l = p.data("hour-label"), m = p.data("minute-label"), f = p.data("second-label"), c = p.data("digit-size"), h = p.data("label-size"), u != a && (a -= 1), p.countdown({
                until: new Date(t, a, d, o, i, 44),
                labels: ["", s, "", r, l, m, f],
                format: "ODHMS",
                timezone: n,
                padZeroes: !0,
                onTick: function() {
                    p.find(".countdown-amount").css({
                        "font-size": c + "px",
                        "line-height": c + "px"
                    }), p.find(".countdown-period").css({
                        "font-size": h + "px"
                    })
                }
            })
        })
    }
    mkdf.modules.countdown = t, t.mkdfInitCountdown = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-counter-holder");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-counter");
            t.appear(function() {
                if (t.css("opacity", "1"), a.hasClass("mkdf-zero-counter")) {
                    var e = parseFloat(a.text());
                    a.countTo({
                        from: 0,
                        to: e,
                        speed: 1500,
                        refreshInterval: 100
                    })
                } else a.absoluteCounter({
                    speed: 2e3,
                    fadeInDelay: 1e3
                })
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }
    mkdf.modules.counter = t, t.mkdfInitCounter = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        o()
    }

    function d() {
        i()
    }

    function o() {
        var t = e(".mkdf-custom-font-holder");
        t.length && t.each(function() {
            var t = e(this),
                a = "",
                d = "",
                o = "",
                i = "",
                n = "",
                s = "",
                r = "";
            void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (a = t.data("item-class")), void 0 !== t.data("font-size-1366") && !1 !== t.data("font-size-1366") && (d += "font-size: " + t.data("font-size-1366") + " !important;"), void 0 !== t.data("font-size-1024") && !1 !== t.data("font-size-1024") && (o += "font-size: " + t.data("font-size-1024") + " !important;"), void 0 !== t.data("font-size-768") && !1 !== t.data("font-size-768") && (i += "font-size: " + t.data("font-size-768") + " !important;"), void 0 !== t.data("font-size-680") && !1 !== t.data("font-size-680") && (n += "font-size: " + t.data("font-size-680") + " !important;"), void 0 !== t.data("line-height-1366") && !1 !== t.data("line-height-1366") && (d += "line-height: " + t.data("line-height-1366") + " !important;"), void 0 !== t.data("line-height-1024") && !1 !== t.data("line-height-1024") && (o += "line-height: " + t.data("line-height-1024") + " !important;"), void 0 !== t.data("line-height-768") && !1 !== t.data("line-height-768") && (i += "line-height: " + t.data("line-height-768") + " !important;"), void 0 !== t.data("line-height-680") && !1 !== t.data("line-height-680") && (n += "line-height: " + t.data("line-height-680") + " !important;"), (d.length || o.length || i.length || n.length) && (d.length && (r += "@media only screen and (max-width: 1280px) {.mkdf-custom-font-holder." + a + " { " + d + " } }"), o.length && (r += "@media only screen and (max-width: 1024px) {.mkdf-custom-font-holder." + a + " { " + o + " } }"), i.length && (r += "@media only screen and (max-width: 768px) {.mkdf-custom-font-holder." + a + " { " + i + " } }"), n.length && (r += "@media only screen and (max-width: 680px) {.mkdf-custom-font-holder." + a + " { " + n + " } }")), r.length && (s = '<style type="text/css">' + r + "</style>"), s.length && e("head").append(s)
        })
    }

    function i() {
        var t = e(".mkdf-cf-typed");
        t.length && t.each(function() {
            var t = e(this),
                a = t.parent(".mkdf-cf-typed-wrap").parent(".mkdf-custom-font-holder"),
                d = [],
                o = t.find(".mkdf-cf-typed-1").text(),
                i = t.find(".mkdf-cf-typed-2").text(),
                n = t.find(".mkdf-cf-typed-3").text(),
                s = t.find(".mkdf-cf-typed-4").text();
            o.length && d.push(o), i.length && d.push(i), n.length && d.push(n), s.length && d.push(s), a.appear(function() {
                t.typed({
                    strings: d,
                    typeSpeed: 90,
                    backDelay: 700,
                    loop: !0,
                    contentType: "text",
                    loopCount: !1,
                    cursorChar: "_"
                })
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }
    mkdf.modules.customFont = t, t.mkdfCustomFontResize = o, t.mkdfCustomFontTypeOut = i, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, e(document).ready(a), e(window).load(d)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-elements-holder");
        t.length && t.each(function() {
            var t = "",
                a = "";
            e(this).children(".mkdf-eh-item").each(function() {
                var t = e(this),
                    d = "",
                    o = "",
                    i = "",
                    n = "",
                    s = "",
                    r = "";
                void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (d = t.data("item-class")), void 0 !== t.data("1366-1600") && !1 !== t.data("1366-1600") && (o = t.data("1366-1600")), void 0 !== t.data("1024-1366") && !1 !== t.data("1024-1366") && (i = t.data("1024-1366")), void 0 !== t.data("768-1024") && !1 !== t.data("768-1024") && (n = t.data("768-1024")), void 0 !== t.data("680-768") && !1 !== t.data("680-768") && (s = t.data("680-768")), void 0 !== t.data("680") && !1 !== t.data("680") && (r = t.data("680")), (o.length || i.length || n.length || s.length || r.length || "".length) && (o.length && (a += "@media only screen and (min-width: 1367px) and (max-width: 1600px) {.mkdf-eh-item-content." + d + " { padding: " + o + " !important; } }"), i.length && (a += "@media only screen and (min-width: 1025px) and (max-width: 1366px) {.mkdf-eh-item-content." + d + " { padding: " + i + " !important; } }"), n.length && (a += "@media only screen and (min-width: 769px) and (max-width: 1024px) {.mkdf-eh-item-content." + d + " { padding: " + n + " !important; } }"), s.length && (a += "@media only screen and (min-width: 681px) and (max-width: 768px) {.mkdf-eh-item-content." + d + " { padding: " + s + " !important; } }"), r.length && (a += "@media only screen and (max-width: 680px) {.mkdf-eh-item-content." + d + " { padding: " + r + " !important; } }"))
            }), a.length && (t = '<style type="text/css">' + a + "</style>"), t.length && e("head").append(t), "function" == typeof mkdf.modules.common.mkdfOwlSlider && setTimeout(function() {
                mkdf.modules.common.mkdfOwlSlider()
            }, 200)
        })
    }
    mkdf.modules.elementsHolder = t, t.mkdfInitElementsHolderResponsiveStyle = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-full-screen-sections");
        t.length && t.each(function() {
            var t = e(this),
                a = t.children(".mkdf-fss-wrapper"),
                d = a.children(".mkdf-fss-item"),
                n = d.length,
                s = d.hasClass("mkdf-fss-item-has-style"),
                r = !1,
                l = "",
                m = "",
                f = "";
            mkdf.body.hasClass("mkdf-light-header") ? f = "light" : mkdf.body.hasClass("mkdf-dark-header") && (f = "dark"), void 0 !== t.data("enable-continuous-vertical") && !1 !== t.data("enable-continuous-vertical") && "yes" === t.data("enable-continuous-vertical") && (r = !0), void 0 !== t.data("enable-navigation") && !1 !== t.data("enable-navigation") && (l = t.data("enable-navigation")), void 0 !== t.data("enable-pagination") && !1 !== t.data("enable-pagination") && (m = t.data("enable-pagination"));
            var c = "no" !== l,
                u = "no" !== m;
            a.fullpage({
                    sectionSelector: ".mkdf-fss-item",
                    scrollingSpeed: 1200,
                    verticalCentered: !1,
                    continuousVertical: r,
                    navigation: u,
                    onLeave: function(a, r, l) {
                        s && o(e(d[r - 1]).data("header-style"), f), c && i(t, n, r)
                    },
                    afterRender: function() {
                        s && o(d.first().data("header-style"), f), c && (i(t, n, 1), t.children(".mkdf-fss-nav-holder").css("visibility", "visible")), a.css("visibility", "visible")
                    }
                }),
                function(t) {
                    var a = "",
                        d = "";
                    t.find(".mkdf-fss-item").each(function() {
                        var t = e(this),
                            d = "",
                            o = "",
                            i = "",
                            n = "",
                            s = "";
                        void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (d = t.data("item-class")), void 0 !== t.data("laptop-image") && !1 !== t.data("laptop-image") && (o = t.data("laptop-image")), void 0 !== t.data("tablet-image") && !1 !== t.data("tablet-image") && (i = t.data("tablet-image")), void 0 !== t.data("tablet-portrait-image") && !1 !== t.data("tablet-portrait-image") && (n = t.data("tablet-portrait-image")), void 0 !== t.data("mobile-image") && !1 !== t.data("mobile-image") && (s = t.data("mobile-image")), (o.length || i.length || n.length || s.length) && (o.length && (a += "@media only screen and (max-width: 1366px) {.mkdf-fss-item." + d + " { background-image: url(" + o + ") !important; } }"), i.length && (a += "@media only screen and (max-width: 1024px) {.mkdf-fss-item." + d + " { background-image: url( " + i + ") !important; } }"), n.length && (a += "@media only screen and (max-width: 800px) {.mkdf-fss-item." + d + " { background-image: url( " + n + ") !important; } }"), s.length && (a += "@media only screen and (max-width: 680px) {.mkdf-fss-item." + d + " { background-image: url( " + s + ") !important; } }"))
                    }), a.length && (d = '<style type="text/css">' + a + "</style>");
                    d.length && e("head").append(d)
                }(t), c && (t.find("#mkdf-fss-nav-up").on("click", function() {
                    return e.fn.fullpage.moveSectionUp(), !1
                }), t.find("#mkdf-fss-nav-down").on("click", function() {
                    return e.fn.fullpage.moveSectionDown(), !1
                }))
        })
    }

    function o(e, t) {
        void 0 !== e && "" !== e ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + e + "-header") : "" !== t ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + t + "-header") : mkdf.body.removeClass("mkdf-light-header mkdf-dark-header")
    }

    function i(e, t, a) {
        var d = e,
            o = d.find("#mkdf-fss-nav-up"),
            i = d.find("#mkdf-fss-nav-down"),
            n = !1;
        void 0 !== e.data("enable-continuous-vertical") && !1 !== e.data("enable-continuous-vertical") && "yes" === e.data("enable-continuous-vertical") && (n = !0), 1 !== a || n ? a !== t || n ? (o.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        }), i.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        })) : (i.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), 2 === t && o.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        })) : (o.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), i.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), a !== t && i.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        }))
    }
    mkdf.modules.fullScreenSections = t, t.mkdfInitFullScreenSections = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-google-map");
        t.length && t.each(function() {
            var t, a, d, i, n, s, r, l, m, f, c = e(this),
                u = !1,
                h = "";
            if (void 0 !== c.data("snazzy-map-style") && "yes" === c.data("snazzy-map-style")) {
                u = !0;
                var k = c.parent().find(".mkdf-snazzy-map"),
                    p = k.val();
                k.length && p.length && (h = JSON.parse(p.replace(/`{`/g, "[").replace(/`}`/g, "]").replace(/``/g, '"').replace(/`/g, "")))
            }
            void 0 !== c.data("custom-map-style") && (t = c.data("custom-map-style")), void 0 !== c.data("color-overlay") && !1 !== c.data("color-overlay") && (a = c.data("color-overlay")), void 0 !== c.data("saturation") && !1 !== c.data("saturation") && (d = c.data("saturation")), void 0 !== c.data("lightness") && !1 !== c.data("lightness") && (i = c.data("lightness")), void 0 !== c.data("zoom") && !1 !== c.data("zoom") && (n = c.data("zoom")), void 0 !== c.data("pin") && !1 !== c.data("pin") && (s = c.data("pin")), void 0 !== c.data("height") && !1 !== c.data("height") && (r = c.data("height")), void 0 !== c.data("unique-id") && !1 !== c.data("unique-id") && (l = c.data("unique-id")), void 0 !== c.data("scroll-wheel") && (m = c.data("scroll-wheel")), void 0 !== c.data("addresses") && !1 !== c.data("addresses") && (f = c.data("addresses")),
                function(e, t, a, d, i, n, s, r, l, m, f, c, u, h) {
                    if ("object" != typeof google) return;
                    var k, p = [];
                    p = e && t.length ? t : [{
                        stylers: [{
                            hue: d
                        }, {
                            saturation: i
                        }, {
                            lightness: n
                        }, {
                            gamma: 1
                        }]
                    }];
                    k = e || "yes" === a ? "mkdf-style" : google.maps.MapTypeId.ROADMAP;
                    s = "yes" === s;
                    var g = new google.maps.StyledMapType(p, {
                        name: "Mikado Google Map"
                    });
                    u = new google.maps.Geocoder;
                    var v = new google.maps.LatLng(-34.397, 150.644);
                    isNaN(m) || (m += "px");
                    var y, w = {
                        zoom: r,
                        scrollwheel: s,
                        center: v,
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL,
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        },
                        scaleControl: !1,
                        scaleControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        streetViewControl: !1,
                        streetViewControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        panControl: !1,
                        panControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeControl: !1,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkdf-style"],
                            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeId: k
                    };
                    for ((c = new google.maps.Map(document.getElementById(l), w)).mapTypes.set("mkdf-style", g), y = 0; y < h.length; ++y) o(h[y], f, c, u);
                    document.getElementById(l).style.height = m
                }(u, h, t, a, d, i, m, n, "mkdf-map-" + l, r, s, "map_" + l, "geocoder_" + l, f)
        })
    }

    function o(e, t, a, d) {
        if ("" !== e) {
            var o = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + e + "</p></div></div>",
                i = new google.maps.InfoWindow({
                    content: o
                });
            d.geocode({
                address: e
            }, function(d, o) {
                if (o === google.maps.GeocoderStatus.OK) {
                    a.setCenter(d[0].geometry.location);
                    var n = new google.maps.Marker({
                        map: a,
                        position: d[0].geometry.location,
                        icon: t,
                        title: e.store_title
                    });
                    google.maps.event.addListener(n, "click", function() {
                        i.open(a, n)
                    }), google.maps.event.addDomListener(window, "resize", function() {
                        a.setCenter(d[0].geometry.location)
                    })
                }
            })
        }
    }
    mkdf.modules.googleMap = t, t.mkdfShowGoogleMap = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d().init()
    }
    mkdf.modules.icon = t, t.mkdfIcon = d, t.mkdfOnDocumentReady = a, e(document).ready(a);
    var d = function() {
        var t = e(".mkdf-icon-shortcode");
        return {
            init: function() {
                t.length && t.each(function() {
                    var t;
                    (t = e(this)).hasClass("mkdf-icon-animation") && t.appear(function() {
                            t.parent(".mkdf-icon-animation-holder").addClass("mkdf-icon-animation-show")
                        }, {
                            accX: 0,
                            accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                        }),
                        function(e) {
                            if (void 0 !== e.data("hover-color")) {
                                var t = function(e) {
                                        e.data.icon.css("color", e.data.color)
                                    },
                                    a = e.find(".mkdf-icon-element"),
                                    d = e.data("hover-color"),
                                    o = a.css("color");
                                "" !== d && (e.on("mouseenter", {
                                    icon: a,
                                    color: d
                                }, t), e.on("mouseleave", {
                                    icon: a,
                                    color: o
                                }, t))
                            }
                        }(e(this)),
                        function(e) {
                            if (void 0 !== e.data("hover-background-color")) {
                                var t = function(e) {
                                        e.data.icon.css("background-color", e.data.color)
                                    },
                                    a = e.find(".mkdf-icon-bckg-holder"),
                                    d = e.data("hover-background-color"),
                                    o = a.css("background-color");
                                "" !== d && (e.on("mouseenter", {
                                    icon: a,
                                    color: d
                                }, t), e.on("mouseleave", {
                                    icon: a,
                                    color: o
                                }, t))
                            }
                        }(e(this)),
                        function(e) {
                            if (void 0 !== e.data("hover-border-color")) {
                                var t = function(e) {
                                        e.data.icon.css("border-color", e.data.color)
                                    },
                                    a = e.find(".mkdf-icon-bckg-holder"),
                                    d = e.data("hover-border-color"),
                                    o = a.css("borderTopColor");
                                "" !== d && (e.on("mouseenter", {
                                    icon: a,
                                    color: d
                                }, t), e.on("mouseleave", {
                                    icon: a,
                                    color: o
                                }, t))
                            }
                        }(e(this))
                })
            }
        }
    }
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d().init()
    }
    mkdf.modules.iconListItem = t, t.mkdfInitIconList = d, t.mkdfOnDocumentReady = a, e(document).ready(a);
    var d = function() {
        var t = e(".mkdf-animate-list");
        return {
            init: function() {
                t.length && t.each(function() {
                    var t;
                    t = e(this), setTimeout(function() {
                        t.appear(function() {
                            t.addClass("mkdf-appeared")
                        }, {
                            accX: 0,
                            accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                        })
                    }, 30)
                })
            }
        }
    }
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-image-gallery.mkdf-ig-masonry-type");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-ig-masonry"),
                d = a.find(".mkdf-ig-grid-sizer").width();
            a.waitForImages(function() {
                var e, o, i, n, s, r, l, m, f;
                a.isotope({
                    layoutMode: "packery",
                    itemSelector: ".mkdf-ig-image",
                    percentPosition: !0,
                    packery: {
                        gutter: ".mkdf-ig-grid-gutter",
                        columnWidth: ".mkdf-ig-grid-sizer"
                    }
                }), t.hasClass("mkdf-ig-masonry-fixed-type") && (e = d, o = a, i = parseInt(o.find(".mkdf-ig-image").css("paddingLeft")), n = void 0 !== i && "" !== i ? parseInt(i, 10) : 0, s = e - 2 * n, r = o.find(".mkdf-default-masonry-item"), l = o.find(".mkdf-large-width-masonry-item"), m = o.find(".mkdf-large-height-masonry-item"), f = o.find(".mkdf-large-width-height-masonry-item"), mkdf.windowWidth > 768 ? (r.css("height", s), m.css("height", Math.round(2 * (s + n))), f.css("height", Math.round(2 * (s + n))), l.css("height", s)) : (r.css("height", s), m.css("height", Math.round(2 * (s + n))), f.css("height", s), l.css("height", Math.round(s / 2)))), setTimeout(function() {
                    a.isotope("layout"), mkdf.modules.common.mkdfInitParallax()
                }, 800), a.css("opacity", "1")
            })
        })
    }
    mkdf.modules.imageGallery = t, t.mkdfInitImageGalleryMasonry = d, t.mkdfOnWindowLoad = a, e(window).load(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-item-showcase-holder");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-is-left"),
                d = t.find(".mkdf-is-right"),
                o = t.find(".mkdf-is-image");

            function i(a) {
                t.find(a).each(function(t) {
                    var a = e(this);
                    setTimeout(function() {
                        a.addClass("mkdf-appeared")
                    }, 150 * t)
                })
            }
            a.wrapAll("<div class='mkdf-is-item-holder mkdf-is-left-holder' />"), d.wrapAll("<div class='mkdf-is-item-holder mkdf-is-right-holder' />"), t.animate({
                opacity: 1
            }, 200), setTimeout(function() {
                t.appear(function() {
                    o.addClass("mkdf-appeared"), t.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                        mkdf.windowWidth > 1200 ? (i(".mkdf-is-left-holder .mkdf-is-item"), i(".mkdf-is-right-holder .mkdf-is-item")) : i(".mkdf-is-item")
                    })
                }, {
                    accX: 0,
                    accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                })
            }, 100)
        })
    }
    mkdf.modules.itemShowcase = t, t.mkdfInitItemShowcase = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-pie-chart-holder");
        t.length && t.each(function() {
            var t = e(this),
                a = t.children(".mkdf-pc-percentage"),
                d = "#f34f3f",
                o = "#f7f7f7",
                i = 176;
            void 0 !== a.data("size") && "" !== a.data("size") && (i = a.data("size")), void 0 !== a.data("bar-color") && "" !== a.data("bar-color") && (d = a.data("bar-color")), void 0 !== a.data("track-color") && "" !== a.data("track-color") && (o = a.data("track-color")), a.appear(function() {
                var e, n;
                e = a.find(".mkdf-pc-percent"), n = parseFloat(e.text()), e.countTo({
                    from: 0,
                    to: n,
                    speed: 1500,
                    refreshInterval: 50
                }), t.css("opacity", "1"), a.easyPieChart({
                    barColor: d,
                    trackColor: o,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: 3,
                    animate: 1500,
                    size: i
                })
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }
    mkdf.modules.pieChart = t, t.mkdfInitPieChart = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-process-holder");
        t.length && t.each(function() {
            var t = e(this);
            t.appear(function() {
                t.addClass("mkdf-process-appeared")
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }
    mkdf.modules.process = t, t.mkdfInitProcess = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-progress-bar");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-pb-content"),
                d = t.find(".mkdf-pb-percent"),
                o = a.data("percentage");
            t.appear(function() {
                var i, n;
                i = d, n = parseFloat(o), i.length && i.each(function() {
                    var t = e(this);
                    t.css("opacity", "1"), t.countTo({
                        from: 0,
                        to: n,
                        speed: 2e3,
                        refreshInterval: 50
                    })
                }), a.css("width", "0%").animate({
                    width: o + "%"
                }, 2e3), t.hasClass("mkdf-pb-percent-floating") && d.css("left", "0%").animate({
                    left: o + "%"
                }, 2e3)
            })
        })
    }
    mkdf.modules.progressBar = t, t.mkdfInitProgressBars = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-tabs");
        t.length && t.each(function() {
            var t = e(this);
            t.children(".mkdf-tab-container").each(function(t) {
                t += 1;
                var a = e(this),
                    d = a.attr("id"),
                    o = a.parent().find(".mkdf-tabs-nav li:nth-child(" + t + ") a"),
                    i = o.attr("href");
                (d = "#" + d).indexOf(i) > -1 && o.attr("href", d)
            }), t.tabs(), e(".mkdf-tabs a.mkdf-external-link").unbind("click")
        })
    }
    mkdf.modules.tabs = t, t.mkdfInitTabs = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        o(), d()
    }

    function d() {
        var t = e(".mkdf-text-marquee");
        t.length && t.each(function() {
            var t = e(this),
                a = t.find(".mkdf-marquee-element"),
                d = a.filter(".mkdf-original-text"),
                o = a.filter(".mkdf-aux-text"),
                i = function(e) {
                    return t.outerWidth() > e.outerWidth() ? t.outerWidth() : e.outerWidth()
                };
            ! function() {
                window.requestNextAnimationFrame = function() {
                    var e = void 0,
                        t = void 0,
                        a = navigator.userAgent,
                        d = 0,
                        o = this;
                    return window.webkitRequestAnimationFrame && (t = function(e) {
                        void 0 === e && (e = +new Date), o.callback(e)
                    }, e = window.webkitRequestAnimationFrame, window.webkitRequestAnimationFrame = function(a, d) {
                        o.callback = a, e(t, d)
                    }), window.mozRequestAnimationFrame && (d = a.indexOf("rv:"), -1 != a.indexOf("Gecko") && "2.0" === a.substr(d + 3, 3) && (window.mozRequestAnimationFrame = void 0)), window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                        var a, d;
                        window.setTimeout(function() {
                            a = +new Date, e(a), d = +new Date, o.timeout = 1e3 / 60 - (d - a)
                        }, o.timeout)
                    }
                }();
                var t = i(d);
                a.css({
                    width: t
                }), o.css("left", t), a.each(function(a) {
                    var n = e(this),
                        s = 0,
                        r = function() {
                            s -= 1, n.position().left <= -t && (n.css("left", parseInt(t - 1)), s = 0), n.css("transform", "translate3d(" + .8 * s + "px,0,0)"), requestNextAnimationFrame(r), e(window).resize(function() {
                                t = i(d), s = 0, d.css("left", 0), o.css("left", t)
                            })
                        };
                    r()
                })
            }()
        })
    }

    function o() {
        var t = e(".mkdf-text-marquee");
        t.length && t.each(function() {
            var t = e(this),
                a = "",
                d = "",
                o = "",
                i = "",
                n = "",
                s = "",
                r = "";
            void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (a = t.data("item-class")), void 0 !== t.data("font-size-1366") && !1 !== t.data("font-size-1366") && (d += "font-size: " + t.data("font-size-1366") + " !important;"), void 0 !== t.data("font-size-1024") && !1 !== t.data("font-size-1024") && (o += "font-size: " + t.data("font-size-1024") + " !important;"), void 0 !== t.data("font-size-768") && !1 !== t.data("font-size-768") && (i += "font-size: " + t.data("font-size-768") + " !important;"), void 0 !== t.data("font-size-680") && !1 !== t.data("font-size-680") && (n += "font-size: " + t.data("font-size-680") + " !important;"), void 0 !== t.data("line-height-1366") && !1 !== t.data("line-height-1366") && (d += "line-height: " + t.data("line-height-1366") + " !important;"), void 0 !== t.data("line-height-1024") && !1 !== t.data("line-height-1024") && (o += "line-height: " + t.data("line-height-1024") + " !important;"), void 0 !== t.data("line-height-768") && !1 !== t.data("line-height-768") && (i += "line-height: " + t.data("line-height-768") + " !important;"), void 0 !== t.data("line-height-680") && !1 !== t.data("line-height-680") && (n += "line-height: " + t.data("line-height-680") + " !important;"), (d.length || o.length || i.length || n.length) && (d.length && (r += "@media only screen and (max-width: 1366px) {.mkdf-text-marquee." + a + " { " + d + " } }"), o.length && (r += "@media only screen and (max-width: 1024px) {.mkdf-text-marquee." + a + " { " + o + " } }"), i.length && (r += "@media only screen and (max-width: 768px) {.mkdf-text-marquee." + a + " { " + i + " } }"), n.length && (r += "@media only screen and (max-width: 680px) {.mkdf-text-marquee." + a + " { " + n + " } }")), r.length && (s = '<style type="text/css">' + r + "</style>"), s.length && e("head").append(s)
        })
    }
    mkdf.modules.textMarquee = t, t.mkdfInitTextMarquee = d, t.mkdfTextMarqueeResize = o, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-uncovering-sections");
        t.length && t.each(function() {
            var a = e(this),
                d = t.find(".curtains"),
                i = d.find(".mkdf-uss-item"),
                n = t.find(".mkdf-fss-shadow"),
                s = mkdf.body,
                r = "";
            s.hasClass("mkdf-light-header") ? r = "light" : s.hasClass("mkdf-dark-header") && (r = "dark"), s.addClass("mkdf-uncovering-section-on-page"), mkdfPerPageVars.vars.mkdfHeaderVerticalWidth > 0 && mkdf.windowWidth > 1024 && (i.css({
                    left: mkdfPerPageVars.vars.mkdfHeaderVerticalWidth,
                    width: "calc(100% - " + mkdfPerPageVars.vars.mkdfHeaderVerticalWidth + "px)"
                }), n.css({
                    left: mkdfPerPageVars.vars.mkdfHeaderVerticalWidth,
                    width: "calc(100% - " + mkdfPerPageVars.vars.mkdfHeaderVerticalWidth + "px)"
                })), d.curtain({
                    scrollSpeed: 400,
                    nextSlide: function() {
                        o(d, r)
                    },
                    prevSlide: function() {
                        o(d, r)
                    }
                }), o(d, r),
                function(t) {
                    var a = "",
                        d = "";
                    t.find(".mkdf-uss-item").each(function() {
                        var t = e(this),
                            d = t.find(".mkdf-uss-image-holder"),
                            o = "",
                            i = "",
                            n = "",
                            s = "",
                            r = "";
                        void 0 !== t.data("item-class") && !1 !== t.data("item-class") && (o = t.data("item-class")), void 0 !== d.data("laptop-image") && !1 !== d.data("laptop-image") && (i = d.data("laptop-image")), void 0 !== d.data("tablet-image") && !1 !== d.data("tablet-image") && (n = d.data("tablet-image")), void 0 !== d.data("tablet-portrait-image") && !1 !== d.data("tablet-portrait-image") && (s = d.data("tablet-portrait-image")), void 0 !== d.data("mobile-image") && !1 !== d.data("mobile-image") && (r = d.data("mobile-image")), (i.length || n.length || s.length || r.length) && (i.length && (a += "@media only screen and (max-width: 1366px) {.mkdf-uss-item." + o + " .mkdf-uss-image-holder { background-image: url(" + i + ") !important; } }"), n.length && (a += "@media only screen and (max-width: 1024px) {.mkdf-uss-item." + o + " .mkdf-uss-image-holder { background-image: url( " + n + ") !important; } }"), s.length && (a += "@media only screen and (max-width: 800px) {.mkdf-uss-item." + o + " .mkdf-uss-image-holder { background-image: url( " + s + ") !important; } }"), r.length && (a += "@media only screen and (max-width: 680px) {.mkdf-uss-item." + o + " .mkdf-uss-image-holder { background-image: url( " + r + ") !important; } }"))
                    }), a.length && (d = '<style type="text/css">' + a + "</style>");
                    d.length && e("head").append(d)
                }(d), a.addClass("mkdf-loaded")
        })
    }

    function o(e, t) {
        var a = e.find(".current").data("header-style");
        void 0 !== a && "" !== a ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + a + "-header") : "" !== t ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + t + "-header") : mkdf.body.removeClass("mkdf-light-header mkdf-dark-header")
    }
    mkdf.modules.uncoveringSections = t, t.mkdfInitUncoveringSections = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d()
    }

    function d() {
        var t = e(".mkdf-vertical-split-slider");
        if (t.length) {
            mkdf.body.hasClass("mkdf-vss-initialized") && (mkdf.body.removeClass("mkdf-vss-initialized"), e.fn.multiscroll.destroy()), t.height(mkdf.windowHeight).animate({
                opacity: 1
            }, 300);
            var a = "";
            mkdf.body.hasClass("mkdf-light-header") ? a = "light" : mkdf.body.hasClass("mkdf-dark-header") && (a = "dark"), t.multiscroll({
                scrollingSpeed: 700,
                easing: "easeInOutQuart",
                navigation: !0,
                useAnchorsOnLoad: !1,
                sectionSelector: ".mkdf-vss-ms-section",
                leftSelector: ".mkdf-vss-ms-left",
                rightSelector: ".mkdf-vss-ms-right",
                afterRender: function() {
                    o(e(".mkdf-vss-ms-left .mkdf-vss-ms-section:first-child").data("header-style"), a), mkdf.body.addClass("mkdf-vss-initialized");
                    var d = e("div.wpcf7 > form");
                    d.length && d.each(function() {
                        var t = e(this);
                        t.find(".wpcf7-submit").off().on("click", function(e) {
                            e.preventDefault(), wpcf7.submit(t)
                        })
                    });
                    var i = e('<div class="mkdf-vss-responsive"></div>'),
                        n = t.find(".mkdf-vss-ms-left > div"),
                        s = t.find(".mkdf-vss-ms-right > div");
                    t.after(i);
                    for (var r = 0; r < n.length; r++) i.append(e(n[r]).clone(!0)), i.append(e(s[n.length - 1 - r]).clone(!0));
                    var l = e(".mkdf-vss-responsive .mkdf-google-map");
                    l.length && l.each(function() {
                        var t = e(this);
                        t.empty();
                        var a = Math.floor(1e5 * Math.random() + 1);
                        t.attr("id", "mkdf-map-" + a), t.data("unique-id", a)
                    }), "function" == typeof mkdf.modules.animationHolder.mkdfInitAnimationHolder && mkdf.modules.animationHolder.mkdfInitAnimationHolder(), "function" == typeof mkdf.modules.button.mkdfButton && mkdf.modules.button.mkdfButton().init(), "function" == typeof mkdf.modules.elementsHolder.mkdfInitElementsHolderResponsiveStyle && mkdf.modules.elementsHolder.mkdfInitElementsHolderResponsiveStyle(), "function" == typeof mkdf.modules.googleMap.mkdfShowGoogleMap && mkdf.modules.googleMap.mkdfShowGoogleMap(), "function" == typeof mkdf.modules.icon.mkdfIcon && mkdf.modules.icon.mkdfIcon().init(), "function" == typeof mkdf.modules.progressBar.mkdfInitProgressBars && mkdf.modules.progressBar.mkdfInitProgressBars()
                },
                onLeave: function(d, i) {
                    var n, s;
                    s = i, (n = t).hasClass("mkdf-vss-scrolling-animation") && (s > 1 && !n.hasClass("mkdf-vss-scrolled") ? n.addClass("mkdf-vss-scrolled") : 1 === s && n.hasClass("mkdf-vss-scrolled") && n.removeClass("mkdf-vss-scrolled")), o(e(e(".mkdf-vss-ms-left .mkdf-vss-ms-section")[i - 1]).data("header-style"), a)
                }
            }), mkdf.windowWidth <= 1024 ? e.fn.multiscroll.destroy() : e.fn.multiscroll.build(), e(window).resize(function() {
                mkdf.windowWidth <= 1024 ? e.fn.multiscroll.destroy() : e.fn.multiscroll.build()
            })
        }
    }

    function o(e, t) {
        void 0 !== e && "" !== e ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + e + "-header") : "" !== t ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + t + "-header") : mkdf.body.removeClass("mkdf-light-header mkdf-dark-header")
    }
    mkdf.modules.verticalSplitSlider = t, t.mkdfInitVerticalSplitSlider = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        d().init()
    }

    function d() {
        var t = e(".mkdf-masonry-gallery-holder");
        return {
            init: function() {
                t.length && t.each(function() {
                    var t, a, d = e(this),
                        o = d.find(".mkdf-mg-grid-sizer").outerWidth();
                    a = o, (t = d).waitForImages(function() {
                        var e = t.children();
                        e.isotope({
                            layoutMode: "packery",
                            itemSelector: ".mkdf-mg-item",
                            percentPosition: !0,
                            packery: {
                                gutter: ".mkdf-mg-grid-gutter",
                                columnWidth: ".mkdf-mg-grid-sizer"
                            }
                        }), mkdf.modules.common.setFixedImageProportionSize(t, t.find(".mkdf-mg-item"), a, !0), setTimeout(function() {
                            mkdf.modules.common.mkdfInitParallax()
                        }, 600), e.isotope("layout").css("opacity", "1")
                    }), e(window).resize(function() {
                        var e, t;
                        e = d, t = o, mkdf.modules.common.setFixedImageProportionSize(e, e.find(".mkdf-mg-item"), t, !0), e.children().isotope("reloadItems")
                    })
                })
            }
        }
    }
    mkdf.modules.masonryGalleryList = t, t.mkdfInitMasonryGallery = d, t.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {}

    function d() {
        var t;
        s(), (t = e(".mkdf-portfolio-list-holder .mkdf-pl-filter-holder")).length && t.each(function() {
            var t = e(this),
                a = t.closest(".mkdf-portfolio-list-holder"),
                d = a.find(".mkdf-pl-inner"),
                o = !!a.hasClass("mkdf-pl-pag-load-more");
            t.find(".mkdf-pl-filter:first").addClass("mkdf-pl-current"), a.hasClass("mkdf-pl-gallery") && d.isotope(), t.find(".mkdf-pl-filter").on("click", function() {
                var i = e(this),
                    s = i.attr("data-filter"),
                    r = s.length ? s.substring(1) : "",
                    l = !!d.children().hasClass(r),
                    m = 1,
                    f = 0;
                i.parent().children(".mkdf-pl-filter").removeClass("mkdf-pl-current"), i.addClass("mkdf-pl-current"), 0 !== s.length ? (m = d.children("." + r).length, f = i.attr("data-items-number")) : a.hasClass("mkdf-pl-all-loaded") && (m = f), o && !l && s.length ? (d.find(".mkdf-pl-load-more-holder").show(), function t(a, d, o) {
                    var i = a,
                        s = i.find(".mkdf-pl-inner"),
                        r = d,
                        l = o,
                        m = 0;
                    void 0 !== i.data("max-num-pages") && !1 !== i.data("max-num-pages") && (m = i.data("max-num-pages"));
                    var f = mkdf.modules.common.getLoadMoreData(i),
                        c = f.nextPage,
                        u = mkdf.modules.common.setLoadMoreAjaxData(f, "పెళ్లి పూల మాల_core_portfolio_ajax_load_more"),
                        h = i.find(".mkdf-pl-loading");
                    c <= m && (h.addClass("mkdf-showing mkdf-filter-trigger"), s.css("opacity", "0"), e.ajax({
                        type: "POST",
                        data: u,
                        url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                        success: function(a) {
                            c++, i.data("next-page", c);
                            var d = e.parseJSON(a),
                                o = d.html;
                            i.waitForImages(function() {
                                s.append(o).isotope("reloadItems").isotope({
                                    sortBy: "original-order"
                                });
                                var e = !!s.children().hasClass(l);
                                e ? setTimeout(function() {
                                    mkdf.modules.common.setFixedImageProportionSize(i, s.find("article"), s.find(".mkdf-pl-grid-sizer").width()), s.isotope("layout").isotope({
                                        filter: r
                                    }), h.removeClass("mkdf-showing mkdf-filter-trigger"), setTimeout(function() {
                                        s.css("opacity", "1"), n(), mkdf.modules.common.mkdfInitParallax()
                                    }, 150)
                                }, 400) : (h.removeClass("mkdf-showing mkdf-filter-trigger"), t(i, r, l))
                            })
                        }
                    }))
                }(a, s, r)) : (s = 0 === s.length ? "*" : s, t.parent().children(".mkdf-pl-inner").isotope({
                    filter: s
                }), mkdf.modules.common.mkdfInitParallax(), m == f ? a.find(".mkdf-pl-load-more-holder").hide() : a.find(".mkdf-pl-load-more-holder").show())
            })
        }), n(), r().init()
    }

    function o() {
        s()
    }

    function i() {
        r().scroll()
    }

    function n() {
        var t = e(".mkdf-portfolio-list-holder.mkdf-pl-has-animation");
        t.length && t.each(function() {
            e(this).children(".mkdf-pl-inner").children("article").each(function(t) {
                var a = e(this);
                a.appear(function() {
                    a.addClass("mkdf-item-show"), setTimeout(function() {
                        a.addClass("mkdf-item-shown")
                    }, 1e3)
                }, {
                    accX: 0,
                    accY: 0
                })
            })
        })
    }

    function s() {
        var t = e(".mkdf-portfolio-list-holder.mkdf-pl-masonry");
        t.length && t.each(function() {
            var t = e(this),
                a = t.children(".mkdf-pl-inner"),
                d = t.find(".mkdf-pl-grid-sizer").width();
            a.isotope({
                layoutMode: "packery",
                itemSelector: "article",
                percentPosition: !0,
                packery: {
                    gutter: ".mkdf-pl-grid-gutter",
                    columnWidth: ".mkdf-pl-grid-sizer"
                }
            }), mkdf.modules.common.setFixedImageProportionSize(t, t.find("article"), d), setTimeout(function() {
                mkdf.modules.common.mkdfInitParallax()
            }, 600), a.isotope("layout").css("opacity", "1")
        })
    }

    function r() {
        var t = e(".mkdf-portfolio-list-holder"),
            a = function(e) {
                var t = e.outerHeight() + e.offset().top - mkdfGlobalVars.vars.mkdfAddForAdminBar;
                !e.hasClass("mkdf-pl-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > t && d(e)
            },
            d = function(t, a) {
                var d, n, m = t.find(".mkdf-pl-inner");
                void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (n = t.data("max-num-pages")), t.hasClass("mkdf-pl-pag-standard") && t.data("next-page", a), t.hasClass("mkdf-pl-pag-infinite-scroll") && t.addClass("mkdf-pl-infinite-scroll-started");
                var f = mkdf.modules.common.getLoadMoreData(t),
                    c = t.find(".mkdf-pl-loading");
                if ((d = f.nextPage) <= n || 0 === n) {
                    t.hasClass("mkdf-pl-pag-standard") ? (c.addClass("mkdf-showing mkdf-standard-pag-trigger"), t.addClass("mkdf-pl-pag-standard-animate")) : c.addClass("mkdf-showing");
                    var u = mkdf.modules.common.setLoadMoreAjaxData(f, "పెళ్లి పూల మాల_core_portfolio_ajax_load_more");
                    e.ajax({
                        type: "POST",
                        data: u,
                        url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                        success: function(f) {
                            t.hasClass("mkdf-pl-pag-standard") || d++, t.data("next-page", d);
                            var u = e.parseJSON(f).html;
                            t.hasClass("mkdf-pl-pag-standard") ? (o(t, n, d), t.waitForImages(function() {
                                t.hasClass("mkdf-pl-masonry") ? i(t, m, c, u) : t.hasClass("mkdf-pl-gallery") && t.hasClass("mkdf-pl-has-filter") ? i(t, m, c, u) : s(t, m, c, u)
                            })) : t.waitForImages(function() {
                                t.hasClass("mkdf-pl-masonry") ? 1 == a ? i(t, m, c, u) : r(t, m, c, u) : t.hasClass("mkdf-pl-gallery") && t.hasClass("mkdf-pl-has-filter") && 1 != a ? r(t, m, c, u) : 1 == a ? s(t, m, c, u) : l(m, c, u)
                            }), t.hasClass("mkdf-pl-infinite-scroll-started") && t.removeClass("mkdf-pl-infinite-scroll-started")
                        }
                    })
                }
                d === n && (t.addClass("mkdf-pl-all-loaded"), t.find(".mkdf-pl-load-more-holder").hide())
            },
            o = function(e, t, a) {
                var d = e.find(".mkdf-pl-standard-pagination"),
                    o = d.find("li.mkdf-pl-pag-number"),
                    i = d.find("li.mkdf-pl-pag-prev a"),
                    n = d.find("li.mkdf-pl-pag-next a");
                o.removeClass("mkdf-pl-pag-active"), o.eq(a - 1).addClass("mkdf-pl-pag-active"), i.data("paged", a - 1), n.data("paged", a + 1), a > 1 ? i.css({
                    opacity: "1"
                }) : i.css({
                    opacity: "0"
                }), a === t ? n.css({
                    opacity: "0"
                }) : n.css({
                    opacity: "1"
                })
            },
            i = function(e, t, a, d) {
                t.find("article").remove(), t.append(d), mkdf.modules.common.setFixedImageProportionSize(e, t.find("article"), t.find(".mkdf-pl-grid-sizer").width()), t.isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-pl-pag-standard-animate"), setTimeout(function() {
                    t.isotope("layout"), n(), mkdf.modules.common.mkdfInitParallax(), mkdf.modules.common.mkdfPrettyPhoto()
                }, 600)
            },
            s = function(e, t, a, d) {
                a.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-pl-pag-standard-animate"), t.html(d), n(), mkdf.modules.common.mkdfInitParallax(), mkdf.modules.common.mkdfPrettyPhoto()
            },
            r = function(e, t, a, d) {
                var o = e.find(".mkdf-pl-filter.mkdf-pl-current");
                t.append(d), mkdf.modules.common.setFixedImageProportionSize(e, t.find("article"), t.find(".mkdf-pl-grid-sizer").width()), t.isotope("reloadItems").isotope({
                    sortBy: "original-order"
                }), a.removeClass("mkdf-showing"), t.children(o.attr("data-filter")).length == o.attr("data-items-number") && e.find(".mkdf-pl-load-more-holder").hide(), setTimeout(function() {
                    t.isotope("layout"), n(), mkdf.modules.common.mkdfInitParallax(), mkdf.modules.common.mkdfPrettyPhoto()
                }, 600)
            },
            l = function(e, t, a) {
                t.removeClass("mkdf-showing"), e.append(a), n(), mkdf.modules.common.mkdfInitParallax(), mkdf.modules.common.mkdfPrettyPhoto()
            };
        return {
            init: function() {
                t.length && t.each(function() {
                    var t, o, i, n = e(this);
                    n.hasClass("mkdf-pl-pag-standard") && (o = (t = n).find(".mkdf-pl-standard-pagination li")).length && o.each(function() {
                        var a = e(this).children("a"),
                            o = 1;
                        a.on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), void 0 !== a.data("paged") && !1 !== a.data("paged") && (o = a.data("paged")), d(t, o)
                        })
                    }), n.hasClass("mkdf-pl-pag-load-more") && (i = n).find(".mkdf-pl-load-more a").on("click", function(e) {
                        e.preventDefault(), e.stopPropagation(), d(i)
                    }), n.hasClass("mkdf-pl-pag-infinite-scroll") && a(n)
                })
            },
            scroll: function() {
                t.length && t.each(function() {
                    var t = e(this);
                    t.hasClass("mkdf-pl-pag-infinite-scroll") && a(t)
                })
            },
            getMainPagFunction: function(e, t) {
                d(e, t)
            }
        }
    }
    mkdf.modules.portfolioList = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, t.mkdfOnWindowResize = o, t.mkdfOnWindowScroll = i, e(document).ready(a), e(window).load(d), e(window).resize(o), e(window).scroll(i)
}(jQuery),
function(e) {
    "use strict";
    var t = {};

    function a() {
        var t;
        (t = e(".mkdf-portfolio-slider-holder.mkdf-ps-fullscreen")).length && t.each(function() {
            var t, a = e(this),
                d = !1;
            a.hasClass("mkdf-ps-scrollable") && (a.on("translate.owl.carousel", function() {
                d = !0
            }), a.on("translated.owl.carousel", function() {
                d = !1
            }), (t = a.find(".mkdf-owl-slider")).on("mousewheel", ".owl-stage", function(e) {
                d || (e.deltaY > 0 ? t.trigger("prev.owl") : t.trigger("next.owl"), e.preventDefault())
            }))
        })
    }

    function d() {
        var t;
        (t = e(".mkdf-portfolio-slider-holder.mkdf-ps-fullscreen")).length && t.each(function() {
            var t, a = e(this),
                d = 0,
                o = a.find(".owl-dots").outerHeight(!0),
                i = function() {
                    a.hasClass("mkdf-ps-minus-header") && (d = mkdf.windowWidth > 1024 ? e(".mkdf-page-header").outerHeight() : e(".mkdf-mobile-header").outerHeight()), mkdf.body.hasClass("admin-bar") && (d += e("#wpadminbar").outerHeight()), t = mkdf.windowHeight - d - o, a.find(".owl-item").each(function() {
                        var a = e(this);
                        a.css({
                            height: t
                        })
                    }), a.find(".owl-nav").css({
                        height: t
                    })
                };
            i(), e(window).on("resize", function() {
                i()
            })
        })
    }

    function o() {}

    function i() {}
    mkdf.modules.portfolioSlider = t, t.mkdfOnDocumentReady = a, t.mkdfOnWindowLoad = d, t.mkdfOnWindowResize = o, t.mkdfOnWindowScroll = i, e(document).ready(a), e(window).load(d), e(window).resize(o), e(window).scroll(i)
}(jQuery),
function(e) {
    "use strict";
    e(window).load(function() {
        t = e(".mkdf-instagram-carousel"), t.length && t.each(function() {
            var t = e(this),
                a = t.find(".owl-stage"),
                d = a.outerWidth() + 1;
            a.css("width", d)
        });
        var t
    })
}(jQuery);