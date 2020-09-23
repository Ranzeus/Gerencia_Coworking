import React,{Component} from "react";
import api from "../../serv/api";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";

import './styles.css'

class Login extends Component{

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

    subLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await api.post('/login',this.state);
            const id = response.data._id;
            this.props.history.push(`/user/${id}`)
        }catch (err){
            alert("ERRO! Por favor preencha os campos corretamente.")
            err.set(402);
        }
    };

    render() {
        const {email,senha} = this.state;
        return(
            <div class={"login-page"}>
                <div class={"form"}>
                    <h1>Login</h1>
                    <form onSubmit={this.subLogin}>
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
                        <div className={"link"}>
                            <Link to ={"/user/register"}>Se Registrar</Link>
                        </div>
                    </form>

                </div>
            </div>

        )
    }
}

export default withRouter(Login);