/*
Manipulando o DOM com JavaScript
*/

// Em JavaScript usamo o tipo VAR (let e const) que é dinâmico
function valorInput(valor) {
    // Declaração das variáveis e Atribuição de valores
    texto = document.getElementById('nome').value;
    alert("Sem parâmetros: " + texto);
    alert("Com parâmetros: " + valor.value);

    // A mesma variável pode receber valores numéricos
    texto = 55;
    alert("A variável recebeu um valor numérico: " + texto);

    // A variável recebeu um valor decimal
    texto = 0.23;
    alert("A variável recebeu um valor decimal: " + texto);

    // A variável recebeu um valor booleano
    texto = true;
    alert("A variável recebeu um valor booleano: " + texto);
}

// Transformar em Maiúsculas (e Minuúsculas)
function toUpper() {
    var texto = document.getElementById('texto').value;
    texto = texto.toUpperCase();
    alert("Texto em UpperCase: " + texto);

    texto = texto.toLowerCase();
    alert("Texto em LowerCase: " + texto);
    // Padrão de nomenclatura: camelCase
    // Que são as corcoas dos camelos
}

// Calcular a Média das Notas
function calcularMedia() {
    // 1. Declaração das variáveis e atribuição de valores
    var nota1 = document.getElementById('nota1').value;
    // var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var extra = document.getElementById('extra').value;
    var media;
    

    // 2. Cálculos e Verificações
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    media = parseFloat(media);

    media = (nota1 + nota2 + nota3) / 3 + extra;

    console.log(media);

    /* Precedência
    ( )  o que estiver dentro dos parênteses
    * / %   multiplicação, divisão e mod (divisão com resto)
    + - adição e subtração */

    document.getElementById('resultado').innerHTML = "Resultado: " + media;
}