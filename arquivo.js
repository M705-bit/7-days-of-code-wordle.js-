var count = 0; 
var palavra = "";
banco_de_dados = require('./saida.json')
document.querySelectorAll(".flex-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "blue";
    var letra = btn.textContent.trim();

    if (letra === "Enter") {
      alert("Você clicou em Enter!");
      if (palavra.length === 5 )
        { 
           alert(`A palavra cumpre todos os critérios!`);
          for (let i=0; i < palavra.length; i++)
           { findWord(palavra[i], i);};
             setTimeout(refresh, 3000);
          }
          
      else {
        alert(`A palavra deve conter 5 letras!`);
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

  
var letras_acertadas = 0;
function getRandomWords(banco_de_dados) {
  num_palavras = (banco_de_dados.palavras).length;
  const num = Math.random() * num_palavras;
  return banco_de_dados.palavras[num].toUpperCase()
}

const array = getRandomWords(banco_de_dados);   
function refresh(){
  
  for (i=0; i<palavra.length; i++){
    document.getElementById(`${i}`).textContent = "";
    document.getElementById(`${i}`).style.backgroundColor = "grey";
  }
  palavra = "";
  document.querySelectorAll(".flex-item").forEach((btn) => {btn.style.backgroundColor = "white";});
  count = 0;
}

function findWord(letter, i) {
  	 
  if (array.includses(letter) && array[i] === letter){
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

 //preciso de alguma forma pegar as letras para o wordle aleatóriamente 
  