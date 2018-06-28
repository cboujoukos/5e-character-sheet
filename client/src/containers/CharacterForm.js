import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DropdownMenu from '../components/DropdownMenu';
import BasicOptions from '../components/BasicOptions';
import BackgroundSelector from '../components/BackgroundSelector';
import { fetchRaces, fetchClasses, fetchSubraces } from '../actions/CharacterBuilderActions';


  const races = ['Elf', 'Dwarf', 'Human']
  const subraces = ['Hill Dwarf', 'Mountain Dwarf']
  const classes = ['Barbarian', 'Bard','Cleric']
  const backgrounds = ['Acolyte', 'Soldier', 'Urchin']
  const testSkills = ["Acrobatics", "Athletics", "Arcana"]
  const testLanguages = ["Common", "Dwarvish", "Elvish"]

class CharacterForm extends Component{
  constructor(){
    super();
    this.state = {
      race: "Dwarf",
      subrace: "Hill Dwarf",
      class: "Barbarian",
      background: "Acolyte",
      page: 1
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

  handleOnNext = () => {
    this.setState(Object.assign({},this.state, {page: this.state.page++}))
  }

  render(){
    if (this.state.page === 1){
      return(
        <div className="characterForm">
          <BasicOptions onNext={() => this.handleOnNext()} />
        </div>
      )
    } else if (this.state.page === 2) {
      return(
        <div className="characterForm">
          <BackgroundSelector />
        </div>
      )
    }
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
