// Navbar elements active state change

let navlinks = document.querySelectorAll('.navlink')

let clicked = (data) => {
    navlinks.forEach(navlink => navlink.classList.remove('active'))
    navlinks.forEach(navlink => {
        if (navlink.getAttribute('data-text') === data) {
            navlink.classList.add('active')
        }
    })
}