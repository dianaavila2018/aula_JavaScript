//alert("Primeiro JS")   // Gera um pop-up na tela - assim que abre a página

// var nome = "Diana";
// var idade = 36;
// var frase = "Não gosto do Brasil";

// //alert(nome + " tem " + idade + "anos");
// console.log(nome);
// console.log(idade + 2);
// console.log(frase.replace("Brasil","EUA"));
// console.log(frase.toUpperCase());


/*              LISTS              */
var lista = ["maca", 'laranja'];
// console.log(lista);
// console.log(lista[1]);
// lista.push('uva'); // adiciona uva à lista -  Para retirar uso o comando 'pop'
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.toString()[1]);
// console.log(lista.join(" - "));


/*              DICTIONARY              */
var fruta = {nome:"maça", cor:"vermelha"};
// console.log(fruta);
// console.log(fruta.nome);
// alert(fruta.cor);


/*              LIST AND DICTIONARY             */
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"banana", cor:"amarela"}];
// console.log(frutas);
// console.log(frutas[0].nome);
// alert(frutas[1].cor);


/*              IF - FOR  - WHILE             */
// var idade = prompt("Qual a sua idade?");
// if (idade > 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade")    
// }

// var count = 0;
// while(count < 5){
//     console.log(count);
//     count = count + 1; // count++
// }

// for (x = 0; x < 5; x++){
//     alert(x);
// }


/*              DATE             */
var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getDate());


// /*              FUNCTIONS             */
// function soma(x, y){
//     return x+y;
// }
// alert(soma(1,2));

// function repl(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }
// alert(repl("Oi Di", "Di", "Dani"));

// // Uma forma
// var val;
// function validar(idade){
//     if (idade > 18){
//         val = true
//     }
//     else {
//         val = false
//     }
//     return val;
// }
// var idade = prompt("Qual sua idade? ");
// validar(idade);
// console.log(val)

// // Outra forma, mas mesmo resultado
// function validar(idade){
//     var val;
//     if (idade > 18){
//         val = true
//     }
//     else {
//         val = false
//     }
//     return val;
// }
// var outro = prompt(" Idade ");
// console.log(validar(outro));

/*              Função do botão              */
function botao(){
    alert("Você clicou");
}

// function botao2(){
//     document.getElementById("b2");
//     console.log(document.getElementById("b2"));
// }

function botao2(){
    document.getElementById("b2").innerHTML = "<b>Obrigada</b>";
    console.log(document.getElementById("b2"));
}

function redirecionar(){
    window.open("https://www.udemy.com/");  // abre em outra página 
    window.location.href = "https://www.udemy.com/";  // abre na mesma página
}

// function trocar(){
//     document.getElementById("mouse").innerHTML = "Novo";
//     //alert("Trocar texto")
// }

// function voltar(){
//     document.getElementById("mouse").innerHTML = "Voltei";
// }

// Dessa forma não precisa de id
function trocar(elemento){
    elemento.innerHTML = "Passei";
}

function voltar(elemento){
    elemento.innerHTML = "Voltei";
}


function load(){
    alert("OK")
}


function change(elemento){
    console.log(elemento.value)
}