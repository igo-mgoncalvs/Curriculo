const menuHome = document.querySelector ('.menu__home')
const menuExperiencia = document.querySelector ('.menu__experiencia')
const menuFormação =  document.querySelector ('.menu__formação')
const menuContato = document.querySelector ('.menu__contato')
const menuRedes = document.querySelector ('.menu__redes')


const home = document.querySelector ('.menu__foto')
const experiencia = document.querySelector ('.experiencia')
const formacao = document.querySelector ('.formacao')
const contato = document.querySelector ('.contato')


menuHome.addEventListener ('click', () =>{
    home.classList.remove ('disable')
    experiencia.classList.add ('disable')
    formacao.classList.add ('disable')
    contato.classList.add ('disable')
    menuRedes.classList.remove ('disable')
})

menuExperiencia.addEventListener ('click', () =>{
    home.classList.add ('disable')
    experiencia.classList.remove ('disable')
    formacao.classList.add ('disable')
    contato.classList.add ('disable')
    menuRedes.classList.remove ('disable')
})

menuFormação.addEventListener ('click', () =>{
    home.classList.add ('disable')
    experiencia.classList.add ('disable')
    formacao.classList.remove ('disable')
    contato.classList.add ('disable')
    menuRedes.classList.remove ('disable')
})

menuContato.addEventListener ('click', () =>{
    home.classList.add ('disable')
    experiencia.classList.add ('disable')
    formacao.classList.add ('disable')
    contato.classList.remove ('disable')
    menuRedes.classList.add ('disable')
})



menuHome.addEventListener ('click', () =>{
    menuHome.classList.add ('ativa')
    menuExperiencia.classList.remove ('ativa')
    menuFormação.classList.remove ('ativa')
    menuContato.classList.remove ('ativa')
})

menuExperiencia.addEventListener ('click', () =>{
    menuHome.classList.remove ('ativa')
    menuExperiencia.classList.add ('ativa')
    menuFormação.classList.remove ('ativa')
    menuContato.classList.remove ('ativa')
})

menuFormação.addEventListener ('click', () =>{
    menuHome.classList.remove ('ativa')
    menuExperiencia.classList.remove ('ativa')
    menuFormação.classList.add ('ativa')
    menuContato.classList.remove ('ativa')
})

menuContato.addEventListener ('click', () =>{
    menuContato.classList.remove ('ativa')
    menuExperiencia.classList.remove ('ativa')
    menuFormação.classList.remove ('ativa')
    menuContato.classList.add ('ativa')
})
