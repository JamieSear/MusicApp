import React, { Component } from 'react';

class HeartButton extends Component {
    state = { faved: false }

    handleFave = () => {
        console.log('clicked')
        this.setState(prevState => ({ faved: !prevState.faved }))
      }

    render() {
        return (
        <span onClick={this.handleFave} style={{ "font-size": "27px", color: `${ this.state.faved ? "red" : "black" }` }}>&hearts;</span>
        );
    }
}

export default HeartButton;
