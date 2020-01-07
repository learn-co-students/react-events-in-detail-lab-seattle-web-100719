import React from 'react'

// {this.props.onReceiveCoordinates} --> This function is currently just logging whatever is passed into it

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        console.log(event.clientX)
        let arr = []
        arr.push(event.clientX)
        arr.push(event.clientY)
        this.props.onReceiveCoordinates(arr)
    }

    render(){
        return(
            <button
                onClick={this.handleClick}
            >
            </button>
        )
    }
}

export default CoordinatesButton
