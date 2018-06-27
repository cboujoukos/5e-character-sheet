import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DropdownMenu from '../components/DropdownMenu';
import BasicOptions from '../components/BasicOptions';
import { fetchRaces, fetchClasses, fetchSubraces } from '../actions/CharacterBuilderActions';


  const races = ['Elf', 'Dwarf', 'Human']
  const subraces = ['Hill Dwarf', 'Mountain Dwarf']
  const classes = ['Barbarian', 'Bard','Cleric']
  const backgrounds = ['Acolyte', 'Soldier', 'Urchin']

class CharacterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      race: "Dwarf",
      subrace: "Hill Dwarf",
      class: "Barbarian",
      background: "Acolyte"
    }

  }


//   componentWillMount() {
//     this.props.onFetchRaces();
//     this.props.onFetchClasses();
//   }
//
//   componentDidMount() {
//     // debugger
//     this.props.onFetchSubraces({name: 'Dwarf', url: "http://www.dnd5eapi.co/api/races/1"})
//   }
//
//   handleOnChange = (event) => {
//     console.log("[CharacterForm] ", event.target.value)
//     this.setState({[event.target.name]: event.target.value})
//   }
//
// // How do I pull out the url or the actual race object to pass to onFetchSubraces???
//   handleRaceChange = (event) => {
//     this.setState({[event.target.name]: event.target.value});
//     console.dir(event.target.value)
//     // debugger
//   }

  render(){

    return(
      <div className="characterForm">
        <BasicOptions  />

        {/*<form>
          <DropdownMenu options={this.props.raceList} onChange={event => this.handleRaceChange(event)} name="race" />
          <DropdownMenu options={subraces} onChange={event => this.handleOnChange(event)} name="subrace" />
          <DropdownMenu options={this.props.classList} onChange={event => this.handleOnChange(event)} name="class" />
          <DropdownMenu options={backgrounds} onChange={event => this.handleOnChange(event)} name="background" />
          <br />
          <Button>Next</Button>
        </form>*/}

      </div>
    )
  }
}

// const mapStateToProps = state => {
//
//   return {
//     raceList: state.characterBuilder.races,
//     classList: state.characterBuilder.classes
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onFetchRaces: () => dispatch(fetchRaces()),
//     onFetchClasses: () => dispatch(fetchClasses()),
//     onFetchSubraces: (race) => dispatch(fetchSubraces(race))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm)
export default CharacterForm
