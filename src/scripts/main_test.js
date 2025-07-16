// En gros, un langage de programmation
// avec variables, opérations, boucles, fonctions

let myHeading = document.querySelector("h1"); //sélectionner élément, "obtenir une référence sur l'en-tête"
myHeading.textContent = "Bonjour, monde !"; //lui donner une autre valeur

let my_variable = "Bob";
my_variable = "Etienne";

// alert("Bonjour") // Ouvre une fenêtre avec message avant utilisation page

function do_smthg(num1, num2){
  let result = num1 * num2;
  return result;
}

// ÉVÈNEMENTS

var btn = document.querySelector("input");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "Click") {
    btn.value = "Arrêter la machine";
    txt.textContent = "La machine est démarrée !";
  } else {
    btn.value = "Démarrer la machine";
    txt.textContent = "La machine est arrêtée.";
  }
}
