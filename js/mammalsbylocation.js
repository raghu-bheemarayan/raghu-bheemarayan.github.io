
function loadMammalByLocation() {

  var locations = mammals.map(function(m) { return m.location}).sort();
  var uniq = $.unique(locations);
  console.log(uniq)
  var outContent = "";
  uniq.forEach(function(item) {
    var currWithoutSpace = item.replace(/\s+/g, '').replace(/\'/g,'').replace(/\&/g,'').replace(/\,/g,'');
    outContent += "<div class='accordion-item focus-ring-decondary'>";
    outContent += "<h2 class='accordion-header'>"
    outContent += "<button class='accordion-button bg-dark text-light' type='button' data-bs-toggle='collapse' data-bs-target='#collapse-"+currWithoutSpace+"' aria-expanded='true' aria-controls='collapse-"+currWithoutSpace+"'>";
    outContent += item + "</button></h2>"
    outContent += "<div id='collapse-"+currWithoutSpace+"' class='accordion-collapse collapse' data-bs-parent='#mammal-accordion'>"
    outContent += "<div class=' accordion-body'>"
    outContent += "<div class='container'><div class='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-around m-1'>"
  
    
    //get the mammal objects with the same name
    sel = $.grep(mammals, function(n, i) {
      return n.location === item;
    });   
    var inContent = "";

    // add sel to container div
    sel.forEach(function(mammal) {
      console.log(mammal);
      var path = "./images/mammals/" + mammal.filename;
      var tbPath = path.replaceAll("/mammals/", "/mammals/tb/").replaceAll(".jpg", ".thumbnail.jpg").replaceAll(".png", ".thumbnail.png")
   
      var location = (mammal.location) ? " | " + mammal.location : "";
      var year = (mammal.year) ? " | " + mammal.year : "";
      var caption = mammal.caption + location + year;
     
      inContent += "<div id='cimg_" + mammal.id + "' class='col align-self-center text-center'>";
      inContent += "<div class='position-relative'>";
      inContent += "<a href='"+ path +"' data-fancybox="+currWithoutSpace+"-\"gallary\" data-caption='"+ caption +"'>";
      inContent += "<img class='img-fluid rounded' src='" + tbPath + "' alt-text=' " + mammal.caption + "'></a>";
      inContent += "</div></div>";

    });
    outContent+=inContent
    outContent += "</div></div>";
    outContent += "</div>";
    outContent += "</div>";
    outContent += "</div>";
  });
  
  $("#mammal-accordion").append(outContent);
  
  Fancybox.bind("[data-fancybox]", {});
}
