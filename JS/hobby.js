window.onload = async function () {
    document.getElementById('body').style.opacity = '100%'
    document.getElementById('header').style.transform = 'scale(100%)'
}



// DETECT MOBILE MODE OR WHATEVER HAHA

let imageDeviceScale = 90

if (window.innerWidth < 1000) {
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
        let imgGal = (document.getElementById('imgGal' + i).children.length - 1)
        for (ii = 0; ii <= imgGal; ii++) {
            document.getElementById('imgGal' + i).children[ii].setAttribute('style', 'opacity: 100%; transform: scale(98%); filter: saturate(100%);')
        }
    }

    document.getElementById('prevImage').remove()
    document.getElementById('nextImage').remove()

    document.getElementById('imageDisplayHolder').style.overflowX = 'scroll'
    document.getElementById('imageDisplayImg').style.width = '110%'

    imageDeviceScale = 80
}


let imageDisplayStatus = false;

let selectedList = null
let imageWithinList = null
let maxScrollAmount = null

let imageScrollCenter = null

async function imageDisplay(location, list, title) {
    if (imageDisplayStatus == false) {
        imageDisplayStatus = true
        selectedList = list
        imageWithinList = title

        document.getElementById('body').style.height = '100%'
        document.getElementById('body').style.overflow = 'hidden'

        document.getElementById('imageDisplayImg').setAttribute('src', location)

        document.getElementById('imageDisplayHolder').style.opacity = '100%'
        document.getElementById('imageDisplayHolder').style.pointerEvents = 'all'
        document.getElementById('imageDisplayHolder').style.opacity = '100%'

        document.getElementById('imageDisplayHolder').scrollTo(100, 100)
        imageScrollCenter = (document.getElementById('imageDisplayHolder').scrollLeft / 2)
        document.getElementById('imageDisplayHolder').scrollTo(imageScrollCenter, imageScrollCenter)

        await new Promise(r => setTimeout(r, 500));

        document.getElementById('imageDisplayImg').style.opacity = '100%'
        document.getElementById('imageDisplayImg').style.transform = 'scale(' + imageDeviceScale + '%) translateY(0px)'
    } else if (imageDisplayStatus == true) {
        imageDisplayStatus = false

        document.getElementById('body').setAttribute('style', 'opacity: 1;')

        document.getElementById('imageDisplayHolder').style = null
        if (window.innerWidth < 1000) {
            document.getElementById('imageDisplayHolder').style.overflowX = 'scroll'
        }
        document.getElementById('imageDisplayImg').style.transform = 'scale(' + imageDeviceScale + '%) translateY(-50px)'
        document.getElementById('imageDisplayImg').style.opacity = '0%'

        await new Promise(r => setTimeout(r, 500));

        document.getElementById('imageDisplayImg').style = null
        if (window.innerWidth < 1000) {
            document.getElementById('imageDisplayImg').style.width = '110%'
        }
    }
}

function nextImage() {
    if (selectedList == 1) {
        maxScrollAmount = 13
    }
    if (selectedList == 2) {
        maxScrollAmount = 21
    }
    if (selectedList == 3) {
        maxScrollAmount = 11
    }
    if (selectedList == 4) {
        maxScrollAmount = 6
    }
    if (selectedList == 5) {
        maxScrollAmount = 7
    }
    if (selectedList == 6) {
        maxScrollAmount = 4
    }
    if (selectedList == 7) {
        maxScrollAmount = 20
    }



    imageWithinList++
    if (imageWithinList == maxScrollAmount + 1) {
        imageWithinList = 1
    }
    document.getElementById('imageDisplayImg').setAttribute('src', '../IMG/hobby/hobby' + selectedList + '/' + imageWithinList + '.jpg')
}

function prevImage() {
    if (selectedList == 1) {
        maxScrollAmount = 13
    }
    if (selectedList == 2) {
        maxScrollAmount = 21
    }
    if (selectedList == 3) {
        maxScrollAmount = 11
    }
    if (selectedList == 4) {
        maxScrollAmount = 6
    }
    if (selectedList == 5) {
        maxScrollAmount = 7
    }
    if (selectedList == 6) {
        maxScrollAmount = 4
    }
    if (selectedList == 7) {
        maxScrollAmount = 20
    }



    imageWithinList--
    if (imageWithinList == 0) {
        imageWithinList = maxScrollAmount
    }
    document.getElementById('imageDisplayImg').setAttribute('src', '../IMG/hobby/hobby' + selectedList + '/' + imageWithinList + '.jpg')
}



document.getElementById('imageDisplayHolder').addEventListener("scroll", (event) => {

    if (document.getElementById('imageDisplayHolder').scrollLeft == imageScrollCenter * 2) {
        nextImage()
        document.getElementById('imageDisplayHolder').scrollTo(imageScrollCenter, imageScrollCenter)

    } else if (document.getElementById('imageDisplayHolder').scrollLeft == 0) {
        prevImage()
        document.getElementById('imageDisplayHolder').scrollTo(imageScrollCenter, imageScrollCenter)
    }
})



document.querySelectorAll('img').forEach(img => {
    const tempSrc = img.src;
    img.removeAttribute("src")
    img.setAttribute("data-src", tempSrc);
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]'); // Select images with data-src attribute
    images.forEach(img => {
        if (isInViewport(img) && !img.src) {
            img.src = img.getAttribute('data-src'); // Load the actual image
            img.removeAttribute('data-src'); // Remove data-src to avoid re-checking
        }
    });
}

// Listen to scroll and resize events to check visibility on the fly
window.addEventListener('scroll', lazyLoadImages);
window.addEventListener('resize', lazyLoadImages);
document.querySelectorAll('.imageGallary').forEach(imgGal => {
    imgGal.addEventListener('scroll', lazyLoadImages);
})

// Run on initial page load too
window.addEventListener('DOMContentLoaded', lazyLoadImages);