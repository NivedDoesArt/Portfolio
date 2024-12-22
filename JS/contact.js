window.onload = async function() {
    console.log('good morning :O')

    document.getElementById('body').style.opacity = '100%'
    document.getElementById('header').style.transform = 'scale(100%)'
}



// DETECT MOBILE MODE OR WHATEVER HAHA

if (window.innerWidth < 1000) {
    console.log('Mobile mode enabled')

    document.getElementById('header').children[0].remove()
    document.getElementById('header').children[0].remove()
    document.getElementById('header').style.height = '50px'

    document.getElementById('footerSocials').style.width = 'calc((100% / 2) - 11%)'
    document.getElementById('footerLinks').style.width = 'calc((100% / 2) - 11%)'
    document.getElementById('footerContact').style.width = 'calc(100% - 11%)'

    document.getElementById('content').style.paddingLeft = '0px'
    document.getElementById('content').style.paddingRight = '0px'
    document.getElementById('content').style.paddingTop = '10vh'

    for (i = 0; i < 6; i++) {
        document.getElementById('content').children[i].setAttribute('style', 'text-align: center; width: 100%;')
    }

    document.getElementById('myTime').style.paddingLeft = '0px'
    document.getElementById('myTime').style.paddingRight = '0px'
    document.getElementById('myTime').style.paddingBottom = '0px'

    for (i = 0; i < 2; i++) {
        document.getElementById('myTime').children[i].setAttribute('style', 'text-align: center; width: 100%;')
    }

    document.getElementById('contactImage').style.width = '60vw'
    document.getElementById('contactImage').style.height = '60vw'
    document.getElementById('contactImage').style.padding = '20vw'
    document.getElementById('contactImage').style.paddingTop = '5vh'
    document.getElementById('contactImage').style.paddingBottom = '5vh'
    document.getElementById('contactImage').style.top = '0px'
    document.getElementById('contactImage').style.right = '0px'
    document.getElementById('contactImage').style.position = 'relative'

}

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("currentTime").innerHTML = d.toLocaleTimeString('nl-NL', {timeZone: 'Europe/Amsterdam'});
}