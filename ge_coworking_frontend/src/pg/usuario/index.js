import React,{Component} from "react";
import api from "../../serv/api"
import {Link} from "react-router-dom";

export default class Usuario extends Component{
    state = {
        user: {},
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        try{
            const response = await api.get(`/users/${id}`);
            this.setState({user: response.data});
        }catch (err){
            err.set(402);
        }

    }

    render() {
        const {user} = this.state;

        return(
            <div className={"user-info"}>
                <h1>{user.nome}</h1>
                <h2>{user.cpf}</h2>
                <h2>{user.data}</h2>
                <h2>{user.email}</h2>
                <p>{user.endPessoal}</p>
                <p>{user.biografia}</p>
                <Link to={"/workstations"}>Workstations</Link>
                <p/>
                <Link to={"/salasReunioes"}>Salas de reunioes</Link>
                <p/>
                <Link to={"/"}>Sair</Link>
            </div>
        )
    }
}