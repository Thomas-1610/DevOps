function criarMensagem(nome) {
  const nomeNormalizado = String(nome ?? '').trim();

  if (!nomeNormalizado) {
    return 'Ola, visitante!';
  }

  return `Ola, ${nomeNormalizado}!`;
}

module.exports = { criarMensagem };
