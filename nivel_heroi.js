const nome = "Rafael";
const nivel = 29;


if (nivel >= 40) {
    console.log("Parabéns, valente " + nome + "! Sua coragem e habilidade são notáveis!");
} else if (nivel >= 30 && nivel <= 40) {
    console.log("Quase lá," + nome + " Continue treinando!")
}
else {
    console.log("Ainda é cedo, jovem " + nome + " Treine mais!")
}