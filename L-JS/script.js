<script>

     $(documnet).ready(function(){
     
     $('.fa-bars').click(function(){
     $(this).toggleClass('fa-times');
     $('.navbar').toggleClass('nav-toggle');    
     });
     
     $('.navbar').click(function(){
     $(this).removeClass('nav-toggle');
     $('.navbar').removeClass('fa-times');    
     });


     $('.dot1').click(function(){
        $('.V-1').css('display','block');
        $('.V-2').css('display','none');
        $('.V-3').css('display','none');
     });

     $('.dot2').click(function(){
        $('.V-1').css('display','none');
        $('.V-2').css('display','block');
        $('.V-3').css('display','none');
     });

     $('.dot3').click(function(){
        $('.V-1').css('display','none');
        $('.V-2').css('display','none');
        $('.V-3').css('display','block');
     });
     
     }); 
     
     
     
     </script>
     
     
    