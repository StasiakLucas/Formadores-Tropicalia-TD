document.addEventListener('DOMContentLoaded', function(){

    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoAcessibilidade.addEventListener('click', function(){
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
    });

    let tamanhoAtualFonte = 1;

    const botaoAumentarFonte = document.getElementById('aumentar-fonte');
    const botaoDiminuirFonte = document.getElementById('diminuir-fonte');

    botaoAumentarFonte.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    botaoDiminuirFonte.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
});