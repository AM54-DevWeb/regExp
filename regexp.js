//Expression réguliére avec / /
// let re = /ac+c/

//Expression réguliére avec RegExp
// let re1 = new RegExp('ab+c')

//les chaines qui valident sont : abc abbc abbbc abbbbbbbbbbbbbbbc 
//(ce que l'on veut - a -autant de b que l'on veut- c - ce que l'on veut  || [exemple : blablaabcblabla, blablaabbbbbbcblabla])

// let re2 = /coucou/

// let ch = "coucou tout le monde"

//retoune Array [ "coucou" ] || re2 se trouve bien dans ch
// console.log(ch.match(re2))

//retourne 0 || coucou se trouve a la position 0 dans la chaine de charactéres
// console.log(ch.search(re2))

// let ch2 = "tout le monde"

//retoune NULL || re2 ne se trouve pas dans ch2
// console.log(ch2.match(re2))

//retourne -1 || coucou ne se trouve pas dans la chaine de charactéres
// console.log(ch2.search(re2))

//Pour la recherche (ctrl + F), cocher l'etoile ("utiliser une expression réguliére") puis entrer notre recherche. Exemple : ab+c 
//Dans ce même mode ("utiliser une expression réguliére"), pour rechercher "normalement", ajouter un \ avant un charactére spécial (+, *, ?, ). Exemple : ab\+c 

//Pour rechercher au début de la chaîne de charactére : ^motCherché. 
//Exemple : 
// let re = /^coucou/ 
// let ch = "coucou tout le monde"
// retourne = Array [ "coucou" ] || re se trouve bien au début de ch, si coucou n est pas le premier charactére de ch, retourne NULL

//Pour faire l'inverse (fin de la chaîne) : motCherché$. 
//Exemple : 
// let re = /monde$/  
// let ch = "coucou tout le monde"
// retourne = Array [ "monde" ] || re se trouve bien a la fin de ch, si monde n est pas le dernier charactére de ch, retourne NULL

//Pour faire les deux a la fois (premier et dernier mot) : /^motCherché$/
// let re = /^monde$/  
// let ch = "monde"
// retourne = Array [ "monde" ] || re se trouve bien au début ET a la fin de ch, si ce n est pas le cas , retourne NULL


//Pour tester sur ch3 contient "tout" ou "tous" (tou[ts] = tout ou tous et g = chercher en global et pas que le premier) || Mettre entre [] l'ensemble recherché. Ex : /[abcd]/ donne : contient soit a, soit b, soit c, soit d
// let re3 = /tou[ts]/g
// let ch3 = "coucou tout le monde tous"
// console.log(ch3.match(re3))
// retourne : touttous

// let re4 = /[0123456789]/g
// let ch4 = "coucou 0 tout 5 le 9 monde 48"
// console.log(ch4.match(re4))
// retourne : 05948




// COURS : 

/**
 * RegExp – les bases
//
// Dans une expression régulière, on retrouve 
// des caractères spéciaux, selon les caractères
// On peut rechercher différents éléments

//   Types   |  Description
//           |
//   \       |  Caractère d’échappement 
//           |  (permet d’utiliser un des 
//           |  caractère spéciaux ex : 
//           |  \*)
//           |
//   ^       |  Début de chaîne de 
//           |  caractères
//           |
//   $       |  Fin de la chaîne de 
//           |  caractères
//           |
//   ()      |  Définit un groupe dans la 
//           |  chaîne de caractères
//           |
//   []      |  Définit un ensemble de 
//           |  caractères pouvant 
//           |  matcher

/*
    RegExp – les quantfeurs

        Lorsque l’on définit un caractère, 
        un groupe : () 
        ou un ensemble : []
        On peut souhaiter que ce motif définit se 
        retrouve un certain nombre de fois

            Types   |  Description
                    |
            *       |  Quantité 0 à N
                    |
            +       |  Quantité 1 à N
                    |
            ?       |  Quantité 0 ou 1 
                    |
            {N}     |  Quantité N
                    |
            {N,}    |  Quantité N ou plus 
                    |
            {N,M}   |  Quantité N à M


    RegExp – les Ensembles

        Voici les quelques règles pour 
        les ensembles

            Types   |  Description
                    |
            x|y     |  X ou Y
                    |
            [xyz]   |  x ou y ou z
                    |
            [a-f]   |  Un caractère entre a b c d e f 
                    |
            {N}     |  Quantité N
                    |
            {N,}    |  Quantité N ou plus 
                    |
            [^xyz]  |  N’importe quoi sauf x y ou z


    RegExp – les péformatés

        Voici des ensembles préformatés et pratique

            Types   |  Description
                    |
            \b      |  Début ou fin de mot
                    |
            \d      |  Un chiffre
                    |
            \D      |  Pas un chiffre
                    |
            \w      |  Un caractère alphanumérique
                    |
            \W      |  Pas un caractère alphanumérique
                    |
            \n      |  Saut de ligne
                    |
            \r      | Retour chariot
                    |
            \s      | Un blanc


    RegExp – les fonctons de manipulaton

        Les regexp permetent de trouver un moti dans une chaine de caractères.
        Vous trouverez plusieurs ioncton intéressantes sur les regexp

            fonction    |  Description
                        |
            match       |  Cherche le motif et renvois le tableaux des derniers motif cherché ou null
                        |
            search      |  Cherche le motif et renvois sa position ou -1
                        |
            replace     |  Cherche le motif et le remplace par une chaîne définie
                        |
            split       |  Cherche le motif et renvois le tableaux des groupes cherché ou null

    https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8


    Les cookies Navigateur

        Les cookies du navigateur sont une sorte de mémoire du navigateur.
        Un cookie est une variable de type chaîne Elle appartent à un nom de domaine et possède une date d’expiraton.
        Vous ne pourrez donc lire et écrire que vos propre cookies (pas ceux des autres sites)
        Les cookies peuvent être manipulé côté serveur ET client

        Créer un cookie : document.cookie = ‘user=Julien’ ;
        Lire l’ensemble des cookie : console.log(document.cookie)

        Atenton si vous stockez plusieurs cookies, vous les retrouverez tous dans document.cookie sous iorme 
        var=valeur;var2=valeur2;varN=valeurN. D’où l’interet d’utliser des expression régulières pour retrouver ces petts !

    https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

*/


let codePostal = document.getElementById("inputCP")
let message = document.getElementById("mess")
let mdp = document.getElementById("inputMDP")
let mail = document.getElementById("inputMail")
let phone = document.getElementById("inputTel")
let bouton = document.getElementById("inputFormSubmit")

bouton.addEventListener('click', (e) =>{

    message.innerHTML = ""

    let reCP = /^[0-9]{5}$/
    if(codePostal.value.search(reCP) != -1){
        message.style.backgroundColor = "green"
        message.style.color = "lightgreen"
        message.style.padding = "5px"
        message.style.margin = "5px"
        message.style.borderRadius = "3px"      
        message.innerHTML += "Le champ est bien un code postal <br>"
    }else{
        message.style.backgroundColor = "red"
        message.style.color = "coral"
        message.style.padding = "5px"
        message.style.margin = "5px"
        message.style.borderRadius = "3px"  
        message.innerHTML += "Le champ n'est pas un code postal <br>"
    }

    let reTel = /^[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}$/
    if(phone.value.search(reTel) != -1){
        message.style.backgroundColor = "green"
        message.style.color = "lightgreen"
        message.style.padding = "5px"
        message.style.margin = "5px"
        message.style.borderRadius = "3px"      
        message.innerHTML += "Le champ est bien un numéro de téléphone <br>"
    }else{
        message.style.backgroundColor = "red"
        message.style.color = "coral"
        message.style.padding = "5px"
        message.style.margin = "5px"
        message.style.borderRadius = "3px"  
        message.innerHTML += "Le champ n'est pas un numéro de téléphone <br>"
    }

    let reMail = /^[a-zA-Z0-9._-éè]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]{2,3}){1,2}$/
    if(mail.value.search(reMail) != -1){
        message.style.backgroundColor = "green"
        message.style.color = "lightgreen"
        message.style.padding = "5px"
        message.style.margin = "5px"
        message.style.borderRadius = "3px"      
        message.innerHTML += "Le champ est bien un mail <br>"
    }else{
        message.style.backgroundColor = "red"
        message.style.color = "coral"
        message.style.padding = "5px"
        message.style.margin = "5px"
        message.style.borderRadius = "3px"  
        message.innerHTML += "Le champ n'est pas un mail <br>"
    }
})