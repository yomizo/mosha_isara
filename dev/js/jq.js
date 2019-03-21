// sidemenu sticky
$('.ui.sticky')
  .sticky({
    context: '#main'
  });

// contact btn toggle  
$('.toggle.button').click(function () {
  $(this).toggleClass('active');
});

// initial code
var top;
var portfolio;
var aboutme;
var price;
var contact;

$(window).on('load', function () {
  // h1 popup
  $('#top h1')
    .transition('fade up', '1.5s');
  
  // each position assign variables
  top = $('#top').offset().top;
  portfolio = $('#portfolio').offset().top;
  aboutme = $('#aboutme').offset().top;
  price = $('#price').offset().top;
  contact = $('#contact').offset().top;
  
});


// menu toggle active
$('.menu-item').click(function () {
  var id = $(this).attr('href');

  var position = $(id).offset().top;

  $('html, body').animate({
    'scrollTop': position
  }, 500)

  $('.menu-item, .active').removeClass('active');

  $(this).addClass('active');

})

// modal 
$('#mobilemenu').click(function () {
  $('.ui.basic.modal').modal('show');
})

// scroll 
var ticking = false;

function func() {
  if (!ticking) {
    requestAnimationFrame(function () {
      ticking = false;

      // process
      var position = $(this).scrollTop() + 100;
      $('#pixcel').text(position);

      $('.active').removeClass('active');

      if (position >= contact) {
        $('.contact').addClass('active');
      } else if (position >= price) {
        $('.price').addClass('active');
      } else if (position >= aboutme) {
        $('.aboutme').addClass('active');
      } else if (position >= portfolio) {
        $('.portfolio').addClass('active');
      } else if (position >= 0) {
        $('.welcome').addClass('active');
      };
    });
    ticking = true;
  }
}
document.addEventListener('scroll', func, { passive: true });




