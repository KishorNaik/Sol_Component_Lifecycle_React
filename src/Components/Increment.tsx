import React, { Component, MouseEvent } from "react";
import { IncrementContent } from "./IncrementContent";

interface IIncrementProps{

}

interface IIncrementState{
    Data:number
};


export default class Increment extends Component<IIncrementProps,IIncrementState>{

    constructor(props:IIncrementProps){
        super(props);

        this.state={
            Data:0
        };
    }

    // Event Handler
    private IncrementEventHandler=(event:MouseEvent)=> {
        this.setState({
            Data:this.state.Data + 1
        });
    }

    public render(){
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.IncrementEventHandler}>Increment</button>
                <IncrementContent DataContent={this.state.Data}></IncrementContent>
            </React.Fragment>
        )
    }

}