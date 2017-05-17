// sanity check
console.log("app.js linked.");

$(document).ready(function() {

$('.home-pic').mouseenter(function(){
  $('#msg').removeClass('hidden');
})
$('.home-pic').mouseleave(function(){
  $('#msg').addClass('hidden');
})


 $(".trade-still").hover(function(){
   $("#trade-still").attr("src","http://i.imgur.com/DiaXMOZ.gif");
   $("#tradeclick").removeClass('hidden')
 },
 function()
 {
   $("#trade-still").attr("src","http://i.imgur.com/9LCgIzz.png");
   $("#tradeclick").addClass('hidden')
 });

 $(".yard-still").hover(function(){
      $("#yard-still").attr("src","http://i.imgur.com/B3mKgAh.gif");
      $("#yardclick").removeClass('hidden')
    },
    function()
    {
        $("#yard-still").attr("src","http://i.imgur.com/ekydVZX.png");
        $("#yardclick").addClass('hidden')
    });


$('.item').click(function(){
$(this).siblings('.active').removeClass('active');
$(this).addClass('active');

if ($(this).hasClass("ruby")){
  $('#ruby-proj').removeClass('hidden');
  $('#free-proj').addClass("hidden");
  $('#games-proj').addClass("hidden");
  $('#react-proj').addClass("hidden");
} else if ($(this).hasClass("free")){
  $('#free-proj').removeClass('hidden');
  $('#ruby-proj').addClass("hidden");
  $('#games-proj').addClass("hidden");
  $('#react-proj').addClass("hidden");
} else if($(this).hasClass("games")){
  $('#games-proj').removeClass('hidden');
  $('#free-proj').addClass("hidden");
  $('#ruby-proj').addClass("hidden");
  $('#react-proj').addClass("hidden");
} else if ($(this).hasClass("react")) {
  $('#react-proj').removeClass('hidden');
  $('#free-proj').addClass("hidden");
  $('#ruby-proj').addClass("hidden");
  $('#games-proj').addClass("hidden");
}
});

var divs = $('div[id^="content-"]').hide(),
    i = 0;
(function cycle() {
    divs.eq(i).fadeIn(400)
              .delay(600)
              .fadeOut(400, cycle);
    i = ++i % divs.length;
})();

$("#port-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#port").offset().top
    }, 1500);
});
$("#about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});
$("#top-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 900);
});
$("#contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});

// Parallax
var words = $('.words');
var icons = $('.icons');
var scrollPos = window.pageYOffset;
var parallaxW = function() {
  for (var i = 0, len = words.length; i < len; i++) {
    var word = words[i];
    var ymovement = (scrollPos*.3) * .6;
    var xmovement = (scrollPos*.3) * .2;
    var translate3d = 'translate3d('+ymovement + 'px,' + xmovement + 'px,0)';
    word.style['-webkit-transform'] = translate3d;
    word.style.transform = translate3d;
  }
};
var parallaxI = function() {
  for (var i = 0, len = words.length; i < len; i++) {
    var icon = icons[i];
    var ymovement = (scrollPos*.3) *- .6;
    var xmovement = (scrollPos*.3) * .2;
    var translate3d = 'translate3d('+ymovement + 'px,' + xmovement + 'px,0)';
    icon.style['-webkit-transform'] = translate3d;
    icon.style.transform = translate3d;
  }
};
window.requestAnimationFrame(parallaxW);
window.addEventListener('scroll', function() {
  // Parallax layers
  scrollPos = window.pageYOffset;
  window.requestAnimationFrame(parallaxW);
  window.requestAnimationFrame(parallaxI);
});


});
