var idade = 17;
console.log(`vc tem ${idade} anos`);
if (idade < 16) {
  console.log('voto não obrigatório');
} else if (idade < 18 || idade > 65) {
  console.log('voto opcional');
} else {
  console.log('voto obrigatótio');
}
