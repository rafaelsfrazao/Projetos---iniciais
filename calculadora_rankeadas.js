const vitoria = 0;
const derrota = 0;
let saldoRankeadas;



function calculaRankeada(vitoria, derrota) {
    saldoRankeadas = vitoria - derrota
    return;
}
calculaRankeada(vitoria, derrota)

if (saldoRankeadas <= 10) {
    console.log("Ferro")

} else if (saldoRankeadas >= 11 && saldoRankeadas <= 20) {
    console.log("Bronze")

} else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
    console.log("Prata")

} else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
    console.log("Ouro")

} else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
    console.log("Diamante")

} else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
    console.log("Lendário")

} else[
    console.log("Imortal")
]

