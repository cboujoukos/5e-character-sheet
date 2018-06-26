import React, { Component } from 'react';


export default class DropdownMenu extends Component{
  constructor(props){
    super(props)

    this.state = {
      options: this.props.options,
      value: this.props.options[0]
    }
  }


  handleOnChange = (event) => {
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }

  render(){

    const { options, name } = this.props
    const renderDropdown = options.map((option, i) =>
      <option key={i}>{option}</option>
    )
    return(
      <div>
        <label>{name}</label><br />
        <select className="full-width" onChange={(event)=>this.handleOnChange(event)} display="block">
          {renderDropdown}
        </select>
      </div>
    )
  }
}
