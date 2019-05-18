import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input1: 0,
      input2: 0,
      input3: 0,
      amount: 0,
    }
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: parseInt(e.target.value,10)})
  }

  handleCheckbox(e) {
    if(!this.state[e.target.name]) {
      this.setState({
        [e.target.name]: true,
      })
    } else {
      this.setState({
        [e.target.name]: false,
      })
    }
  }

  handlePlus(){
    var checked = this.Calculator();
    if(checked !== undefined) {
      var amount = checked.reduce((a, b) => ({num: a.num + b.num}));
      this.setState({
        amount: amount.num
      })
    }
  }

  handleMinus(){
    var checked = this.Calculator();
    if(checked !== undefined) {
      var amount = checked.reduce((a, b) => ({num: a.num - b.num}));
      this.setState({
        amount: amount.num
      })
    }
  }

  handleTimes(){
    var checked = this.Calculator();
    if(checked !== undefined) {
      var amount = checked.reduce((a, b) => ({num: a.num * b.num}));
      this.setState({
        amount: amount.num
      })
    }
  }

  handleDivided(){
    var checked = this.Calculator();
    if(checked !== undefined) {
      var amount = checked.reduce((a, b) => ({num: a.num / b.num}));
      this.setState({
        amount: amount.num
      })
    }
  }

  Calculator() {
    var checks = [];
    var checked = []

    var data1 = {
      bool: this.state.check1,
      num: this.state.input1
    }
    var data2 = {
      bool: this.state.check2,
      num: this.state.input2
    }
    var data3 = {
      bool: this.state.check3,
      num: this.state.input3
    }

    checks.push(data1,data2,data3)
    checks.map(res=>{
      if(res.bool === true) {
        checked.push(res)
        console.log(res)
      }
    })
    if(checked.length < 2) {
      alert("at least two fields checked")
    } else {
      return checked
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-8">
            <div className="text-center">
              <h1 className="font-weight-bold">Calculator With ReactJs</h1>
              <h3></h3>
              <h4>- Nusantech first test -</h4>
            </div>
            <hr/>
            <form>
              <div className="input-group mb-3">
                <input type="number" name="input1" placeholder="input number 1" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.input1 || ""}/>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" name="check1" onChange={this.handleCheckbox.bind(this)} />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="number" name="input2" placeholder="input number 2" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.input2 || ""}/>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" name="check2" onChange={this.handleCheckbox.bind(this)}/>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="number" name="input3" placeholder="input number 3" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.input3 || ""}/>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="checkbox" name="check3" onChange={this.handleCheckbox.bind(this)}/>
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
