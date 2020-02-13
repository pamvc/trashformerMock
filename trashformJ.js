$(function() {

    $(document).ready(function(){
    
        $("#firstImage").hover(function() {
            $("#firstImage p").toggle(1000);
        });

        $("#secondImage").hover(function() {
            $("#secondImage p").toggle(1000);
        });

        $("#thirdImage").hover(function() {
            $("#thirdImage p").toggle(1000);
        });

        
        
    });
});