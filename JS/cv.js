window.onload = async function () {

    document.getElementById('body').style.opacity = '100%'
    document.getElementById('header').style.transform = 'scale(100%)'



    if (location.hash != '') {
        var saveScrollTo1 = location.hash
        var saveScrollTo2 = saveScrollTo1.replace('#', '');

        document.getElementById('timelineElement' + saveScrollTo2).scrollIntoView({ behavior: "smooth"})

        await new Promise(r => setTimeout(r, 900));

        document.getElementById('timelineElement' + saveScrollTo2).children[0].style.backgroundColor = '#8af'
        document.getElementById('timelineElement' + saveScrollTo2).children[0].style.borderRadius = '50px'
        await new Promise(r => setTimeout(r, 600));
        document.getElementById('timelineElement' + saveScrollTo2).children[0].removeAttribute('style')
    }
}




// DETECT MOBILE MODE OR WHATEVER HAHA

if (window.innerWidth < 1000) {

    document.getElementById('header').children[0].remove()
    document.getElementById('header').children[0].remove()
    document.getElementById('header').style.height = '50px'
}