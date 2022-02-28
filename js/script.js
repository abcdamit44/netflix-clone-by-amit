$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        600: {
            items: 3,
            nav: false,
        },
        1000: {
            items: 5,
            nav: false,
        }
    }
});