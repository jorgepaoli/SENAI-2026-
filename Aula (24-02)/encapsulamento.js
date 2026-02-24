class Pessoa{
    nome; //Atributo público
    #cpf; //Atributo privado
    #salario; // ''

    //Métodos Getters e Setters
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(valor){
        return this.#cpf;
    }
    setSalario(valor){
        this.#salario = valor;
    }
    getSalario(valor){
        return this.#salario;
    }
}

const Souza_Silva = new Pessoa();
Souza_Silva.nome = 'José Maria Souza e Silva';
Souza_Silva.setCpf('78546321598');
console.log(Souza_Silva.getCpf());
Souza_Silva.setSalario('1250,83');
console.log(Souza_Silva.getSalario());
console.log(Souza_Silva);