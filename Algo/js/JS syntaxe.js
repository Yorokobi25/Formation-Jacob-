//Ceci est un commentaire
/*
Ceci est un commentaire multiligne
Un commentaire n'est pas interprété (ou même lu) lors de l'éxécution du code
et sert donc très souvent à documenter notre code
*/

//VARIRABLE
// En jevascript, une variable se déclare à l'aide du mot clé "let"
let nombre = 10; //ici on définit une variable nomm& "nombre" contenant la valeur 10

let message = "coucou"; //Ici on définit une variable nommée message contenant la chaine de caractère "coucou"

//En javascript, les données sont typées dynamiquement
//C'est à dire que javascrip définit le type de la données automatiquement selon la données stockée
//Dans un language type statiquement on devrait determiner le type de donn&es au moment de la déclaration : int nombre = 10;

//Pour différencier un nombre d'une chaine de caractères, on utilise des "" ou '' ou ``. L'utilisation des backquote (``) est légèrement spécial, on verra plus tard

//Pour utiliser une valeur stockée  dans une variable on appelle simplement son nom
let a = 5;
let b = 4;
let c = a + b; //c contient 9

//Pour définir une constante (une varirabkel non variable)
const neChangeraJamais = 12;
neChangeraJamais = 13; //IMPOSSIBLE, javascript empêchera l'affection

//Les conditions
//Un branchement conditionnel se fait en javascript à l'aide d'un if (la pluspart du temps)
//Une condition se fait sur l'évaluation d'uu booléen (vrais/faux), souvent à l'issue d'une comparaison entre deux valeurs
//Pour effectuer des comparaisons, js possède diffèrents opérateur
/*
== égalité
!= différence
> supériorité stricte 
< inferiorité stricte
>= supériorité ou égalité
<= infériorité ou égalité
=== égalité stricte 
!== différence stricte
*/

let age = 12;
//un si (if) s'écrit : if (condition) {instruction}
if (age < 18) {
    //Ici on indique quoi faire si la condition est validée
    //Par ex: indiquer à l'utilisateur qu'il ne peut pas boire d'alcool
} else {
    //ici on indique quoi faire dans le cas contraire
    if (age >= 21) {
        //On peut imbriquer des conditions dans d'autre condition
        //Vous pouvez boir de l'alcool au usa
    }
}

//Pour combiner no condition on peut utiliser les opérateur booléens qui en javascript s'écrivent de la manière suivante :
(true && true) === true;
(true && false) === false;
(false && false) === false;

//OU s'écrit ||
(true || true) === true;
(true || false) === true;
(false || false) === false;

//NON s'écrit !
!true === false;
!false === true;
!(false || true) === false;

//utilisation des fonctions
//Une fonction en javascript se déclare à l'aide du mot clé function
//les paramètres d'une fonction se définissent entre parenthèses à la suite du nom de la fonciton
function additionner(a, b) {
    //le clé return met fin à l'éxecution de la fonction et renvoie une valeur
    return a + b;
}
//En appelant une fonction, on l'invoque à l'aide de son nom et on indique les valeurs des paramètres que la fonction attend
let resulat = additionner(1, 3); //doit envoyer 4 dans resulat
let autreResulat = additionner(3, 5); //autreResultat contient 8
let dernierResultat = additionner(additionner(3, 2), additionner(3, 5)) //dernier resultat contient 13

//Des fonctions existent déjà dans le langage sans avoir besoins de les déclarer
//celles-ci sont la pour aider le développeur à utiliser les fonctionnalités du langage
//par ex prompt() ou alert()

// Les boucles
// une boucle est une structure de langage permettant une répétition d'instruction selon une condition préétablie
//en javascrip la boucle de base est le while (tant que)
let i = 1;
//La condition pour que la boucle s'éxecute ici est que i soit inférieur ou égal à 100
while (i <= 100) {
    //a chaque tour de boucle on affiche un i dont la a augmenter de 1
    i = i + 1;
    afficher(i);
}
//si la condition est mal établie, il est possible de s'enfermer dans une boucle infinie

//La boucle for quant à elle permet d'effectuer des opération répétées à l'instar du while, mais sa syntaxe permet de définir plus clairement un dépard, un arrêt, et une opération à effectuer, le tout sur une même ligne

//let i = 1 permet de définir d'ou la boucle va partir 
//i <= 100 est notre condition d'arrêt, elle permet de définir ou l'on souhaite arriver
//i = i+1 est notre pas, c'est notre valeur d'incrémentation de compteur de boucle
for (let i = 1; i <= 100; i = i + 1) {
    //cette boucle permet donc d'afficher les nombres de 1 à 100
    afficher(1);
}