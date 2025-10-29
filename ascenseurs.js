
const prompt = require("prompt-sync")();

// recuperer le numero d'etage 
let n = prompt("donner l'étage : ");
let tmp = 0;
let tab = [];
let compteur = 0;
//tester si le numero d'etage est divisible par 2
 if (n % 2 == 0 ){
    //incrementer de 2 tant que le nombre à incrementer est different de numero d'etage
        while(tmp != n){
            tmp = tmp +2;
            //remplir le tableau des liste d'etage visités
            tab.push(tmp);
            // on calcule le nombre des mouvement 
            compteur++
        }
        console.log("le nomber de movement necessaire : "+compteur)
        // si le numero d'etage n'est pas divisible par 2
    }else {
        // on incremente la variable temporaire par 2
        while(tmp <= n){
            tmp = tmp +2;
         //remplir le tableau des liste d'etage visités
            tab.push(tmp);
        // on calcule le nombre des mouvement 
            compteur++
        }
        //on decremente la variable temporaire par 1 pour tomber sur l'etage voulut
          tmp = tmp -1
        // remplir le tableau  
          tab.push(tmp);
          // on ajout le dernier mouvement 
         compteur++;
         // on affiche le compteur totale
        console.log("le nomber minimal de mauvment :  "+compteur)
    }


console.log(tab)