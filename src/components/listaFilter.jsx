const estudantes = [
    {id: 1, nome: 'Ellefer', idade: 17, disciplina: 'Educação Física', ra: 189900},
    {id: 2, nome: 'Luiz Otávio', idade: 17, disciplina: 'Língua Portuguesa', ra: 178800},
    {id: 3, nome: 'Maria Eduarda', idade: 17, disciplina:  'Matemática', ra: 167700},
]

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Educação Física');
    const listaEstudantes = lista.map((estudante) => {
        return <li key={estudante.id}>
            <h3>{`Nome: ${estudante.nome}`}</h3>
            <p>{`Idade: ${estudante.idade}`}</p>
            <p>{`RA: ${estudante.ra}`}</p>
        </li>
    });

    return(
        <>
        <h1>Encore, en apprenant des listes dans le React</h1>
        <ul>
            {listaEstudantes}
        </ul>
        </>
    )}