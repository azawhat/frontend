document.addEventListener("DOMContentLoaded", function () {
    var videoContainer = document.getElementById("contactInfoContainer");

    // adding video and setting its width 
    var video = document.createElement("video");
    video.setAttribute("id", "feedbackVideo");
    video.setAttribute("width", "100%");
    video.setAttribute("controls", "controls");

    var source = document.createElement("source");
    source.setAttribute("src", "feedback.mp4");
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);
    videoContainer.appendChild(video);
});
