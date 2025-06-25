/*
//isso tem que ser contamte a verificação de qual elemento foi clicado 
const letras = document.querySelectorAll(".flex-item");
//letras.forEach((letra) => letras.addEventListener("click", findWord(letra)));
letras.forEach((letra) => {
  letra.addEventListener("click", () => findWord(letra.innerText));
});
//preciso saber a coluna com a qual estamos lidando
var count = 0;
var i=0
 function findWord(letra){
	array[count].split('').forEach((caracter) => { 
		if (letra == caracter && i<5) 
			{ i++; texto = i.toString(); document.getElementById(texto).innerText = caracter;  document.getElementById(texto).style.backgroundColor = "blue";}
		else if (count<4){count++;}
	}
);
}


const array = ["verbo", "termo", "certo", "texto", "perto"]
*/
// Palavra do dia e posição atual
document.querySelectorAll(".flex-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`Você clicou em: ${btn.innerText}`);
	var letra = btn.innerText;
    findWord(letra);
	alert(console.log(typeof letra))
	btn.style.backgroundColor = "blue";
  });
});

const array = ["verbo", "termo", "certo", "texto", "perto"];
let count = 0;  // Indica a linha atual da grade
let i = 0;      // Posição da letra dentro da linha

// Seleciona todos os botões com a classe "flex-item"
//const letras = document.querySelectorAll(".flex-item");

// Adiciona o evento de clique a cada botão
/*
letras.forEach((botao) => {
  botao.addEventListener("click", () => {
    const letra = botao.innerText;
    findWord(letra);
  });
});
*/
// Função que trata a lógica de digitar a letra na "tabela"
function findWord(letra) {
  // Divide a palavra atual em letras
  const palavra = array[count];

  // Se a letra está na palavra e ainda temos espaço
  if (palavra.includes(letra) && i < 5) {
    i++;
    const id = i.toString(); // Ex: "1", "2", ...
    const div = document.getElementById(id);

    div.innerText = letra;
    div.style.backgroundColor = "blue";
  }

  // Se a letra não está ou a linha está cheia, avança para a próxima linha
  if (i >= 5 && count < array.length - 1) {
    count++;
    i = 0;
  }
}
