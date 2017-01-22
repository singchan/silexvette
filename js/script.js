
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

var canvas = document.createElement('canvas');
var w = canvas.width = 800,
    h = canvas.height = 600;
var c = canvas.getContext('2d');

var img = new Image();
img.src = '//oi41.tinypic.com/4i2aso.jpg';

var position = {x : w/2, y : h/2};

document.body.appendChild(canvas);

var particles = [];
var random = function(min, max){
  return Math.random()*(max-min)*min;
};

canvas.onmousemove = function(e){
  position.x = e.offsetX;
  position.y = e.offsetY;
};
function Particle(x, y){
  this.x = x;
  this.y = y;
  this.velY = -2;
  this.velX = (random(1, 10)-5)/10;
  this.size = random(3, 5)/10;
  this.alpha = 1;
  this.update = function(){
    this.y += this.velY;
    this.x += this.velX;
    this.velY *= 0.99;
    if(this.alpha < 0)
      this.alpha = 0;
    c.globalAlpha = this.alpha;
    c.save();
    c.translate(this.x, this.y);
    c.scale(this.size, this.size);
    c.drawImage(img, -img.width/2, -img.height/2);
    c.restore();
    this.alpha *= 0.96;
    this.size += 0.02;//
  };
}

var draw = function(){
  var p = new Particle(position.x, position.y);
  particles.push(p);
  
  while(particles.length > 500) particles.shift();
  
  c.globalAlpha = 1;
  c.fillStyle = '#000';
  c.fillRect(0,0,w,h);
  
  for(var i = 0; i < particles.length; i++)
  {
    particles[i].update();
  }
};

setInterval(draw, 1000/60);
    