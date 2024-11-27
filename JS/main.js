addEventListener("scroll", (event) => {
    var distanceScrolled = window.scrollY
    document.getElementById('backgroundDevin').style.transform = 'scale(' + (100 + (distanceScrolled / 80)) + '%) translateY(-' + (distanceScrolled / 3) + 'px)'
});

window.onbeforeunload = function() {
    window.scrollTo(0,0)
}