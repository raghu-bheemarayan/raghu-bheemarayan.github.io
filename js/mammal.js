const mammals = [
    { 'id': '7598', 'caption': 'Sambar Deer', 'filename': '7598_SambarDeer.jpg', 'location': 'KGudi, Karnataka', 'desc': '' },
    { 'id': '7609', 'caption': 'Wild Boar', 'filename': '7609_WildBoar.jpg', 'location': 'KGudi, Karnataka', 'desc': '' },
    { 'id': '7714', 'caption': 'Indian Gaur', 'filename': '7714_IndianGaur.jpg', 'location': 'KGudi, Karnataka', 'desc': '' },
    { 'id': '13019', 'caption': 'Kabini Tiger', 'filename': '13019_Tiger.jpg', 'location': 'Nagarhole Tiger Reserve - Kabini, Karnataka', 'desc': '' },
    { 'id': '13019.1', 'caption': 'Kabini Tiger', 'filename': '13019_Tiger_1.jpg', 'location': 'Nagarhole Tiger Reserve - Kabini, Karnataka', 'desc': '' },
    { 'id': '3999', 'caption': 'Squirrel', 'filename': '3999_Squirrel.jpg', 'location': 'Bengaluru Karnataka', 'desc': '' },
    { 'id': '14065', 'caption': 'Bandipur Tiger', 'filename': '14065_Bandipur_Tiger.jpg', 'location': 'Bandipura Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '14065.1', 'caption': 'Bandipur Tiger', 'filename': '14065_Bandipur_Tiger_1.jpg', 'location': 'Bandipura Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '14393', 'caption': 'Spotted Deer', 'filename': '14383_Spotted_Deer.jpg', 'location': 'Bandipura Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '143903.1', 'caption': 'Spotted Deer', 'filename': '14393_Spotted_Deer.jpg', 'location': 'Bandipura Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '14065.2', 'caption': 'Bandipur Tiger', 'filename': '14065_Bandipur_Tiger_2.jpg', 'location': 'Bandipura Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '13020', 'caption': 'Kabini Tiger', 'filename': '13020_Kabini_Tiger.jpg', 'location': 'Nagarhole Tiger Reserve - Kabini, Karnataka', 'desc': '' },
    { 'id': '17315', 'caption': 'Dammanakatte Tiger', 'filename': '17315_Dommankatte_Tiger.jpg', 'location': 'Nagarhole Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '17333', 'caption': 'Dammanakatte Tiger', 'filename': '17333_Dommankatte_Tiger.jpg', 'location': 'Nagarhole Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '17381', 'caption': 'Dammanakatte Tiger', 'filename': '17381_Dommankatte_Tiger.jpg', 'location': 'Nagarhole Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '17363', 'caption': 'Dammanakatte Tiger', 'filename': '17363_Dommankatte_Tiger.jpg', 'location': 'Nagarhole Tiger Reserve, Karnataka', 'desc': '' },
    { 'id': '15741', 'caption': 'Spotted Deer', 'filename': '15741_ChintalDeer.jpg', 'location': 'Nagarhole Tiger Reserve - Kabini, Karnataka', 'desc': '' },
    { 'id': '15745', 'caption': 'Spotted Deer', 'filename': '15745_ChintalDeer.jpg', 'location': 'Nagarhole Tiger Reserve - Kabini, Karnataka', 'desc': '' },
    { 'id': '17719', 'caption': 'Blackbuck', 'filename': '17719_Blackbuck.jpg', 'location': 'Madhugiri, Karnataka', 'desc': '' },
    { 'id': '17722', 'caption': 'Blackbuck', 'filename': '17722_Blackbuck.jpg', 'location': 'Madhugiri, Karnataka', 'desc': '' },
    { 'id': '17753', 'caption': 'Blackbuck', 'filename': '17753_Blackbuck_female.jpg', 'location': 'Madhugiri, Karnataka', 'desc': '' },
    { 'id': '17697', 'caption': 'Blackbuck', 'filename': '17697_Blackbuck.jpg', 'location': 'Madhugiri, Karnataka', 'desc': '' },
    { 'id': '17952', 'caption': 'Blackbuck', 'filename': '17952_Blackbuck.jpg', 'location': 'Madhugiri, Karnataka', 'desc': '' },
    { 'id': '17729', 'caption': 'Blackbuck & Goat', 'filename': '17729_Blackbuck_Goat.jpg', 'location': 'Madhugiri, Karnataka', 'desc': '' },
    { 'id': '17751', 'caption': 'Blackbuck', 'filename': '17751_Blackbuck_female.jpg', 'location': 'Madhugiri, Karnataka', 'desc': '' },
    { 'id': '19021', 'caption': 'Malabar Giant Squirrel', 'filename': '19021_MalabarGaintSquirrel.jpg', 'location': 'KGudi, Karnataka', 'desc': '' },
    { 'id': '18990', 'caption': 'Sloth Bear and cubs', 'filename': '18990_SlothBear_KGudi.jpg', 'location': 'KGudi, Karnataka', 'desc': '' },
    { 'id': '19030', 'caption': 'Malabar Giant Squirrel', 'filename': '19030_MalabarGaintSquirrel.jpg' , 'location': 'KGudi, Karnataka', 'desc': '' }
];

function loadMammalCarousel() {
  shuffle(mammals).forEach(function(mammal) {
    var path = "./images/mammals/" + mammal.filename;
    var content = "<div id='cimg_" + mammal.id + "' class='carousel-item text-center bg-dark carouselRagItem'><img class='image-rag' src='" + path + "' alt-text=' " + mammal.caption + "'>";
    var caption = "<div class='carousel-caption d-none d-md-block'><p>"+ mammal.caption + "</p><p>"+ mammal.location +"</p></div></div>";
    $(".carousel-inner").append(content + caption);
  });
  $(".carousel-item").first().addClass('active');
}
