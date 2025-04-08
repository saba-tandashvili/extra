const body = document.querySelector("body")

const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const sunmoon = document.querySelector(".sunmoon")

const everything = document.querySelector(".everything")

const head = document.querySelector(".head")
const container = document.querySelector(".container")


const logo1 = document.querySelector(".logo1")
const logo2 = document.querySelector(".logo2")



const list = document.querySelector(".list")

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


const all = document.querySelector('.all');
const active = document.querySelector('.active');
const inactive = document.querySelector('.inactive');

const extension = document.querySelectorAll('.extension');

function updateDisplay(filter) {
  extension.forEach(ext => {
    const checkbox = ext.querySelector('.checkybox');
    const isActive = checkbox.checked;

    if (filter === 'all') {
      ext.style.display = 'block';
    } else if (filter === 'active') {
      ext.style.display = isActive ? 'block' : 'none';
    } else if (filter === 'inactive') {
      ext.style.display = isActive ? 'none' : 'block';
    }
  });
}

all.addEventListener('click', () => updateDisplay('all'));
active.addEventListener('click', () => updateDisplay('active'));
inactive.addEventListener('click', () => updateDisplay('inactive'));
