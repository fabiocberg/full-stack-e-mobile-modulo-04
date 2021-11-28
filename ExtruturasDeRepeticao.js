// Extruturas de repetição
/**
 * - while
 * - do while
 * - for
 * - for of
 */
// const tamanho = 0;
// console.log(tamanho);
// let tamanhoAtual = 1;
// while (tamanhoAtual < tamanho) {
//   console.log(tamanhoAtual);
//   tamanhoAtual++;
// }
// do {
//   console.log(tamanhoAtual);
//   tamanhoAtual++;
// } while (tamanhoAtual < tamanho);

const array = ["João", "Pedro", "Maria"];
// console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (let nome of array) {
  console.log(nome);
}
