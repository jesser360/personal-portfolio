// sanity check
console.log("app.js linked.");

$(document).ready(function() {

$('.home-pic').mouseenter(function(){
  $('#msg').removeClass('hidden');
})
$('.home-pic').mouseleave(function(){
  $('#msg').addClass('hidden');
})

 // $('.yard-still').hover(function(){
 //   $('.yard-still').addClass('hidden')
 //   $('.yard-gif').removeClass('hidden')
 // })
 // $('.yard-still').mouseleave(function(){
 //   $('.yard-still').removeClass('hidden')
 //   $('.yard-gif').addClass('hidden')
 // })

 $(".yard-still").hover(function(){
      $("#yard-still").attr("src","http://i.imgur.com/B3mKgAh.gif");
    },
    function()
    {
        $("#yard-still").attr("src","http://i.imgur.com/ekydVZX.png");
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
});
