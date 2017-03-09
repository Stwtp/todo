import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);
    this.handleChangetext = this.handleChangetext.bind(this);
    this.handleChangedescription = this.handleChangedescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: JSON.parse(localStorage.getItem('todos')) || [], text: '', description: ''};
    this.total = this.state.items.length;

  }

render() {
    return (
      <div className="ui text container clearing segment">
        <h3>TODO</h3>
        <p>Total : {this.total}</p>  
        <div className="ui clearing segment">
        <form onSubmit={this.handleSubmit}>
        <div className="ui form">
          <input onChange={this.handleChangetext} value={this.state.text} placeholder="Task"/>
          <input onChange={this.handleChangedescription} value={this.state.description} placeholder="Description"/>
          <button className="ui icon positive button right floated middle aligned"><i className="plus icon"></i></button>
        </div>  
        </form>
        </div>

        <div className="ui middle aligned divided list">
          {this.state.items.map((item,index) => (
            <div className="item" key={item.id} id={item.id}>
              <div className="right floated content">
                <div className="ui negative button" onClick={this.handleDelete.bind(item,index)}><i className="trash icon"></i></div>
              </div>
              <div className="content">
                <span className="task">{item.text}</span>
                <span className="description">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  handleChangetext(e) {
    this.setState({text: e.target.value});
  }
  handleChangedescription(e) {
    this.setState({description: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.text !== ""){
      var list = JSON.parse(localStorage.getItem('todos')) || [];
      var newItem = {
        description: this.state.description,
        text:        this.state.text,
        id:          this.state.items.length + 1
      };
      list.push(newItem);
      localStorage.setItem('todos', JSON.stringify(list)); 
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: '',
        description: ''
      }));
      this.total += 1;
    }
  }

  handleDelete(index,id) {
    console.log(index)
    // var list = JSON.parse(localStorage.getItem('todos'))
    // for(var i = 0; i < list.length; i++){
    //   console.log(list[i].id);
    // }
    
  }

  handleCheck(e) {
    e.preventDefault();
    console.log(this.state.items);
  }
}

export default App;
