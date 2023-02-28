/*jslint browser: true*/
/*global $, jQuery, alert*/

$(".burger-menu ").on("click",".bar",function(){
    $(".menu").slideToggle();
    $(".bar").toggleClass('change');
    $(".menu li").slideDown(); 
         
              });

   /*$("#form").validate({
        rules: {
        email: {
            required: true,
             email: true         
            },
            
        password: {
                required: true,
                 minlength:8  
                },
                messages : {
                    email: {
                    email: "The email should be in the format: abc@domain.tld"
                    
                        },
                        
                    }
            }
         
    });*/
    
    


