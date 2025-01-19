
function loadOldSnapsGallary() {

    var i=0;
    var cnt=0;
    var content = "";
    console.log(oldSnaps.length);
  
    shuffle(oldSnaps).forEach(function(oldsnap) {
      var path = "./images/blogger/" + oldsnap.filename;
      var tbPath = path.replaceAll("/blogger/", "/blogger/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
      if(i==0) {
        content += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-around m-1'>";
      }
      content += "<div id='cimg_" + oldsnap.id + "' class='col align-self-center text-center'>";
      content += "<div class='position-relative'>";
      content += "<a href='"+ path +"' data-fancybox=\"gallary\" data-caption='"+oldsnap.caption + " | " + oldsnap.location + " | " + oldsnap.year +"'>";
      content += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + oldsnap.caption + "'></a>";
      content += "</div>";
      content += "</div>";
      i++;
      cnt++;
      console.log(cnt);
      if(i == 4 || cnt == oldSnaps.length){
        content+="</div>"
        i=0;
        $("#img-container").append(content);
        content=""
      }
  
    });
  
    Fancybox.bind("[data-fancybox]", {});
  }
  
  
  function loadFilteredOldSnapsGallary(filterOldSnaps) {
  
    var i=0;
    var cnt=0;
    var content = "";
    
    filterOldSnaps.forEach(function(oldsnap) {
  
      var path = "./images/blogger/" + oldsnap.filename;
      var tbPath = path.replaceAll("/blogger/", "/blogger/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
      if(i==0) {
        content += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 justify-content-around m-1'>";
      }
      content += "<div id='cimg_" + oldsnap.id + "' class='col align-self-center text-center'>";
      content += "<div class='position-relative'>";
      content += "<a href='"+ path +"' data-fancybox=\"gallary\" data-caption='"+oldsnap.caption + " | " + oldsnap.location + " | " + oldsnap.year +"'>";
      content += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + oldsnap.caption + "'></a>";
      content += "</div>";
      content += "</div>";
      i++;
      cnt++;
      if(i == 5 || cnt == filterOldSnaps.length){
        content+="</div>"
        i=0;
        $("#img-container").append(content);
        content=""
      }
  
    });
  
    Fancybox.bind("[data-fancybox]", {});
  }
  