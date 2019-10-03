import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

class TodoForm extends React.Component {
    constructor() { 
        super()
        this.state = {
            value: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addItem(e, this.state.value);
        this.setState({
            value: ''
        });     
    };


    render() {
        return(
            <Container>
            <form onSubmit={this.handleSubmit}>
                
                <input 
                    type="text"
                    placeholder="Add new task"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                
                <button>Add</button>

            </form>
            </Container>
        )
    }


}

export default TodoForm

