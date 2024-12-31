document.addEventListener("DOMContentLoaded", () => {
  let panorama, viewer;

  panorama = new PANOLENS.VideoPanorama("test.mp4", {
    muted: true,
    autoplay: true,
    playsinline: true,
    crossOrigin: "anonymous",
  });

  viewer = new PANOLENS.Viewer({
    autoRotate: false,
    controlBar: true,
    autoplay: true,
    cameraFov: 75,
    controlButtons: ["fullscreen", "setting", "video"],
  });
  viewer.add(panorama);
});
