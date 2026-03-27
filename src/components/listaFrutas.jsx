const frutas = [
    {id: 1, nome: 'Maçã'}, 
    {id: 2, nome: 'Banana'}, 
    {id: 3, nome: 'Melancia'}, 
    {id: 4, nome: 'Pera'},
    {id: 5, nome: 'Morango'}
    ];

export default function ListaFrutas({titulo}){
    const listaFrutas = frutas.map((fruta) => {
        return <li key={fruta.id}>
            <h3>{`${fruta.nome}`}</h3>
        </li>
    });

    return <>
    <h1>Liste des Fruits</h1>
    <ul>
        <li>
            <h3>{listaFrutas}</h3>
        </li>
    </ul>
    </>
}