import { Modal } from 'react-bootstrap';
import React from 'react';
import Submit from './common/Button'
import data from '../mock/MockData'
import TodoInput from './common/InputField'
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      show: false,

    };
  }
  renderName() {
    return (
      <ul>
        {console.log("hello",this.props.task)}
        {this.props.task}
      </ul>
    );
  }
  renderButtons() {
    return (
      <div className="todobutton">
        <span className="editdel">
          <li className="list-group-item text-capitalize d-flex justify-data-between ">
            <Submit onClick={() => this.handleEdit()} value={this.props.Content.editButton} />
            <p></p>
            <Submit onClick={(this.props.deleteItem.bind(this, this.props.task))} value={this.props.Content.delButton} />
          </li>
        </span>
        <Modal show={this.state.show} animation={true} onHide={() => this.handleModal()}>
          <Modal.Header>{this.props.Content.modalPopup}</Modal.Header>
          <Modal.Body>
            <form onClick={this.onEditClick.bind(this)}>
              <TodoInput type="text"
                defaultValue={this.props.task}
                handleOnChange={(e) => this.handleOnChange(e)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Submit onClick={this.onSaveClick.bind(this)} value={this.props.Content.saveButton} />
            <Submit onClick={() => this.handleModal()} value={this.props.Content.cancelButton} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  onEditClick() {
    this.setState({ editing: true });
  }
  onCancelClick() {
    this.setState({ editing: false });
  }
  onSaveClick(e) {
    e.preventDefault();
    this.props.saveItem(this.props.task, this.state.editInput);
    this.setState({
      show: !this.state.show,
      editing: false
    });
  }
  handleOnChange(e) {
    this.setState({
      editInput: e.target.value
    });
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  handleEdit() {
    this.onEditClick();
    this.handleModal();

  }
  render() {
    return (
      <div className="item">
        <br></br>
        <span className="name">
          {this.renderName()}
        </span>

        <span className="actions">
          {this.renderButtons()}
        </span>
      </div>
    );
  }
}
Edit.defaultProps = {
  Content: data
};
export default Edit;