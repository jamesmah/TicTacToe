var tictactoe = ['T','I','C','T','A','C','T','O','E'];
for (var i = 0; i < tictactoe.length; i++) {
  $('.grid span:eq(' + i + ')').text(tictactoe[i]);
}

$('.message, .grid').fadeIn(1000);

var squareIdCount = 0;
setTimeout(function() {
  var interval = setInterval(function() {
    $('.grid span:eq(' + squareIdCount + ')').show();
    squareIdCount++;
    if (squareIdCount === 9){
      clearInterval(interval);
      $(".grid span:contains('T')").addClass("rotate-360");
      setTimeout(function() {
        initNumberHover();
      },2000);
    }
  }, 300);
});

$('.square, .ttt').click(function() {
  $('.square').unbind("click");
  var gridId = $('.square').index( $(event.target).closest( $('.square') ) ) + 1;
  if (gridId >= 1 && gridId <= 9) {
    $('.square').removeClass('square-hover');
    $('.grid').addClass('zoom-' + gridId).fadeOut(1000);
    $('.message').fadeOut(500);
    setTimeout(function() {
      $('.square, .message').css('color', 'transparent');
      $('.grid').removeClass('zoom-' + gridId );
    }, 1000);
    setTimeout(function() {
      window.location = "/" + gridId;
    }, 1000);
  }
});


function initNumberHover() {
  $( ".grid > div > div" ).mouseenter( function(){
    var index = $( ".grid > div > div" ).index($(event.target));
    $(event.target).text(index + 1);
  } )
  .mouseleave( function() {
    var index = $( ".grid > div > div" ).index($(event.target));
    $(event.target).text(tictactoe[index]);
  } );
}