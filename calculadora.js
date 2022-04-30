
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('result');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorImc < 25){
            classificacao = 'com o peso ideal';
        } else if (valorImc < 30){
            classificacao = 'acima do peso';
        } else if (valorImc < 45) {
            classificacao = 'com obesidade grau I';
        }else if (valorImc < 40) {
            classificacao = 'com obesidade gau II';
        } else {
            classificacao = 'com obesidade grau III';
        }
            
            resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }


}

calcular.addEventListener('click.' imc);
