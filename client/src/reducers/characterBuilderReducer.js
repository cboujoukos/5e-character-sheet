export default (state={
  loading: false,
  races: [],
  classes: [],
  subraces: [],
  backgrounds: [],
  skills: [],
  languages: []
  }, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({},state, {loading: true});
    case 'FETCH_RACES':
      return Object.assign({}, state, {loading: false, races: action.payload});
    case 'FETCH_CLASSES':
      return Object.assign({}, state, {loading: false, classes: action.payload});
    case 'FETCH_SUBRACES':
      return Object.assign({}, state, {loading: false, subraces: action.payload});
    case 'FETCH_SKILLS':
      return Object.assign({}, state, {loading: false, skills: action.payload});
    case 'FETCH_LANGUAGES':
      return Object.assign({}, state, {loading: false, languages: action.payload});
    default:
      return state;
  }
}
