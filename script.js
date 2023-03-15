function moveToReels(str) {
    const y = document.getElementById(str).getBoundingClientRect().top + window.scrollY;
    yy = y;
    if (str = 'demo_reel') {
        yy = y - 100;
    }
    window.scroll({
    top: yy,
    behavior: 'smooth'
});
}