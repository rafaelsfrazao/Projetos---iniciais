function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}

var numero = Math.round(Math.random() * 10) //função para gerar numero aleatorio.
var tentativas =1;

while (tentativas <= 3){
    var chute = parseInt (prompt ("Qual seu chute?"));

    if (chute == numero) {
        mostra ("Parabens! Você acertou!")
        break; //para caso seja verdadeiro.
        
    }else {
        mostra ("Errado!")
    }
    tentativas++
}