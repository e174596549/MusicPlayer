var a = document.querySelector('#id-audio-player')

function changeMusic() {
    var buttonChange = document.querySelector('.mp3-list')
    buttonChange.addEventListener('click', function(event) {
        a.src = event.target.dataset.path
        buttonChange.dataset.num = event.target.dataset.num
        canAduioPlay()
    })
}

var canAduioPlay = function() {
    a.addEventListener('canplay', function() {
        a.play()
        showPlayTime()
    })
}

function showPlayTime() {
    var currentTime = document.querySelector('#id-apan-currentTime')
    document.querySelector('#id-apan-totalTime').innerHTML = `总时长：${a.duration}s`
    timer1 = setInterval(function() {
        currentTime.innerHTML = `已播放：${a.currentTime}s`
    }, 1000)
}

function pauseButton() {
    var buttonPause = document.querySelector('#id-button-pause')
    buttonPause.addEventListener('click', function() {
        a.pause()
        clearInterval(timer1)
    })
}

function playButton() {
    var buttonPlay = document.querySelector('#id-button-play')
    buttonPlay.addEventListener('click', function() {
        a.play()
        showPlayTime()
    })
}

function nextMusic() {
    var musicList = ['GARNiDELiA - 極楽浄土 (加速版).mp3', '周杰伦 - 给我一首歌的时间.mp3', '朴树 - 那些花儿(吉他版).mp3']
    nextButton = document.querySelector('#id-button-next')
    nextButton.addEventListener('click', function() {
        console.log(document.querySelector('.mp3-list').dataset.num);
        var i = document.querySelector('.mp3-list').dataset.num
        a.src = musicList[(i + 1) % 3]
        document.querySelector('.mp3-list').dataset.num = (i + 1) % 3
        canAduioPlay()
    })
}

function autoNext() {
    a.addEventListener('ended', function() {
        console.log('autoNext')
        nextButton.click()
    })
}

function main() {
    changeMusic()
    pauseButton()
    playButton()
    nextMusic()
    autoNext()
}

main()
