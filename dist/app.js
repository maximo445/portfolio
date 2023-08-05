const hb_menu = document.querySelector('.hamburger-menu');
const opening = document.querySelector('#opening');
const website_body = document.querySelector('#website-body .container');
const header_nav = document.querySelector('#opening .container nav');
const navigation = document.querySelector('#navigation nav');

// M letter on name logo 
const one = document.querySelector('.m-one');
const two = document.querySelector('.m-two');
const three = document.querySelector('.m-three');

//center image
const show_text = document.querySelector('.show-text');
const art_image = document.querySelector('.art');
const regular_image = document.querySelector('.regular');

let previousClientX = null;

const reduceWidth = (element, by) => {
    const currentWidth = element.offsetWidth;
    const newWidth = currentWidth - by;
    element.style.width = `${newWidth}px`;
}

const increaseWidth = (element, by) => {
    const currentWidth = element.offsetWidth;
    const newWidth = currentWidth + by;
    element.style.width = `${newWidth}px`;
}

hb_menu.addEventListener('click', () => {
    opening.classList.toggle('push-to-side');
    one.classList.toggle('disolve');
    two.classList.toggle('disolve');
    if (opening.classList.contains('push-to-side')) {
        header_nav.style.paddingRight = '120px';
        navigation.style.opacity = '1';
        three.style.opacity = '1';
    } else {
        header_nav.style.paddingRight = '40px';
        navigation.style.opacity = '0';
        three.style.opacity = '0';
    }
})

const currentWidth = parseInt(window.getComputedStyle(art_image).width);

const currentMargin = parseInt(window.getComputedStyle(art_image).marginLeft);

// show text current left
const currentLeft = parseInt(window.getComputedStyle(show_text).left);

opening.addEventListener('mousemove', (e) => {


    // console.log(`width: ${currentWidth}, margin: ${currentMargin}, left: ${currentLeft}`);

    const currentClientX = e.clientX;

    console.log(currentClientX);
    console.log(parseInt(window.getComputedStyle(opening).width));

    const rightOrLeft = parseInt(window.getComputedStyle(opening).width)/2;

    let increaseFactor = currentClientX - rightOrLeft;

    // if (increaseFactor > 0) {
    //     increaseFactor -= 150;
    // } else {
    //     increaseFactor += 150;
    // }

    setTimeout(() => {
        const newWidth = currentWidth + increaseFactor;
        art_image.style.width = `${currentWidth - increaseFactor}px`;
            
    
        const newMargin = currentMargin + increaseFactor;
        art_image.style.marginLeft = `${currentMargin - increaseFactor}px`;
            
        const newLeft = currentLeft + increaseFactor;
        show_text.style.left = `${-increaseFactor/5}px`;
    }, 100)



    

    console.log(increaseFactor);

    // if (previousClientX !== null) {

    //     if (currentClientX < previousClientX) {            

    //         const newWidth = currentWidth + 1;
    //         art_image.style.width = `${newWidth}px`;
            

    //         const newMargin = currentMargin + 1;
    //         art_image.style.marginLeft = `${newMargin}px`;
           
    //         const newLeft = currentLeft + 1;
    //         show_text.style.left = `${newLeft}px`;
                       

    //     } else if (currentClientX > previousClientX) {

    //         const newWidth = currentWidth - 1;
    //         art_image.style.width = `${newWidth}px`;
            
    //         const newMargin = currentMargin - 1;
    //         art_image.style.marginLeft = `${newMargin}px`;

    //         const newLeft = currentLeft - 1;
    //         show_text.style.left = `${newLeft}px`;       
            
    //     } 

    // }
    previousClientX = currentClientX;
})


    



