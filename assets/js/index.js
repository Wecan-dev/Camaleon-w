

const slider = $(".slider-banner");
slider
  .slick({
    dots: true,
    infinite: false,
  });

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));