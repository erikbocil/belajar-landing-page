$(function () {
  $(window).resize(function () {
    if (window.innerWidth > 600) {
      $('#ul').toggleClass('active');
    }
  });
});

$('.hamburger').click(() => {
  $('#ul').toggleClass('active');
});
