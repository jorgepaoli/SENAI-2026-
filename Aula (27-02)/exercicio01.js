class Produto{
    nome;
    preco;
    estoque;

    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        if(this.preco < 0 || this.estoque < 0){
            for(let i = 1; i<=50; i++){
                throw new Error('PREÇO E/OU ESTOQUE MENOR(ES) DO QUE ZERO (0)');
            }
        }
    }

        aplicarDesconto(){
            this.preco = (this.preco - (this.preco * (10/100)));
            return this.preco;
        }

        valorEm_Estoque(){
            this.estoque = (this.preco * this.estoque);
            return this.estoque;
        }

        mostrar(){
            return `Nome do produto: ${this.nome} \nPreço original: ${this.preco} \nEstoque: ${this.estoque}`
        }

}

const produto = new Produto('Veja', 8, 84);
console.log(produto.mostrar())
console.log(`Preço com desconto: ${produto.aplicarDesconto()}`);
console.log(`Valor (R$) em estoque: ${produto.valorEm_Estoque()}`);