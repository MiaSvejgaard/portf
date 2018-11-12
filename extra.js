$(document).ready(function() {
  console.log($("#columnWrapper"));

  $.getJSON("logo.json").then(function(data) {
    getImages(data);
  });
});

function getImages(data) {
  $.each(data, function(index, value) {
    $("#columnWrapper").append(
      '<div class="column' +
        (index + 1) +
        '" onclick="openModal();currentSlide(' +
        (index + 1) +
        ')"></div>'
    );

    $(".largeImg").append(
      '<div class="mySlides"><div class="numbertext">' +
        (index + 1) +
        " / " +
        data.length +
        '</div><img src="' +
        value.url +
        '" style="width:100%"></div>'
    );

    $(".columnSmall").append(
      '<div class="columnS"><img class="demo cursor" src="' +
        value.url +
        '" style="width:100%" onclick="currentSlide(' +
        (index + 1) +
        ')"alt="' +
        value.alt +
        '"></div>'
    );

    console.log(index + "|" + value);
    console.log(value);
  });
  console.log(data);
}

largeImg;
