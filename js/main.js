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

  $(".header__nav-item a, .footer__nav-link, .btn, .btn--black, .overlay__nav-link").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50
    $('body,html').animate({ scrollTop: top }, 1500)
  });


  //SMOOTH SCROLL END
  //MENU START

  //MENU END
});