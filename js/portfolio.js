const a = document.querySelector('.descricao__button')
const opcao = document.querySelector('.descricao__section')

var projetos = [
    '#', 
    'https://igo-mgoncalvs.github.io/AluraChallenge_Front-End/',
    'https://igo-mgoncalvs.github.io/aluramidi/',
    'https://igo-mgoncalvs.github.io/Projeto-Apeperia-Alura/',
    'https://igo-mgoncalvs.github.io/Posicione-elementos-com-flexbox/',
    'https://igo-mgoncalvs.github.io/alura-studies/',
    'https://igo-mgoncalvs.github.io/aluroni/'
];

opcao.addEventListener ('change', () => {

    const opcaoSelecionada = opcao.selectedIndex

    a.classList.add ('ativa__button')
    a.href = projetos[opcaoSelecionada]

    if (opcaoSelecionada <= 0) {
        a.classList.remove ('ativa__button')
    }
})