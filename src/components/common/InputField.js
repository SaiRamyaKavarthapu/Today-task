import React, { Component } from 'react';
import data from '../../mock/MockData'

class TodoInput extends Component {
    render() {
        return (
            <input
             onChange={this.props.handleOnChange}
                type="text"
                placeholder={this.props.placeholder}
                required
                defaultValue={this.props.defaultValue}
                value={this.props.value} />
        );
    }
}
TodoInput.defaultProps = {Content:data}
export default TodoInput