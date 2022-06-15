import React from "react";

class Counter extends React.Component{

    constructor(){
        super();
        this.state = {count:0};
        this.incCount=this.incCount.bind(this);
    }

    incCount(){
        this.setState({count:this.state.count+1})
    }
    decCount=()=>{
        this.setState({count:this.state.count-1})
    }

    render(){
        return(<div>

            <h1>Count:{this.state.count}</h1>
            <button onClick={this.incCount}>Increment</button>
            <button onClick={this.decCount}>Decrement</button>

            <p className="text-danger" >Arrow function dont have their own this they use their parents this and  binds it to themselves that why in class components we have to find normal functions  </p>
        </div>)
    }

}

export default Counter;