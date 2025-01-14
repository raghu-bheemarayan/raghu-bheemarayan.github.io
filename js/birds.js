
function loadBirdCarousel() {
  shuffle(birds).forEach(function(bird) {
    var path = "./images/birds/orig/" + bird.filename;
    var content = "<div id='cimg_" + bird.id + "' class='carousel-item text-center bg-dark carouselRagItem'><img class='image-rag' src='" + path + "' alt-text='" + bird.caption + "'>";
    var caption = "<div class='carousel-caption d-none d-md-block'><p>"+ bird.caption + "</p><!-- p>bird.date | bird.place</p --></div></div>";
    $(".carousel-inner").append(content + caption);
  });
  $(".carousel-item").first().addClass('active');
}


