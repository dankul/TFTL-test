import LazyLinePainter from './lazy-line-painter-1.9.6.min'

let el = document.querySelector('#vector')

let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#2828BD","strokeCap":"square"});

myAnimation.paint()