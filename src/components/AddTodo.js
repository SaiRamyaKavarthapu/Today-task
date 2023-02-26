import React from 'react';
import data from '../mock/MockData'
import Submit from './common/Button'
import TodoInput from './common/InputField'
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      newInputItem:'',
      error:false
    });
  }
  // Showing error message if error is true
	
  handleOnCreate(e) {
    e.preventDefault();
    
	if (this.state.newInputItem === '' && this.state.error === false) {
    this.setState({error:true})
  } 
  if(this.state.newInputItem !== ''){
    console.log("newInputItem",this.state.newInputItem)
    Promise.resolve(this.props.addItem(this.state.newInputItem)).then(() => {
      this.setState({
        newInputItem: ''
      });
    });}
  }

  errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: this.state.error ? '' : 'none',
				}}>
				<div class="p-3 mb-2 bg-danger text-white">Please enter task</div>

			</div>
		);
	};
  handleOnChange(e) {
    this.setState({
      newInputItem: e.target.value
    })
  
  }
  render() {
    return (<>
    {/* Calling to the error method */}
{/* {(this.state.newInputItem === '' ) &&<div className="messages">
						{this.errorMessage()}
					</div>} */}
      <div className="textField">
        <TodoInput 
          type="text"
          placeholder={this.props.Content.placeholder}
          value= {this.state.newInputItem}
          handleOnChange={(e) => { this.handleOnChange(e) }} />
        <Submit value={this.props.Content.addButton}
          onClick={(e) => { this.handleOnCreate(e) }} />

      </div></>

    );
  }
}
AddTodo.defaultProps = {
  Content: data
};
export default AddTodo;
