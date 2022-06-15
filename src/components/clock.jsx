import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date(),
            count:0,
            
        
        }
    }

    componentDidMount(){
        console.log("mounted");

          this.timer=setInterval(()=>{
            this.setState({time:new Date()})
        },1000)
    }
    

    shouldComponentUpdate(){
        return true;
      }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("Updated");

        if(prevState.time !== this.state.time){
            this.setState({count:this.state.count+1})
        }
        //it will take three arguments and to update here we have to put the update or setState inside a condition;


    }

    // showClock = ()=>{
    //     this.setState({show:!this.state.show})

    // }

    componentWillUnmount(){

        clearInterval(this.timer)

        console.log("unmounted");
        this.setState({count:0})

    }


    render(){
        return(<div>
            <div>
            <h3 >The time is : {this.state.time.toLocaleTimeString()}</h3>
         
         <h3>This component is updated: {this.state.count} times</h3>

         

         </div>
         {/* <button onClick={this.showClock}>Show Clock</button> */}

         <br/>
         <hr/>
         <br/>
         <br/>
         <div className="notes">
         <h1>Constructor</h1>

         <p>constructor
The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).</p>

         <br/>
         <hr/>

         <h1>componentDidMount</h1>
         <p>componentDidMount
The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.</p>
            <br/>
            <hr/>

            <h1>componentDidUpdate</h1>
            <p>The componentDidUpdate method is called after the component is updated in the DOM.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and the color becomes "yellow".

This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element:</p>

<br/>
<hr/>

<h1>shouldComponentUpdate</h1>

         <p>In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true.

The example below shows what happens when the shouldComponentUpdate() method returns false:</p>

<hr/>
<br/>
<h1>componentWillUnmount</h1>
<p>componentWillUnmount
The componentWillUnmount method is called when the component is about to be removed from the DOM.</p>
</div>
        </div>)
    }
    
}

export default Clock;