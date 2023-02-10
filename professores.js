let result = prompt("Deseja cadastrar um professor? \n 1-Sim \n 2-Não");
let nome = "";
let endereco= "";
let cidade= "";
let uf= "";
let cep= "";
let telefone= "";
let cpf= "";
let rg= "";
let dataNas= "";
let gruaEsco= "";
let cursoFormou= "";
let professor = "";

for(;result === "1";){
    nome = prompt("Insira o nome do professor");
    endereco =prompt("Insira o endereço");
    cidade = prompt("Insira a idade");
    uf = prompt("Inisira o uf");
    cep = prompt("Inisra o cepf");
    rg = prompt("Insira o rg");
    dataNas = prompt("Insira a data de nascimento");
    gruaEsco = prompt("Insira o grua de escolaridade ");
    cursoFormou = prompt("Insira o curso em que se formou");


    professor += "Nome:" + nome + "</br>" + "Endereço:" + endereco + "</br>" + "Cidade:" + cidade + "</br>" + "UF:" + uf + "</br>"+
    "CEP:" + cep + "</br>" + "Telefone:" + telefone + "</br" + "CPF:" + cpf + "</br>" + "RG:" + rg + "</br>" + 
    "Data de Nascimento:" + dataNas + "</br>" + "Grau de Escolaridade:" + gruaEsco + "</br>" + "Curso em que se formou:" +
     cursoFormou + "</br>";
     
     result = prompt("Deseja castrar um novo professor? \n 1-Sim \n 2-Não");

}

document.getElementById("professor").innerHTML = professor;



