const heroName = "Vrau";
let heroExp = 15000;
let heroRank = "";

if(heroExp <= 1000){
    console.log("Ferro");
    heroRank = "Ferro";
}else if(heroExp > 1000 && heroExp <= 2000){
    console.log("Bronze");
    heroRank = "Bronze";
}else if(heroExp > 2000 && heroExp <= 5000){
    console.log("Prata");
    heroRank = "Prata";
}else if(heroExp > 5000 && heroExp <= 7000){
    console.log("Ouro");
    heroRank = "Ouro";
}else if(heroExp > 7000 && heroExp <= 8000){
    console.log("Platina");
    heroRank = "Platina";
}else if(heroExp > 8000 && heroExp <= 9000){
    console.log("Ascendente");
    heroRank = "Ascendente";
}else if(heroExp > 9000 && heroExp <= 10000){
    console.log("Imortal");
    heroRank = "Imortal";
}else{
    console.log("Radiante");
    heroRank = "Radiante";
}

console.log("O Herói de nome "+ heroName + " está no nivel de "+ heroRank);