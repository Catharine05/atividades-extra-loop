let conclu =prompt("Deseja cadastrar uma diciplina? \n 1-Sim \n 2-Não");

let nome;
let descricao; 
let freq;
let nota; 
let result = "";

//para armazenar os dados 

for (;conclu ==="1" ;) {
    nome  = prompt("Insira o nome da diciplina");
    descricao = prompt("Descrição da diciplina");
    freq = prompt("Insira a frequencia");
    nota = prompt("Digite a nota minima para aprovação");
    
    result += "Nome: " + nome + "</br>" + "Descrição: " + descricao + "</br>" + "Frequencia: " + freq + "</br>" + 
    "Nota: " + nota + "</br>" + "</br>";

    conclu = prompt("Deseja cadastrar uma diciplina? \n 1-Sim \n 2-Não");

}

document.getElementById("result").innerHTML = result;