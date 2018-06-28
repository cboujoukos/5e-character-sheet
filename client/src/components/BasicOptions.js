import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchRaces, fetchClasses, fetchSubraces } from '../actions/CharacterBuilderActions';

const subraces = ['Hill Dwarf', 'Mountain Dwarf']
const backgrounds = ['Acolyte', 'Soldier', 'Urchin']

class BasicOptions extends Component{

  componentWillMount() {
    this.props.onFetchRaces();
    this.props.onFetchClasses();
    this.props.onFetchSubraces({name: 'Dwarf', url: "http://www.dnd5eapi.co/api/races/1"})
  }

  componentDidMount() {
    // debugger
    // this.props.onFetchSubraces({name: 'Dwarf', url: "http://www.dnd5eapi.co/api/races/1"})
  }

  handleOnChange = (event) => {
    console.log("[CharacterForm] ", event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

// How do I pull out the url or the actual race object to pass to onFetchSubraces???
  handleRaceChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.dir(event.target.value)
    this.props.onFetchSubraces({name: event.target.value, url: `http://www.dnd5eapi.co/api/races/${event.target.selectedIndex+1}`})
  }

  render(){
    return(
      <form>
        <DropdownMenu options={this.props.raceList} onChange={event => this.handleRaceChange(event)} name="race" />
        { this.props.subraceList.length > 0 ? <DropdownMenu options={this.props.subraceList} onChange={event => this.handleOnChange(event)} name="subrace" /> : null }

        <DropdownMenu options={this.props.classList} onChange={event => this.handleOnChange(event)} name="class" />
        <DropdownMenu options={backgrounds} onChange={event => this.handleOnChange(event)} name="background" />
        <br />
        <Button onClick={this.props.onNext}>Next</Button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    raceList: state.characterBuilder.races,
    classList: state.characterBuilder.classes,
    subraceList: state.characterBuilder.subraces
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRaces: () => dispatch(fetchRaces()),
    onFetchClasses: () => dispatch(fetchClasses()),
    onFetchSubraces: (race) => dispatch(fetchSubraces(race))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicOptions)
