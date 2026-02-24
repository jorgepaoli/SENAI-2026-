class Cidade {
    quantidadeHabitantes = '30000';
    estado = 'SP';
    nome = 'Mirandópolis';

    dados(){
        console.log(`Cidade: ${this.nome} \n Estado: ${this.estado} \n Habitantes: ${this.quantidadeHabitantes}`)
    }
}

const municipio = new Cidade();
municipio.dados();