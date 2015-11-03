jQuery(document).ready(function($) {

/* Menu */
  $('#nav-wrap').prepend('<div id="menu-icon"><h2 class="button">Menu</h2></div>');
  
  $("#menu-icon").on("click", function(){
      $("#nav-menu").slideToggle();
      $(this).toggleClass("active");
  });

/* Audio Player */
  var audio    = new Audio();
    playlist = $('#playlist1');
    player = $('#player1');

               playlist.on('click', 'li', function() {
                  playlist.find('.current').removeClass('current');
                  $(this).addClass('current');
                  audio.src = $(this).data('src');
                  audio.play();
               });
       
  audio.controls = true;
  player.append(audio);

  var audio2    = new Audio();
    playlist2 = $('#playlist2');
    player2 = $('#player2');

               playlist2.on('click', 'li', function() {
                  playlist2.find('.current').removeClass('current');
                  $(this).addClass('current');
                  audio2.src = $(this).data('src');
                  audio2.play();
               });
       
  audio2.controls = true;
  player2.append(audio2);



});