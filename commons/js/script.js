
// Parallax
$(document).ready(function(){
    // Кешируем объект окна
    $window = $(window);

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект

        $(window).scroll(function() {

            // Прокручиваем фон со скоростью var.
            // Значение yPos отрицательное, так как прокручивание осуществляется вверх!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Размещаем все вместе в конечной точке
            var coords = '50% '+ yPos + 'px';

            // Смещаем фон
            $bgobj.css({ backgroundPosition: coords });

        });

    });

});
/*
 * Создаем элементы HTML5 для IE
 */

document.createElement("article");
document.createElement("section");


// Mobile menu
/* Открытие меню */
var main = function() { //главная функция
    $('.icon-menu').click(function() { //выбираем класс icon-menu и добавляем метод click с функцией, вызываемой при клике
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '0px' //теперь при клике по иконке, меню, скрытое за левой границей на 285px, изменит свое положение на 0px и станет видимым
        }, 200); //скорость движения меню в мс
        $('.icon-menu').css({'display' : 'none!important'});
        $('body').animate({ //выбираем тег body и метод animate
            left: '100%' //чтобы всё содержимое также сдвигалось вправо при открытии меню, установим ему положение 285px
        }, 200); //скорость движения меню в мс
    });


    /* Закрытие меню */
    $('.icon-close,.top-slider-close, .services-close, .shop-close, .portfolio-close, .cooperation-close, .reviews-close, .contacts-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '-100%' //при клике на крестик меню вернется назад в свое положение и скроется
        }, 200); //скорость движения меню в мс

        $('body').animate({ //выбираем тег body и метод animate
            left: '0px' //а содержимое страницы снова вернется в положение 0px
        }, 200); //скорость движения меню в мс
    });
};

$(document).ready(main); //как только страница полностью загрузится, будет вызвана функция main, отвечающая за работу меню



//Якорь
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
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

// Carousel
$(function(){
    $('.crsl-items').carousel({
        visible: 3,
        itemMinWidth: 300,
        itemEqualHeight: 370,
        itemMargin: 9,
    });

    $("a[href=#]").on('click', function(e) {
        e.preventDefault();
    });
});
