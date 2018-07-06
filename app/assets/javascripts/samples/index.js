$(document).ready(function() {
    $('.portfolio-slider').slick({
        infinite: true,
        accessibility: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        mobileFirst: true,
        appendArrows: $('.nav-wrapper'),
        prevArrow: '<button type="button" class="nav-arrow slick-prev">&#8678;</button>',
        nextArrow: '<button type="button" class="nav-arrow slick-next">&#8680;</button>',
    });
    $('.slick-next').addClass('pull-right');
});