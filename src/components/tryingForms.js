import React, {Component} from 'react';

export default class TryingForms extends Component{
  constructor(props){
      super(props);
      this.state = {value:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
      this.setState({value: event.target.value})
  };

  handleSubmit = (event) => {
      event.preventDefault();
      alert("fdf" + this.state.value);
  };

  render(){
      return(
          <form onSubmit={this.handleSubmit}>
              <label>
                  name:
                  <input type='text' onChange={this.handleChange} value={this.state.value}/>
              </label>
              <input type='submit' value='sos'/>
          </form>
      )
  }
}