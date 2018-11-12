//------------------------------- logo ------------------------------------//

$(document).ready(function() {
  console.log($("#columnWrapper"));

  $.getJSON("logo.json").then(function(data) {
    getImages(data);
  });
});

function getImages(data) {
  $.each(data, function(index, value) {
    $("#columnWrapper").append(
      '<div class="column"><img class="imgLogo" src="' +
        value.url +
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
//------------------------------- logo ------------------------------------//
//------------------------------- illustrations ------------------------------------//
$(document).ready(function() {
  console.log($("#columnWrapper2"));

  $.getJSON("illu.json").then(function(data) {
    getImages2(data);
  });
});
function getImages2(data) {
  $.each(data, function(index, value) {
    $("#columnWrapper2").append(
      '<div class="column2"><img class="imgLogo2" src="' +
        value.url +
        '" onclick="openModal2();currentSlide2(' +
        (index + 1) +
        ')"></div>'
    );

    $(".largeImg2").append(
      '<div class="mySlides2"><div class="numbertext2">' +
        (index + 1) +
        " / " +
        data.length +
        '</div><img src="' +
        value.url +
        '" style="width:100%"></div>'
    );

    $(".columnSmall2").append(
      '<div class="columnS2"><img class="demo2 cursor2" src="' +
        value.url +
        '" style="width:100%" onclick="currentSlide2(' +
        (index + 1) +
        ')"alt="' +
        value.alt +
        '"></div>'
    );
  });
}
//------------------------------- illustrations ------------------------------------//

//------------------------------- logo ------------------------------------//
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
//------------------------------- logo ------------------------------------//
//------------------------------- illustration ------------------------------------//
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  var captionText2 = document.getElementById("caption2");
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
  captionText2.innerHTML = dots2[slideIndex2 - 1].alt;
}
//------------------------------- illustration ------------------------------------//

// Get the modal
var modalWeb = document.getElementById("modalWeb");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeWeb")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modalWeb.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalWeb.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWeb) {
    modalWeb.style.display = "none";
  }
};

// Get the modal
var modalWeb1 = document.getElementById("modalWeb1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closeWeb")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modalWeb1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modalWeb1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWeb1) {
    modalWeb1.style.display = "none";
  }
};
