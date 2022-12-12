import animalCards from './cards.js'

// Navbar elements active state change

let navlinks = document.querySelectorAll('.navlink')
const navbar = document.querySelector('.navbar')

navbar.addEventListener('click', function(event) {
  navlinks.forEach(navlink => navlink.classList.remove('active'))
  navlinks.forEach(navlink => {
    if (navlink.getAttribute('data-text') === event.target.dataset.text) {
        navlink.classList.add('active')
    }
})
})

/* Form */

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
        let cards = document.querySelectorAll('.testimonials-card')
        cards.forEach(card => card.classList.remove('show'))
    }
  });

/* Randomize and insert Animal Cards */

const carousel = document.querySelector('.animals-cards')

carousel.insertAdjacentHTML('beforeend', `
      <div class="slide slide1 fade" data-index="1"></div>
      <div class="slide slide2 fade" data-index="1"></div>
    `)

function randomSlides() {
  const shuffled = animalCards.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 6);
  return selected
}

const slide1 = document.querySelector('.slide1')
const slide2 = document.querySelector('.slide2')
const prev = document.querySelector('.arrow-left')
const next = document.querySelector('.arrow-right')



function shuffleSlideRight() {
  next.removeEventListener('click', shuffleSlideRight)
  slide1.style.transform = `translateX(${carousel.offsetWidth}px)`
  setTimeout(() => {
    slide1.innerHTML = ''
    randomSlides().forEach(animal => {
      insertAnimalCard(slide1, animal.image, animal.name, animal.description, animal.descriptionImg)
  })
  }, 400)
  setTimeout(() => {
    slide1.style.transform = `translateX(0)`
}, 400)
  setTimeout(() => {
    next.addEventListener('click', shuffleSlideRight)
  }, 800)
}

function shuffleSlideLeft() {
  prev.removeEventListener('click', shuffleSlideLeft)
  slide1.style.transform = `translateX(-${carousel.offsetWidth}px)`
  setTimeout(() => {
    slide1.innerHTML = ''
    randomSlides().forEach(animal => {
      insertAnimalCard(slide1, animal.image, animal.name, animal.description, animal.descriptionImg)
  })
  }, 400)
  setTimeout(() => {
  slide1.style.transform = `translateX(0)`
}, 400)
  setTimeout(() => {
    prev.addEventListener('click', shuffleSlideLeft)
  }, 800)
}

prev.addEventListener('click', shuffleSlideLeft)
next.addEventListener('click', shuffleSlideRight)

randomSlides().forEach(animal => {
  insertAnimalCard(slide1, animal.image, animal.name, animal.description, animal.descriptionImg)
})


function insertAnimalCard(slide, image, name, description, descriptionImg) {
    slide.insertAdjacentHTML('afterbegin', `
    <div class="profile-card">
    <div class="profile-image">
      <img
        src="${image}"
        alt="giant pandas"
      />
    </div>
    <div class="profile-description">
      <div class="profile-text">
        <h5>${name}</h5>
        <p>${description}</p>
      </div>
      <div class="profile-logo">
        <img
          src="${descriptionImg}"
          alt="banana icon"
        />
      </div>
    </div>
  </div>
    `)
}


// next.addEventListener('click', function() {
//   if (index >= slides.length) {
//     index = 1
//   } else {
//     index += 1
//   }
//   slides.forEach(slide => {
//     if (slide.dataset.index == index) {
//       slide.style.display = 'flex'
//       slide.style.background = '#FFF'
//     } else {
//       slide.style.display = 'none'
//     }
//   })
// })


/* Progress slider */

const slider = document.querySelector('.progress-slider')
const testimonials = document.querySelector('.testimonials-cards-block')
const reviews = document.querySelectorAll('.testimonials-card')

// Hide reviews

for (let i = 4; i < reviews.length; i++) {
  testimonials.children[i].style.display = 'none'
}

// Scroll reviews

function scrollReviews(n) {
  for (let i = 0; i < reviews.length; i++) {
    testimonials.children[i].style.display = 'none'
  }
  for (let i = n; i < n + 4; i++) {
    testimonials.children[i].style.display = 'block'
  }
}

slider.oninput = function() {
  if (this.value == 0) {
    scrollReviews(0)
  }
  if (this.value == 1) {
    scrollReviews(1)
  }
  if (this.value == 2) {
    scrollReviews(2)
  }
  if (this.value == 3) {
    scrollReviews(3)
  }
  if (this.value == 4) {
    scrollReviews(4)
  }
  if (this.value == 5) {
    scrollReviews(5)
  }
  if (this.value == 6) {
    scrollReviews(6)
  }
  if (this.value == 7) {
    scrollReviews(7)
  }

}

document.onclick = function(event) {

  if (window.innerWidth <= 850) {
    let clickedCard = event.target.closest('.testimonials-card')
    clickedCard.classList.add('show')
    if (pageMask.style.display = 'none') {
      pageMask.style.display = 'block'
    } else {
      pageMask.style.display = 'none'
    }
  }
}
