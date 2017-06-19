
// Parallax
$(document).ready(function(){
    $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });

});
document.createElement("article");
document.createElement("section");


// Mobile menu
/* Открытие меню */
var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({left: '0px'}, 200);
        $('.icon-menu').css({'display' : 'none!important'});
        $('body').animate({left: '100%'}, 200);
    });


    /* Закрытие меню */
    $('.icon-close,.top-slider-close, .services-close, .shop-close, .portfolio-close, .cooperation-close, .reviews-close, .contacts-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({left: '-100%'}, 200);
        $('body').animate({left: '0px'}, 200);
    });
};
$(document).ready(main);


//Якорь
$(document).ready(function(){
    $("#menu, #menu-bottom, #menuscroll, .toggleclass").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


//carouseller
$(function() {
    $('#third').carouseller({
        // scrollSpeed: 3000,
        // autoScrollDelay: 1600,
        easing: 'linear'
    });
});

$(function() {
    $('#third2').carouseller({
        // scrollSpeed: 3000,
        // autoScrollDelay: 1600,
        easing: 'linear'
    });
});

$(function() {
    $('#third3').carouseller({
        // scrollSpeed: 3000,
        // autoScrollDelay: 1600,
        easing: 'linear'
    });
});
$(function() {
    $('#third4').carouseller({
        // scrollSpeed: 3000,
        // autoScrollDelay: 1600,
        easing: 'linear'
    });
});

//carousel-works
$(function() {

    $( '#ri-grid' ).gridrotator( {
        rows : 3,
        columns : 4,
        w1024 : {
            rows : 3,
            columns : 4
        },
        w768 : {
            rows : 3,
            columns : 4
        },
        w480 : {
            rows : 3,
            columns : 4
        },
        w320 : {
            rows : 3,
            columns : 4
        },
        w240 : {
            rows : 3,
            columns : 4
        },
        
    } );

});

//Открыть галерею
$('body').flipLightBox()


//modal window
jQuery(function ($) {
    // Load dialog on page load
    //$('#basic-modal-content').modal();

    // Load dialog on click
    $('.basic').click(function (e) {
        $('#basic-modal-content').modal();

        return false;
    });
});


//Переключатель "Посмотреть все товары"
jQuery(function ($) {
    $( ".toggleclass" ).on( "click", function() {
        event.preventDefault();
        $(".order-products-block_all-products").fadeIn().css("display", "block");
        $(".order-products-block-carousel").fadeOut().css("display", "none");
    });
});
