function dropDown() {
  productContent = document.getElementById("productContent");
  productContent.style.display = (productContent.style.display === "none" || productContent.style.display === "") ? "block" : "none";
}

// var swiperNumber;


// function SwiperInitializer() {
//   if (window <= 990) {
//     swiperNumber = 5
//   }
//   else if (window <= 769) {
//     swiperNumber = 3;
//   }
//   else {
//     swiperNumber = 8;
//   }

//   var swiper = new Swiper(".mySwiper1", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: swiperNumber,
//   });
//   var swiper2 = new Swiper(".mySwiper2", {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//       swiper: swiper,
//     },
//   });
// }

// SwiperInitializer();

// window.addEventListener("resize", function () {
//   SwiperInitializer()
// })


var swiperNumber;

function SwiperInitializer() {
 if (window.innerWidth <= 769) {
    swiperNumber = 3.7;
  }
  else  if (window.innerWidth <= 990) {
    swiperNumber = 5.7;
  }  else {
    swiperNumber = 8;
  }

  var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: swiperNumber,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
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



