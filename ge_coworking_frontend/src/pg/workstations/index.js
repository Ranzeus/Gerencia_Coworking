import React,{Component} from "react";
import api from "../../serv/api"
import {Link} from "react-router-dom";

import './styles.css';

export default class Workstations extends Component{

    state = {
        estacoes: [],
        infoestacoes: {},
    }

    componentDidMount() {
        this.loadSalas();
    }
    loadSalas = async () => {
        const response = await api.get("/workstations");
        this.setState({estacoes: response.data});
    }

    render() {
        const {estacoes} = this.state;
        return(
            <div className={"lista-estacoes"}>
                <h1>Workstations</h1>
                {/*percorre a lista de salas*/}
                {estacoes.map(estacao => (
                    <article key={estacao._id}>
                        <strong>{estacao.nome}</strong>
                        <p>{estacao.descricao}</p>
                        <Link to={`./workstation/${estacao._id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        )
    }
}