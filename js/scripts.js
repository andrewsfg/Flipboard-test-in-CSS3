$('#main ul li a').click(function(){
  $("#main").addClass("effect");
});

$('.back').click(function(){
  $("#main").removeClass("effect").removeAttr("class");
});