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

const submitBtn = document.getElementById('submit')

const emailInp = document.getElementById('email')

emailInp.onkeyup = () => {
    if (!emailInp.checkValidity()) {
        submitBtn.style.border = '1px solid #D31414'
        submitBtn.style.color = '#D31414'
    } else {
        submitBtn.style.border = '1px solid black'
        submitBtn.style.color = 'black'
    }
}


const burgerMenu = document.querySelector('.icon')

function openMenu() {
    var menu = document.querySelector('.navbar')
    var heading = document.querySelector('.main-heading')
    if (!menu.style.display) {
        menu.style.display = 'block'
        heading.style.color = '#FE9013'
    } else if (menu.style.display === 'none') {
        menu.style.display = 'block'
        heading.style.color = '#FE9013'
    } else {
        menu.style.display = 'none'
        heading.style.color = '#FFF'
    }
}

window.onresize = function() {
    var menu = document.querySelector('.navbar')
    var heading = document.querySelector('.main-heading')
    if (document.documentElement.clientWidth > 850) {
        menu.style.display = 'flex'
        heading.style.color = '#FFF'
    } else {
        menu.style.display = 'none'
        heading.style.color = '#FFF'
    }
};

burgerMenu.addEventListener('click', openMenu)
