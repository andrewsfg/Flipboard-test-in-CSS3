$('#main ul li a').click(function(){
  $("#main").addClass("effect");
});

$('.back').click(function(){
  $("#main").removeClass("effect").removeAttr("class");
});

if (document.body.ontouchstart === undefined){ // this is for all browsers
      $(document).click(function(event){
          var x= event.offsetX;
          if(!x){
            x= event.layerX ;
          }
          var y= event.offsetY;
          if(!y){
            y= event.layerY ;
          }
       //alert("x:"+x+"y:"+y);
      });
  }else {  // this is for all touch devices
      $(document).bind('touchstart',function(event){
          var orig = event.originalEvent;  
          var x = orig.changedTouches[0].pageX;  
          var y = orig.changedTouches[0].pageY;  
          //alert("x:"+x+"y:"+y);
      });
  }