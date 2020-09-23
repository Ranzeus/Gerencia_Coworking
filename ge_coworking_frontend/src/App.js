import React,{Component} from 'react';
import Routes from "./routes";

import './styles.css'

//Importando o componente Cabeçalho
import Header from "./comp/Header";

const App = () =>(
    <div className="App">
        <Header/>
        <Routes/>
    </div>
)

export default App;
