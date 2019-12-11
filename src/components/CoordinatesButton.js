// Code CoordinatesButton Component Here
import React, {Component} from  'react';

export default class CoordinatesButton extends Component{

    handleClick = (e)=> {
        let array = [e.screenX, e.screenY]
        this.props.onReceiveCoordinates(array)
    }

    render(){
        return(<button onClick= {this.handleClick}> button</button>)
    }
}