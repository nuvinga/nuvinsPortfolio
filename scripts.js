window.addEventListener("scroll", function() {

    // let carousellImage = document.querySelector(".project-image");
    // let carousellCell = document.querySelector(".carousel-cell");
    // let imageHeight = window.getComputedStyle(document.getElementById('project-image'));
    // carousellCell.style.height = `${carousellImage.style.height}px`;
    // console.log(carousellImage.get);
    // console.log('HELOO' + carousellCell.style.height);


    let pageY = window.pageYOffset;
    let aboutHeading = document.querySelector(".about-main-title");
    let windowSize = window.innerWidth;
    if (windowSize > 1024) {
        aboutHeading.style.marginLeft = `${100 + pageY * -.15}px`;
    }

    let introHeading = document.querySelector(".hero-intro ");
    if (windowSize > 1024) {
        introHeading.style.marginBottom = `${-200 + pageY * .18}px`;
    } else {
        introHeading.style.marginBottom = `${pageY * .1}px`;
    }

    let aboutImage = document.querySelector(".about-hero-image");
    if (windowSize > 3100) {
        aboutImage.style.backgroundPosition = `center -${((pageY * 0.1) / 100) * 2}vw`
    } else if (windowSize > 1024) {
        aboutImage.style.backgroundPosition = `center -${((pageY * 0.1) / 100) * 3}vw`
    } else if (windowSize <= 1024) {
        aboutImage.style.backgroundPosition = `center -${((pageY * 0.1) / 100) * 10}vw`
    }


    let projectsBackground = document.querySelector(".brag-container");
    if (windowSize > 5000) {
        projectsBackground.style.marginBottom = `${3000 + pageY * -.15}px`;
    } else if (windowSize > 4000) {
        projectsBackground.style.marginBottom = `${2200 + pageY * -.15}px`;
    } else if (windowSize > 2500) {
        projectsBackground.style.marginBottom = `${1600 + pageY * -.15}px`;
    } else if (windowSize > 1800) {
        projectsBackground.style.marginBottom = `${1200 + pageY * -.15}px`;
    } else  if (windowSize > 1024) {
        projectsBackground.style.marginBottom = `${900 + pageY * -.15}px`;
    }


    let projectsTitle = document.querySelector(".projects-main-title");
    if (windowSize > 2800) {
        projectsTitle.style.marginLeft = `${2000 + pageY * -.15}px`;
    } else if (windowSize > 1024) {
        projectsTitle.style.marginLeft = `${600 + pageY * -.15}px`;
    }

    let talkTitle = document.querySelector(".talk-main-title");
    if (windowSize > 2800) {
        talkTitle.style.marginLeft = `${2000 + pageY * -.15}px`;
    } else if (windowSize > 1024) {
        talkTitle.style.marginLeft = `${1000 + pageY * -.15}px`;
    }

    let carouselImages = document.querySelector(".image-box");
    let margin = (100+ 1000 + pageY * -.15);
    if (margin >= 0) {
        if (windowSize > 2800) {
            carouselImages.style.marginTop = `-${2000 + pageY * -.15}px`;
        } else if (windowSize > 1024) {
            carouselImages.style.marginTop = `${100+ 1000 + pageY * -.15}px`;
        } else if (windowSize <= 1024) {
            carouselImages.style.backgroundPosition = `${100+ 1000 + pageY * -.15}px`
        }
    }else {
        carouselImages.style.marginTop = `10vh`;
    }

    let projectsBottom = document.querySelector(".git-hub-brag");
    let paddings = (260+ 1000 + pageY * -.15);
    // console.log(`${260+ 1000 + pageY * -.15}px`);
    if (paddings > 0) {
        if (windowSize > 2800) {
            projectsBottom.style.paddingBottom = `-${2000 + pageY * -.15}px`;
        } else if (windowSize > 1024) {
            projectsBottom.style.paddingBottom = `${200+ 1000 + pageY * -.15}px`;
        }
    } else {
        projectsBackground.style.paddingBottom = `0px`;
    }

})
