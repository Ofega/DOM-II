// Your code goes here

const navlinks = document.querySelectorAll('a.nav-link');
const banner = document.querySelector('.intro > img');
const headline = document.querySelector('.intro > h2');
const buttons = document.querySelectorAll('.btn');

banner.setAttribute('id', 'dragTest');
banner.setAttribute('draggable', 'true');


// Event Listeners
navlinks.forEach(link => {
    link.addEventListener('mouseover', () => addColor(link, 'red'));
})

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

// window.addEventListener('load', () => {
//     alert('Page is fully loaded');
// });

buttons.forEach(btn => {
    // Make div focusable :)
    btn.setAttribute('tabIndex', 100);
    btn.addEventListener('focus', () => addColor(btn, 'red'));
});

window.addEventListener("resize", changeOpacity);

window.addEventListener('scroll', function() {
    pageYOffset > window.innerHeight ? 
        document.body.style.backgroundColor = '#17A2B8' : 
        document.body.style.backgroundColor = 'white' ;
});

window.addEventListener('wheel', function() {
    pageYOffset > window.innerHeight ? 
        document.body.style.border = '4px solid red' : 
        document.body.style.border = 'none' ;
});

document.body.addEventListener('keydown', e => {
    headline.textContent += `${e.key}`;
});

document.body.addEventListener('dblclick', function() {
    document.body.textContent = 'You clicked twice! Please refresh'
});




// Function
function addColor(el, color) {
    TweenMax.to(el, .25, {
        color: color,
    })
}

function changeOpacity() {
    TweenMax.to('body', .25, {
        opacity: '.7'
    })
}