class Livro {
        titulo = 'Um Sopro de Vida';
        autor = 'Clarice Lispector';
        editora = 'Rocco';
        paginas = '192';
        dataPublicacao = '16 de outubro de 2020';
        idioma = 'Português Brasileiro';
        isbn10 = '6555320206';
        isbn13 = '978-6555320206';

        ler(){
            console.log(`Vous êtes en train de lire le titre '${this.titulo}'`)
        };

        break(){
            console.log('Vous restez maintenant')
        }
    }

const leitura = new Livro();
leitura.ler();
leitura.break();