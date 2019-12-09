// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    let coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;
