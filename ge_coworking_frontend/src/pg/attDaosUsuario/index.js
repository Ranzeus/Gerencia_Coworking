import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import api from "../../serv/api";

class AttDadosUsuar extends Component{
    //Para pegar o id direto da reute
    componentDidMount() {
        const {match: {params}} = this.props;
        const id = params.id;
        console.log(id);
        this.setState({id});
    }

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome:'',
            data:'',
            cpf: 0,
            endPessoal:'',
            biografia:'',
        }
    }

    auterStatus = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    subDadosUser = async (e) => {

        e.preventDefault();
        try{
            const id = this.state.id;
            console.log(id);
            const response = await api.put(`/users/${id}`,this.state);
            console.log(response);
            //const {id} = response.data._id;
            //console.log(id);
            this.props.history.push(`/user/${id}`);
        }catch (err){
            err.set(402);
            alert("Flaha ao preencher os campos")
        }



    };

    render() {
        const {nome, data, cpf, endPessoal, biografia} = this.state;
        return(
            <div>
                <h1>Atualizar Dados</h1>
                <form onSubmit={this.subDadosUser}>
                    <div>
                        <input type={"text"}
                               name={"nome"}
                               value={nome}
                               onChange={this.auterStatus}
                               placeholder="Nome"/>
                    </div>
                    <div>
                        <input type={"text"}
                               name={"data"}
                               value={data}
                               onChange={this.auterStatus}
                               placeholder="Data de Nascimento"/>
                    </div>
                    <div>
                        <input type={"number"}
                               name={"cpf"}
                               value={cpf}
                               onChange={this.auterStatus}
                               placeholder="cpf"/>
                    </div>
                    <div>
                        <input type={"text"}
                               name={"endPessoal"}
                               value={endPessoal}
                               onChange={this.auterStatus}
                               placeholder="Endereço"/>
                    </div>
                    <div>
                        <input type={"text"}
                               name={"biografia"}
                               value={biografia}
                               onChange={this.auterStatus}
                               placeholder="Biografia"/>
                    </div>
                    <button type={"submit"}>OK</button>
                </form>
            </div>

        )
    }
}

export default withRouter(AttDadosUsuar);