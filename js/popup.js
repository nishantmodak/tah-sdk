$(document).ready(function(){

  $(".video").hover(function(){
    $(this).css('cursor', 'pointer');
    $(this).css('opacity', '0.5');
  }, function(){
    $(this).css('opacity', '1.0');
  })

  $('.video').magnificPopup({
  type: 'iframe',  
  iframe: {
    markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '<div class="mfp-title">Some caption</div>' +
            '</div>'
    },
  });
}); 
