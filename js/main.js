const menus = document.querySelectorAll('.menu__paginas___link');
const corpo = document.querySelectorAll('.corpo');

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

        if (clickPagina <= 3) {
            const contatos = document.querySelector('.menu__redes')

            contatos.classList.remove ('disabled')
        }
        
        if (clickPagina >= 3) {
            
            const contatos = document.querySelector('.menu__redes')
            
            contatos.classList.add ('disabled');
        } 

        if (viewport == 768 || viewport < 900) {
        
            const descricao = document.querySelector ('.descricao')

            if (clickPagina > 0) {
                descricao.classList.add ('disabled')
            }

            if (clickPagina == 0) {
                descricao.classList.remove('disabled')
            }
        }
    }
}