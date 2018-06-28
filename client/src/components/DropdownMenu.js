import React, { Component } from 'react';
import toTitleCase from '../utils/toTitleCase';


export default class DropdownMenu extends Component{
  constructor(props){
    super(props)

    this.state = {
      options: this.props.options,
      // value: this.props.options[0]
    }
  }


  // handleOnChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState({value: event.target.value})
  // }

  render(){
    const { options, name } = this.props
    const renderDropdown = options.map((option, i) =>
      <option data-url={option.url} key={i}>{option.name || option}</option>
    )
    return(
      <div>
        <label>{toTitleCase(name)}</label><br />
        <select className="full-width" name={name} onChange={this.props.onChange} display="block">
          {renderDropdown}
        </select>
      </div>
    )
  }
}

// event.target.selectedIndex
