import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import api from "../../serv/api";

import './styles.css'

class RegisUsuario extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            senha:''
        }
    }

    auterStatus = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    subRegisUser = async (e) => {

        e.preventDefault();
        try{
            const response = await api.post('/users/register',this.state);
            console.log(response);
            const id = response.data._id;
            console.log(id);
            const email = this.state.email;
            console.log(email);
            api.post('/email',{id,email});
            alert("Email de confimação enviado, por favor acesse o linque para terminar o cadastro");
            this.props.history.push(`/`);

        }catch (err){
            alert("Falha! Por favor Preencha Corretamente.")
            err.set(402);

        }
    };

    render() {
        const {email, senha} = this.state;
        return(
            <div className={"login-page"}>
                <div className={"form"}>
                    <h1>Registrar</h1>
                    <form onSubmit={this.subRegisUser}>
                        <div>
                            <input type={"text"}
                                   name={"email"}
                                   value={email}
                                   onChange={this.auterStatus}
                                   placeholder="e-mail"/>
                        </div>
                        <div>
                            <input type={"password"}
                                   name={"senha"}
                                   value={senha}
                                   onChange={this.auterStatus}
                                   placeholder="senha"/>
                        </div>
                        <button type={"submit"}>OK</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(RegisUsuario);