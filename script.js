let audio = document.querySelector('audio')
let heart = document.querySelectorAll('.wrapper')
let cont  = document.querySelector('.container')
let btn = document.querySelector('.click')
let stop = document.querySelector('.stop')
let isPlaying = false


    btn.onclick = () => {
        heart[2].style.marginLeft = '50%'
        setTimeout(() => {
            heart[1] .style.marginLeft = '50%'
        }, 1000)
        setTimeout(() => {
            heart[0] .style.marginLeft = '50%'
        }, 2000)
        setTimeout(() => {
            heart.forEach(el => {
                el.style.marginLeft = '-100%'
            })
        }, 2550)

        audio.play()
    }

stop.onclick = () => {
            isPlaying = true
            audio.pause()
}
