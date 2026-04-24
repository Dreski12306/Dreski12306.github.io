var main = function() {

  var player = document.getElementById("player");

  // PLAY
  $('#play').click(function() {
    player.play();
    $('#message').text("Playing");
  });

  // PAUSE
  $('#pause').click(function() {
    player.pause();
    $('#message').text("Paused");
  });

  // STOP
  $('#stop').click(function() {
    player.pause();
    player.currentTime = 0;
    $('#message').text("Stopped");
  });

  // MUTE
  $('#mute').click(function() {
    player.muted = true;
    $('#message').text("Muted");
  });

  // UNMUTE
  $('#unmute').click(function() {
    player.muted = false;
    $('#message').text("Unmuted");
  });

  // VOLUME UP
  $('#volUp').click(function() {
    if (player.volume < 1) {
      player.volume += 0.1;
      if (player.volume > 1) player.volume = 1;
      $('#message').text("Volume: " + player.volume.toFixed(1));
    }
  });

  // VOLUME DOWN
  $('#volDown').click(function() {
    if (player.volume > 0) {
      player.volume -= 0.1;
      if (player.volume < 0) player.volume = 0;
      $('#message').text("Volume: " + player.volume.toFixed(1));
    }
  });

};

$(document).ready(main);
