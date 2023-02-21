const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
let livros = []

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    // console.table(livros)
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}