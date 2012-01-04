$('#main ul li a').click(function(){
  $("#main").addClass("effect");
});

$('article header nav a').click(function(){
  $("#main").removeClass("effect").removeAttr("class");
});