const menus = document.querySelectorAll('.menu__paginas___link');
const corpo = document.querySelectorAll('.corpo');
const contatos = document.querySelectorAll('.menu__redes-link')

const viewport = document.defaultView.innerWidth

for (let clickPagina = 0; clickPagina < menus.length;clickPagina++) {
    const pagina = menus[clickPagina]
    
    pagina.onclick = function (){
        
        const menuAtivo = document.querySelector('.ativa')
        menuAtivo.classList.remove ('ativa')
        menus[clickPagina].classList.add ('ativa')

        const paginaAtiva = document.querySelector('.ativa-main')

        paginaAtiva.classList.remove ('ativa-main')
        corpo[clickPagina + 1].classList.add ('ativa-main')

        contatos.forEach(desativa =>{
                if(clickPagina == 3){
                desativa.classList.add('disabled')
            } else{
            contatos.forEach(ativa =>{
                ativa.classList.remove('disabled')
            })}
        })

        if (viewport == 768 || viewport < 900) {
        
            const descricao = document.querySelector ('.descricao')

            if (clickPagina > 0) {
                descricao.classList.add ('disabled-descricao')
            }

            if (clickPagina == 0) {
                descricao.classList.remove('disabled-descricao')
            }
        }
    }
}