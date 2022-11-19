var multipleCardCarousel = document.querySelector(
    "#CAROCONTROLS"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#CAROCONTROLS .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#CAROCONTROLS .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          500
        );
      }
    });
    $("#CAROCONTROLS .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#CAROCONTROLS .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          500
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }