import React, { Component } from "react";

interface IIncrementContentProps{
    DataContent:number
}

export class IncrementContent extends Component<IIncrementContentProps,{}>{

    // constructor(props:IIncrementContentProps){
    //     super(props);
    // }

    public componentWillMount() {
        // Best Place to Subscribe method using PUB/SUB pattern
        console.log('1. Component WILL MOUNT!');
     }

     public componentDidMount() {
         // Best place to use Timer activity
        console.log('3. Component DID MOUNT!')
     }

     // After click on increment button
     public componentWillUpdate(nextProps:IIncrementContentProps, nextState:any) {
        console.log('4. Component WILL UPDATE!');
        console.log(`${nextProps.DataContent} ${nextState}`);
     }
     public componentDidUpdate(prevProps:IIncrementContentProps, prevState:any) {
        console.log('6. Component DID UPDATE!')
        console.log(`${prevProps.DataContent} ${prevState}`);
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
    public render(){
        console.log('2 & 5 Component Render');
        return (
            <React.Fragment>
                <h3>{this.props.DataContent}</h3>
            </React.Fragment>
        )
    }
}