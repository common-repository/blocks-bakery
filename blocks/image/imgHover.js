$(document).ready(function(){
  $("img#simpleimage").mouseover(function(animal){
  var opacity_hover = $(this).attr("data-hover-opacity");
  $("img#simpleimage").css("opacity",opacity_hover);
  
  var filter_hover = $(this).attr("data-hover-filter");
  $("img#simpleimage").css("filter",filter_hover);

  var transition = $(this).attr("data-hover-transition");
  $("img#simpleimage").css("transition",transition);

  
});
  $('img').mouseout(function(animal){
    var opacity_normal = $(this).attr("data-normal-opacity");
  $("img").css("opacity",opacity_normal);

    var normal_hover = $(this).attr("data-normal-filter");
  $("img").css("filter", normal_hover);
  });
});

