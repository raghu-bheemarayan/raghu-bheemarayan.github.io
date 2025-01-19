
function loadMammalByName() {

  var names = mammals.map(function(m) { return m.caption}).sort();
  var uniq = $.unique(names);
  console.log(uniq)
  var namcontent = "";
  uniq.forEach(function(currmammal) {
    var currWithoutSpace = currmammal.replace(/\s+/g, '').replace(/\'/g,'').replace(/\&/g,'');
    namcontent += "<div class='accordion-item'>";
    namcontent += "<h2 class='accordion-header'>"
    namcontent += "<button class='accordion-button bg-dark text-light' type='button' data-bs-parent='#mammal-accordion' data-bs-toggle='collapse' data-bs-target='#flush-collapse"+currWithoutSpace+"' aria-expanded='false' aria-controls='flush-collapse"+currWithoutSpace+"'>";
    namcontent += currmammal + "</button></h2>"
    namcontent += "<div id='flush-collapse"+currWithoutSpace+"' class='accordion-collapse show'>"
    namcontent += "<div class='accordion-body'>"
    namcontent += "<div class='container'><div class='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-around m-1'>"
  
    
    //get the mammal objects with the same name
    sel = $.grep(mammals, function(n, i) {
      return n.caption === currmammal;
    });   
    var mamcontent = "";
    //mamcontent += "<div class='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-around m-1'>";
  
    // add sel to container div
    sel.forEach(function(mammal) {
      var path = "./images/mammals/" + mammal.filename;
      var tbPath = path.replaceAll("/mammals/", "/mammals/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
   
      var location = (mammal.location) ? " | " + mammal.location : "";
      var year = (mammal.year) ? " | " + mammal.year : "";
      var caption = mammal.caption + location + year;
     
    
      mamcontent += "<div id='cimg_" + mammal.id + "' class='col align-self-center text-center'>";
      mamcontent += "<div class='position-relative'>";
      mamcontent += "<a href='"+ path +"' data-fancybox="+currWithoutSpace+"-\"gallary\" data-caption='"+ caption +"'>";
      mamcontent += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + mammal.caption + "'></a>";
      mamcontent += "</div></div>";


    });
    namcontent+=mamcontent
    namcontent += "</div></div>";
    namcontent += "</div>";
    namcontent += "</div>";
    namcontent += "</div>";
  });

  $("#mammal-accordion").append(namcontent);
  
  Fancybox.bind("[data-fancybox]", {});
}
