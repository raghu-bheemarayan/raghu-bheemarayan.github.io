
function loadBirdCarousel() {


  var birdnames = birds.map(function(d) { return d.caption; }).sort();
  var uniqBirds= $.unique(birdnames);

  //get unique bird names
  uniqBirds.forEach(function(currbird, index){
    var currbirdWithoutSpace = currbird.replace(/\s+/g, '').replace(/\'/g,'').replace(/\&/g,'');
    
    var accItem = `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-parent="#bird-accordion" data-bs-toggle="collapse" data-bs-target="#flush-collapse`+currbirdWithoutSpace+`" aria-expanded="false" aria-controls="flush-collapse`+currbirdWithoutSpace+`">` 
          + (index+1) + '. ' + currbird +
        `</button>
        </h2>
        <div id="flush-collapse`+currbirdWithoutSpace+`" class="accordion-collapse collapse" data-bs-parent="#bird-accordion">
          <div class="accordion-body">
            <div id="carouselPhotos`+currbirdWithoutSpace+`" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" id="carousel-inner-`+currbirdWithoutSpace+`"></div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselPhotos`+currbirdWithoutSpace+`" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselPhotos`+currbirdWithoutSpace+`" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> 
          </div>
        </div>
      </div>`;
    $('#bird-accordion').append(accItem);


    //get the bird objects with this name
    selbirds = $.grep(birds, function(n, i) {
      return n.caption === currbird;
    });   

    //var currBirdCarouselInnerDiv = ""; //document.createElement("div");
    // add selbirds to carousel div
    selbirds.forEach(function(bird) {
      var path = "./images/birds/orig/" + bird.filename;
      var content = "<div id='cimg_" + bird.id + "' class='carousel-item text-center bg-dark carouselRagItem'><img class='figure-img rounded image-rag' src='" + path + "'>";
      var caption = "<div class='carousel-caption d-none d-md-block'><p>"+ bird.caption + "</p><!-- p>bird.date | bird.place</p --></div></div>";
      $('#carousel-inner-'+currbirdWithoutSpace).append(content + caption);
    });
    //$('#carousel-inner-'+currbirdWithoutSpace).append(currBirdCarouselInnerDiv);
    $('#carousel-inner-'+currbirdWithoutSpace).find(".carousel-item").first().addClass('active');
    
  });


  /*
  <div id="carouselPhotos" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner"></div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselPhotos" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselPhotos" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> 
  */

  /*shuffle(birds).forEach(function(bird) {
    var path = "./images/birds/orig/" + bird.filename;
    var content = "<div id='cimg_" + bird.id + "' class='carousel-item text-center bg-dark carouselRagItem'><img class='figure-img rounded image-rag' src='" + path + "'>";
    var caption = "<div class='carousel-caption d-none d-md-block'><p>"+ bird.caption + "</p><!-- p>bird.date | bird.place</p --></div></div>";
    $(".carousel-inner").append(content + caption);
  });
  $(".carousel-item").first().addClass('active');*/
}


