$(document).ready(function () {
// Check browser support

$('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
    
	}); 
	
	    
    if (localStorage.getItem("fname")) {
      $('#fname').val(localStorage.getItem("fname"));
    }
    if (localStorage.getItem("email")) {
      $('#email').val(localStorage.getItem("email"));
    }
    if (localStorage.getItem("phone")) {
      $('#phone').val(localStorage.getItem("phone"));
    }
    if (localStorage.getItem("zip")) {
      $('#zip').val(localStorage.getItem("zip"));
    }
 
 $("#clear").click(function(){
 
   localStorage.removeItem("fname");
   localStorage.removeItem("email"); 
   localStorage.removeItem("phone");
   localStorage.removeItem("zip");
  
   location.reload();
 });
 
});