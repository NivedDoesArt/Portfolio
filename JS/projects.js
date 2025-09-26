
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('body').style.opacity = '100%'
    document.getElementById('header').style.transform = 'scale(100%)'
})

if (window.innerWidth < 1300) {
    for (let i = 0; i < document.getElementById('content').children.length; i++) {
        document.getElementById('content').children[i].setAttribute('style', 'width: calc((100% / 3) - 41px); height: calc(20vh + 20vw);')

        document.getElementById('content').children[i].children[0].setAttribute('style', 'font-size: 5vw')
        document.getElementById('content').children[i].children[2].setAttribute('style', 'font-size: calc(0.35rem + 1vw);')
        document.getElementById('content').children[i].children[3].setAttribute('style', 'font-size: 4vw')
    }
}

if (window.innerWidth < 1000) {
    document.getElementById('header').children[0].remove()
    document.getElementById('header').children[0].remove()
    document.getElementById('header').style.height = '50px'

    document.getElementById('footerSocials').style.width = 'calc((100% / 2) - 11%)'
    document.getElementById('footerLinks').style.width = 'calc((100% / 2) - 11%)'
    document.getElementById('footerContact').style.width = 'calc(100% - 11%)'

    document.getElementById('content').style.paddingLeft = '5vw'
    document.getElementById('content').style.paddingRight = '5vw'
    document.getElementById('content').style.paddingTop = '10vh'

    for (let i = 0; i < document.getElementById('content').children.length; i++) {
        document.getElementById('content').children[i].setAttribute('style', 'width: calc(50% - 40px); height: calc(20vh + 30vw);')

        document.getElementById('content').children[i].children[0].setAttribute('style', 'font-size: 6vw')
        document.getElementById('content').children[i].children[2].setAttribute('style', 'font-size: calc(0.35rem + 1vw);')
        document.getElementById('content').children[i].children[3].setAttribute('style', 'font-size: 6vw')
    }
}
