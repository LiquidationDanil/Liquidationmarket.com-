$(function () {
    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let auth = $('.auth');

    if ($(window).width() < 993) {

        mobile = true;
        $('header .menu').append(auth);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 993 && !mobile) {
            mobile = true;
            $('header .menu').append(auth);
        }

        if ($(window).width() >= 992 && mobile) {
            mobile = false;
            $('header .container').append(auth);
            $(this, 'header .menu').removeClass('active');
        }
    });

    // Аккордион меню

    $('.accordion_header').on('click', function () {
        let orderContent = $(this).closest('.accordion_item').find('.accordion_content');
        orderContent.slideToggle();
        $(this).toggleClass('active');
    });


});

