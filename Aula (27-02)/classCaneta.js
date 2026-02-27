class Caneta{
    cor = 'Azul';
    marca = 'Bic';
    ponta = 'Fina';
    carga = 10/*ml*/;
    tampa = false;
    
    escrever(){
        this.carga -= 1;
        return "Je suis juste venu de commencer à écrire. Qu'est-ce que tu veux ?";
    }

/*
Exercício #1 - Criar o método 'sublinhar', que recebe um parâmetro que representará a quantidade de tinta gasta.
Desconte isso da quantidade de tinta total e mostre a quantidade restante; entretanto, não permita que essa seja subtraída
caso o valor seja maior que a quantidade de tinta da classe em análise.
*/

    sublinhar(valor_tinta){
        if(valor_tinta > this.carga){
            console.log("Desolé! La quantité de l'encre n'est pas suffisante pour que tu écrives.")
        } else {
            this.carga -= valor_tinta;
            return `La quantité de l'encre restante est ${this.carga}ml.`
        }
    }

/*Exercício #2 - 
*/

    recarregarTinta(valor_tinta){
        if((this.carga + valor_tinta) > 15){
            return `Ce n'est pas possible de recharger cette quantité, parce que le stylo a une limite de 15ml d'encre, lequel est maintenant ${this.carga +valor_tinta}ml.`
        } else{
            this.carga += valor_tinta
            return `La quantite de l'encre rechargée est ${this.carga}ml.`
        }
    }

    getCarga(){
        return this.carga;
    }
}

const canetaAzul = new Caneta();
console.log(canetaAzul.escrever());
console.log(canetaAzul.sublinhar(8));
console.log(canetaAzul.recarregarTinta(11));