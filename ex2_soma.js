const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o primeiro número: ', (n1) => {
  readline.question('Digite o segundo número: ', (n2) => {
    const soma = parseFloat(n1) + parseFloat(n2);
    console.log(`A soma dos números é: ${soma}`);
    readline.close();
  });
});