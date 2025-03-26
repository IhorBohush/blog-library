const content = document.querySelector('.header__menu-content');
const line = document.querySelector('.header__menu-line');
const item = document.querySelector('.header__menu-item');
line.style.width = `0`;
item.style.color = 'var(--color-button-text)';

// function moveColor() {
//     item.style.color = `rgb(248, 118, 148)`;
// }
function moveLine() {
    item.style.color = `rgb(248, 118, 148)`;
    for (let i = 0; i < 30; i++) {
        line.style.width = `${i}%`;
        setTimeout(moveLine, 1000);
        // await sleep(1);
    }
    // const lineWidth = 0;
    // for (lineWidth; lineWidth < 30; lineWidth++) {
    //     line.style.width = lineWidth;
    // }
}
function exitLine() {
    line.style.width = `0`;
    item.style.color = `var(--color-button-text)`;
}

// item.addEventListener('mouseover', moveColor, true);
item.addEventListener('mouseover', moveLine, true);
item.addEventListener('mouseout', exitLine, true);