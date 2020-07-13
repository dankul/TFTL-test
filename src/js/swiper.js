import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  speed: 1500,
  spaceBetween: 330,
  slidesPerView: 1,
  loop: true,
  normalizeSlideIndex: true,
  autoplay: {
    delay: 2500
  }
});

swiper.on('slideChange', function () {
  const imgContainer = document.getElementById('scene')
  
 if (imgContainer.classList.contains('one')) {
  imgContainer.classList.remove('one');
  imgContainer.classList.add('two');
 } else if (imgContainer.classList.contains('two')) {
  imgContainer.classList.remove('two');
  imgContainer.classList.add('three');
 } else {
  imgContainer.classList.remove('three');
  imgContainer.classList.add('one');
 }
});
