const blusas = [
    {
        nome: "Camisa azul",
        valor: `R$ 35,00`,
        imagem: "./src/img/Camisetas/camisaAzul.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
    {
        nome: "Camisa Branca",
        valor: `R$ 35,00`,
        imagem: "./src/img/Camisetas/camisaBranca.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
    {
        nome: "Blusa colorida",
        valor: `R$ 35,00`,
        imagem: "./src/img/Camisetas/blusaColorida.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
    {
        nome: "Blusa vermelha",
        valor: `R$ 35,00`,
        imagem: "./src/img/Camisetas/blusaVermelha.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
    {
        nome: "Regata branca",
        valor: `R$ 35,00`,
        imagem: "./src/img/Camisetas/regataBranca.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
    {
        nome: "Regata verde",
        valor: `R$ 35,00`,
        imagem: "./src/img/Camisetas/regataVerde.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
]

const croppeds = [
    {
        nome: "Cropped azul",
        valor: `R$ 35,00`,
        imagem: "./src/img/Croppeds/croppedAzul.jpeg",
        adicionarAoCarrinho: "Adicionar ao carrinho" 
    },
    {
        nome: "Cropped onça",
        valor: `R$ 35,00`,
        imagem: "./src/img/Croppeds/croppedOnca.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
    {
        nome: "Cropped floral",
        valor: `R$ 35,00`,
        imagem: "./src/img/Croppeds/croppedAzulManga.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho" 
    },
    {
        nome: "Cropped Preto",
        valor: `R$ 35,00`,
        imagem: "./src/img/Croppeds/croppedPretoManga.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho" 
    },
    {
        nome: "Cropped manga",
        valor: `R$ 35,00`,
        imagem: "./src/img/Croppeds/croppedMangaLongaBufante.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho" 
    },
    {
        nome: "Cropped manga",
        valor: `R$ 35,00`,
        imagem: "./src/img/Croppeds/croppedMangaLongaPreto.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho" 
    },
]

const bodys = [
    {
        nome: "Body manga",
        valor: `R$ 35,00`,
        imagem: "./src/img/Bodys/bodyManga.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"  
    },
    {
        nome: "Body rosa",
        valor: `R$ 35,00`,
        imagem: "./src/img/Bodys/bodyMangaRosa.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho" 
    },
    {
        nome: "Body manga longa",
        valor: `R$ 35,00`,
        imagem: "./src/img/Bodys/bodyMangaLonga.jpg",  
        adicionarAoCarrinho: "Adicionar ao carrinho"
    },
    {
        nome: "Body manga longa",
        valor: `R$ 35,00`,
        imagem: "./src/img/Bodys/bodyMangaLongaVinho.png",
        adicionarAoCarrinho: "Adicionar ao carrinho" 
    },
    {
        nome: "Body regata",
        valor: `R$ 35,00`,
        imagem: "./src/img/Bodys/bodyRegata.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"  
    },
    {
        nome: "Body regata",
        valor: `R$ 35,00`,
        imagem: "./src/img/Bodys/bodyRegatinha.jpg",
        adicionarAoCarrinho: "Adicionar ao carrinho"  
    },
]

function criando(objeto){
    //CRIAR TAGS DO TEMPLATE/ ADICIONANDO CLASSES
    let li = document.createElement("li")
    let img = document.createElement("img")
    let pNome = document.createElement("p")
    let pValores = document.createElement("p")
    let botao = document.createElement("button")
    let div = document.createElement("div")
    let figure = document.createElement("figure")
    
    //ADICIONANDO CLASSES TAGS
    li.classList.add("imagem")
    pNome.classList.add("nomeRoupas")
    pValores.classList.add("valor")
    div.classList.add("descricaoProdutos")
    botao.classList.add("adicionarAoCarrinho")

    //ALIMENTAR TAGS COM INFORMAÇÕES
    img.src = objeto.imagem
    pNome.innerText = objeto.nome
    pValores.innerText = objeto.valor
    botao.innerText = objeto.adicionarAoCarrinho

    //MONTAR TEMPLATE
    div.append(pNome, pValores, botao)
    figure.append(img)
    li.append(figure, div)

    return li
}

function produtosBlusa(array){
    let blusas = document.querySelector(".blusas")
    for(let i = 0; i < array.length; i++){
        blusas.append(criando(array[i]))
    }
}
produtosBlusa(blusas)

function produtosCropped(pecas){
    let croppeds = document.querySelector(".croppeds")
    for(let j = 0; j < pecas.length; j++){
        croppeds.append(criando(pecas[j]))
    }
}
produtosCropped(croppeds)

function produtosBody(produtos){
    let bodys = document.querySelector(".bodys")
    for(let l = 0; l < produtos.length; l++){
        bodys.append(criando(produtos[l]))
    }
}
produtosBody(bodys)



