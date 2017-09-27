$(document).ready(function(){
   var lastScrollTop = 0;
   $(".jtron").scroll(function (event) {
        if(st>lastScrollTop){
            $('.jtron').animate({top:'-=10'},10);
        } else {
            $('.jtron').animate({top: '+=10'},10)
        }

        lastScrollTop = st;
   }); 
});