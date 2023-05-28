class Conta {
  #saldo = 0;
  #senha = "senha123";

  constructor() {}

  get getSaldo() {
    return this.#saldo;
  }

  #validaSenha = (senha) => {
    if (senha != this.#senha) return false;
    return true;
  };

  deposito = (valor, senha) => {
    if (!this.#validaSenha(senha)) return "Senha inválida!";
    this.#saldo += valor;
    return `Saldo atual: R$ ${this.getSaldo}`;
  };

  retirada = (valor, senha) => {
    if (!this.#validaSenha(senha)) return "Senha inválida!";
    if (valor > this.#saldo)
      return `Saldo insuficiente para retirada de R$ ${valor}! Saldo atual: R$ ${this.getSaldo}`;
    this.#saldo -= valor;
    return `Retirada de R$ ${valor} efetuada com sucesso! Saldo atual: R$ ${this.getSaldo}`;
  };
}

const conta = new Conta();
console.log(conta.deposito(100, "senha123"));
console.log(conta.deposito(200, "senha123"));
console.log(conta.retirada(500, "senha123"));
console.log(conta.retirada(500, "senhaErrada"));
//console.log(conta.#senha)); //<-- Tentativa errada de chamar o atributo privado