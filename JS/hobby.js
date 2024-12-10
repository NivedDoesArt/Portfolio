window.onload = async function () {
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

    for (i = 1; i <= 7; i++) {
        document.getElementById('title' + i).style.fontSize = '8vw'

        document.getElementById('description' + i).style.width = 'calc(100% - (9.5vw * 2))'
        document.getElementById('description' + i).style.textAlign = 'justify'
        document.getElementById('description' + i).style.paddingLeft = '9.5vw'
        document.getElementById('description' + i).style.paddingRight = '9.5vw'
        document.getElementById('description' + i).style.fontSize = 'calc(0.5rem + 1vw)'

        document.getElementById('imgGal' + i).style.height = '20vh'
        document.getElementById('imgGal' + i).style.width = '100%'
        document.getElementById('imgGal' + i).style.marginLeft = '0px'
        document.getElementById('imgGal' + i).style.marginRight = '0px'
        var imgGal = (document.getElementById('imgGal' + i).children.length - 1)
        for (ii = 0; ii <= imgGal; ii++) {
            document.getElementById('imgGal' + i).children[ii].setAttribute('style', 'opacity: 100%; transform: scale(98%); filter: saturate(100%);')
        }
    }
}





var imageDisplayStatus = false

async function imageDisplay(location, list) {
    if (imageDisplayStatus == false) {
        imageDisplayStatus = true
        console.log(list)
        document.getElementById('imageDisplayImg').setAttribute('src', location)

        document.getElementById('imageDisplayHolder').style.opacity = '100%'
        document.getElementById('imageDisplayHolder').style.pointerEvents = 'all'
        document.getElementById('imageDisplayHolder').style.opacity = '100%'

        await new Promise(r => setTimeout(r, 500));

        document.getElementById('imageDisplayImg').style.opacity = '100%'
        document.getElementById('imageDisplayImg').style.transform = 'scale(90%) translateY(0px)'
    } else if (imageDisplayStatus == true) {
        imageDisplayStatus = false
        document.getElementById('imageDisplayHolder').style = null
        document.getElementById('imageDisplayImg').style.transform = 'scale(90%) translateY(-50px)'
        document.getElementById('imageDisplayImg').style.opacity = '0%'

        await new Promise(r => setTimeout(r, 500));

        document.getElementById('imageDisplayImg').style = null
    }
}