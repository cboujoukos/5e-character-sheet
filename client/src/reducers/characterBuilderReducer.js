export default (state={
  loading: false,
  races: [],
  classes: [],
  subraces: [],
  backgrounds: []
  }, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({},state, {loading: true});
    case 'FETCH_RACES':
      return {loading: false, races: action.payload};
    default:
      return state;
  }
}
