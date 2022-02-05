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

    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {
        item.addEventListener('click', function () {
            document.body.style.overflow = "hidden";
            let dataValue = this.getAttribute("data-btn");
            let modal = document.querySelector('.' + dataValue)
            modal.style.display = 'flex';
        });
    });
    document.querySelectorAll('.modal').forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (e.target === this || e.target.classList.contains('close')) {
                document.body.style.overflow = "visible";
                this.style.display = "none";
            }
        });
    });
    $('.modal_btn').on('click', function(){
        $('.modal').css({'display': 'none'});
        $('body').css({'overflow' : 'visible'});
    });

});


   

