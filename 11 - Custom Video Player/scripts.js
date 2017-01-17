/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const full = player.querySelector('.fullScreen');

/* Build our functions */
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function playButton() {
    this.paused ? toggle.innerHTML = '►' : toggle.innerHTML = '||';
}

function skip(e) {
    console.log(e.target.dataset.skip); // Could instead have used this.dataset.skip
    video.currentTime += parseFloat(this.dataset.skip)
}

function sliders() {
    if (this.name == 'volume') {
        video.volume = this.value;
    } else {
        video.playbackRate = this.value;
    }
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / video.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    const percent = scrubTime / video.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
    console.log(e);
}

function fullScreen() {
    console.log(player.offsetWidth);
    if (player.style.width == `${window.innerWidth}px`) {
        player.style.width = '650px';

    } else {
        player.style.maxWidth = `${window.innerWidth}px`;
        player.style.width = `${window.innerWidth}px`;
    }
}

/* Add our event listeners */
let mousedown = false;
video.addEventListener('click', togglePlay);
video.addEventListener('play', playButton);
video.addEventListener('pause', playButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', sliders));
ranges.forEach(range => range.addEventListener('mousemove', sliders));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', function(e) {
    if(mousedown) {
        scrub(e);
    }
});
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
full.addEventListener('click', fullScreen);