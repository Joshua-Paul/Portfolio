
var slideIndex_1 = 1;
showSlides(slideIndex_1);

function plusSlides(n) {
  showSlides(slideIndex_1 += n);
}

function currentSlide(n) {
  showSlides_1(slideIndex_1 = n);
}

function showSlides(n) {
  var i;
  var slides_1 = document.getElementsByClassName("mySlides-1");

  if (n > slides_1.length) {
    slideIndex_1 = 1
  }
  if (n < 1) {
    slideIndex_1 = slides_1.length
  }
  for (i = 0; i < slides_1.length; i++) {
    slides_1[i].style.display = "none";
  }
  slides_1[slideIndex_1 - 1].style.display = "block";
}
