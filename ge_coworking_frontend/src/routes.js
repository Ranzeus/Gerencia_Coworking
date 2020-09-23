import React from "react";

import {BrowserRouter, Switch,Route} from 'react-router-dom';

import Login from "./pg/login";
import RegisUsuario from "./pg/registrar";
import Usuario from "./pg/usuario";
import Workstations from "./pg/workstations";
import SalasReunioess from "./pg/salasReunioes";
import AttDadosUsuar from "./pg/attDaosUsuario";
import Sala from "./pg/salaReuniao";
import Workstation from "./pg/workstation";

const Routes = () => (
    <BrowserRouter>
        <Switch>
           <Route exact path = "/" component ={Login} />
           <Route path= "/user/register" component={RegisUsuario}/>
           <Route path = "/user/:id" component ={Usuario} />
           <Route path={"/workstations"} component={Workstations}/>
            <Route path={"/salasReunioes"} component={SalasReunioess}/>
            <Route path={"/attDadosUsuario/:id"} component={AttDadosUsuar}/>
            <Route path={"/sala/:id"} component={Sala}/>
            <Route path={"/workstation/:id"} component={Workstation}/>
        </Switch>
    </BrowserRouter>
    )

export default Routes;