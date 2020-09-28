import React,{Component} from 'react';
import {Route,Switch,Redirect} from "react-router-dom"

import Login from "./pages/Login/login";
import Admin from "./pages/Admin/admin";
import './App.less';


export default class App extends Component{
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/admin" component={Admin}></Route>
                <Redirect to="/login"></Redirect>
            </Switch>
        )
    }

}

