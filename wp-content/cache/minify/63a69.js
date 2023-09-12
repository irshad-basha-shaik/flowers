jQuery(function(o) {
    o(".woocommerce-ordering").on("change", "select.orderby", function() {
        o(this).closest("form").submit()
    }), o("input.qty:not(.product-quantity input.qty)").each(function() {
        var e = parseFloat(o(this).attr("min"));
        e >= 0 && parseFloat(o(this).val()) < e && o(this).val(e)
    }), o(".woocommerce-store-notice__dismiss-link").click(function() {
        Cookies.set("store_notice", "hidden", {
            path: "/"
        }), o(".woocommerce-store-notice").hide()
    }), "hidden" === Cookies.get("store_notice") ? o(".woocommerce-store-notice").hide() : o(".woocommerce-store-notice").show(), o(document.body).on("click", function() {
        o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), o(".woocommerce-input-wrapper").on("click", function(o) {
        o.stopPropagation()
    }), o(".woocommerce-input-wrapper :input").on("keydown", function(e) {
        var t = o(this).parent().find("span.description");
        if (27 === e.which && t.length && t.is(":visible")) return t.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
    }).on("focus", function() {
        var e = o(this).parent(),
            t = e.find("span.description");
        e.addClass("currentTarget"), o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), t.length && t.is(":hidden") && t.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
    }), o.scroll_to_notices = function(e) {
        var t = "scrollBehavior" in document.documentElement.style;
        e.length && (t ? e[0].scrollIntoView({
            behavior: "smooth",
            block: "center"
        }) : o("html, body").animate({
            scrollTop: e.offset().top - 100
        }, 1e3))
    }
});