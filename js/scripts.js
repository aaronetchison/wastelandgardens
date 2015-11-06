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

/* jPlayer */
  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
    {
      title:"Cro Magnon Man",
      artist:"The Stark Palace",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
     },
      {
        title:"Your Face",
        artist:"The Stark Palace",
        mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
        oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
      },
      {
        title:"Hidden",
        artist:"Miaow",
        mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
        oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
      },
      {
        title:"Cyber Sonnet",
        artist:"The Stark Palace",
        mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
        oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
      },
      {
        title:"Tempered Song",
        artist:"Miaow",
        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
      },
      {
        title:"Lentement",
        artist:"Miaow",
        mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
        oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
      }
  ], {
    playlistOptions: {
      enableRemoveControls: false
    },
    swfPath: "../../dist/jplayer",
    supplied: "webmv, ogv, m4v, oga, mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: false
  });

  // The shuffle commands

  $("#playlist-shuffle").click(function() {
    myPlaylist.shuffle();
  });

  $("#playlist-shuffle-false").click(function() {
    myPlaylist.shuffle(false);
  });
  $("#playlist-shuffle-true").click(function() {
    myPlaylist.shuffle(true);
  });

  // The select commands

  $("#playlist-select--2").click(function() {
    myPlaylist.select(-2);
  });
  $("#playlist-select--1").click(function() {
    myPlaylist.select(-1);
  });
  $("#playlist-select-0").click(function() {
    myPlaylist.select(0);
  });
  $("#playlist-select-1").click(function() {
    myPlaylist.select(1);
  });
  $("#playlist-select-2").click(function() {
    myPlaylist.select(2);
  });

  // The next/previous commands

  $("#playlist-next").click(function() {
    myPlaylist.next();
  });
  $("#playlist-previous").click(function() {
    myPlaylist.previous();
  });

  // The play commands

  $("#playlist-play").click(function() {
    myPlaylist.play();
  });

  $("#playlist-play--2").click(function() {
    myPlaylist.play(-2);
  });
  $("#playlist-play--1").click(function() {
    myPlaylist.play(-1);
  });
  $("#playlist-play-0").click(function() {
    myPlaylist.play(0);
  });
  $("#playlist-play-1").click(function() {
    myPlaylist.play(1);
  });
  $("#playlist-play-2").click(function() {
    myPlaylist.play(2);
  });

  // The pause command

  $("#playlist-pause").click(function() {
    myPlaylist.pause();
  });

  // Changing the playlist options

  // Option: autoPlay

  $("#playlist-option-autoPlay-true").click(function() {
    myPlaylist.option("autoPlay", true);
  });
  $("#playlist-option-autoPlay-false").click(function() {
    myPlaylist.option("autoPlay", false);
  });

  // Option: displayTime

  $("#playlist-option-displayTime-0").click(function() {
    myPlaylist.option("displayTime", 0);
  });
  $("#playlist-option-displayTime-fast").click(function() {
    myPlaylist.option("displayTime", "fast");
  });
  $("#playlist-option-displayTime-slow").click(function() {
    myPlaylist.option("displayTime", "slow");
  });
  $("#playlist-option-displayTime-2000").click(function() {
    myPlaylist.option("displayTime", 2000);
  });

  // Option: addTime

  $("#playlist-option-addTime-0").click(function() {
    myPlaylist.option("addTime", 0);
  });
  $("#playlist-option-addTime-fast").click(function() {
    myPlaylist.option("addTime", "fast");
  });
  $("#playlist-option-addTime-slow").click(function() {
    myPlaylist.option("addTime", "slow");
  });
  $("#playlist-option-addTime-2000").click(function() {
    myPlaylist.option("addTime", 2000);
  });

  // Option: removeTime

  $("#playlist-option-removeTime-0").click(function() {
    myPlaylist.option("removeTime", 0);
  });
  $("#playlist-option-removeTime-fast").click(function() {
    myPlaylist.option("removeTime", "fast");
  });
  $("#playlist-option-removeTime-slow").click(function() {
    myPlaylist.option("removeTime", "slow");
  });
  $("#playlist-option-removeTime-2000").click(function() {
    myPlaylist.option("removeTime", 2000);
  });

  // Option: shuffleTime

  $("#playlist-option-shuffleTime-0").click(function() {
    myPlaylist.option("shuffleTime", 0);
  });
  $("#playlist-option-shuffleTime-fast").click(function() {
    myPlaylist.option("shuffleTime", "fast");
  });
  $("#playlist-option-shuffleTime-slow").click(function() {
    myPlaylist.option("shuffleTime", "slow");
  });
  $("#playlist-option-shuffleTime-2000").click(function() {
    myPlaylist.option("shuffleTime", 2000);
  });

});