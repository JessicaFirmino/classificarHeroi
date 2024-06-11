const prompt = require('prompt-sync')();

// Função para determinar o nível do herói baseado na quantidade de experiência (XP)
function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return `O herói de nome ${nome} está no nível ${nivel}.`;
}

// Solicitar o nome e a quantidade de experiência (XP) do herói
const nomeHeroi = prompt("Digite o nome do herói: ");
const xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói: "));

// Verificar se a entrada de XP é um número válido
if (isNaN(xpHeroi)) {
    console.log("Por favor, insira um valor numérico válido para a experiência (XP).");
} else {
    // Chamar a função e exibir o resultado
    const resultado = classificarHeroi(nomeHeroi, xpHeroi);
    console.log(resultado);
}
