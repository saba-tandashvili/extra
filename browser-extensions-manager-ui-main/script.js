const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const sunmoon = document.querySelector(".sunmoon")

const everything = document.querySelector(".everything")

const head = document.querySelector(".head")
const logo1 = document.querySelector(".logo1")
const logo2 = document.querySelector(".logo2")

const all = document.querySelector(".all")
const active = document.querySelector(".active")
const inactive = document.querySelector(".inactive")

const list = document.querySelector(".list")

const extension = document.querySelectorAll(".extension")
const name = document.querySelectorAll(".name")
const remove = document.querySelectorAll(".remove")

const checkybox = document.querySelectorAll(".checkybox")

sunmoon.addEventListener('click', () => {
    sun.classList.toggle("sunz")
    moon.classList.toggle("moonz")
    sunmoon.classList.toggle("sunmoonz")

    head.classList.toggle("headz")
    logo1.classList.toggle("logo1z")
    logo2.classList.toggle("logo2z")

    all.classList.toggle("allz")
    active.classList.toggle("activez")
    inactive.classList.toggle("inactivez")

    list.classList.toggle("listz")

    
    extension.forEach(exts => {
        exts.classList.toggle("extensionz")
    })
    name.forEach(namz => {
        namz.classList.toggle("namz")
    })
    remove.forEach(removz => {
        removz.classList.toggle("removez")
    })

    everything.classList.toggle("everythingz")
})


remove.forEach(removet => {
    removet.addEventListener('click', () => {
        removet.parentNode.remove()
    })
})


active.addEventListener('click', () => {
    checkybox.forEach(checkyboxy => {
        checkyboxy.checked = true
    })
})
inactive.addEventListener('click', () => {
    checkybox.forEach(checkyboxy => {
        checkyboxy.checked = false
    })
})