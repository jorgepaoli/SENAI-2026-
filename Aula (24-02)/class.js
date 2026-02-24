class Veiculo {
    modelo = 'Creta';
    marca = 'Hyundai';
    ano = '2022';

    //Métodos ou ações
    dirigir(){
        console.log('Il a commencé à conduire la voiture')
    };
    break(){
        console.log('Il a arrêté à la conduire')
    }
}

//Instanciar ou criar o objeto
const carro = new veiculo();
console.log(typeof carro);
carro.dirigir();
carro.break();