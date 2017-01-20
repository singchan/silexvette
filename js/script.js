
        /*$(function() {
            // auto play all pages
            var idx = 0;
            var pages = $('.page-element');
            setInterval(function() {
                idx++;
                if(idx >= pages.length) idx = 0;
                var pageElement = pages.get(idx);
                window.location.hash= '#!' + pageElement.id;
            }, 5000);
        })*/
        
        $(function() {
            setTimeout(function() {
                $('body').addClass('loaded');
            }, 0);
        })
    
    document.write('<link href="css/animate.min.css" rel="stylesheet">');
    
    //////////////////////////////////////////
// silex reflection widget
document.write('<script type="text/javascript" src="reflection.js"></'+'script>');
$(function(){
    console.log('reflect');
    $(".reflect img").reflect().on('load', function(){
        // let the reflection apear
        $(".reflect div").width('100%').height('100%').css('overflow', 'visible');  
        // restore silex setting for the image element 
        $(this).width('100%').height('100%');  
    });
});
//////////////////////////////////////////
    ////////////////////////////////////
// hover.js
document.write('<link href="css/hover-min.css" rel="stylesheet">');
////////////////////////////////////
    document.write('<scr'+'ipt type="text/javascript" charset="utf-8" src="jquery.tubular.1.0.js"></scr'+'ipt>');
/*$(function(){
    // add the video on the body
    $('body').tubular({videoId: 'ab0TSkLe-E0', start: 3});  
    // keep the main container clickable
    $('.background').css('z-index', 10);
    // make the video take the full window
    $('body').css('padding', 0);
})*/
    