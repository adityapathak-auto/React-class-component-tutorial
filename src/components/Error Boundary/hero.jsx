

import React from "react";


class Hero extends React.Component{
    constructor(props){
        super(props);

        if(this.props.heroName === "tiger"){
            throw new Error("Not a Hero")
        }

        
    }
    render(){
        return(<div>
            <h3>{this.props.heroName}</h3>
        </div>)
    }
}


export default Hero;