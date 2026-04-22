let salarioBruto = parseFloat(prompt("Digite o seu salário bruto mensal (ex: 15,000.00:"));
let imposto = 0;
let aliquota = "";

if (salarioBruto <= 5000.00) {
    imposto = 0;
    aliquota = "Insento";
} else if (salarioBruto >= 5000.01 ) {
    imposto = salarioBruto * 0.075; //7.5%
    aliquota = "Alíquota de 7,5%"
}  else if (salarioBruto >= 6500.01 && salarioBruto <= 8000.00) {
    imposto = salarioBruto * 0.15; //15%
    aliquota = "Alíquota de 15%" 
}   else if (salarioBruto >= 8000.01 && salarioBruto <= 10000.00) {
    imposto = salarioBruto * 0.225; //25,5%
    aliquota = "Alíquota de 25,5%"
}   else if (salarioBruto > 10000.00) {
    imposto = salarioBruto * 0.275; //27,5%
    aliquota = "Alíquota de 27,5%"
}

let salarioLiquido = salarioBruto - impotsto; //Calculo salario liquido 
alert ("---------------Recibo de Pagamento---------------");
alert ('Salário Bruto: R$ ${salarioBurto.toFixed(2)}\nAlíquota:${Alíquota}\nValor desconto de IR: R$ ${imposto.to d(2)}\nSalário Líquido: R$ ${salarioLiquido.ToFixed(2)}');