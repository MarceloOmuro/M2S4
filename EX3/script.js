class CaixaRegistradora {
    constructor(estoque) {
        this.estoque = estoque;
        this.contaAberta = [];
        this.nomeCliente = '';
        this.totalConta = 0;
    }

    iniciarAtendimento(nome) {
        this.nomeCliente = nome;
        return `Olá ${nome}, seja bem vindo(a)`;
    }

    adicionarItem(codigoBarra, quantidade) {
        const produto = this.estoque.find(produto => produto.codigo === codigoBarra);
        if (produto) {
            if (produto.quantidade >= quantidade) {
                const produtoConta = {
                    codigo: produto.codigo,
                    nome: produto.nome,
                    preço: produto.preço,
                    quantidade: quantidade
                };
                this.contaAberta.push(produtoConta);
                produto.quantidade -= quantidade;
                return 'Item adicionado com sucesso';
            } else {
                return 'Quantidade insuficiente no estoque';
            }
        } else {
            return 'Código de barras não encontrado';
        }
    }

    calcularTotalConta() {
        let total = 0;
        this.contaAberta.forEach(item => {
            total += item.preço * item.quantidade;
        });
        this.totalConta = total;
        return total;
    }
    obterTotalConta(){
        return this.totalConta;
    }

    fecharConta(dinheiro){
        const totalConta = this.totalConta;
        const troco = dinheiro - totalConta;
        this.zerarCaixa();
        return troco;
    }

    zerarCaixa(){
        this.contaAberta = [];
        this.totalConta = 0;
    }
}

const estoque = [{
        codigo: 1,
        nome: "Banana",
        preço: 2.00,
        quantidade: 10
    },
    {
        codigo: 2,
        nome: "Arroz",
        preço: 7.00,
        quantidade: 10
    },
    {
        codigo: 3,
        nome: "Melancia",
        preço: 12.00,
        quantidade: 10
    },
    {
        codigo: 4,
        nome: "Farinha",
        preço: 4.00,
        quantidade: 10
    }
];

const caixa = new CaixaRegistradora(estoque);

const nomeCliente = "João";
const mensagemInicial = caixa.iniciarAtendimento(nomeCliente);
console.log(mensagemInicial); // Exibe "Olá João, seja bem vindo(a)"

const codigoBarra = 2;
const quantidade = 3;
const resultadoAdicionarItem = caixa.adicionarItem(codigoBarra, quantidade);
console.log(resultadoAdicionarItem); // Exibe "Item adicionado com sucesso"

const totalConta = caixa.calcularTotalConta();
console.log(`O valor total da conta é de: R$ ${totalConta.toFixed(2)}`);//Exibe o valor total da conta do cliente

const dinheiroPago = 50.00;
const troco = caixa.fecharConta(dinheiroPago);
console.log(`Troco: R$ ${troco.toFixed(2)}`); //Exibe o troco do cliente