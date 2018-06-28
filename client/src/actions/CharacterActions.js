export function selectRace(race){
  return (dispatch) => {
    dispatch({type: 'SELECT_RACE', payload: race})
  }
}

export function selectClass(klass){
  return (dispatch) => {
    dispatch({type: 'SELECT_CLASS', payload: klass})
  }
}
