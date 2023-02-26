import React from "react";
import Edit from './Edit';

class TodoList extends React.Component {
  renderItems() {
    console.log("data56",this.props.data)
    console.log("props",this.props)
    return this.props.data.map((item, index) =><>
    {console.log("item0",item)}
     <Edit key={index} {...item} {...this.props} /></>);
    
  }
  render() {
    return (
      <div className="list">
        {this.renderItems()}
      </div>
    );
  }
}
export default TodoList;