const prompt = require("prompt-sync")();

let tab=[2,4,4,3,3,3,2,5,5];
let count={};
for(nomber of tab){
    if(count[nomber]){
        count[nomber]+=1
    }else{
        count[nomber]=1;
    }

}
for(nomber in count){
    if(count[nomber] %2 !== 0){
        console.log(count[nomber])
    }
}
console.log(count)