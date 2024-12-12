// Hamburger Nav

const hamburger = document.querySelector(".hamburger")

const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")
})

// Animação scroll Produtos

const myObserverProducts = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elementsProdutcs = document.querySelectorAll('.hidden-produtos')

elementsProdutcs.forEach((element) => myObserverProducts.observe(element))


// Animação scroll Sobre Nós

const myObserverSobre = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('sobre-show')
        } else {
            entry.target.classList.remove('sobre-show')
        }
    })
})

const elementsSobre = document.querySelectorAll('.sobre-nos')

elementsSobre.forEach((elementSobre) => myObserverSobre.observe(elementSobre))