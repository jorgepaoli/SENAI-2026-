class Tarefa{
    titulo;
    descricao;
    concluida = false;

    constructor(titulo, descricao, concluida){
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = concluida;
    }
}

class ListaTarefas extends Tarefa{
    lista;

    constructor(lista){
        this.lista = lista;
    }
    
    concluir(){
        this.concluida = true;
    }
}