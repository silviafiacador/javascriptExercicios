//início: função para criação de parágrafos
var botao = document.getElementById('cria');

//adiciona ao botao selecionado um 'escutador', o botão fica 'ouvindo' se um evento de clique acontece, daí dispara a função:
botao.addEventListener('click', criaParagrafo);

//função para criar os parágrafos:
function criaParagrafo() {
		alert("entrei");
	//variável para guardar a criação do parágrafo
	var cria = document.createElement('textarea');
	cria.textContent = 'Você clicou no botão e criou esta section.';
	
	//variável para selecionar o ponto onde o parágrafo será inserido, e já fazer a inserção:
	var caixa = document.querySelector('#caixa').appendChild(cria);
}
//final: função de inserir parágrafos

//textarea
//
//	function fonts(){
//	
//	if (document.getElementById('opt').value=='a1'){
//		document.getElementById('txt').style.color="red";}
//	
//	}
//

	