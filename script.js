document.addEventListener("DOMContentLoaded", () => {
  var panorama, viewer,video;
  video = "Jama_Masjid.mp4"

  panorama = new PANOLENS.VideoPanorama(video, {
    loop: true,
    muted: true,
    autoplay: false,
    playsinline: true,
    crossOrigin: "anonymous",
  });

  viewer = new PANOLENS.Viewer({
    autoRotate: false,
    controlBar: true,
    autoplay: true,
    cameraFov: 75,
    controlButtons: ["fullscreen"],
  });
  viewer.add(panorama);
  viewer.mode = 0;
});
