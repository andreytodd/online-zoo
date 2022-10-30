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