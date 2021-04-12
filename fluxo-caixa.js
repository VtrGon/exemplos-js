/* Sistema de Fluxo de Caixa

Crie um objeto que possuira duas propriedades, ambas do tipo array:

Receitas: [] 
Despesas: []

Agora crie uma funcao que ira calcular o total de receitas e despesas
 e ira mostrar uma mensagem se a familia esta com saldo positivo ou
  negativo seguido do valor do saldo */

var receitas = [10.5,10,10];
var despesas = [10,5, 30];



function saldo(rec, des) {
    var saldo = 0
    var sinal

    const entradas = rec.reduce((soma, currentElement) => soma + currentElement );
    const saidas = des.reduce((soma, currentElement) => soma + currentElement );

    saldo = entradas - saidas
    saldo > 0 ? sinal = true : sinal = false

    return {
        sinal,
        saldo
    }
}

var sinal = (saldo(receitas, despesas).sinal) ? "positivo" : "negativo"
var resultado = saldo(receitas, despesas).saldo

console.log(saldo(receitas, despesas))

console.log("Saldo da familia esta " + sinal + " com " + resultado + " BRL")