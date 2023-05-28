class Funcionário {
    constructor(nome, idade, salário, departamento) {
        this.nome = nome;
        this.idade = idade;
        this.salário = salário;
        this.departamento = departamento;
    }

    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    getSalário(){
        return this.salário;
    }
    getDepartamento(){
        return this.departamento;
    }

    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade){
        this.idade = idade;
    }
    setSalário(salário){
        this.salário = salário;
    }
    setDepartamento(){
        this.departamento = this.departamento;
    }
    
}

class Gerente extends Funcionário {
    constructor(nome, idade, salário, departamento){
        super(nome, idade, salário, departamento);
    }
}

class Programador extends Funcionário {
    constructor(nome, idade, salário, linguagem) {
        super(nome, idade, salário, "");
        this.linguagem = linguagem;
    }
    getLinguagem() {
        return this.linguagem;
    }
    setLinguagem(linguagem) {
        this.linguagem = linguagem;
    }
}

// const funcionário1 = new Gerente("Antônio", 25, 2500.00, "Vendedor");
// console.log(funcionário1.getNome());
// console.log(funcionário1.getIdade());
// console.log(funcionário1.getSalário());
// console.log(funcionário1.getDepartamento());

// const gerente1 = new Gerente("Maria", 45, 3500.00, "Atualização do salário do Gerente Vendas");
// console.log(gerente1.getNome());
// console.log(gerente1.getIdade());
// console.log(gerente1.getSalário());
// console.log(gerente1.getDepartamento());

const gerente1 = new Gerente("Maria", 45, 3500.00, "Gerente Vendas");
console.log("Detelhes do gerente:");
console.log(gerente1.getNome());
console.log(gerente1.getIdade());
console.log(gerente1.getSalário());
console.log(gerente1.getDepartamento());

gerente1.setSalário(4000.00);
console.log(gerente1.getSalário());
console.log("Atualização do salário do gerente");

// const programador1 = new Programador("Marcelo", 52, 3000.00, "Programador JavaScript");
// console.log(programador1.getNome());
// console.log(programador1.getIdade());
// console.log(programador1.getSalário());
// console.log(programador1.getLinguagem());
const programador1 = new Programador("Marcelo", 52, 3000.00, "Programador JavaScript");
console.log("Detelhes do Programador:");
console.log(programador1.getNome());
console.log(programador1.getIdade());
console.log(programador1.getSalário());
console.log(programador1.getLinguagem());

// programador1.setLinguagem("Programador Python"); //chama a linguagem Python
// console.log(programador1.getLinguagem());

const funcionário1 = new Gerente("Antônio", 25, 2500.00, "Vendedor");
console.log("Detalhes do funcionário");
console.log(funcionário1.getNome());
console.log(funcionário1.getIdade());
console.log(funcionário1.getSalário());
console.log(funcionário1.getDepartamento());

