import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import data from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'
import '../src/App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: data
    }
  }
 
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

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
    tasks: this.state.tasks.filter(item => {
      return !item.completed
      })
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
         <div className="title">
           <h2>To-Do List</h2>
           <TodoForm addItem={this.addItem} />
         </div>

         <div className="to-do-list">
           {this.state.tasks.map(item => (
             <Todo 
              key={item.id}
              item={item}
              onClick={(e) => this.toggleItem(e, item.id)}
              />
          ))}

          <button className="clear-btn" onClick={this.clearCompleted} >
            Clear Completed
          </button>
        </div>

      </div>
    );
  }
}

export default App;