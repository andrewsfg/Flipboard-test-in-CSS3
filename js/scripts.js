$('#main ul li a').click(function(){
  $("#main").addClass("effect");
});

$('.back').click(function(){
  $("#main").removeClass("effect").removeAttr("class");
});

//ipad and iphone fix
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $(".flip").click(function(){
        //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
        //strange
    });
}
