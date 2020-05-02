export default function adicionarDadoAleatorioArray(array) {
  const valor = [];
  for (let i = 0; i <= 30; i++) {
    let dado = valor.push(array[Math.floor(Math.random() * 117)]);
    if (valor.includes(dado)) {
      dado = valor.push(array[Math.floor(Math.random() * 117)]);
    }
  }
  return valor;
}
