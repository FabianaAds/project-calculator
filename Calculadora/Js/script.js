

function soma(num1, num2){
  return num1 + num2;
}

function subtrai(num1, num2){
  return num1 - num2;
}

function multiplica(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return (num1 / num2).toFixed(2);
}

function potencia(num1, num2){
  return num1 ** num2;
}

function raizQuadrada(num1){
  return Math.sqrt(num1).toFixed(2);
}

function fatorial(num1){
if (num1 == 1){
  return 1
}
  return num1 * fatorial(num1 - 1);
}

function porcentagem(num1, num2){
  return ((num1 * 100)/num2).toFixed(0);
}

function media(num1, num2){
  return (num1 + num2)/2;
}



function calcular(){
	const inputA = parseFloat(document.getElementById('num1').value);
	const inputB = parseFloat(document.getElementById('num2').value); 
	var divSoma = document.getElementById('soma');
	var divSubtrai1 = document.getElementById('subtrai1');
	var divSubtrai2 = document.getElementById('subtrai2');
	var divMultiplica = document.getElementById('multiplica');
	var divDivide1 = document.getElementById('divide1');
	var divDivide2 = document.getElementById('divide2');
	var divPotencia1 = document.getElementById('potencia1');
	var divPotencia2 = document.getElementById('potencia2');
	var divRaizQuadrada1 = document.getElementById('raizQuadrada1');
	var divRaizQuadrada2 = document.getElementById('raizQuadrada2');
	var divFatorial1 = document.getElementById('fatorial1');
	var divFatorial2 = document.getElementById('fatorial2');
	var divPorcentagem1 = document.getElementById('porcentagem1');
	var divPorcentagem2 = document.getElementById('porcentagem2');
	var divMedia = document.getElementById('media');

  
  divSoma.innerHTML = soma(inputA,inputB);
  divSubtrai1.innerHTML = subtrai(inputA,inputB);
  divSubtrai2.innerHTML = subtrai(inputB,inputA)
  divMultiplica.innerHTML = multiplica(inputA,inputB);
  divDivide1.innerHTML = divide(inputA,inputB);
  divDivide2.innerHTML = divide(inputB,inputA);
  divPotencia1.innerHTML = potencia(inputB,inputA);
  divPotencia2.innerHTML = potencia(inputA,inputB);
  divRaizQuadrada1.innerHTML = raizQuadrada(inputA);
  divRaizQuadrada2.innerHTML = raizQuadrada(inputB);
  divFatorial1.innerHTML = fatorial(inputA);
  divFatorial2.innerHTML = fatorial(inputB);
  divPorcentagem1.innerHTML = porcentagem(inputA,inputB);
  divPorcentagem2.innerHTML = porcentagem(inputB,inputA);
  divMedia.innerHTML = media(inputA,inputB);

}


 
 
 
 
 
 
 
 
 
 
 
 
 


 


















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



 


















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 


















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



 


















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 


















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 







































