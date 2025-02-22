let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'inter.png',
        name : 'inter friends',
        artist : 'I Love You - $',
        music : 'Friendship - SenSongsMp3.Co.mp3'
    },
    {
        img : 'anush.png',
        name : 'Crime Partner',
        artist : 'I love You - $',
        music : 'Kontha Kalam Kindata - SenSongsMp3.Co.mp3'
    },
    {
        img : 'dine.png',
        name : 'Cricket Partner',
        artist : 'I Love You - $',
        music : 'Snehituda.mp3'
    },
    {
        img : 'mani.png',
        name : 'Sports Partner',
        artist : 'I Love You - $',
        music : 'O My Friend  - SenSongsMp3.co.mp3'
    },
    {
        img : 'Screenshot_2025-01-28-10-54-59-44_1c337646f29875672b5a61192b9010f9.jpg',
        name : 'Lover Boy',
        artist : 'I Love You - $',
        music : 'Forever Friend - SenSongsMp3.Co.mp3'
    },
    {
        img : 'lava.png',
        name : 'follower',
        artist : 'I Love You - $',
        music : 'my pain.m4a'
    },

    {
        img :'virat.png',
        name :'Inspiration',
        artist :'I Love You - $',
        music :'Inspiration.mp3.mp3'
    },
      
    {
        img : 'ironman.png',
        name : 'favorite marvel',
        artist : 'I Love You - $',
        music : 'king on fire.m4a'
    },
    {
        img : 'radhakrishna.png',
        name : 'True Love',
        artist : 'I Love You - $',
        music : 'Ney Veyrey.mp3'
    },

    {
        img :'S2.jpeg',
        name :'Lava Raju',
        artist :'I Love You - $',
        music :'Prema Vennela.mp3'
    },
    {
        img :'sam.png',
        name :'favourite actress',
        artist :'I Love You - $',
        music :'Seethakaalam - SenSongsMp3.Co.mp3'
    },
    {
        img :'killer.png',
        name :'my devil & me',
        artist :'I Love You - $',
        music :'Bujji.mp3'
    },
    {
        img :'king.png',
        name :'fearless captain',
        artist :'I Love You - $',
        music :'Alan_Walker,_Sofiloud_-_Team_Side_feat._RCB__Official_Music_Video_(128k).mp3'
    },
    {
        img :'S10.jpg',
        name :'Angel in my heart',
        artist :'I Love You - $',
        music :'single boy.mp3'
    },
    {
        img :'S7.jpg',
        name :'end of my life',
        artist :'I Love You - $',
        music :'Vellipomaakey.mp3'
    },
    {
        img :'S9.jpg',
        name :'king of india',
        arist :'I Love You - $',
        music :'Dil Banaane Waaleya Fighter 128 Kbps.mp3'
    },
    {
        img :'S3.png',
        name :'Life of Lava',
        artist :'I Love You - $',
        music :'Life Of Lava.mp3'
    },
    {
        img :'arjun.jpeg',
        name :'BHAAI Fan',
        artist :'I Love You - $',
        music :'Buttabomma - SenSongsMp3.Co.mp3'
    },
    {
        img :'naresh.jpeg',
        name :'friend com brother',
        artist :'I Love You - $',
        music :'02 -  Singarala [www.SenSongsMp3.co].mp3'
    },
    {
        img :'ronaldo.jpeg',
        name :'Ronaldo fan',
        artist :'I Love You - $',
        music :'Sia_-_Unstoppable__Official_Video_-_Live_from_the_Nostalgic_For_The_Present_Tour_(128k).m4a'
    },
    {
        img :'myangel.png',
        name :'sisters daughter',
        artist :'I Love You - $',
        music :'Ninnu Chuse Anandamlo - SenSongsMp3.Co (1).mp3'
    },
    {
        img :'samurai.jpeg',
        name :'Follower of Samurai',
        artist :'I Love You - $',
        music :'Charlie_BGM_-_Remix_Ringtone____Instrumental_Attitude_Ringtone____Ringtones_Cult(128k).m4a'
    },
    {
        img :'image.jpeg',
        name :'very long years ago',
        artist :'I Love You - $',
        music :'our love.mp3'
    },
    {
        img :'SL.jpeg',
        name :'SHHHHHHHH(NO COMMENTS)',
        artist :'I Love You - $',
        music :'kukumala.mp3'
    },
    {
        img :'IMG20250110133838.jpg',
        name :'never trust anyone',
        artist :'I Love You -$',
        music :'[iSongs.info] 07 - Rudhiram Marigi.mp3'
    },
    {
        img :'IMG20240409062307.jpg',
        name :'BROTHER',
        artist :'I Love You - $',
        music :'Oosaravelli (Theme Song)-SenSongsMp3.Co.mp3'
    },
    {
        img :'S4.jpg',
        name :'Cuteeee',
        artist :'I Love You - $',
        music :'[iSongs.info] 02 - Chittemma.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}