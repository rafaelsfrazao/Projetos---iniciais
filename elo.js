// Para alterar o elo e ver uma resposta diferente apenas mude variavel pontuacao.
let pontuacao = 8000

//classificação de elo com if e operadores logicos, criação de função opcional.

function mostrarElo() {
    if (pontuacao >= 5000 && pontuacao <= 6000) {
        console.log("Elo Ouro")
    } else if (pontuacao <= 4999 && pontuacao >= 1001) {
        console.log("Elo Prata")
    } else if (pontuacao <= 7000 && pontuacao >= 6000) {
        console.log("Elo Platina")
    } else if (pontuacao <= 8000 && pontuacao >= 7001) {
        console.log("Elo Esmeralda")
    } else {
        console.log("Elo Bronze")
    }
}
mostrarElo()