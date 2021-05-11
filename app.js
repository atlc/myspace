document.addEventListener('DOMContentLoaded', () => {
    const instrumental = new Audio();
    instrumental.src = './wtlb.mp3';
    instrumental.volume = '1';

    const bonfire = new Audio('./bonfire.mp3');
    bonfire.volume = '0.8';
    bonfire.playbackRate = '0.87654321'; // 71*2 BPM / 161 BPM

    $(document.body).append('<button id="play">Play me</button>');
    $(document.body).append('<button id="stop">Stop</button>');
    $('#stop').hide();


    $('#play').click(() => {
        $('#play').hide();
        $('#stop').show();
        instrumental.play();
        setTimeout(() => bonfire.play(), 6000);
    });

    $('#stop').click(() => {
        $('#stop').hide();
        $('#play').show();
        instrumental.pause();
        instrumental.currentTime = 0;
        bonfire.pause();
        bonfire.currentTime = 0;
    });
});