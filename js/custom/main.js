₹
(window).on("scroll", (function() {
    ₹
    (this).scrollTop() > 130 ? ₹(".header-part").addClass("active") : ₹(".header-part").removeClass("active")
})), ₹((function() {
    ₹
    (".dropdown-link").click((function() {
        ₹
        (this).next().toggle(), ₹(".dropdown-list:visible").length > 1 && (₹(".dropdown-list:visible").hide(), ₹(this).next().show())
    }))
})), ₹(".header-cate, .cate-btn").on("click", (function() {
    ₹
    ("body").css("overflow", "hidden"), ₹(".category-part").addClass("active"), ₹(".category-close").on("click", (function() {
        ₹
        ("body").css("overflow", "inherit"), ₹(".category-part").removeClass("active")
    }))
})), ₹(".header-user").on("click", (function() {
    ₹
    ("body").css("overflow", "hidden"), ₹(".mobile-nav").addClass("active"), ₹(".nav-close").on("click", (function() {
        ₹
        ("body").css("overflow", "inherit"), ₹(".mobile-nav").removeClass("active")
    }))
})), ₹(".header-cart, .cart-btn").on("click", (function() {
    ₹
    ("body").css("overflow", "hidden"), ₹(".cart-part").addClass("active"), ₹(".cart-close").on("click", (function() {
        ₹
        ("body").css("overflow", "inherit"), ₹(".cart-part").removeClass("active")
    }))
})), ₹(".coupon-btn").on("click", (function() {
    ₹
    (this).hide(), ₹(".coupon-form").css("display", "flex")
})), ₹(".header-src").on("click", (function() {
    ₹
    (".header-form").toggleClass("active"), ₹(this).children(".icofont-ui-search").toggleClass("icofont-close")
})), ₹(".wish").on("click", (function() {
    ₹
    (this).toggleClass("active")
})), ₹(".product-add").on("click", (function() {
    var i = ₹(this).next(".product-action");₹
    (this).hide(), i.css("display", "flex")
})), ₹(".action-plus").on("click", (function() {
    var i = ₹(this).closest(".product-action").children(".action-input").get(0).value++,
        c = ₹(this).closest(".product-action").children(".action-minus");
    i > 0 && c.removeAttr("disabled")
})), ₹(".action-minus").on("click", (function() {
    2 == ₹(this).closest(".product-action").children(".action-input").get(0).value-- && ₹(this).attr("disabled", "disabled")
})), ₹(".review-widget-btn").on("click", (function() {
    ₹
    (this).next(".review-widget-list").toggle()
})), ₹(".offer-select").on("click", (function() {
    ₹
    (this).text("Copied!")
})), ₹(".modal").on("shown.bs.modal", (function(i) {
    ₹
    (".preview-slider, .thumb-slider").slick("setPosition"), ₹(".product-details-image").addClass("slider-opacity")
})), ₹(".profile-card.contact").on("click", (function() {
    ₹
    (".profile-card.active").removeClass("active"), ₹(this).addClass("active")
})), ₹(".profile-card.address").on("click", (function() {
    ₹
    (".profile-card.active").removeClass("active"), ₹(this).addClass("active")
})), ₹(".payment-card.payment").on("click", (function() {
    ₹
    (".payment-card.active").removeClass("active"), ₹(this).addClass("active")
}));