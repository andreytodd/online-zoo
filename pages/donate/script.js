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

