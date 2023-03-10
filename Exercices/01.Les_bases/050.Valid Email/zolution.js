///////////////////////////////////////////////
const email = "dorothy@mail.com";
let valid = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        valid = true;
    }
} 
console.log(valid);
///////////////////////////////////////////////

// Ce code vérifie si l'adresse e-mail stockée dans la 
// variable email contient le symbole "@" qui est généralement 
// présent dans les adresses e-mail valides.

// La variable valid est initialisée à false, ce qui signifie 
// que l'adresse e-mail n'est pas encore considérée comme valide.

// Le code utilise une boucle for pour parcourir chaque caractère 
// de l'adresse e-mail. La condition de la boucle for est i 
// < email.length, ce qui signifie que la boucle se poursuivra 
// jusqu'à ce que tous les caractères de l'adresse e-mail aient 
// été parcourus.

// Dans la boucle, chaque caractère de l'adresse e-mail est 
// comparé au symbole "@" en utilisant l'opérateur de comparaison 
// strictement égal ===. Si le caractère actuel est "@" alors 
// la variable valid est mise à true, ce qui signifie que 
// l'adresse e-mail est considérée comme valide.

// Après que la boucle soit terminée, le code affiche la 
// valeur de la variable valid en utilisant la fonction 
// console.log(). Si l'adresse e-mail contient le symbole 
// "@" alors la variable valid aura la valeur true, sinon 
// elle conservera la valeur initiale false.

// En utilisant index() :
///////////////////////////////////////////////
const email2 = "dorothy@mail.com";
let valid2 = false;

if (email.indexOf("@") !== -1) {
    valid2 = true;
}
console.log(valid2);
///////////////////////////////////////////////

// const email = "dorothy@mail.com"; Définit une variable 
// constante nommée email et lui assigne la valeur de la 
// haîne de caractères "dorothy@mail.com".
// let valid = false; - Définit une variable valid et lui 
// assigne la valeur false. Cette variable sera utilisée 
// plus tard pour stocker le résultat de la vérification.
// if (email.indexOf("@") !== -1) { - Vérifie si la chaîne 
// de caractères email contient le symbole "@" en utilisant 
// la méthode indexOf(). La méthode indexOf() retourne l'index 
// de la première occurrence de la sous-chaîne spécifiée 
// (ici "@") dans la chaîne de caractères. Si la sous-chaîne 
// n'est pas trouvée, la méthode retourne -1. Donc, si le 
// symbole "@" est trouvé dans la chaîne de caractères, la 
// condition du if sera évaluée à true.
// valid = true; - Si le symbole "@" est trouvé dans la chaîne 
// de caractères, la variable valid est définie à true.
// console.log(valid); - Affiche la valeur de la variable valid 
// dans la console du navigateur.
// Ainsi, si l'email contient un symbole "@", la variable valid 
// sera définie sur true et la console affichera true. Sinon, la 
// variable valid sera toujours false et la console affichera false.