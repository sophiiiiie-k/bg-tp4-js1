"use strict"; // Mode strict (slide 52)

// F1 : tableau de chaînes affiché élément par élément
function f1() {
  // Tableau de chaînes de caractères (slide 39)
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

  // Boucle for..of pour parcourir le tableau (slide 45)
  for (const etudiant of etudiants) {
    console.log(etudiant); // slide 34
  }
}

// F2 : un objet affiché tel quel
function f2() {
  // Déclaration d'un objet avec propriétés (slide 40)
  const etudiant = {
    nom: "John",
    prenom: "DOE", // en majuscules, comme dans l'énoncé
    age: 30
  };
  // Affiche l'objet complet dans la console (slide 40)
  console.log(etudiant);
}

// F3 : tableau d'objets, une ligne par objet
function f3() {
  // Tableau d'objets (slide 41)
  const etudiants = [
    { id: 1, nom: "nom1", prenom: "prenom1", age: 21 },
    { id: 2, nom: "nom2", prenom: "prenom2", age: 22 },
    { id: 3, nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  // Boucle for..of (slide 45), accès aux propriétés avec le point (slide 40)
  for (const e of etudiants) {
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}