//= ../../../node_modules/slick-carousel/slick/slick.js

$(function () {
    $('#reviews').slick({
        arrows: false,
        dots: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    })
})

const reviews = $("#reviews");

$("#reviews__arrow--left").on("click", function (event) {
    reviews.slick("slickPrev");
})

$("#reviews__arrow--right").on("click", function (event) {
    reviews.slick("slickNext");
})