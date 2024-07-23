const get = element => document.getElementById(element)  // create re-usable selector for getElementById

let open = get('menu-btn')     // get menu-btn element
let nav = get('nav')           // get nav element
let exit = get('exit-btn')     // get exit-btn element

// click event listener for open element
open.addEventListener('click', () => {
    nav.classList.add('open-nav')       // add open-nav class on the nav element
})

// click event listener for exit element
exit.addEventListener('click', () => {
    nav.classList.remove('open-nav')    // remove open-nav class on the nav element
})