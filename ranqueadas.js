let qtdWin = 0;
let qtdLose = 0;
let saldoRank = 0;
let elo = "";

function calculaElo(win, lose){
    saldoRank = win - lose;
    if(saldoRank <= 10){
        console.log("Ferro");
        elo = "Ferro";
    }else if(saldoRank > 10 && saldoRank <= 20){
        console.log("Bronze");
        elo = "Bronze";
    }else if(saldoRank > 20 && saldoRank <= 50){
        console.log("Prata");
        elo = "Prata";
    }else if(saldoRank > 50 && saldoRank <= 80){
        console.log("Ouro");
        elo = "Ouro";
    }else if(saldoRank > 80 && saldoRank <= 90){
        console.log("Platina");
        elo = "Platina";
    }else if(saldoRank > 90 && saldoRank <= 100){
        console.log("Lendário");
        elo = "Lendário";
    }else{
        console.log("Imortal");
        elo = "Imortal";
    }
}

calculaElo(qtdWin, qtdLose);
console.log("O Herói tem de saldo de "+ saldoRank +" está no nível de "+ elo);