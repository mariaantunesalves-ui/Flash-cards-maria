function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
                    <h3>CATEGORIA</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p> PERGUNTA - escrever a pergunta</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p> RESPOSTA - escrever a resposta</p>
                    </div>
                </div>`
}