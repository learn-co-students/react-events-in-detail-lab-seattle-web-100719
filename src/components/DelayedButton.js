import React from 'react'

// takes two props: --onDelayedClick-- (a function), and --delay-- (a number)

class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist();
        setTimeout(() => 
        {this.props.onDelayedClick(event); }, this.props.delay);
    };

    render(){
        return(
            <button
                onClick={this.handleClick}
            >
            </button>
        )
    }

}

export default DelayedButton