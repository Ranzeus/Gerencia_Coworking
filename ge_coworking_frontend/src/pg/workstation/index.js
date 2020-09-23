import React,{Component} from "react";
import api from '../../serv/api'

import './styles.css'

export default class Workstation extends Component{

    state = {
        workstation: {}
    };

    async componentDidMount(){
        const {match: {params}} = this.props;
        const id = params.id;
        //console.log(id);
        const response = await api.get(`/workstations/${id}`)
        this.setState({workstation: response.data});
    }

    render() {
        const {workstation} = this.state;
        return(
            <div className={"estacoes-info"}>
                <h1>{workstation.nome}</h1>
                <p>{workstation.descricao}</p>
            </div>
        )
    }
}