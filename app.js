document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  const playIcon = document.getElementById('play-icon');
  let isPlaying = false;

  // Initialize WaveSurfer with bar-style waves
  const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#fff',
    progressColor: '#FF699F',
    responsive: true,
    backend: 'mediaelement',
    barWidth: 4,
    barGap: 2,
    barRadius: 4,
    height: 55,
  });

  // Load audio asynchronously
  wavesurfer.load('sample.m4a');

  // Toggle play/pause on button click and update icon
  playButton.addEventListener('click', () => {
    if (isPlaying) {
      wavesurfer.pause();
      playIcon.src = 'images/play-icon.png'; // Set back to play icon
      playIcon.alt = 'Play Button';
    } else {
      wavesurfer.play();
      playIcon.src = 'images/pause-icon.png'; // Switch to pause icon
      playIcon.alt = 'Pause Button';
    }
    isPlaying = !isPlaying;
  });

  // Update button state when audio ends
  wavesurfer.on('finish', () => {
    isPlaying = false;
    playIcon.src = 'images/play-icon.png'; // Reset to play icon
    playIcon.alt = 'Play Button';
  });
});
