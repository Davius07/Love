const song = new Audio('media/audio.mp3');
song.preload = 'metadata';
song.loop = true;
song.volume = 0.65;
const musicButton = document.createElement('button');
musicButton.className = 'music-control';
musicButton.type = 'button';
musicButton.setAttribute('aria-label', 'Reproducir canción');
musicButton.textContent = '♫ Escuchar canción';
document.body.append(musicButton);
let musicStarted = false;
let musicPending = false;
function syncMusic() {
  musicButton.textContent = song.paused ? '♫ Escuchar canción' : 'Ⅱ Pausar canción';
  musicButton.setAttribute('aria-label', song.paused ? 'Reproducir canción' : 'Pausar canción');
  musicButton.classList.toggle('playing', !song.paused);
}
async function playMusic() {
  if (musicPending) return;
  musicPending = true;
  try {
    await song.play();
    musicStarted = true;
    document.removeEventListener('click', firstInteraction);
    document.removeEventListener('keydown', firstKey);
  } catch (error) {
    syncMusic();
    if (error.name !== 'NotAllowedError' && error.name !== 'AbortError') {
      musicButton.textContent = '♫ Reintentar canción';
      musicButton.setAttribute('aria-label', 'Reintentar reproducción de la canción');
    }
  } finally { musicPending = false; }
}
musicButton.addEventListener('click', () => {
  if (song.paused) playMusic();
  else song.pause();
});
function firstInteraction(event) {
  if (!musicStarted && !musicButton.contains(event.target)) playMusic();
}
function firstKey(event) {
  if ((event.key === 'Enter' || event.key === ' ') && !musicButton.contains(event.target)) firstInteraction(event);
}
song.addEventListener('play', syncMusic);
song.addEventListener('pause', syncMusic);
document.addEventListener('click', firstInteraction);
document.addEventListener('keydown', firstKey);
playMusic();
