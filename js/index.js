let open = document.getElementById('open');
let close = document.getElementById('close');
let shop = document.getElementById('shop');

open.onclick = function(){
  shop.style.display = 'block';
}

close.onclick = function(){
    shop.style.display = 'none';
}


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});