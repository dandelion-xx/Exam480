$(document).ready(function () {
// Check browser support

$('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
    
	}); 
	
	    
	//get localStorage for fname    
	    
  
    
    //get localStorage for email
    
  
    
     //get localStorage for phone
     
   
    
     //get localStorage for zip
  /*clear localStorage*/
 
 $("#clear").click(function(){
 
 	//remove fname from localStorage
 
  
   
   //remove email from localStorage
  
   
   //remove phone from localStorage
  
   
   //remove zip from localStorage
     
  	//less safe:
  	//localStorage.clear();
  	
   location.reload();
 });
 
});