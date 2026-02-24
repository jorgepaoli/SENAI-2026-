class Bicicleta {
    #modelo = 'Caloi';
    #cor = 'Preto';
    #velocidadeMaxima = '35km/h';

    setModelo(valor){
       this.#modelo = valor;
    }
    getModelo(valor){
        return this.#modelo;
    }
    
    setCor(valor){
       this.#cor = valor;
    }
    getCor(valor){
        return this.#cor;
    }
    
    setVelocidadeMaxima(valor){
       this.#velocidadeMaxima = valor;
    }
    getVelocidadeMaxima(valor){
        return this.#velocidadeMaxima;
    }

    dados(){
        console.log(`Modelo: ${this.#modelo} \n Cor: ${this.#cor} \n Velocidade Máxima: ${this.#velocidadeMaxima}`)
    }
}

const bicicleta = new Bicicleta();
bicicleta.dados();