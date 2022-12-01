// import animalCards from './cards.js'

// Navbar elements active state change

let navlinks = document.querySelectorAll('.navlink')

function clicked(data) {
  navlinks.forEach(navlink => navlink.classList.remove('active'))
  navlinks.forEach(navlink => {
      if (navlink.getAttribute('data-text') === data) {
          navlink.classList.add('active')
      }
  })
}

const navbar = document.querySelector('.navbar')


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

/* Orange circles Donate page */

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

/* Randomize Animal Cards */

/*

function shuffleAnimalCards() {
    const shuffled = animalCards.sort(() => 0.5 - Math.random());

    let selected = shuffled.slice(0, 1);

    return selected
}

function insertAnimalCard(image, description) {
    let animalCards = document.querySelector('.animals-cards')
    animalCards.insertAdjacentHTML('afterbegin', `
    <div class="profile-card">
    <div class="profile-image">
      <img
        src="${image}"
        alt="giant pandas"
      />
    </div>
    <div class="profile-description">
      <div class="profile-text">
        <h5>Giant Pandas</h5>
        <p>${description}</p>
      </div>
      <div class="profile-logo">
        <img
          src="../../assets/images/banana-icon.png"
          alt="banana icon"
        />
      </div>
    </div>
  </div>
    `)
}

shuffleAnimalCards().forEach(animal => {
    insertAnimalCard(animal.image, animal.description)
})


/*
<div class="profile-card">
              <div class="profile-image">
                <img
                  src="../../assets/images/giant-pandas-card.png"
                  alt="giant pandas"
                />
              </div>
              <div class="profile-description">
                <div class="profile-text">
                  <h5>Giant Pandas</h5>
                  <p>Native to Southwest China</p>
                </div>
                <div class="profile-logo">
                  <img
                    src="../../assets/images/banana-icon.png"
                    alt="banana icon"
                  />
                </div>
              </div>
            </div>
*/
