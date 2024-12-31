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

if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
        .then(permissionState => {
            if (permissionState === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation);
            }
        })
        .catch(console.error);
} else {
    // For older iOS versions
    window.addEventListener('deviceorientation', handleOrientation);
}

function handleOrientation(event) {
    // Process gyro data
    const alpha = event.alpha; // rotation around Z-axis
    const beta = event.beta;   // rotation around X-axis
    const gamma = event.gamma; // rotation around Y-axis
    console.log(alpha, beta, gamma);
}