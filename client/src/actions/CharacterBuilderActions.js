import fetch from 'isomorphic-fetch';

export function fetchRaces(){
  const baseURL = 'http://dnd5eapi.co/api/'

  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(baseURL + 'races')
    .then(rsp => {
      debugger;
      return rsp.json()
    })
    .then(races => dispatch({type: 'FETCH_RACES', payload: races}))
  }
}
