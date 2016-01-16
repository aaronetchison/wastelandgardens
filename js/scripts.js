jQuery(document).ready(function($) {

/* Menu */
  $('#nav-wrap').prepend('<button id="menu-icon"><span class="menu-bar"></span><span class="menu-bar"></span><span class="menu-bar"></span></button>');
  
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
      title:"Wasteland",
      artist:"Aod",
      mp3:"http://www.aaronetchison.com/websites/web1/audio/wasteland.mp3",
      poster: "http://www.aaronetchison.com/websites/web1/audio/wastelanddesign.jpg"
    },
    {
      title:"The Drop",
      artist:"Aod",
      mp3:"http://www.aaronetchison.com/websites/web1/audio/thedrop.mp3",
      poster: "http://www.aaronetchison.com/websites/web1/audio/thedropdesign.jpg"
    },
    {
      title:"Sunrise",
      artist:"Aod",
      mp3:"http://www.aaronetchison.com/websites/web1/audio/sunrise.mp3",
      poster: "http://www.aaronetchison.com/websites/web1/audio/sunrisedesign.jpg"
    },
    {
      title:"Cultural Suicide",
      artist:"Aod",
      mp3:"http://www.aaronetchison.com/websites/web1/audio/culturalsuicide.mp3",
      poster: "http://www.aaronetchison.com/websites/web1/audio/culturalsuicidedesign.jpg"
    },
    {
      title:"Containment Failure",
      artist:"Aod",
      mp3:"http://www.aaronetchison.com/websites/web1/audio/containmentfailure.mp3",
      poster: "http://www.aaronetchison.com/websites/web1/audio/containmentfailuredesign.jpg"
    },
    {
      title:"Ethereal",
      artist:"Aod",
      mp3:"http://www.aaronetchison.com/websites/web1/audio/ethereal.mp3",
      poster: "http://www.aaronetchison.com/websites/web1/audio/etherealdesign.jpg"
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

