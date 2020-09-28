import React, {Component} from 'react';
import './App.less';

export default class App extends Component {

    numberRef = React.createRef()

    state = {
        count: 0
    }

    //加
    increment = () => {
        let {value} = this.numberRef.current
        let {count} = this.state
        this.setState({count: count + value * 1})
    }

    //减
    decrement = () => {
        let {value} = this.numberRef.current
        let {count} = this.state
        this.setState({count: count - value * 1})
    }

    //奇数加
    incrementOdd = () => {
        let {value} = this.numberRef.current
        let {count} = this.state
        if(count % 2 !== 0){
            this.setState({count: count + value * 1})
        }
    }
    //异步加
    incrementAsync = () => {
        let {value} = this.numberRef.current
        let {count} = this.state
        setTimeout(()=>{
            this.setState({count: count + value * 1})
        },200)
    }

    render() {
        return (
            <div>
                <h1>count is {this.state.count}</h1>&nbsp;
                <select ref={this.numberRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementOdd}>increment if odd</button>
                &nbsp;
                <button onClick={this.incrementAsync}>decrement async</button>
                &nbsp;
            </div>
        )
    }

}

