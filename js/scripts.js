jQuery(document).ready(function($) {
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
});

jQuery(document).ready(function($) {
var audio    = new Audio();
    playlist = $('#playlist2');
    player = $('#player2');

               playlist.on('click', 'li', function() {
                  playlist.find('.current').removeClass('current');
                  $(this).addClass('current');
                  audio.src = $(this).data('src');
                  audio.play();
               });
       
audio.controls = true;
player.append(audio);
});