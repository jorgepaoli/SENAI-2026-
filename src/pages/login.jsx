import { useState } from "react";
import { Link } from "react-router-dom";

import imagemEstacao from "../assets/estacao.png"

export default function Login(){
    const [ usuario, setUsuario ] = useState('');
    const [ senha, setSenha ] = useState('');

    return(
        <section className="container">
            <div className="card">
                <img src={imagemEstacao} alt="" />
                    <div className="formulario">
                        <h2>Login</h2>
                            <form action="" className="form">
                                <label htmlFor="usuario">Usuário</label>
                                <input type="text" id="usuario" className="input" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" className="input" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                                <button className="botao">Entrar</button>
                            </form>
                        <span>Não possui uma conta? <Link to='/'>Cadastre-se aqui</Link></span>
                    </div>
                </div>
        </section>
    )
}