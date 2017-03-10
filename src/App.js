import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);
    this.handleChangetext = this.handleChangetext.bind(this);
    this.handleChangedescription = this.handleChangedescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
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
              <div className="left floated content">
                <div className="ui basic circular button" onClick={this.handleCheck.bind(item,item.id)}><i className="checkmark icon"></i></div>
              </div>
              <div className="right floated content">
                <div className="ui negative button" onClick={this.handleDelete.bind(item,item.id)}><i className="trash icon"></i></div>
              </div>
              <div className="content">
                { item.checkComplete ? <span className="task complete">{item.text}</span> : <span className="task notcomplete">{item.text}</span>}
                
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
        id:          this.state.items.length + 1,
        checkComplete: false
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

  handleDelete(id,e) {
    var list = JSON.parse(localStorage.getItem('todos'))
    var index = list.map(function(d) { return d['id']; }).indexOf(id)
    list.splice(index,1)
    localStorage.setItem('todos', JSON.stringify(list));
    this.setState((prevState) => ({
      items: list,
      text: '',
      description: ''
    }))
    this.total -= 1;
  }

  handleCheck(id,e) {
    var list = JSON.parse(localStorage.getItem('todos'))
    var index = list.map(function(d) { return d['id']; }).indexOf(id)
    if(list[index].checkComplete === false){
      list[index].checkComplete = true
      this.setState({showHideSidenav:'complete'});
    }
    else{
      list[index].checkComplete = false
      this.setState({showHideSidenav:'notcomplete'});
    }
    localStorage.setItem('todos', JSON.stringify(list));
    this.setState((prevState) => ({
      items: list,
      text: '',
      description: ''
    }))
  }
}

export default App;
