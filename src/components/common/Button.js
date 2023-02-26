import React, { Component } from 'react';
import data from '../../mock/MockData'

class Submit extends Component {
    render() {
        console.log(this.props)
        return (
            <button
                onClick={this.props.onClick}>
                {this.props.value}
            </button>

        );
    }
}
Submit.defaultProps = {Content:data}
export default Submit
