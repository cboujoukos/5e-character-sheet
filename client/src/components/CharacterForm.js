import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DropdownMenu from './DropdownMenu';
import { fetchRaces } from '../actions/CharacterBuilderActions';


  const races = ['Elf', 'Dwarf', 'Human']
  const subraces = ['Hill Dwarf', 'Mountain Dwarf']
  const classes = ['Barbarian', 'Bard','Cleric']
  const backgrounds = ['Acolyte', 'Soldier', 'Urchin']

class CharacterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      race: races[0],
      subrace: subraces[0],
      class: classes[0],
      background: backgrounds[0]
    }
  }


  // componentDidMount() {
  //   this.props.onFetchRaces();
  // }

  handleOnChange = (event) => {
    console.log("[CharacterForm] ", event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  render(){

    return(
      <form>
        <DropdownMenu options={races} onChange={event => this.handleOnChange(event)} name="race" />
        <DropdownMenu options={subraces} onChange={event => this.handleOnChange(event)} name="subrace" />
        <DropdownMenu options={classes} onChange={event => this.handleOnChange(event)} name="class" />
        <DropdownMenu options={backgrounds} onChange={event => this.handleOnChange(event)} name="background" />
        <br />
        <Button>Next</Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRaces: () => dispatch(fetchRaces())
  }
}

export default CharacterForm
