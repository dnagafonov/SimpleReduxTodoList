import React, {Component} from 'react';

export default class TryingForms extends Component{
    constructor(props){
        super(props);
        this.state = {value:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        alert("lox: " + this.state.value)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type='text' onChange={this.handleChange} value={this.state.value}/>
                </label>
                <input type="submit" value='sent'/>
            </form>
        )
    }
}