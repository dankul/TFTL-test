import Parallax from 'parallax-js'

var scene = document.getElementById('scene');

var parallaxInstance = new Parallax (scene, {
  relativeInput: true,
  hoverOnly: true,
  frictionX: 0.1,
  frictionY: 0.1,
});
