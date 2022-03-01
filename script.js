$(".row").addClass("active")
$(".row .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
   $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function() {
   $(".row .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);

$(document).ready(function(){
   $(window).scroll(function(){
     if(this.scrollY > 20){
       $(".navbar").addClass("sticky");
       $(".goTop").fadeIn();
     }
     else{
       $(".navbar").removeClass("sticky");
       $(".goTop").fadeOut();
     }
   });
 
   $(".goTop").click(function(){scroll(0,0)});
 
   $('.menu-toggler').click(function(){
     $(this).toggleClass("active");
     $(".navbar-menu").toggleClass("active");
     $(".goTop").toggleClass("active");
   });
 });
 