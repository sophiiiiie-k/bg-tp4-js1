"use strict"; // Mode strict (slide 52)

// Données Students : tableau d'objets (slides 39, 40 et 41)
// Hypothèse : note = 4e valeur, absences = 5e valeur
const students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     note: 14, absences: 5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", note: 7,  absences: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   note: 13, absences: 3 }
];

// Fonction B : un seul paramètre, retourne un booléen (slide 46 : fonction avec retour)
// JS n'a pas de type float : on utilise number (slides 32 et 38)
function estAdmis(note) {
  // Opérateur de comparaison >= (slide 42) : renvoie true ou false
  return note >= 10;
}

// Fonction A : appelée au clic, appelle B pour chaque étudiant (slides 15-16 et 46)
function deliberation() {
  // Boucle for..of sur le tableau d'objets (slide 45)
  for (const s of students) {
    const admis = estAdmis(s.note); // appel de B (slide 46)

    // Notation ternaire (slide 43) + affichage un par un avec console.log (slide 34)
    console.log(s.id + ": " + (admis ? "ADMIS" : "AJOURNÉ"));
  }
}
