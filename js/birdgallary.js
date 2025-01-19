
function loadBirdsGallary() {

  var i=0;
  var cnt=0;
  var content = "";
  
  shuffle(birds).forEach(function(bird) {
    var path = "./images/birds/orig/" + bird.filename;
    var tbPath = path.replaceAll("/birds/orig/", "/birds/orig/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
    if(i==0) {
      content += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-around m-1'>";
    }
    content += "<div id='cimg_" + bird.id + "' class='col align-self-center text-center'>";
    content += "<div class='position-relative'>";
    content += "<a href='"+ path +"' data-fancybox=\"gallary\" data-caption='"+ bird.caption + " | " + bird.location + " | " + bird.year +"'>";
    content += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + bird.caption + "'></a>";
    content += "</div>";
    content += "</div>";
    i++;
    cnt++;
    if(i == 4 || cnt == birds.length){
      content+="</div>"
      i=0;
      $("#img-container").append(content);
      content=""
    }

  });

  Fancybox.bind("[data-fancybox]", {});
}


function loadFilteredBirdsGallary(filterBirds) {

  var i=0;
  var cnt=0;
  var content = "";
  
  filterBirds.forEach(function(bird) {

    var path = "./images/birds/orig/" + bird.filename;
    var tbPath = path.replaceAll("/birds/orig/", "/birds/orig/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
    if(i==0) {
      content += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 justify-content-around m-1'>";
    }
    content += "<div id='cimg_" + bird.id + "' class='col align-self-center text-center'>";
    content += "<div class='position-relative'>";
    content += "<a href='"+ path +"' data-fancybox=\"gallary\" data-caption='"+bird.caption + " | " + bird.location + " | " + bird.year +"'>";
    content += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + bird.caption + "'></a>";
    content += "</div>";
    content += "</div>";
    i++;
    cnt++;
    if(i == 5 || cnt == filterBirds.length){
      content+="</div>"
      i=0;
      $("#img-container").append(content);
      content=""
    }

  });

  Fancybox.bind("[data-fancybox]", {});
}
