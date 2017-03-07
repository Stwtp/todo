import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {items: [], text: ''};
  }

render() {
    return (
      <div className="ui text container clearing segment">
        <h3>TODO</h3>  
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button className="ui icon button right floated middle aligned"><i className="plus icon"></i></button>
        </form>
        <ul className="ui ordered list">
          {this.state.items.map(item => (
            <li className="item" key={item.id}>{item.text}
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
      var newItem = {
        text: this.state.text,
        id: this.state.items.length + 1
      };
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
