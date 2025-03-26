document.addEventListener('DOMContentLoaded', function(){
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