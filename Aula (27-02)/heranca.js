class Jogador{
    #nome;
    #numero;

    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero;
    }
} //As classes-mãe, geralmente, NÃO são instanciadas

class jogadorFutebol extends Jogador{  //CLasse-filha
    peDominante;
    totalGols;
    qtde;

    constructor(nome, numero, peDominante, totalGols, qtde){
        super(nome, numero);
        this.peDominante = peDominante;
        this.totalGols = totalGols;
        this.qtde = qtde;
    }

    fazerGol(qtde){
        this.totalGols += qtde;
        return `Ele fez ${qtde} gols neste jogo, acumulando ${this.totalGols} no campeonato.`
    }

    mostrar(){
        return `O jogador ${super.getNome()} de camisa número ${super.getNumero()} tem o pé dominante ${this.peDominante} e já fez ${this.totalGols} gols.`;
    }
}

const jogador = new jogadorFutebol('Américo', 10, 'direito', 14);
console.log(jogador.mostrar());
console.log(jogador.fazerGol(3));