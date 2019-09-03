// Your code goes here
// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick

function addColor(el, color) {
    TweenMax.to(el, .25, {
        color: color,
    })
}

function changeColor() {
    TweenMax.to('body', .25, {
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
    })
}

/* === mouseover === */
const navlinks = document.querySelectorAll('a.nav-link');
navlinks.forEach(link => {
    link.addEventListener('mouseover', () => addColor(link, 'red'));
})

/* === Drag & Drop === */
const banner = document.querySelector('.intro > img');

banner.setAttribute('id', 'dragTest');
banner.setAttribute('draggable', 'true');

banner.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', event.target.id);
})
document.body.addEventListener('dragover', e => {
    e.preventDefault();
});
document.body.addEventListener('drop', e => {
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = e.target;
    
    dropzone.appendChild(draggableElement);
    e.dataTransfer.clearData();
});

/* === load === */
// window.addEventListener('load', () => {
//     alert('Page is fully loaded');
// });

/* === focus === */
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    // Make div focusable :)
    btn.setAttribute('tabIndex', 100);
    btn.addEventListener('focus', () => addColor(btn, 'red'));
})

/* === resize === */
// Hi rory, this causes the page font color to flash repeatedly. I'm noting it incase it makes you uncomfortable.
window.addEventListener("resize", changeColor);