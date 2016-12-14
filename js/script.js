
        ////////////////////////////////////
        // animate.js
        document.write('<link href="css/animate.min.css" rel="stylesheet">');
        
        $(function() {
            setTimeout(function() {
                $('body').addClass('loaded');
            }, 0);
        });
        
        
    //////////////////////////////////// 
// Hover.js 
document.write ('<link href = "./css/hover-min.css"rel="stylesheet">');
////////////////////////////////////

$(document).ready(function(){
    $('.headline').hover(function(){
        $(this).addClass('animated bounce');
    });
});


function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}
    