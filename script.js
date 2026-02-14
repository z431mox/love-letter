function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.width = 10 + Math.random() * 20 + 'px';
  heart.style.height = heart.style.width;
  heart.style.animationDuration = 3 + Math.random() * 5 + 's';
  document.querySelector('.hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
// JS
const audio = document.getElementById('myAudio');
const playPause = document.getElementById('playPause');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const timeDisplay = document.getElementById('time');
playPause.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPause.textContent = '⏸️';
  } else {
    audio.pause();
    playPause.textContent = '▶️';
  }
});

audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
  timeDisplay.textContent = `${minutes}:${seconds}`;
});

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});
playBtn.textContent = '❥';
if(audio.duration) {
  audio.currentTime = (clickX / width) * audio.duration;
}

