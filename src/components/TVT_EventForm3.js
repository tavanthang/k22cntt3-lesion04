import React, { Component } from 'react'
// xu ly su kien vs props, state
export default class TVT_EventForm3 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"TẠ VĂN THĂNG",
            job:" Dev soft"
        }
    }
    //ham xu ly su kien
    handleChangeName= (ev)=>{
        this.setState({
            name:"K22CNT3-ReactJs"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công nghệ phần mềm",
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay doi du lieu trong state</h2>
        <p>Du lieu:{this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay doi name</button>
        <button onClick={this.handleChangeJob}>Thay Doi job</button>
      </div>
    );
  }
}