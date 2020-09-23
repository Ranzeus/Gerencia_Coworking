import React,{Component} from "react";
import api from '../../serv/api'

import './styles.css'

export default class Sala extends Component{

    state = {
        sala: {}
    };

    async componentDidMount(){
        const {match: {params}} = this.props;
        const id = params.id;
        const response = await api.get(`/salasReuniao/${id}`)
        this.setState({sala: response.data});
    }

    render() {
        const {sala} = this.state;
        return(
            <div className={"sala-info"}>
                <h1>{sala.nome}</h1>
                <p>{sala.descricao}</p>
            </div>
        )
    }
}