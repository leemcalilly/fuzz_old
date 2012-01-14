$(document).ready(function() {
  
  $('.dorado_thumb').click(function(e) {
    $('#dorado_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#dorado_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
  $('.wolf_thumb').click(function(e) {
    $('#wolf_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#wolf_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
  $('.colonel_thumb').click(function(e) {
    $('#colonel_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#colonel_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
 $('.dutchman_thumb').click(function(e) {
    $('#dutchman_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#dutchman_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
 $('.crippla_thumb').click(function(e) {
    $('#crippla_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#crippla_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
  $('.willow_thumb').click(function(e) {
    $('#willow_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#willow_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
  $('.suit_thumb').click(function(e) {
    $('#suit_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#suit_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
  $('.sandwich_thumb').click(function(e) {
    $('#sandwich_popup').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#sandwich_popup').find('input:first').focus()
            }
        });
    e.preventDefault();
  });
  
});
