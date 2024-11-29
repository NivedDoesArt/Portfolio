addEventListener("scroll", (event) => {
    var distanceScrolled = window.scrollY
    console.log(distanceScrolled)
    document.getElementById('backgroundDevin').style.transform = 'scale(' + (100 + (distanceScrolled / 75)) + '%) translateY(-' + (distanceScrolled / 4) + 'px)'

    document.getElementById('moreScroll').style = null
});

window.onload = async function() {
    console.log('good morning :O')

    document.getElementById('body').style.opacity = '100%'
    document.getElementById('backgroundDevin').style.transform = 'scale(100%)'
    document.getElementById('header').style.transform = 'scale(100%)'

    await new Promise(r => setTimeout(r, 1000));

    document.getElementById('infoCard').style.transform = 'rotate(0deg) translateY(0px)'
    document.getElementById('animate1').style.transform = 'translateY(0px)'
    document.getElementById('animate2').style.transform = 'translateY(0px)'
    document.getElementById('backgroundDevin').style.transition = '0s'
    document.getElementById('moreScroll').style.opacity = '100%'
    document.getElementById('moreScroll').style.bottom = '2vh'

    await new Promise(r => setTimeout(r, 100));

    document.getElementById('infoCard').style.opacity = '100%'
    document.getElementById('animate1').style.opacity = '100%'
    document.getElementById('animate2').style.opacity = '100%'

    await new Promise(r => setTimeout(r, 150));

    document.getElementById('animate4').style.opacity = '100%'
    document.getElementById('animate4').style.transform = 'translateY(0px)'
    document.getElementById('animate3').style.transform = 'translateY(0px)'

    await new Promise(r => setTimeout(r, 250));

    document.getElementById('animate5').style.opacity = '100%'
    document.getElementById('animate5').style.transform = 'translateY(0px)'
    document.getElementById('animate3').style.opacity = '100%'
}



// FUNCTIONS

var currentImage = 1

function prevImage() {
    currentImage = currentImage - 1

    if (currentImage == 0) {
        currentImage = 5
    }

    document.getElementById('backgroundDevin').style.background = 'url(IMG/' + currentImage + '.jpg)'

    if (currentImage == 1) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 40% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 2) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 10% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 3) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 60% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 4) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 40% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 5) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 0% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
}

function nextImage() {
    currentImage = currentImage + 1

    if (currentImage == 6) {
        currentImage = 1
    }

    document.getElementById('backgroundDevin').style.background = 'url(IMG/' + currentImage + '.jpg)'

    if (currentImage == 1) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 40% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 2) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 10% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 3) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 60% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 4) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 40% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
    if (currentImage == 5) {
        document.getElementById('backgroundDevin').style.backgroundPosition = 'top 0% center'
        document.getElementById('backgroundDevin').style.backgroundRepeat = 'no-repeat'
        document.getElementById('backgroundDevin').style.backgroundSize = 'cover'
    }
}