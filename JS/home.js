var timelineAnimationToggle = 1
var distanceScrolled = 0

addEventListener("scroll", (event) => {
    distanceScrolled = window.scrollY
    console.log(distanceScrolled)
    document.getElementById('backgroundDevin').style.transform = 'scale(' + (100 + (distanceScrolled / 75)) + '%) translateY(-' + (distanceScrolled / 4) + 'px)'

    document.getElementById('moreScroll').style = null

    //TIMELINE FUNCTIONALITY

    if (distanceScrolled >= 350 && timelineAnimationToggle == 1) {
        tlAnimToggle()
    }



    if (distanceScrolled >= 277 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement1').style.opacity = '100%'
        document.getElementById('timelineElement1').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 439 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement2').style.opacity = '100%'
        document.getElementById('timelineElement2').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 604 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement3').style.opacity = '100%'
        document.getElementById('timelineElement3').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 770 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement4').style.opacity = '100%'
        document.getElementById('timelineElement4').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 959 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement5').style.opacity = '100%'
        document.getElementById('timelineElement5').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 1170 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement6').style.opacity = '100%'
        document.getElementById('timelineElement6').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 1356 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement7').style.opacity = '100%'
        document.getElementById('timelineElement7').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 1542 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement8').style.opacity = '100%'
        document.getElementById('timelineElement8').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 1732 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement9').style.opacity = '100%'
        document.getElementById('timelineElement9').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 1940 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement10').style.opacity = '100%'
        document.getElementById('timelineElement10').style.transform = 'scale(100%)'
    }
    if (distanceScrolled >= 2068 && timelineAnimationToggle == 2) {
        document.getElementById('timelineElement11').style.opacity = '100%'
        document.getElementById('timelineElement11').style.transform = 'scale(100%)'
    }

});

window.onload = async function () {
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



async function tlAnimToggle() {
    for (i = 1; i <= 6; i++) {
        document.getElementById('tlDeco' + i).style.transform = 'scaleX(0%)'
    }

    document.getElementById('middleLine').style.width = '3px'
    document.getElementById('middleLine').style.paddingLeft = '0px'
    document.getElementById('middleLine').style.paddingRight = '0px'
    document.getElementById('middleLine').style.marginLeft = 'calc((100% / 2) - (3px / 2))'
    document.getElementById('middleLine').style.marginRight = 'calc((100% / 2) - (3px / 2))'

    await new Promise(r => setTimeout(r, 1250));

    document.getElementById('middleLine').style.height = '100%'

    await new Promise(r => setTimeout(r, 100));

    timelineAnimationToggle = 2

    window.scrollTo(0, (distanceScrolled - 1))
}





// FUNCTIONS

var currentImage = 1

async function prevImage() {
    currentImage = currentImage - 1

    if (currentImage == 0) {
        currentImage = 5
    }

    document.getElementById('backgroundDevin').style.background = 'url(IMG/' + currentImage + '.jpg)'
    document.getElementById('backgroundDevin').style.transition = '1s'

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

    await new Promise(r => setTimeout(r, 100));
    document.getElementById('backgroundDevin').style.transition = '0s'
}

async function nextImage() {
    currentImage = currentImage + 1

    if (currentImage == 6) {
        currentImage = 1
    }

    document.getElementById('backgroundDevin').style.background = 'url(IMG/' + currentImage + '.jpg)'
    document.getElementById('backgroundDevin').style.transition = '1s'

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

    await new Promise(r => setTimeout(r, 100));
    document.getElementById('backgroundDevin').style.transition = '0s'
}