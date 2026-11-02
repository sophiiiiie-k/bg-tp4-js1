"use strict"; // Mode strict (slide 52)

// Variables avec let : bonne pratique de portée (slide 52)
// Types primitifs : string et number (slide 38)
let nom = "John";      // string (slide 38)
let prenom = "Doe";    // string (slide 38)
let age = 30;          // number entier (slide 38)
let note = 15;         // number (JS n'a qu'un type number pour entiers et réels, slides 32 et 38)

// Constante avec const (slides 38 et 52)
const pi = 3.14;

// Déclaration d'une fonction sans paramètre (slide 46)
// Affichage avec console.log (slide 34)
function f1() {
  console.log(nom);
}

function f2() {
  console.log(prenom);
}

function f3() {
  // Concaténation de chaînes avec + (slide 38)
  console.log(nom + "-" + prenom);
}

function f4() {
  console.log(age);
}

function f5() {
  console.log(note);
}

function f6() {
  console.log(pi);
}