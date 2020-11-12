import React, { Component } from 'react'

export default class Miles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miles: 0,
      kilometers: 0
    }
  }

  handleChange = (event) => {
    this.setState({miles: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({kilometers: this.state.miles * 1.609});
  }

  render() {
    const {miles, kilometers} = this.state;
    return (   
      <div className="container">
          <h3>Calculate miles to kilometres</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Miles</label>
              <input className="form-control" name="miles" type="number" value={miles} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Kilometres</label>
              <output className="form-control">{kilometers}</output>
            </div>
            <button className="btn btn-light">Calculate</button>
          </form>
      </div>
    )
  }
}
