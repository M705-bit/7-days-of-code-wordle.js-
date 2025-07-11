var count = 0; 
var palavra = "";
var letras_acertadas = 0;

async function loadWords() {
    const resposta = await fetch('./saida.json');
    const data = await resposta.json();
    const array = getRandomWords(data);
    return array;
 }

function getRandomWords(banco_de_dados) {
  let num_palavras = (banco_de_dados.palavras).length;
  let num = Math.floor(Math.random() * num_palavras);
  return banco_de_dados.palavras[num].toUpperCase();
}

window.onload = async function() { 
     alert("O Jogo começou!");
     array = await loadWords();
     console.log(array);
    };

document.querySelectorAll(".flex-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "blue";
    var letra = btn.textContent.trim();

    if (letra === "Enter") {
      alert("Você clicou em Enter!");

      let resultado = verificarPalavra(palavra);
     
          if (resultado === true)
          {
            alert(`A palavra cumpre todos os critérios!`);
            for (let i=0; i < palavra.length; i++)
              { findWord(palavra[i], i);};
              setTimeout(refresh, 3000);
          }
          else
          { 
            alert("Essa não é uma palavra válida!"); 
             setTimeout(refresh, 1000);
          }
        
     
    } else {
      alert(`Você clicou na letra: ${letra}`);
      palavra+=letra;
      alert(`A palavra está assim atualmente: ${palavra}`);
      document.getElementById(`${count}`).textContent = letra;
      document.getElementById(`${count}`).style.backgroundColor = "grey";
      count++;
    }
  });
});

function refresh(){
  for (i=0; i<palavra.length; i++){
    document.getElementById(`${i}`).textContent = "";
    document.getElementById(`${i}`).style.backgroundColor = "grey";
  }
  palavra = "";
  document.querySelectorAll(".flex-item").forEach((btn) => {btn.style.backgroundColor = "white";});
  count = 0;
}

function findWord(letter, i ) {
  if (array.includes(letter) && array[i] === letter){
    letras_acertadas++;
          document.getElementById(`${i}`).textContent = letter;
          document.getElementById(`${i}`).style.backgroundColor = "green";
  }
  else if (array.includes(letter) && array[i]!= letter){
          document.getElementById(`${i}`).textContent = letter;
          document.getElementById(`${i}`).style.backgroundColor = "yellow";
  }
  else {
    document.getElementById(`${i}`).textContent = letter;
          document.getElementById(`${i}`).style.backgroundColor = "grey";
  }
         
  if (letras_acertadas===5){
    texto = document.getElementById("game_status");
    texto.innerHTML = "Game Over!";
  }
 }

 //as funções abaixo não estão funcionando e eu ainda n sei o motivo, qualquer coisa que eu digite dá como errado!

async function existe(minhaArray) {
    const resposta = await fetch('./saida.json');
    const data = await resposta.json();
    const palavrasDoJson = data.palavras;
    const status = minhaArray.every(palavra => palavrasDoJson.includes(palavra));
    return status;
 }

async function verificarPalavra(palavra) {
  const palavra1 = palavra.toLowerCase();
  console.log(palavra1);
  if (palavra1.length === 5) {
    const myArray = palavra1.split("");
    const resultado = await existe(myArray);
    return resultado;
  }
}
