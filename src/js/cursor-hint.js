$(document).ready(function(){
  $("#slider").mousemove(
    
    function (pos) {
      $("#hint").show();
      $("#hint").css('left',(pos.pageX+18)+'px').css('top',(pos.pageY-12)+'px').css('display', 'block');
    }
  
  ).mouseleave(function() {
    $("#hint").hide();
  });
});