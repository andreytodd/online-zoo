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

// Adding orange circles

const circles = document.querySelectorAll('.yellow-circle')
let pandas = document.getElementById('days')
let donationAmount = document.querySelectorAll('.donation-amount')


let choose = (data) => {
    circles.forEach(circle => {
        let child = circle.children[0]
        child.classList.add('hidden')
        if (circle.getAttribute('data-amount') === data) {
            child.classList.remove('hidden')
            pandas.innerHTML = data / 250
        }
    },
    donationAmount.forEach(usd => {
        usd.style.color = '#333B41'
        if (usd.getAttribute('data-usd') === data) {
            usd.style.color = '#FE9013'
        }
    })
    )
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