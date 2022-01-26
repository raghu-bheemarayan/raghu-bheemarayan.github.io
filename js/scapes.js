const scapes = [
  { 'id': '4328', 'caption': 'Forest Road', 'filename': '4328_Wayanad.jpg' }, 
  { 'id': '15226', 'caption': 'Nightscape!', 'filename': '15226_NightscapeBluewings.jpg' }, 
  { 'id': '15847', 'caption': 'Forest', 'filename': '15847_Kabini.jpg' }
];

function loadScapesCarousel() {
  shuffle(scapes).forEach(function(scape) {
    var path = "./images/scapes/" + scape.filename;
    var content = "<div id='cimg_" + scape.id + "' class='carousel-item text-center bg-dark carouselRagItem'><img class='image-rag' src='" + path + "'>";
    var caption = "<div class='carousel-caption d-none d-md-block'><p>"+ scape.caption + "</p><!-- p>date | place</p --></div></div>";
    $(".carousel-inner").append(content + caption);
  });
  $(".carousel-item").first().addClass('active');
}
