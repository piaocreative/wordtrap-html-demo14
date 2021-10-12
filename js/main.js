$( document ).ready( function() {

  if ( $( '.logos' ).length ) {
    $( '.logos' ).slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
              breakpoint: 768,
              settings: {
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },

            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
} 

  if ( $( '.services' ).length ) {
    $('.services').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $(".service-prev").click(function(e) {
      e.preventDefault();
      $('.services').slick('slickPrev');
    })
    
    $(".service-next").click(function(e) {
      e.preventDefault();
      $('.services').slick('slickNext');
    })

    $(".services").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0);
      var span = $(".service-dots").children(".pagebar").children("span:eq("+i+")");
      $(".service-dots").children(".pagebar").children(".active").removeClass();
      span.addClass("active");

        $(".current").text("0"+(i+1));
        $(".total").html("0"+slick.slideCount)
    });

    $(".featured-service-prev").click(function(e) {
      e.preventDefault();
      $('.services').slick('slickPrev');
    })
    
    $(".featured-service-next").click(function(e) {
      e.preventDefault();
      $('.services').slick('slickNext');
    })

    $(".services").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0);
      var span = $(".featured").children(".pagebar").children("span:eq("+i+")");
      $(".featured").children(".pagebar").children(".active").removeClass();
      span.addClass("active");

        $(".current").text("0"+(i+1));
        $(".total").html("0"+slick.slideCount)
    });
  }

  if ( $( '.teams' ).length ) {
    $('.teams').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });   

    $(".teams").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0);
      var span = $(".teams-dots").children(".pagebar").children("span:eq("+i+")");
      $(".teams-dots").children(".pagebar").children(".active").removeClass();
      span.addClass("active");

      $(".teams-dots").children(".current").text("0"+(i+1));
      $(".teams-dots").children(".total").html("0"+slick.slideCount)
    });
  }

  if ( $( '.galleries' ).length ) {
    $('.galleries').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $(".galleries").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0);
      var span = $(".gallery-dots").children(".pagebar").children("span:eq("+i+")");
      $(".gallery-dots").children(".pagebar").children(".active").removeClass();
      span.addClass("active");

        $(".current").text("0"+(i+1));
        $(".total").html("0"+slick.slideCount)
    });
  }

  if ( $( '.testimonials' ).length ) {
    $('.testimonials').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });   
  }


  if ( $( '.posts' ).length ) {
    $('.posts').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });   

    $(".posts").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0);
      var span = $(".posts-dots").children(".pagebar").children("span:eq("+i+")");
      $(".posts-dots").children(".pagebar").children(".active").removeClass();
      span.addClass("active");

      $(".posts-dots").children(".current").text("0"+(i+1));
      $(".posts-dots").children(".total").html("0"+slick.slideCount)
    });
  }

});