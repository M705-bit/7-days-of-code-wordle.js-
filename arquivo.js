var count = 0; 
var palavra = "";
var count1 = 4; 

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
  btn.addEventListener("click", async () => {
    btn.style.backgroundColor = "blue";
    var letra = btn.textContent.trim();

    if (letra === "Enter") {
      alert("Você clicou em Enter!");
      var letras_acertadas = 0;
      let resultado = await verificarPalavra(palavra);
     
          if (resultado === true)
          {
            alert(`A palavra cumpre todos os critérios!`);
            for (let i=0; i < palavra.length; i++)
              { rightWord = findWord(palavra[i], i, letras_acertadas);};
               
            setTimeout(refresh, 3000);
              if (rightWord === false){
                kill_hearts();
              }
          }
          else
          { 
            alert("Essa não é uma palavra válida!"); 
            kill_hearts();
            setTimeout(refresh, 3000);
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

function findWord(letter, i, letras_acertadas ) {
  var ganhou = false;
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
    texto.innerHTML = "Você venceu!";
    return ganhou = true; 
  }
  return ganhou; 
 }


async function existe(minhaArray) {
    const resposta = await fetch('./saida.json');
    const data = await resposta.json();
    const myobj = JSON.stringify(data);
    return myobj.includes(minhaArray);
 }

async function verificarPalavra(palavra) {
  const palavra1 = palavra.toLowerCase();
  console.log(palavra1);
  if (palavra1.length == 5) {
    const resultado = await existe(palavra1);
    return resultado;
    
  }
}

function kill_hearts(){
      count1++; 
  if (count1 < 9 ) {
      document.getElementById(`${count1}`).textContent = "X";
      document.getElementById(`${count1}`).style.backgroundColor = "red";
  }
  else {
    document.getElementById(`${count1}`).textContent = "X";
    document.getElementById(`${count1}`).style.backgroundColor = "red";
    text = document.getElementById("game_status");
    text.innerHTML = "Você perdeu!";
    count1 = 4; 
  }
}