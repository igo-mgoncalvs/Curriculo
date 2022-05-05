const a = document.querySelector('.descricao__button')
const opcao = document.querySelector('.descricao__section')
const todasOpcoes = document.querySelectorAll('.options')
const portifolio = document.querySelector ('.descricao__portifolio')

var projetos = ['#', 'https://igo-mgoncalvs.github.io/AluraChallenge_Front-End/'];
var tamanhos = ['', '72%']


opcao.addEventListener ('change', () => {

    const opcaoSelecionada = opcao.selectedIndex

    a.classList.add ('ativa__button')
    a.href = projetos[opcaoSelecionada]

    if (opcaoSelecionada <= 0) {
        a.classList.remove ('ativa__button')
    }
    
    opcao.style.width = tamanhos[opcaoSelecionada]

    portifolio.style.width = opcao.style.width
})