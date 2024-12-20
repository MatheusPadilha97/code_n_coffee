// Hamburger Nav

const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")
const myContainer = document.querySelector(".container-principal")
const navLinks = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click", () => {
        nav.classList.toggle("active")
        
    })

    
navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });


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


// Carrossel

let radio = document.querySelector('.manual-btn')
let counter = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 4000) 

function proximaImg(){
    counter++

    if (counter > 3) {
        counter = 1
    }

    document.getElementById('radio'+counter).checked = true

}