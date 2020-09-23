import React,{Component} from "react";
import api from "../../serv/api";
import {Link} from "react-router-dom";

import './styles.css';

export default class SalasReunioes extends Component{

    state = {
        salas: [],
        salaInfo: {},
    }

    componentDidMount() {
        this.loadSalas();
    }
    loadSalas = async () => {
        const response = await api.get("/salasReuniao");
        //console.log(response.data);
        this.setState({salas: response.data});
    }

    render() {
        const {salas} = this.state;
        return(
            <div className={"lista-salas"}>
                <h1>Salas de Reuniões</h1>
                {/*percorre a lista de salas*/}
                {salas.map(sala => (
                    <article key={sala._id}>
                        <strong>{sala.nome}</strong>
                        <p>{sala.descricao}</p>
                        <Link to={`./sala/${sala._id}`}>Acessar</Link>
                    </article>
                ))}

            </div>
        )
    }
}