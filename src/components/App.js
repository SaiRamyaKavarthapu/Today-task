import React from 'react';
import styles from '../root/styles/App.css'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import data from '../mock/MockData'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error:false,
      name:"sai"
    };
  }
  // componentDidUpdate(prevProps , prevState) {
  //   if(this.props.heading !== prevProps.heading){
  //     this.setState({heading:this.props.heading})
  //   }
  // }
  
  addItem(item) {
    const sameTask = this.state.data.find((element)=>element.task === item)
    console.log(sameTask);
    if(!sameTask){
    this.state.data.unshift({
      task: item
    });
    this.setState({
      data: this.state.data,error:false
    });  
 
  }
  else if(sameTask){
    this.setState({error:true});
  }
  console.log("data2",this.state.data)
}

 errorMessage(){
  if(this.state.error === true){
    alert("Task is already exists")
  }
 }

  findItem(item) {
    return this.state.data.find((element) => element.task === item) 
    
  }
  
  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.task = newItem;
    this.setState({ data: this.state.data });
  }
  deleteItem(item) {
    console.log("datattt",this.state.data);
    let index = this.state.data.map(element => element.task).indexOf(item);
    console.log("index",index)
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
    console.log("deleted item except", this.state.data )
  }



  render() {
  
    return (
      <div >
         {this.errorMessage()}
        <div className="header">
          <h1>{this.props.Content.text}</h1>
          <br />
        </div>
       
        <AddTodo data={this.state.data} addItem={this.addItem.bind(this)} />
        <br />
        <br />
        <h2>{this.props.Content.sub}</h2>
   
       <TodoList data={this.state.data} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)}
        />
      </div>
    );
  }
}
App.defaultProps = {
  Content: data
};
export default App;