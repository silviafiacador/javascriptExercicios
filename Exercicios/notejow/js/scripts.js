//início: função para criação de parágrafos
var botao = document.querySelector('#cria');

//adiciona ao botao selecionado um 'escutador', o botão fica 'ouvindo' se um evento de clique acontece, daí dispara a função:
botao.addEventListener('click', criaParagrafo);

//função para criar os parágrafos:
function criaParagrafo() {

	//variável para guardar a criação do parágrafo
	var cria = document.createElement('textarea');
	cria.textContent = 'Você clicou no botão e criou esta section.';
	
	//variável para selecionar o ponto onde o parágrafo será inserido, e já fazer a inserção:
	var caixa = document.querySelector('#caixa').appendChild(cria);
}
//final: função de inserir parágrafos



//----início: ABRIR E FECHAR O POPUP

//document.onload = abrir();
//window.onload = abrir();

var abrePopup = document.querySelector('#abre').addEventListener('click', abrir);

function abrir() {
	document.getElementById('popup').style.display = 'block';
	setTimeout('fechar()', 3000);
}

var fechaPopup = document.querySelector('#fecha').addEventListener('click', fechar);

function fechar() {}
//final: funções da popup

//início: programa para dar as horas na saudação
document.onload = data();

function data() {
	//variáveis para hora e minuto
	var hoje = new Date();
	var hora = hoje.getHours();
	var minutos = hoje.getMinutes();
	console.log('Olá! São ' + hora + ' horas e ' + minutos + ' minutos.');
	//var hora = 23;
	//var minuto = 45;
	var saudacao;
	//bom dia 00:00 até 11:59
	//boa tarde 12:00 até 17:59
	//boa noite 18:00 até 23:59

	if (hora >= 0 && hora < 12) {
		saudacao = 'Bom dia! São ' + hora + ' horas e ' + minutos + ' minutos.';
	} else if (hora >= 12 && hora < 18) {
		saudacao = 'Boa tarde! São ' + hora + ' horas e ' + minutos + ' minutos.';
	} else if (hora >= 18) {
		saudacao = 'Boa noite! São ' + hora + ' horas e ' + minutos + ' minutos.';
	} else {
		saudacao = 'Bem vindo!';
	}

	document.getElementById('exibe-data').textContent = saudacao;

} //fecha função data

//resolvendo o tipo de humor com 'switch/case'

var verSaudacao = document.getElementById('saudar').addEventListener('click', mensagemHumor);

function mensagemHumor() {
	//pegar o valor digitado pelo usuário:
	var opcaoHumor = document.getElementById('humor').value;
	var mensagemFinal;
	//declarando as opções para o humor:
	switch (opcaoHumor) {
		case '1':
			mensagemFinal = 'Ótimo dia!!! Seja feliz!! Viva a vida!!!';
			break;
		case '2':
			mensagemFinal = 'Bom dia, tudo bem?';
			break;
		case '3':
			mensagemFinal = 'Não enche! Nem falei com você!';
			break;
		default:
			mensagemFinal = 'A mensagem padrão é: \'Olá, tudo bem?\' '; //"
			break;
	} //fecha switch

	document.getElementById('mensagem-humor').textContent = mensagemFinal;

} // fecha mensagemHumor


// CONHECENDO E MANIPULANDO ARRAYS
var cores = ['azul', 'verde', 'amarelo', 'vermelho'];

function todasCores() {
	console.log(cores);
}

function algumaCor() {
	console.log(cores[0]);
}

function larguraArray() {
	// para guardar a extensão do array: var qtdCores = cores.lenth;
	console.log(cores.length);
}

function adicionaCor() {
	cores.push(prompt('Digite uma cor para o array:'));
	console.log(cores);
}

function encontraCor() {
	var corEncontrada = cores.indexOf(prompt('Digite a cor procurada'));
	console.log(corEncontrada);
}

function removeCor() {
	//usar pop (do final) ou shift (do início)
	//cores.pop();
	cores.shift();
	console.log(cores);
}

//para iterar array
function mostrarIndices() {
	cores.forEach(function (tudo, indice, array) {
		console.log(tudo, indice);
	});
}



// TABUADA COM WHILE:

//(os eventos estão no html)
var contador = 1; //cria e inicia o contador de 'voltas'
var resultado = ''; //cria e inicia a variável para os resultados

function tabuada1() {
	var num = prompt('Digite um número para ver a tabuada: ');
	while (contador <= 10) {
		//instruções
		resultado += contador + ' x ' + num + ' = ' + (contador * num) + '<br>';

		contador++;
	} //fecha while

	document.getElementById('tabuada1').innerHTML = resultado;
} //fecha tabuada1

function tabuada2() {
	var num = prompt('Digite um número:');

	do {
		resultado += contador + ' x ' + num + ' = ' + (contador * num) + '<br>';
		contador++;
	} while (contador <= 10);

	document.getElementById('tabuada2').innerHTML = resultado;

} //fecha tabuada2


// SOMA DE VALORES

function somaValores() {
	var num1 = parseInt(document.getElementById('numero1').value);
	//var num1 = parseInt...

	var num2 = parseInt(document.getElementById('numero2').value);

	//var soma = num1 + num2;

	document.querySelector('#resultado-soma').textContent = num1 + num2;


} //fecha soma valores


// função para exibir operações matemáticas básicas
function tabelaNumeros(valor) {
	var numero = parseInt(document.getElementById('num').value, 10);
	var i = 0;
	var operador = valor;
	var msg = '';

	if (operador === 'adic') {
		while (i < 11) {
			msg += i + '+' + numero + '=' + (i + numero) + '<br>';
			i++;
		} 
	} else if(operador === 'sub'){
		while(i < 11){
			msg += i + '-' + numero + '=' + (i - numero) + '<br>';
			i++;
		}
	} else if(operador === 'mult'){
		while(i < 11){
			msg += i + '*' + numero + '=' + (i * numero) + '<br>';
			i++;
		}
	} else if(operador === 'divi'){
		while( (i < 11) && (i !== 0) ){
			msg += i + '/' + numero + '=' + (i / numero) + '<br>';
			i++;
		}
	} else {
		msg = ('deu ruim!!');
	}


	//saida:
	document.getElementById('resultado').innerHTML = msg;
	
} //fecha operações matem.








// PEGANDO O VALOR DO INPUT RADIO

function pegaValor() {
	var valorSelecionado;
	var elemento = document.getElementsByName('opcao');

	for (var n = 0; n < elemento.length; n++) {

		if (elemento[n].checked) {
			valorSelecionado = elemento[n].value;
		} //fecha if

	} //fecha for

	console.log(valorSelecionado);

} //fecha pega valor
