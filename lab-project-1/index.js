const heroi = 'Max Pine';

let xp = 2500;

if (xp < 1000) {
    console.log(heroi +  'Seu nível é ' + 'ferro');
} 
else if (xp >= 1001 && xp < 2000) {
    console.log(heroi + 'Seu nível é ' + 'Bronze');
}
else if (xp >= 2001 && xp < 5000) {
    console.log(heroi + 'Seu nível é ' + 'Prata');
}
else if (xp >= 6001 && xp < 6000) {
    console.log(heroi + 'Seu nível é ' + 'Ouro');
}
else if (xp >= 5001 && xp < 8000) {
    console.log(heroi + 'Seu nível é ' + 'Platina');
}
else if (xp >= 8001 && xp < 9000) {
    console.log('Seu nível é ' + 'Ascendente');
}
else if (xp >= 9001 && xp < 10000) {
    console.log('Seu nível é ' + 'Imortal');
}
else (xp >= 10.001) {
    console.log('Seu nível é ' + 'Radiante');
}