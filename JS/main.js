window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}



async function navbar(location) {
    document.getElementById('body').style.opacity = '0%'
    await new Promise(r => setTimeout(r, 500));
    window.location.href = location
}



if (window.innerWidth >= 1000) {
    document.getElementById('burgerMenu').remove()
}

var burgerMenuState = false

function burgerMenuToggle() {
    if (burgerMenuState == false) {
        burgerMenuState = true

        document.getElementById('burgerMenu').children[0].setAttribute('style', 'transform: scale(50%) rotate(45deg) translateY(360%) translateX(-13%);')
        document.getElementById('burgerMenu').children[1].setAttribute('style', 'transform: scale(0%) translateX(-100%);')
        document.getElementById('burgerMenu').children[2].setAttribute('style', 'transform: scale(50%) rotate(-45deg) translateY(-360%) translateX(-13%);')

        document.getElementById('mobileMenu').style.transition = '0.75s'
        document.getElementById('mobileMenu').style.transform = 'translateY(0px)'
        document.getElementById('mobileSocials').style.transform = 'scale(100%)'
    } else if (burgerMenuState == true) {
        burgerMenuState = false

        document.getElementById('burgerMenu').children[0].setAttribute('style', '')
        document.getElementById('burgerMenu').children[1].setAttribute('style', '')
        document.getElementById('burgerMenu').children[2].setAttribute('style', '')

        document.getElementById('mobileMenu').style = null
        document.getElementById('mobileMenu').style.transition = '0.35s'
        document.getElementById('mobileSocials').style = null
    }
}