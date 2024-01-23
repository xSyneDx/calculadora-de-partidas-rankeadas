let saldoVitorias = pontos(155, 105)

function pontos(vitoria,derrota) {
    return vitoria - derrota
}

let nivel = elo()

function elo() {
    switch (true) {
    case saldoVitorias <= 10:
        return "Ferro"
  
    case saldoVitorias > 10 && saldoVitorias <= 20:
        return "Bronze"
  
    case saldoVitorias > 20 && saldoVitorias <=40:
        return "Prata"
  
    case saldoVitorias > 40 && saldoVitorias <=50:
        return "Ouro"
  
    case saldoVitorias > 60 && saldoVitorias <=70:
        return "Diamente"
  
    case saldoVitorias > 70 && saldoVitorias <=80:
        return "Lendario"
  
    case saldoVitorias > 80 && saldoVitorias <=90:
        return "Imortal"
    }
}

console.log("O heroi tem um total de "+ saldoVitorias + " seu nivel é dado por " + nivel)