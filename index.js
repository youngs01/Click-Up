function dropDown() {
  productContent = document.getElementById("productContent");
  productContent.style.display = (productContent.style.display === "none" || productContent.style.display === "") ? "block" : "none";
}

var swiperNumber;
function SwiperInitializer() {

  if (window.innerWidth <= 576) {
    swiperNumber = 2.5;
  }

  else if (window.innerWidth <= 769) {
    swiperNumber = 3.4;
  }

  else if (window.innerWidth <= 990) {
    swiperNumber = 4.3;
  }
  else {
    swiperNumber = 8;
  }

  var swiper1 = new Swiper(".mySwiper1", {
    //loop: true,
    spaceBetween: 10,
    slidesPerView: swiperNumber,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    // loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper1,
    },
  });
}

// Initialize Swipers when the page loads
SwiperInitializer();

// Re-initialize Swipers when the window is resized
window.addEventListener('resize', function () {
  SwiperInitializer();
});



var swiper1 = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
});

var swiper2 = new Swiper(".mySwiper4", {
  spaceBetween: 100,
  allowTouchMove: false,  // Disable mouse/touch dragging

  thumbs: {
    swiper: swiper1,
  },
});

// Enable swiping on swiper2 only when clicking on a button
document.getElementById("swipeButton").addEventListener("click", function () {
  swiper2.allowTouchMove = true;
});

// Disable swiping on swiper2 when clicking elsewhere
document.addEventListener("click", function (event) {
  if (!event.target.closest(".mySwiper4") && event.target.id !== "swipeButton") {
    swiper2.allowTouchMove = false;
  }
});

var cardSliderView;

function cardSlider() {
  if (window.innerWidth <= 500) {
    cardSliderView = 1.1;
  }
  else if (window.innerWidth <= 800) {
    cardSliderView = 1.7;
  }
  else if (window.innerWidth <= 990) {
    cardSliderView = 2.5;
  } else {
    cardSliderView = 3;
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: cardSliderView,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

cardSlider();

window.addEventListener('resize', function () {
  cardSlider();
});




