$(document).ready(function() {
  $('.box').hide();
  $('.project').mouseover(function() {
    $(this).find('.box').fadeIn('fast');
  });
  $('.project').mouseleave(function() {
    $(this).find('.box').fadeOut('fast');
  });
});