// Code CoordinatesButton Component Here
import React from "react";


export default class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        const {pageX, pageY} = event
        this.props.onReceiveCoordinates([pageX, pageY])
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}