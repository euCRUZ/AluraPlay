async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const dados = await conexao.json()
    return dados
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo
}