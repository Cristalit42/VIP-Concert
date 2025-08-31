$(function () {

  $('.header__nav-link--burger, .overlay__btn-x').on('click', function (e) {
    e.preventDefault()
    $('.overlay').toggleClass('overlay--show')
  })

  $('.overlay__nav-link').on('click', function () {
    $('.overlay').toggleClass('overlay--show')
  })

  //CAROUSEL START
$('.advantages__carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  infinite: true,
  cssEase: 'linear',
  arrows: false,
  dots: false,
  pauseOnHover: false,
  swipe: false,
  variableWidth: true, // Отключаем variableWidth
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3, // Больше слайдов на мобильных устройствах
        speed: 5000 // Оптимизировать скорость
      }
    }
  ]
});

  //CAROUSEL END
  //SMOOTH SCROLL START

  $(".header__nav-create").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50
    $('body,html').animate({ scrollTop: top }, 800)
  });

  $(".header__nav-link, .footer__nav-link, .header__main-btn, .create__btn-box a, .advantages__btn-box a, .btn--black, .overlay__nav-link, #footer__btn").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50
    $('body,html').animate({ scrollTop: top }, 1500)
  });


  //SMOOTH SCROLL END
  //MENU START

  //MENU END

  $(document).ready(function() {
    $('.gallery__content-link').on('click', function(event) {
        event.preventDefault();

        var fancyboxGroup = $(this).data('fancybox');
        var modalImages = $('.gallery__modal a[data-fancybox="' + fancyboxGroup + '"]').map(function() {
            return {
                src: $(this).attr('href'),
                type: 'image'
            };
        }).get();

        // Открываем галерею только с изображениями из модального окна
        Fancybox.show(modalImages, {
            loop: false,
            // Другие настройки Fancybox
        });
    });
});




});

