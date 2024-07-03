const saldoInicial = parseInt(100);
const resultadoUltimoRound = "Perdeu";
const custoItem = parseInt(103);
let novoSaldo;

function decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem) {

    switch (resultadoUltimoRound) {
        case "Ganhou":
            novoSaldo = saldoInicial * 1.15;
            break;
        case "Perdeu":
            novoSaldo = saldoInicial * 1.05;
            break;
        case "Bonus":
            novoSaldo = saldoInicial * 1.20;
            break;
        default:
            console.log("Tente novamente")
            return;

    }
}
decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem)



novoSaldo = Math.round(novoSaldo);

if (novoSaldo >= custoItem) {
    console.log("Comprar");
} else {
    console.log("Economizar")
}

console.log(novoSaldo)