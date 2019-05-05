function CanvasRecorder (canvas, fps = 60, bps = 1000000000) {
  this.recordedBlobs = [];
  this.stream = canvas.captureStream(fps);
  // console.log("Started stream capture from canvas element: ", this.stream);
  // created mediaRecorder
  let options = {
    mimeType: "video/webm",
    videoBitsPerSecond: bps,
  };

  try {
    this.mediaRecorder = new MediaRecorder(this.stream, options);
  } catch (e0) {
    console.log("Unable to create MediaRecorder with options Object: ", e0);
    try {
      options = { mimeType: "video/webm,codecs=vp9" };
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (e1) {
      console.log("Unable to create MediaRecorder with options Object: ", e1);
      try {
        options = "video/vp8"; // Chrome 47
        this.mediaRecorder = new MediaRecorder(this.stream, options);
      } catch (e2) {
        alert("MediaRecorder is not supported by this browser.\n\n" +
          "Try Firefox 29 or later, or Chrome 47 or later, " +
          "with Enable experimental Web Platform features enabled from chrome://flags.");
        console.error("Exception while creating MediaRecorder:", e2);
        return;
      }
    }
  }
  console.log("Created MediaRecorder", this.mediaRecorder, "with options", options);
  this.mediaRecorder.onstop = this.handleStop.bind(this);
  this.mediaRecorder.ondataavailable = this.handleDataAvailable.bind(this);
}


CanvasRecorder.prototype.handleDataAvailable = function(event) {
  if (event.data && event.data.size > 0) {
    this.recordedBlobs.push(event.data);
  }
};

CanvasRecorder.prototype.handleStop = function(event) {
  console.log("Recorder stopped: ", event);
};

// The nested try blocks will be simplified when Chrome 47 moves to Stable
CanvasRecorder.prototype.startRecording = function() {
  this.recordedBlobs = []
  this.mediaRecorder.start(100); // timeslice
  console.log("MediaRecorder started", this.mediaRecorder);
};

CanvasRecorder.prototype.stopRecording = function() {
  this.mediaRecorder.stop();
  // console.log("Recorded Blobs: ", this.recordedBlobs);
  return new Blob(this.recordedBlobs, { type: "video/webm" });
};

CanvasRecorder.prototype.download = function() {
  const blob = new Blob(this.recordedBlobs, { type: "video/webm" });
  console.log('this.recordedBlobs length = '  + this.recordedBlobs.length)
  console.log('download, blob size = ' + blob.size)
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "test.webm";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
};

// window.CanvasRecorder = CanvasRecorder
// export default CanvasRecorder
// module.exports = CanvasRecorder

