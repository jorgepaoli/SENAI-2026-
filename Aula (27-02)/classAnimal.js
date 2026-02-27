class Animal{
    especie;
    genero;
    familia;
    nome;

    constructor(especie, genero, familia, nome){
        this.especie = especie;
        this.genero = genero;
        this.familia = familia;
        this.nome = nome;
    }

    //Método 'mostrar'
    mostrar(){
        return `Espécie: ${this.especie} \nGênero: ${this.genero} \nFamília: ${this.familia} \nNome popular: ${this.nome}`;
    }
}

const animal = new Animal('P. Lotor', 'Procyon', 'Procyonidae', 'Guaxinim');
console.log(animal.mostrar());