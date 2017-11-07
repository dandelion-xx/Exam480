/*
 Custom jquery functions
*/


/*
This is a template of a function
jQuery(document).ready(function() {
	// do something here
});
*/

// Link Alert
$(document).ready(function() {
   //$("a").click(function() {
   $("#first").click(function() {
     alert("You clicked a link!");
   });
 });

// List Selector
$(document).ready(function() {
   $("#orderedlist").addClass("orange");
 });

$(document).ready(function() {
   $("#orderedlist > li").addClass("green");
 });


$(document).ready(function() {
   $("#orderedlist li:last").hover(function() {
     $(this).addClass("yellow");
   },function(){
     $(this).removeClass("yellow");
   });
 });

$(document).ready(function() {
   $("#orderedlist").find("li").each(function(i) {
     $(this).append( " [" + i +"]");
   });
 });


$(document).ready(function() {
   // use this to reset a single form
   $("#reset").click(function() {
     $("form")[0].reset();
   });
 });
 
$(document).ready(function() {
   // use this to reset several forms at once
   $("#resetAll").click(function() {
     $("form").each(function() {
       this.reset();
     });
   });
 });
 
$(document).ready(function() {
   // $("li").not(":has(ul)").css("border", "1px solid black"); 
   $("li").parent(":not(ul)").children("li").css("border", "1px solid red"); 
 });

$(document).ready(function() {
   $("a[name]").css("background", "red" );
 });
 
 
$(document).ready(function() {
   $("a[href*='/content/gallery']").click(function() {
	alert("redirecting hyperlink '/content/gallery'");

     // redirecting hyperlink '/content/gallery' to something else
	return false;
   });
 });
 
 
$(document).ready(function() {
   $('#faq').find('dd').hide().end().find('dt').click(function() {
     $(this).next().slideToggle();
   });
 });
 
 
$(document).ready(function(){
   $("a").hover(function(){
     $(this).parents("p").addClass("highlight");
   },function(){
     $(this).parents("p").removeClass("highlight");
   });
 });
 
$(document).ready(function(){
   $("a").toggle();
 });
 
 
$(document).ready(function(){
   $("a").toggle(function(){
     $(".stuff").animate({ height: 'hide', opacity: 'hide' }, 'slow');
   },function(){
     $(".stuff").animate({ height: 'show', opacity: 'show' }, 'slow');
   });
 });
 
 
 
 
 
$(document).ready(function(){	
	$(".accordion2 h3").eq(2).addClass("active");
	$(".accordion2 p").eq(2).show();

	$(".accordion2 h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});
});


$(document).ready(function(){

	$(".menu a").hover(function() {
		$(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
	}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-85"}, "fast");
	});


});

