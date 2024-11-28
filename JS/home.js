addEventListener("scroll", (event) => {
    var distanceScrolled = window.scrollY
    document.getElementById('backgroundDevin').style.transform = 'scale(' + (100 + (distanceScrolled / 75)) + '%) translateY(-' + (distanceScrolled / 4) + 'px)'
});

window.onload = async function() {
    console.log('good morning :O')

    document.getElementById('body').style.opacity = '100%'
    document.getElementById('backgroundDevin').style.transform = 'scale(100%)'

    await new Promise(r => setTimeout(r, 500));

    document.getElementById('infoCard').style.transform = 'rotate(0deg) translateY(0px)'
    document.getElementById('animate1').style.transform = 'translateY(0px)'
    document.getElementById('animate2').style.transform = 'translateY(0px)'
    document.getElementById('backgroundDevin').style.transition = '0s'

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