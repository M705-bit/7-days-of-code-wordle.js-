var count = 0; 
document.querySelectorAll(".flex-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "blue";
    let letra = btn.innerHTML;
    if (letra !== "Enter"){
        palavra+=letra;
        if (count < 5) { 
          addWord(letra, count);
          count++;
        }
      }
    //btn.style.backgroundColor = "blue";
    
    if (btn.innerHTML == "Enter" && count == 5) {
      for (let i=0; i < palavra.length; i++){
        findWord(palavra[i], i);
      }
      //resetando palavra e count
      count = 0; 
      palavra = "";

    }
    else {
      alert(`A palavra deve conter 5 letras!`)
    }
  });
});

const array = "VERBO";     
var letras_acertadas = 0;

function addWord(letra, count){
  document.getElementById(`${count}`).textContent = letra;
  document.getElementById(`${count}`).style.backgroundColor = "grey";
}

function findWord(letter, i) {
  	 
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
