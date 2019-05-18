import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input1: null,
      input2: null,
      input3: null,
      amount: 0,
      check1: false,
      check2: false,
      check3: false,
      inputs: []
    }
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: parseInt(e.target.value,10)})
  }

  handleCheckbox1(bool) {
    if(!bool) {
      this.setState({
        check1: true
      })
      return this.state.input1
    } else {
      this.setState({
        check1: false
      })
      return 0
    }
  }

  handleCheckbox2(bool) {
    if(!bool) {
      this.setState({
        check2: true
      })
      return this.state.input2
    } else {
      this.setState({
        check2: false
      })
      return 0
    }
  }

  handleCheckbox3(bool) {
    if(!bool) {
      this.setState({
        check3: true
      })
      return this.state.input3
    } else {
      this.setState({
        check3: false
      })
      return 0
    }
  }

  handlePlus() {
    var amount = this.handleCheckbox1(!this.state.check1)+this.handleCheckbox2(!this.state.check2)+this.handleCheckbox3(!this.state.check3);
    
    this.setState({
      amount: amount
    })
  }

  handleMinus() {
    var amount = this.handleCheckbox1(!this.state.check1)-this.handleCheckbox2(!this.state.check2)-this.handleCheckbox3(!this.state.check3);
    
    this.setState({
      amount: amount
    })
  }

  handleTimes() {
    var amount = this.handleCheckbox1(!this.state.check1)*this.handleCheckbox2(!this.state.check2)*this.handleCheckbox3(!this.state.check3);
    
    this.setState({
      amount: amount
    })
  }

  handleDivided() {
    var amount = this.handleCheckbox1(!this.state.check1)/this.handleCheckbox2(!this.state.check2)/this.handleCheckbox3(!this.state.check3);

    this.setState({
      amount: amount
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-8">
            <h1 className="font-weight-bold">Kalkulator Sederhana Dengan ReactJs</h1>
            <hr/>
            <form>
              <div className="input-group mb-3">
                <input type="number" name="input1" placeholder="input number 1" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.input1 || ""}/>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" name="check1" checked={this.state.check1} onChange={(e) => this.handleCheckbox1(this.state.check1,this)} />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="number" name="input2" placeholder="input number 2" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.input2 || ""}/>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" name="check2" checked={this.state.check2} onChange={(e) => this.handleCheckbox2(this.state.check2,this)}/>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="number" name="input3" placeholder="input number 3" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.input3 || ""}/>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" name="check3" checked={this.state.check3} onChange={(e) => this.handleCheckbox3(this.state.check3,this)}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary font-weight-bold mr-2 btn-size" onClick={this.handlePlus.bind(this)}><h4>+</h4></button>
                <button type="button" className="btn btn-primary font-weight-bold mr-2 btn-size" onClick={this.handleMinus.bind(this)}><h4>-</h4></button>
                <button type="button" className="btn btn-primary font-weight-bold mr-2 btn-size" onClick={this.handleTimes.bind(this)}><h4>x</h4></button>
                <button type="button" className="btn btn-primary font-weight-bold mr-2 btn-size" onClick={this.handleDivided.bind(this)}><h4>/</h4></button>
              </div>
            </form>
            <hr/>
            <div>
              <h3>Hasil: {this.state.amount}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
