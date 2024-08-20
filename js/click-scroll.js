//jquey-click-scroll
//credito a syamsul'isul' Arifin

// var sectionArray = [1, 2, 3, 4, 5];

// $.each(sectionArray, function(index, value) {

//     $(document).scroll(function() {
//         var offsetSection = $('#' + 'section_' + value).offset().top - 75;
//         var docScroll = $(document).scrollTop();
//         var docScroll1 = docScroll + 1;

//         if(docScroll1 >= offsetSection) {
//             $('.navbar-nav .nav-item .nav-link').removeClass('active');
//             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
//             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
//             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
//         }
//     });

//     $('.click-scroll').eq(index).click(function(e){
//         var offsetClick = $('#' + 'section_' + value).offset().top - 75;
//         e.preventDefault();

//         $('html, body').animate({
//             'scrollTop':offsetClick
//         }, 300)
//     })
// });

// $(document).ready(function(){
//     $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
//     $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
//     $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
// });

/**
 * Cambiar la clase .header-scrolled a #header cuando se deslice la pagina
 */

(function() {
    "use strict";

    /**
     * Selector helper
     */
    const select = (element, all = false) => {
        element = element.trim();

        if (all) {
            return [...document.querySelectorAll(element)];
        } else {
            return document.querySelector(element);
        }
    }

    /**
     * Onscroll event listener
     */
    const onScroll = (element, listener) => {
        element.addEventListener('scroll', listener);
    }

    /**
     * Cambiar la clase .header-scrolled a #header cuando se deslice la pagina
     */
    let selectHeader = select('header');

    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled');
            } else [
                selectHeader.classList.remove('header-scrolled')
            ]
        }

        window.addEventListener('load', headerScrolled);
        onScroll(document, headerScrolled);
    }

    /**
     * Inicializar diapositivas con una diapositiva a la vez en vista de escritorio
     */
    new Swiper('.slides-1', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
})()