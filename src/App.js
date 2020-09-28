import React, {Component} from 'react';
import './App.less';
import Counter from "./components/counter"

export default class App extends Component {
    render() {
        return <Counter store={this.props.store}/>
    }
}

