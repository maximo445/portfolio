const hb_menu = document.querySelector('.hamburger-menu');
const opening = document.querySelector('#opening');
const website_body = document.querySelector('#website-body .container');

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
    if (opening.classList.contains('push-to-side')) {
        reduceWidth(website_body, 100);
    } else {
        increaseWidth(website_body, 100); 
    }
})
    



