const content = document.querySelector('.header__menu-content');
const line = document.querySelector('.header__menu-line');
const item = document.querySelector('.header__menu-item');
line.style.width = `0`
item.style.color = 'var(--color-button-text)'

function moveColor() {
    item.style.color = `rgb(248, 118, 148)`;
}
function moveLine() {
    line.style.width = `30%`;
    // const lineWidth = 0;
    // for (lineWidth; lineWidth < 30; lineWidth++) {
    //     line.style.width = lineWidth;
    // }
}
function exitLine() {
    line.style.width = `0`;
    item.style.color = `var(--color-button-text)`;
}

content.addEventListener('mouseover', moveColor, true);
content.addEventListener('mouseover', moveLine, true);
content.addEventListener('mouseout', exitLine, true);