$(document).ready(function() {
//Begin Wrapper
$('div#product_images div#product_thumbs').delegate('a', 'click', function(ev) {
  ev.preventDefault();
    var link = this;
    $('div#product_thumbs a.active').removeClass('active');
    $(link).addClass('active');

    $('div#product_main_image img')
      .fadeTo(500, 0.01, function() {
        $(this).attr('src', link.href);
      })
      .bind('load', function() {
        $(this).fadeTo(500, 1);
    });
  });
//End Wrapper
});