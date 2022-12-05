const circles = document.querySelectorAll('.yellow-circle')
let pandas = document.getElementById('days')
let donationAmount = document.querySelectorAll('.donation-amount')
const input = document.querySelector('.input-donate')

const donateBar = document.querySelector('.donate-payment-bar')
donateBar.addEventListener('click', function(event) {
    circles.forEach(circle => {
        let child = circle.children[0]
        child.classList.add('hidden')
        if (circle.getAttribute('data-amount') === event.target.dataset.amount) {
            child.classList.remove('hidden')
            pandas.innerHTML = event.target.dataset.amount / 250
        }
    },
    donationAmount.forEach(usd => {
        usd.style.color = '#333B41'
        if (usd.getAttribute('data-usd') === event.target.dataset.amount) {
            usd.style.color = '#FE9013'
            input.value = event.target.dataset.amount
        }
    })
    )
})

/* Burger menu */

const menu = document.querySelector('.navbar');
const burgerMenu = document.querySelector('.icon')
const heading = document.querySelector('.main-heading')
const pageMask = document.getElementById('page-mask')

function openMenu() {
    if (!menu.style.display) {
        menu.style.display = 'block'
        heading.style.color = '#FE9013'
        pageMask.style.display = 'block'
    } else if (menu.style.display === 'none') {
        menu.style.display = 'block'
        heading.style.color = '#FE9013'
        pageMask.style.display = 'block'
    } else {
        menu.style.display = 'none'
        heading.style.color = '#FFF'
        pageMask.style.display = 'none'
    }
}

window.onresize = function() {
    if (document.documentElement.clientWidth > 850) {
        menu.style.display = 'flex'
        heading.style.color = '#FFF'
        pageMask.style.display = 'none'
    } else {
        menu.style.display = 'none'
        heading.style.color = '#FFF'
        pageMask.style.display = 'none'
    }
};

burgerMenu.addEventListener('click', openMenu)

document.addEventListener('click', function handleClickOutsideMenu(event) {
    if (event.target.id == 'page-mask') {
        menu.style.display = 'none'
        heading.style.color = '#FFF'
        pageMask.style.display = 'none'
    }
  });

