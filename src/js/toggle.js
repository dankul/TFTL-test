const $header = $('.header');
const $toggle = $('.toggle');

$toggle.click(function() {
  $header.toggleClass('on-active');
})