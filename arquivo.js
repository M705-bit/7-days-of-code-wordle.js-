var count = 0; 
var palavra = "";

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
          // o setTimeout parou de responder 
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

//const array = getRandomWords(banco_de_dados);   
function refresh(){
  
  for (i=0; i<palavra.length; i++){
    document.getElementById(`${i}`).textContent = "";
    document.getElementById(`${i}`).style.backgroundColor = "grey";
    //palavra[i] = "";
    //btn.style.backgroundColor = "blue";
    
  }
  palavra = "";
  document.querySelectorAll(".flex-item").forEach((btn) => {btn.style.backgroundColor = "white";});
  count = 0;
}

function findWord(letter, i) {
  	console.log(array)
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
 function loadWords() {
    fetch('./saida.json')
      .then(response => response.json())
      .then(data => {
        const array = getRandomWords(data);
        // continue com seu código aqui
      });
}

window.onload = async () => {
  const banco_de_dados = await loadWords()
  alert(`O Jogo começou!`);

}
 
//se a palavra n bate com nenhuma palavra do banco de dados diga:
//essa palavra n existe! e puxa a função refresh
