const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Insira um número: ', (num) => {
  const numero = parseFloat(num);
  if (numero % 2 === 0) {
    console.log("O número é Par.");
  } else {
    console.log("O número é Ímpar.");
  }
  readline.close();
});