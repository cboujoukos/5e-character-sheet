import fetch from 'isomorphic-fetch';

export function fetchClasses(){
  const baseURL = 'http://www.dnd5eapi.co/api/'

  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(baseURL + 'classes')
    .then(rsp => {
      console.log('fetched');
      return rsp.json()
    })
    .then(rspJSON => {
      return rspJSON.results
    })
    .then(classes => dispatch({type: 'FETCH_CLASSES', payload: classes}))
  }
}

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

export function fetchSubraces(race){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(race.url)
    .then(rsp => {
      console.log('fetched');
      return rsp.json()
    })
    .then(rspJSON => {
      return rspJSON.subraces
    })
    .then(subraces => dispatch({type: 'FETCH_SUBRACES', payload: subraces}))
  }
}

export function fetchSkills(){
  const baseURL = 'http://www.dnd5eapi.co/api/'

  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(baseURL + 'skills')
    .then(rsp => {
      console.log('fetched');
      return rsp.json()
    })
    .then(rspJSON => {
      return rspJSON.results
    })
    .then(skills => dispatch({type: 'FETCH_SKILLS', payload: skills}))
  }
}

export function fetchLanguages(){
  const baseURL = 'http://www.dnd5eapi.co/api/'

  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(baseURL + 'languages')
    .then(rsp => {
      console.log('fetched');
      return rsp.json()
    })
    .then(rspJSON => {
      return rspJSON.results
    })
    .then(languages => dispatch({type: 'FETCH_LANGUAGES', payload: languages}))
  }
}
