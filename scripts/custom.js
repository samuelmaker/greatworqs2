$(function () {
        
    // Popup
    $(".popup-trigger").on("click", function () {
        var formPopup = $(this).data("target");
        $(".site-popup").fadeOut();
        $(".fs-overlay").fadeIn();
        $(formPopup).fadeIn();

        popupCarousel();
        
    });
    $(".fs-overlay, .site-popup__close").on("click", function () {
        $(".fs-overlay").fadeOut();
        $(".site-popup").fadeOut();
    });


    // ScrollTo
    $("body").on("click", '.scrollTo', function () {
        var $target = $(this).data('target');
    
        if ($target == null || $target == undefined) {
            $target = 'html';
        }
        if($("body").hasClass('nav--active')) {
            $(".menu-trigger").trigger("click");
        }
    
        $('html,body').animate({
            scrollTop: $($target).offset().top
        }, 2000);
        return false;
    });


// Section Tabs
$('.section-tabs__item').on("mouseenter", function(){
    let $this, $parent;
    $this = $(this);
    $parent = $this.closest('.section-tabs');

    $parent.find('.section-tabs__item').removeClass('is--active');
    $this.addClass('is--active');

});
    
    
    // Mobile Navigation
    $('.menu-trigger').on('click', function(){
        var $this;
        $this = $(this);
        $this.toggleClass('active');
        $('body').toggleClass('nav--active');
        $('.fs-overlay').toggleClass('active');
    });
    
    
    // FS Overlay
    $('.fs-overlay').on('click', function(){
        $(this).removeClass('active');
        $('.menu-trigger').removeClass('active');
        $('body').removeClass('nav--active'); 
    });


    bodyScroll();

});


$(window).on("scroll", function () {
    bodyScroll();

});



function bodyScroll() {

    var scrollTop = $(window).scrollTop();


    if ($("#header").length) {

        if (scrollTop >= 20) {

            $("body").addClass("page-scrolling");

        } else {
            $("body").removeClass("page-scrolling");
        }
    }

}


function popupCarousel() {

   $('.site-popup__slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    items: 1,
    singleItem: true,
    navText: ["<img src='images/icons/angle-left.svg' />", "<img src='images/icons/angle-right.svg' />"],
 });

}