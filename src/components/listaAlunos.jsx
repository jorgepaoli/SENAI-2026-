const alunos = [
    {id: 1, nome: 'Ana', idade: 19, curso: 'Economia', ra: 458712, nota: 9, foto_perfil: "https://i.pinimg.com/1200x/82/db/8f/82db8fa369291ea7524fb9b4ebbef125.jpg"},
    {id: 2, nome: 'Maria', idade: 18, curso: 'Letras', ra: 236985, nota: 9, foto_perfil: "https://i.pinimg.com/736x/fd/05/18/fd051880f16fe59f2e635bbab1702e3d.jpg"},
    {id: 3, nome: 'João', idade: 18, curso:  'Engenharia Química', ra: 521498, nota: 7.5, foto_perfil: "https://i.pinimg.com/736x/eb/18/9a/eb189a31554f42ed6cd7b13d94926c02.jpg"},
    {id: 4, nome: 'André', idade: 19, curso: 'Nutrição', ra: 325471, nota: 8, foto_perfil: "https://i.pinimg.com/736x/03/3c/87/033c87ec4c68e0c9cdbe58fee39eedff.jpg"},
    {id: 5, nome: 'Helena', idade: 18, curso:  'Moda & Design', ra: 740384, nota: 9.5, foto_perfil: "https://i.pinimg.com/736x/6a/a7/ee/6aa7ee0e94a1ae283874a9393e9231bd.jpg"},
]

export default function ListaAlunos(){
    const lista = alunos.filter(aluno => aluno.nota == 6 || aluno.nota >= 7);
    const listaAlunos = lista.map((aluno) => {
        return <li key={aluno.id}>
            <h3>{`Nome: ${aluno.nome}`}</h3>
            <p>{`Idade: ${aluno.idade}`}</p>
            <p>{`RA: ${aluno.ra}`}</p>
            <p>{`Nota: ${aluno.nota}`}</p>
            <img src={aluno.foto_perfil}/>
        </li>
    });

    return(
        <>
        <ul>
            {listaAlunos}
        </ul>
        </>
    )}