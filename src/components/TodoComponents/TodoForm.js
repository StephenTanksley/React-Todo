import React from 'react';

class ItemForm extends React.Component {
    constructor() { 
        super()
        this.state = {
            // value: '',
            toDo: '',
            id: '', 
            completed: false
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(e, this.state.value);
        this.setState({
            value: ''
        });     
    };


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                
                <button>Add</button>

            </form>
        )
    }


}

export default ItemForm

