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

/* === mouseover === */
const navlinks = document.querySelectorAll('a.nav-link');
navlinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        TweenMax.to(link, .25, {
            color: 'red',
        })
    })
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


