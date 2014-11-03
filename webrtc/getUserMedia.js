navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
                            || navigator.mozGetUserMedia;
// Use constraints to ask for a video-only MediaStream:
var video = document.querySelector("video");
var vgaButton = document.querySelector("button#vga");
var qvgaButton = document.querySelector("button#qvga");
var hdButton = document.querySelector("button#hd");
var stream = null;
// Callback to be called in case of success...


var qvgaConstraints = { video: {
    mandatory: {
      maxWidth: 320,
      maxHeight: 240
} }
};
// Constraints object for standard resolution video
var vgaConstraints = { video: {
    mandatory: {
      maxWidth: 640,
      maxHeight: 480
} }
};
// Constraints object for high resolution video
var hdConstraints = { video: {
    mandatory: {
      minWidth: 1280,
      minHeight: 960
} }
};

function getMedia(localConstraints){
  if (!!stream) { video.src = null; stream.stop();}
  navigator.getUserMedia(localConstraints, successCallback, errorCallback);
}

vgaButton.onclick = function(){getMedia(vgaConstraints)};
qvgaButton.onclick = function(){getMedia(qvgaConstraints)};
hdButton.onclick = function(){getMedia(hdConstraints)};

function successCallback(gotStream) {
  // Note: make the returned stream available to console for inspection
  stream = gotStream;
  if (window.URL) {
    // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
    video.src = window.URL.createObjectURL(gotStream);
  }else{
    // Firefox and Opera: the src of the video can be set directly from the stream
    video.src = gotStream;
  }
    // We're all set. Let's just play the video out!
  video.play();
}

// Callback to be called in case of failures...
function errorCallback(error){ console.log("navigator.getUserMedia error: ", error);
}
