// $('.carousel').carousel ({
//   interval: 2000
// })

function menuNav() {
    $('.menu-pc').toggleClass('menu-pc-hide');
}

$("#Snacks").click(function(){
  $('#Burgers a').removeClass('active-menu')
  $('#Burger').css({
    'display':'none'
  })
  $('#Beverages a').removeClass('active-menu')
  $('#Beverage').css({
    'display':'none'
  })
  $('#Snacks a').addClass('active-menu');
  $('#Snack').css({
    'display':'flex',
    // 'transition': 'all ease 0.5s'
  })
  
  event.preventDefault();
})

$("#Burgers").click(function(){
  $('#Snacks a').removeClass('active-menu')
  $('#Snack').css({
    'display':'none'
  })
  $('#Beverages a').removeClass('active-menu')
  $('#Beverage').css({
    'display':'none'
  })
  $('#Burgers a').addClass('active-menu');
  $('#Burger').css({
    'display':'flex',
  })
  event.preventDefault();
})

$("#Beverages").click(function(){
  $('#Snacks a').removeClass('active-menu')
  $('#Snack').css({
    'display':'none'
  })
  $('#Burgers a').removeClass('active-menu')
  $('#Burger').css({
    'display':'none'
  })
  $('#Beverages a').addClass('active-menu');
  $('#Beverage').css({
    'display':'flex',
  })
  event.preventDefault();
})

$('.back-top').click(function () {
  $('html').animate({scrollTop: 0},5000);
});
