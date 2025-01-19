
function loadScapesGallary() {

  var i=0;
  var cnt=0;
  var content = "";
  console.log(scapes.length);

  shuffle(scapes).forEach(function(scape) {
    var path = "./images/scapes/" + scape.filename;
    var tbPath = path.replaceAll("/scapes/", "/scapes/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
    if(i==0) {
      content += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-around m-1'>";
    }
    content += "<div id='cimg_" + scape.id + "' class='col align-self-center text-center'>";
    content += "<div class='position-relative'>";
    content += "<a href='"+ path +"' data-fancybox=\"gallary\" data-caption='"+ scape.caption + " | " + scape.location +"'>";
    content += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + scape.caption + "'></a>";
    content += "</div>";
    content += "</div>";
    i++;
    cnt++;
    console.log(cnt);
    if(i == 4 || cnt == scapes.length){
      content+="</div>"
      i=0;
      $("#img-container").append(content);
      content=""
    }

  });

  Fancybox.bind("[data-fancybox]", {});
}


function loadFilteredScapesGallary(filterScapes) {

  var i=0;
  var cnt=0;
  var content = "";
  
  filterScapes.forEach(function(scape) {

    var path = "./images/scapes/" + scape.filename;
    var tbPath = path.replaceAll("/scapes/", "/scapes/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
    if(i==0) {
      content += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 justify-content-around m-1'>";
    }
    content += "<div id='cimg_" + scape.id + "' class='col align-self-center text-center'>";
    content += "<div class='position-relative'>";
    content += "<a href='"+ path +"' data-fancybox=\"gallary\" data-caption='"+scape.caption + " | " + scape.location + " | " + scape.year +"'>";
    content += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + scape.caption + "'></a>";
    content += "</div>";
    content += "</div>";
    i++;
    cnt++;
    if(i == 5 || cnt == filterScapes.length){
      content+="</div>"
      i=0;
      $("#img-container").append(content);
      content=""
    }

  });

  Fancybox.bind("[data-fancybox]", {});
}
