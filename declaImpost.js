let conclu = prompt("Deseja inserir os dados do contribuente? /n 1-Sim /n 2-Não");

let nome;
let cpf;
let renda;
let dependetes;
let result = "";
let denscont;
let total;
let rendaLiqui;
let rendaAnual;
let quant;

for (;conclu === "1";) {

    nome = prompt("Insira o nome do contribuente");
    cpf = prompt("Insira o CPF");
    renda = Number(prompt("Digite a renda mensal"));
    dependetes = prompt("Tem algum dependente ? /n 1-Sim /n 2-Não");

   rendaAnual = (renda * 12);

   if (dependetes === "1"){
    quant = Number(prompt("Quantos?"));
}

if(dependetes === "2"){
    quant = 0;
}

   denscont = ( quant - 110);

   rendaLiqui = rendaAnual - denscont

   
   if(rendaLiqui <= 900){
    total = rendaLiqui;
    aliquota = "insento";
   } 
   else if (rendaLiqui >= 901 &&  rendaLiqui <= 5000){
     total  = (rendaLiqui * 5 )/100;
    aliquota = "5%";
   }

   else if(rendaLiqui >= 5001 && rendaLiqui <= 10000){
    total = ( rendaLiqui * 10)/100;
    aliquota = "10%";
   }

   else if(rendaLiqui >= 10000){
    total  = (rendaLiqui * 15)/100;
    aliquota = "15%";
   }
    



    result += "Nome: " + nome + "</br>" + "CPF: " + cpf + "</br>" + "Renda: " + renda + "</br>" + 
    "Dependentes: " + dependetes + "</br>" + "Desconto: " + denscont + "</br>" + "Total de Impostos: " + 
    total + "</br>" + "Renda Liquida: " + rendaLiqui + "</br>" + "RendaAnual :" + rendaAnual + "</br>" + 
    "Quantidade: " + quant + "</br>" + "</br>";
      

    conclu = prompt("Deseja inserir os dados do contribuente? /n 1-Sim /n 2-Não");

}

document.getElementById("result").innerHTML = result;
