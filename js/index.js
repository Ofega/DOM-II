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
