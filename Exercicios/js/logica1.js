// JavaScript Document

//BLOCO 1: cálculo de áreas

function areaRet(){
	var base = prompt('Digite o valor da base do retângulo:');
	var altura = prompt('digite o valor da altura:');
	var resultado = base * altura;
	alert('A área do retângulo de base ' + base + ' e altura ' + altura + ' é: ' + resultado);
}//fecha area retangulo


// área do círculo

var circulo = document.getElementById('circulo').addEventListener('click', areaCir);
function areaCir(){
	var raio = prompt('Digite o valor do raio do círculo:');
	var resultado = 3.1416 * (raio * raio);
	alert('A área do círculo de raio ' + raio + ' é: ' + resultado);
}//fecha area circulo


//------------------------------------------------------
// bloco 2: idade em 2050

var btnIdade = document.querySelector('#idades').addEventListener('click',idades);
function idades(){
	var nome = document.getElementById('nome').value;
	var dataNasc = document.getElementById('ano-nasc').value;
	var idadeAtual = 2018 - dataNasc;
	var idade2050 = 2050 - dataNasc;
	var resposta;//será necessária? Nããããão!!!
	
	//Kátia, sua idade atual é 54 anos e em 2050 você terá XX anos.
	document.getElementById('resultado-paragrafo').textContent = nome + ', sua idade atual é ' + idadeAtual + ' anos.'; 
	
	document.getElementById('resultado-input').value = nome +', em 2050, você terá ' + idade2050 +' anos.';	
}//fecha idades


//------------------------------------------------------
//bloco 3: média de notas
/* 
	listener no botão, para escutar
	capturar os valores dos campos
	processar a conta
	mostrar o valor na saída
*/
var btnMedia = document.querySelector('#calcula-media').addEventListener('click', calcMedia);
function calcMedia(){
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);
	var n3 = parseFloat(document.getElementById('n3').value);
	var n4 = parseFloat(document.getElementById('n4').value);
	
	var media = (n1+n2+n3+n4)/4;
	
	document.getElementById('media').value = media;
	
}//fecha calc media


//------------------------------------------------------
// BLOCO 4: reajuste de salário

/*
	-preparar o botão para o disparo do evento, com o listener;
	-dar entrada nos valores necessários: salário e porcentagem de reajuste, fazendo o parseFloat;
	-fazer o cálculo: novo salário = salário * (porcentagem/100) + salário;
	-inserir o novo salário no campo de exibição;
*/
var btnSalario = document.querySelector('#calcula-salario').addEventListener('click', calcSalario);

function calcSalario(){
	var salario = parseFloat(document.getElementById('salario').value);
	var reajuste = parseFloat(document.getElementById('reajuste').value);
	var novoSalario = salario * (reajuste/100) + salario;
	alert(novoSalario);
	document.getElementById('novo-salario').value = novoSalario;
}//fecha calcula salário

//------------------------------------------------------
// BLOCO 5: venda de ingressos

var btnIngresso = document.querySelector('#calcula-ingressos').addEventListener('click', convites);

function convites(){
	
	var custo = parseFloat(document.getElementById('custo').value);
	var ingresso = parseFloat(document.getElementById('ingresso').value);
	
	var vendas = custo / ingresso;
	
	document.getElementById('resultado').textContent = 'Você precisa vender '+vendas+' ingressos para cobrir seu custo.';
	
}//fecha ingressos













