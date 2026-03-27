const estudantes = [
    {id: 1, nome: 'Ellefer', idade: 17, ra: 189900},
    {id: 2, nome: 'Luiz Otávio', idade: 17, ra: 178800},
    {id: 3, nome: 'Maria Eduarda', idade: 17, ra: 167700},
]

export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudante) => {
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