import React, {Component} from "react";
class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {count: 0};
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        if(this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }
    render() {
        return(
            <div className="counter">
                <h1>Class Component</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default ClassCounter;