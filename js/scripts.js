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