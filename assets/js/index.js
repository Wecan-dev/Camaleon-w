

const slider = $(".slider-banner");
slider
  .slick({
    dots: true,
    infinite: false,
  });

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
  } else {
 
     $(this).slick('slickNext');
  }
}));



const sliderPortafolio = $(".slider-portafolio");
sliderPortafolio
  .slick({
    arrows:false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:false,
    variableWidth:true,
    dots:true,
  });

sliderPortafolio.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
      
       $(this).slick('slickPrev');
  } else {
        $(this).slick('slickNext');
  }
}));
