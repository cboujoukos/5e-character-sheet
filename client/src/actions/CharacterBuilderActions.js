import fetch from 'isomorphic-fetch';

export function fetchRaces(){
  const baseURL = 'http://www.dnd5eapi.co/api/'

  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(baseURL + 'races')
    .then(rsp => {
      console.log('fetched');
      return rsp.json()
    })
    .then(rspJSON => {
      return rspJSON.results
    })
    .then(races => dispatch({type: 'FETCH_RACES', payload: races}))
  }
}
