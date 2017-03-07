import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {items: JSON.parse(localStorage.getItem('todos')) || [], text: ''};
    this.total = this.state.items.length;
    console.log(this.total)
  }

render() {
    return (
      <div className="ui text container clearing segment">
        <h3>TODO</h3>
        <p>Total : {this.total}</p>  
        <div className="ui clearing segment">
        <form onSubmit={this.handleSubmit}>
        <div className="ui form">
          <input onChange={this.handleChange} value={this.state.text} />
          <button className="ui icon positive button right floated middle aligned"><i className="plus icon"></i></button>
        </div>  
        </form>
        </div>
        <ul className="ui ordered list ">
          {this.state.items.map(item => (
            <li className="item" key={item.id} id={item.id-1}>
              {item.text}
              <form onSubmit={this.handleDelete}>
                <button className="ui icon negative button right floated middle aligned">
                  <i className="trash icon"></i>
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.text !== ""){
      var list = JSON.parse(localStorage.getItem('todos')) || [];
      var newItem = {
        text: this.state.text,
        id: this.state.items.length + 1
      };
      list.push(newItem);
      localStorage.setItem('todos', JSON.stringify(list)); 
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

  handleDelete(e) {
    e.preventDefault();
    console.log(this.state.items);
  }

  handleCheck(e) {
    e.preventDefault();
    console.log(this.state.items);
  }
}

export default App;
