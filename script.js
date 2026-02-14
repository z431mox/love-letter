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

