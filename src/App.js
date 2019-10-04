import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import data from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: data
    }
  }
 
  addItem = (e, itemName) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  //This function will get rid of any items which have completed === true;
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
    tasks: this.state.tasks.filter(item => {
      return !item.completed
      })
    })
  }

  //Creating a function to 
  toggleItem = (e, itemId) => {
  e.preventDefault();
  this.setState({
    tasks: this.state.tasks.map(item => {
      if (item.id === itemId) {
        return{
          ...item,
          completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
         <div className="title">
           <h1>To-Do List</h1>
         </div>
         <div className="form-container">
           <TodoForm addItem={this.addItem} />
          </div>
        <div className="list-container">
          <div className="to-do-list">
            {this.state.tasks.map(item => (
              <Todo 
                key={item.id}
                item={item}
                onClick={(e) => this.toggleItem(e, item.id)}
                />
            ))}
          </div>
          <div className="button-container">
            <button className="clear-btn" onClick={this.clearCompleted} >
              Clear Completed
            </button>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

//App does ALL the thinking. It does a lot of the heavy lifting of this application.