// sanity check
console.log("app.js linked.");

$(document).ready(function() {

$('.home-pic').mouseenter(function(){
  $('#msg').removeClass('hidden');
})
$('.home-pic').mouseleave(function(){
  $('#msg').addClass('hidden');
})

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

});
