# Introduction aux algorithmes

Un algorithme esy un `ensemble d'introduction visant à résoudre un problème`.

En programmation, ces algorithme sont définis à l'aide de _symboles_ qui constituent un `language de programmation`

Parmis ces symboles, certain se retrouvent quelque soit le language utilisé:
## 1. Les Variables

Une _variable_ est un registre permettant de stocker une valeur et d'y faire référence.

Par exemple, si je définis une variable

```
temps_cuisson = 10
```

Alors toute référence susbéquente à `temps_cuisson` renverra la valeur `10`.
Le caractère `=` est ici le symbole de l'_affectation_ et non de l'égalité.
Il permet d'affecter une _valeur_ à un _nom_.

Il est également possible de redéfinir une variable plus tard en réutilisant l'affection :

```
temps_cuisson = 8
```

Désormais, la valeur de `temps_cuisson` est égale à `8`.

## 2. Les Fonctions

Une _fonction_ est un ensemble d'instruction visant à effectuer une action précise.
C'est un sous programme réutilisable.
Ce bloc d'instruction pourra donc être utilisé autant de fois que nécessaire en invoquant son nom.

En programmation, on _déclare_ d'abord une fonction et son comportement, pour ensuite l'_invoquer_ (ou l'_éxecuter_) plus tard

Exemple:

```
Fonction Multiplier:
    pour deux nombre a et b,
    renvoyer a * b
```

Et pour l'appeler je pourrais faire:

```
Multiplier 2 et 3
```

ce qui renverrait `6` 

## 3. Les structures conditionnelles

Une _structure conditionelle_ permet d'effectuer un branchement (imposer un choix) entre plusieur jeux d'instruction, selon une condition à évaluer (vrai/faux).

Ces structures sont souvent définies à l'aide des termes Si (If) et Sinon (Else) :

```
Si age_utilisateur >= 18 alors
    vendre alcool
Sinon
    renvoyer cher mémé
```
Une confition s'évalue à _vrai_ ou _faux_. Une valeur qui peut être soit _vraie_ soit _fausse_ est appelée booléenne (en référence a l'algèbre de Boole)

Pour pouvoir gérer des dconditions complexes, on peut associer ces conditions netre elles avec des opérateurs logique tirés de cette algèbre booléenne :
Pour l'opérateur _et_

*    `vrai` _et_ `vrai` == `vrai`
*    `vrai` _et_ `faux` == `faux`
*    `faux` _et_ `vrai` == `faux`
*    `faux` _et_ `faux` == `faux`

  Pour l'opérateur _OU_

*    `vrai` _OU_ `vrai` == `vrai`
*    `vrai` _OU_ `faux` == `vrai`
*    `faux` _OU_ `vrai` == `vrai`
*    `faux` _OU_ `faux` == `faux`

On peut altérer une confition avec le _non_
*    `NON(vrai)` === `faux`
*    `NON(faux)` === `vrai`
*    `NON(vrai et faux)` === `vrai`
*    `NON(vrai ou faux)` === `faux`
