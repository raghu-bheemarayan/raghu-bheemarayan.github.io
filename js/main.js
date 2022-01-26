function shuffle(arr) {
    var m = arr.length, t, i;
    while(m) {
        i = Math.floor(Math.random() * m-- );
        t = arr[m];
        arr[m]=arr[i];
        arr[i]=t;
    }
    return arr;
}


/* not used */
function loadImageGrid() {
  shuffle(birds).forEach(function(bird) {
    var content = "<div class='col'><div id='img_"+ bird.id +"' class='image text-center' onclick='onImgClick(this)'><img src='./images/birds/tbs/" + bird.filename + "'>";
    var caption =  "<div class='card-body'><p class='card-text text-center fw-bolder'>" + bird.caption + "</p></div></div>";
    $(".imggrid").append(content + caption);
  });
}
function onImgClick(element) {
  $(".carousel-item").removeClass("active");
  console.log(element.id);
  $("#c"+element.id).addClass("active");
  
  $("#carousel-section").show();
}



