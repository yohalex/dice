const start = document.querySelector("button");
const rol = document.querySelectorAll(".animation-rol");
const resultat = document.querySelector(".resultat");
const diceUser = document.querySelectorAll(".first-dice>div")
const diceComputer = document.querySelectorAll(".second-dice>div")

start.addEventListener("click", () => {
  resultat.innerText = " ";
  start.style.display = "none";
  let count = 0;
  myInterval = setInterval(() => {
    rol[0].classList.add("rotationUser");
    rol[1].classList.add("rotationComputer");
    count++;
    if (count >= 5) {
      clearInterval(myInterval);
      rol[0].classList.remove("rotationUser");
      rol[1].classList.remove("rotationComputer");
      count = 0;
      start.style.display = "block";
      dice();
    }
  }, 500);
});

function dice() {
  let userPlayed = Math.floor(Math.random() * 6);
  let ComputerPlayed = Math.floor(Math.random() * 6);

  if (userPlayed === 0) {
    userPlayed++;
  }
  if (ComputerPlayed === 0) {
    ComputerPlayed++;
  }

  if (userPlayed > ComputerPlayed) {
    resultat.innerText = "Bravo vous avez gagner";
    resultat.style.color = "#00BCF2";
  } else if (userPlayed < ComputerPlayed) {
    resultat.innerText = "Pfff vous avez perdu";
    resultat.style.color = "#ff0000f4";
  } else {
    resultat.innerText = "Egalité";
    resultat.style.color = "black";
  }
  console.log(userPlayed, ComputerPlayed);
  // afficher la face de dice
  //dice user
  showRoleFace(userPlayed , diceUser)
  showRoleFace(ComputerPlayed , diceComputer)

  
  
}



function showRoleFace(nbr , tab){
    let index = --nbr
    let temp = tab[index].classList
    tab.forEach((face)=>{
   
        if(face.classList.contains('front')){
            face.classList.remove('front')
            face.classList.add(temp[1])
            tab[index].classList.remove(temp[1])
            tab[index].classList.add("front")
    
        }
   
    })


}