
function loadMammalGallary() {

  var i=0;
  var cnt=0;
  var content = "";
  
  shuffle(mammals).forEach(function(mammal) {
    var path = "./images/mammals/" + mammal.filename;
    var tbPath = path.replaceAll("/mammals/", "/mammals/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
    if(i==0) {
      content += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-around m-1'>";
    }
    content += "<div id='cimg_" + mammal.id + "' class='col align-self-center text-center'>";
    content += "<div class='position-relative'>";
    content += "<a href='"+ path +"' data-fancybox=\"gallary\" data-caption='"+mammal.caption + " | " + mammal.location +"'>";
    content += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + mammal.caption + "'></a>";
    content += "</div>";
    content += "</div>";
    i++;
    cnt++;
    if(i == 4 || cnt == mammals.length){
      content+="</div>"
      i=0;
      $("#img-container").append(content);
      content=""
    }

  });

  Fancybox.bind("[data-fancybox]", {});
}
