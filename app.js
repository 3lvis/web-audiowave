document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  let isPlaying = false;

  // Initialize WaveSurfer with bar-style waves
  const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ddd', // Color of the unplayed bars
    progressColor: '#4CAF50', // Color of the played bars
    responsive: true,
    backend: 'mediaelement',  // Ensure compatibility with more browsers
    barWidth: 2,  // Width of each bar in the waveform
    barGap: 1,    // Gap between bars
    barRadius: 2, // Rounded corners for the bars
    height: 40,  // Adjust height for visibility of bars
  });

  // Load audio asynchronously
  wavesurfer.load('sample.m4a');  // Ensure your 'sample.m4a' file is accessible

  // Toggle play/pause on button click
  playButton.addEventListener('click', () => {
    if (isPlaying) {
      wavesurfer.pause();
    } else {
      wavesurfer.play();
    }
    isPlaying = !isPlaying;
    playButton.classList.toggle('playing', isPlaying);
  });

  // Update button state when audio ends
  wavesurfer.on('finish', () => {
    isPlaying = false;
    playButton.classList.remove('playing');
  });
});
