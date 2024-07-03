const entrada = "A B C C A C";
const votos = entrada.split(' ');

const contagemVotos = {};

votos.forEach(voto => {
    contagemVotos[voto] = (contagemVotos[voto] || 0) + 1;
});

let mapaVencedor = "";
let maxVotos = 0;

// Iterar sobre os pares chave-valor (candidato: contagem de votos) em contagemVotos
for (const candidato in contagemVotos) {
    const contagemAtual = contagemVotos[candidato];

    // Atualizar vencedor e contagem máxima se necessário
    if (contagemAtual > maxVotos) {
        mapaVencedor = candidato;
        maxVotos = contagemAtual;
    }
}


console.log(contagemVotos);