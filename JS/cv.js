window.onload = async function() {
    console.log('good morning :O')

    document.getElementById('body').style.opacity = '100%'
    document.getElementById('header').style.transform = 'scale(100%)'



    console.log(sessionStorage.getItem('cvScroll'))

    sessionStorage.setItem('cvScroll', null)
}



// DETECT MOBILE MODE OR WHATEVER HAHA

if (window.innerWidth < 1000) {
    console.log('Mobile mode enabled')

    document.getElementById('header').children[0].remove()
    document.getElementById('header').children[0].remove()
    document.getElementById('header').style.height = '50px'
}