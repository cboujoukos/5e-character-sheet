export default (state={
  race: '',
  class: '',
  subrace: '',
  speed: '',
  ability_bonuses: [],
  size: '',
  skills: [],
  languages: [],
  traits: [],
  
  }, action) => {
  switch (action.type) {
    case 'SELECT_RACE':
      return Object.assign({}, state, {race: action.payload});
    case 'SELECT_CLASS':
      return Object.assign({}, state, {class: action.payload});
    default:
      return state;
  }
}
