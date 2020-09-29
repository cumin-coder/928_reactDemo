import React, {Component} from 'react';
export default class Counter extends Component {

    numberRef = React.createRef()

//加
    increment = () => {
        let {value} = this.numberRef.current
        this.props.increment(value)
    }

//减
    decrement = () => {
        let {value} = this.numberRef.current
        this.props.decrement(value)
    }

//奇数加
    incrementOdd = () => {
        let {value} = this.numberRef.current
        let {count} = this.props

        if(count % 2 !== 0){
            this.props.increment(value)
        }
    }

//异步加
    incrementAsync = () => {
        let {value} = this.numberRef.current
        setTimeout(() => {
            this.props.increment(value)
        }, 200)
    }

    render() {
        return (
            <div>
                <h1>count is {this.props.count}</h1>&nbsp;
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
        );
    }
}

