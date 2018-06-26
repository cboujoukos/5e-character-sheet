import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import DropdownMenu from './DropdownMenu';
import 'react-dropdown/style.css';

  const races = ['Elf', 'Dwarf', 'Human']
  const subraces = ['Hill Dwarf', 'Mountain Dwarf']
  const classes = ['Barbarian', 'Bard','Cleric']

export default class CharacterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      race: '',
      subrace: '',
      class: ''
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You have selected ', option)
    this.setState({selected: option})
  }

  render(){
    const defaultOption = this.state.selected
    // const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return(
      <form>
        {/*
        <label>Race</label>
        <Dropdown options={races} className="race" onChange={this._onSelect} value={defaultOption} name="race" placeholder="Select a race" />
        <label>Subrace</label>
        <Dropdown options={subraces} onChange={this._onSelect} value={defaultOption} name="subrace" placeholder="Select a subrace" />
        <label>Class</label>
        <Dropdown options={classes} onChange={this._onSelect} value={defaultOption} name="class" placeholder="Select a class" />
        */}


        <DropdownMenu options={races} name="Race" />
        <DropdownMenu options={subraces} name="Subrace" />
        <DropdownMenu options={classes} name="Class" />
        <br />
        <Button>Create</Button>
      </form>
    )
  }
}
