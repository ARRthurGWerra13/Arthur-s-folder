
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")


if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}


if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}



const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))


const scrollHeader = () => {
    const header = document.getElementById("header")
    if (this.scrollY >= 50) {
        header.classList.add('bg-header');
    } else {
        header.classList.remove('bg-header')
    }
}
window.addEventListener("scroll", scrollHeader)


const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}
window.addEventListener("scroll", scrollActive)




const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll")
    } else {
        scrollUp.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollUp)


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home__data , .footer__container , .footer__group`)
sr.reveal(`.home__img`,{delay:700,origin:'botton'})
sr.reveal(`.logos__img , .program__card , .pricing__card`,{interval:100})
sr.reveal(`.choose__img , .calculate__content`,{origin:'left'})
sr.reveal(`.choose__content,.calculate__img`,{origin:'right'})





const calculateForm = document.getElementById("calculate-form"),
    calculateCm = document.getElementById("calculate-cm"),
    calculateKg = document.getElementById("calculate-kg"),
    calculateMessage = document.getElementById("calculate-message")

const calculateBmi = (e) => {
    e.preventDefault()

    
    if (calculateCm.value === '' || calculateKg === '') {
       
        calculateMessage.classList.remove("color-green")
        calculateMessage.classList.add("color-red")

        calculateMessage.textContent = 'Escribe tu altura y tu peso por favor '

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))


        
        if (bmi < 18.5) {
            
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu IMC Es ${bmi} Estas por Debajo de tu peso saludable.`
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu IMC Es ${bmi} Estas saludable 🤩`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu IMC Es ${bmi} Estas por encima de tu peso Saludable.`
        }

        
        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }

}

calculateForm.addEventListener("submit", calculateBmi)


const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    
    if (contactUser.value === '') {
       
        contactMessage.classList.remove("color-green")
        contactMessage.classList.add("color-red")

        
        contactMessage.textContent = 'Debe introducir su dirección Tu email'

       
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {

        
        emailjs.sendForm('', '', '', '')
            .then(() => {
          
                contactMessage.classList.add("color-green")
                contactMessage.textContent = 'Se ha registrado correctamente'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)

            }, (error) => {
             
                alert('Algo salio mal', error)
            }
            )

        
        contactUser.value = ''
    }
}

contactForm.addEventListener("submit", sendEmail)
