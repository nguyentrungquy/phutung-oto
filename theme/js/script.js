
    $('.main-nav>ul>li>i').click(function(){
    $('.main-nav li>ul').toggleClass('active');
  });
  $('.menu-btn').click(function(){
    $('.main-nav').toggleClass('active');
    $('.menu-btn i').toggleClass('fa-times');
    $('.menu-btn i').toggleClass('fa-bars');
    $('.main-nav li>ul').removeClass('active');
    $('.main-nav li i').removeClass('fa-caret-up');
    $('.cate ul').removeClass('active');

  });
   $('.main-nav >ul>li>i').click(function(){
    $('.main-nav >ul>li>i').toggleClass('fa-caret-up');

  });
$(window).resize(function() {
  if($(window).width()<767){
    $('.cate>ul>li>a').click(function(e){
        
        // alert("sssssssss");

        $('.cate>ul>li>a i').toggleClass('fa-angle-down');
        $('.cate>ul>li>a i').toggleClass('fa-angle-right');
        $('.cate .menu').toggleClass('active');
        // $('.cate .menu').slideToggle(300);

    })
  }
});
$(window).ready(function() {
  if($(window).width()<767){
    $('.cate>ul>li>a').click(function(e){
        
        // alert("sssssssss");

        $('.cate>ul>li>a i').toggleClass('fa-angle-down');
        $('.cate>ul>li>a i').toggleClass('fa-angle-right');
        $('.cate .menu').toggleClass('active');
        // $('.cate .menu').slideToggle(300);

    })
  }
});

  //Lấy chiều cao của thah menu
  var $navHeight=$("header").height();
  //Sự kiến scroll chạy khi người dùng cuộn trang
  $(window).scroll(function () {
       //Lấy vị trí của thanh cuộn
       var top = $(window).scrollTop();
       //Kiêm tra nếu như kếu xuống quá menu
       if (top > $navHeight) {
           //Thêm class vào body
           $("header").addClass('fixed');
       } else {
           //Xóa class khỏi body
         $("header").removeClass('fixed');
       }
  });

$('.cate-title').click(function(){
    $('.cate ul').toggleClass('active');
    $('.main-nav').removeClass('active');
    $('.menu-btn i').removeClass('fa-times');
    $('.menu-btn i').addClass('fa-bars');
});

$('.slider1').slick({
    arrows: false,
    slidestoshow:1,
    dots: false,
    //   autoplay: true,
    // autoplaySpeed: 3000,
});
$('.slider-box').slick({
    arrows: true,
    slidestoshow:1,
    dots: false,
    prevArrow:'<a class="fa fa-angle-left prev" aria-hidden="true"></a>',
    nextArrow:'<a class="fa fa-angle-right next" aria-hidden="true"></a>',
    //   autoplay: true,
    // autoplaySpeed: 3000,
});

$('.slider-brand').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  dots:false,
  arrows:false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-pr').slick({
    arrows: true,
    slidestoshow:1,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    //   autoplay: true,
    // autoplaySpeed: 3000,
    prevArrow:'<a class="fa fa-angle-left prev" aria-hidden="true"></a>',
    nextArrow:'<a class="fa fa-angle-right next" aria-hidden="true"></a>',
    responsive: [
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
        }
    },

    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
    }
    ],
});


$('.slider-avatar').slick({
    slidestoshow:1,
    dots: true,
    //   autoplay: true,
    // autoplaySpeed: 3000,
    prevArrow:'<a class="fa fa-angle-left prev" aria-hidden="true"></a>',
    nextArrow:'<a class="fa fa-angle-right next" aria-hidden="true"></a>',
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
   arrows: false,
  // centerMode: true,
  focusOnSelect: true,
  vertical: true,
responsive: [
    {
        breakpoint: 991,
        settings: {
            vertical: false,
        }
    },
    ],
});




  $('.plus').click(function(){
      var parent = $(this).parent();
      var input = parent.find('.input-number');
      var val = parseInt(input.val());
      val +=1;
      input.val(val);
  })

  $('.minus').click(function(){
      var parent = $(this).parent();
      var input = parent.find('.input-number');
      var val = parseInt(input.val());
      if (val>1){
          val -=1;

      }
      else{

          val=1;
      }
      input.val(val);
  });
  
  
  $.fn.numberOnly =
  function()
  {
      return this.each(function()
      {
          $(this).keydown(function(e)
          {
              var key = e.charCode || e.keyCode || 0;
              return (
                  key == 8 || 
                  key == 9 ||
                  key == 13 ||
                  key == 46 ||
                  // key == 110 ||
                  // key == 190 ||
                  (key >= 35 && key <= 40) ||
                  (key >= 48 && key <= 57) ||
                  (key >= 96 && key <= 105));
          });
      });
  };
  $(".input-number").numberOnly();

const countdown = new Date("october 22, 2018 18:48:00");

function getRemainingTime(endtime) {
  const milliseconds = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (milliseconds/1000) % 60 );
  const minutes = Math.floor( (milliseconds/1000/60) % 60 );
  const hours = Math.floor( (milliseconds/(1000*60*60)) % 24 );
  const days = Math.floor( milliseconds/(1000*60*60*24) );

  return {
    'total': milliseconds,
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
    'days': days,
  };
}
  
function initClock(id, endtime) {
  const counter = document.getElementById(id);
  if(counter == null){
    return;
  }
  const daysItem = counter.querySelector('.js-countdown-days');
  const hoursItem = counter.querySelector('.js-countdown-hours');
  const minutesItem = counter.querySelector('.js-countdown-minutes');
  const secondsItem = counter.querySelector('.js-countdown-seconds');

  function updateClock() {
    const time = getRemainingTime(endtime);

    daysItem.innerHTML = time.days;
    hoursItem.innerHTML = ('0' + time.hours).slice(-2);
    minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
    secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

initClock('js-countdown', countdown);
initClock('js-countdown1', countdown);



$( function() {
  if(typeof $.fn.slider !="udefined"){
      if($( ".slider-range" ).length==0) return;
      var min = $( ".slider-range" ).data("min");
      var max = $( ".slider-range" ).data("max");
      var step = $( ".slider-range" ).data("step");
      $( ".slider-range" ).slider({
        range: true,
        min: min,
        max: max,
        step: step,
        values: [ min,max ],
        slide: function( event, ui ) {
          $( ".amount" ).val( formatNumber(ui.values[ 0 ]) );
          $( ".amount1" ).val(formatNumber( ui.values[ 1 ]) );
        }
      });
      $( ".amount" ).val($( ".slider-range" ).slider( "values", 0 ));
      $( ".amount1" ).val(  $( ".slider-range" ).slider( "values", 1 ) );
  }
function formatNumber(s) {
  s= s+"";
  var parts = s.split(/,/)
    , spaced = parts[0]
         .split('').reverse().join('') // Reverse the string.
         .match(/\d{1,3}/g).join(',') // Join groups of 3 digits with spaces.
         .split('').reverse().join(''); // Reverse it back.
  return spaced + (parts[1] ? ','+parts[1] : ''); // Add the fractional part.
}
} );
