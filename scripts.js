window.addEventListener("scroll", function() {
    let pageY = window.pageYOffset;
    let mainHeadings = document.querySelector("article");
    let windowSize = window.innerWidth;
    if (windowSize > 1024) {
        mainHeadings.style.marginLeft = `${100 + pageY * -.15}px`;
    }

    let introHeading = document.querySelector(".hero-intro ");
    if (windowSize > 1024) {
        introHeading.style.marginBottom = `${-200 + pageY * .18}px`;
    } else {
        introHeading.style.marginBottom = `${pageY * .1}px`;
    }

    let aboutImage = document.querySelector(".about-hero-image");
    console.log(`center ${((pageY * 0.1) / 100)}px`);
    if (windowSize > 3100) {
        aboutImage.style.backgroundPosition = `center -${((pageY * 0.1) / 100) * 2}vw`
    } else if (windowSize > 1024) {
        aboutImage.style.backgroundPosition = `center -${((pageY * 0.1) / 100) * 3}vw`
    } else if (windowSize <= 1024) {
        aboutImage.style.backgroundPosition = `center -${((pageY * 0.1) / 100) * 10}vw`
    }

})
