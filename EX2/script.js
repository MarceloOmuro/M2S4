class Conta {
    #saldo;
    #senha;
  constructor(saldo, senha) {
    this.#saldo = saldo;
    this.#senha = senha;
  }
  deposito(valor, senha) {
    if (senha == this.#senha) {
      this.#saldo += valor;
      return `seu novo saldo é ${this.#saldo}`;
    } else {
      return "Senha incorreta";
    }
  }
  retirada(valor, senha) {
    if (senha == this.#senha) {
      if (valor <= this.#saldo) {
        this.#saldo -= valor;
        return `seu novo saldo é ${this.#saldo}`;
      } else {
return "Saldo insuficiente";
      }
    } else {
      return "Senha incorreta";
    }
  }
  extrato(senha) {
    if (senha == this.#senha) {
      return `seu saldo é ${this.#saldo}`;
    } else {
      return "Senha incorreta";
    }
  }
}
const contaCorrente = new Conta(1000, 1234);

console.log(contaCorrente.deposito(500, 1234));
console.log(contaCorrente.retirada(200, 1234));
console.log(contaCorrente.extrato(1234));