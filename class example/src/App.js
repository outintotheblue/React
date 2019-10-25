import React, { Component } from 'react';
import Button from './Button'

export default class App extends Component {
  state = {
    inputValue: '',
    savedInputValues: [],
    h1: 'To do List:'
  }
  
  changeInputValue = (event) => {
    this.setState({inputValue: event.target.value})
  }

  
   
  saveInput = () => {
   const {savedInputValues, inputValue} = this.state 
   savedInputValues.push(inputValue) 
   this.setState({savedInputValues})
  }
  
  renderSomething = () => {
    const {savedInputValues} = this.state 
    const inputValues = savedInputValues.map((item, i) => {
      return <div key = {i}><li>{item}</li></div>
    })
    return inputValues
  }

  render () {
    const { inputValue } = this.state
   
    return (
     <div>
     <input value = {inputValue} onChange = {this.changeInputValue}></input>
     <Button saveInput={this.saveInput} />

     <h1>{this.state.h1}</h1>

     {this.renderSomething()}
     </div>)
  }
}
