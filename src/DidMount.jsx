import React, { Component } from 'react'

export default class DidMount extends Component {
    constructor(){
        super()
        this.state={
            name:'Rohit'
        }
    }
    componentDidMount(){
        console.warn('componentDidMount')
    }
    render() {
        console.warn('render')
        return (
      <div>
        <h1>Did Mount</h1>
        <h4>Name is {this.state.name}</h4>
        <button onClick={()=>this.setState({name:'Thakur'})}>Change the name</button>
      </div>
    )
  }
}
