import { FETCH_GOLFERS_REQUEST, FETCH_GOLFERS_SUCCESS, FETCH_GOLFERS_ERROR, FETCH_TEAMS_ERROR, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS } from '../actions/index';
import { SEARCH_GOLFERS_REQUEST, SEARCH_GOLFERS_SUCCESS, SEARCH_GOLFERS_ERROR, SEARCH_GOLFERS_NAME } from '../actions/searchGolfer';
import {ADD_PLAYER, REMOVE_PLAYER} from '../actions/makeTeam';
const initialState = {
  golfers: [],
  loading: false,
  error: null,
  searchTerm: '',
  teams: {}
};

export function golfersReducer(state = initialState, action) {
  if (action.type === FETCH_GOLFERS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  if (action.type === FETCH_GOLFERS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      golfers: action.golfers,
      searchTerm: ''
    });
  }

  if (action.type === FETCH_GOLFERS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  if (action.type === SEARCH_GOLFERS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  if (action.type === SEARCH_GOLFERS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      golfers: action.golfers
    });
  }

  if (action.type === SEARCH_GOLFERS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  if (action.type === SEARCH_GOLFERS_NAME) {
    return Object.assign({}, state, {
      loading: false,
      searchTerm: action.name
    });
  }

  // if(action.type === ADD_PLAYER) {
  //   return {
  //     ...state, teams: {...state.teams, action.player}
  //   }
  // }
  if(action.type === ADD_PLAYER) {
    //add player to the team
    console.log(action);
    return Object.assign({}, state, {
      loading: false,
      teams: Object.assign(
        {}, state, 
        {[action.team]: Object.assign({}, state.teams[action.team], 
          {players: [...state.teams[action.team].players, action.player]})
        })
    })
  }
  
  if(action.type === REMOVE_PLAYER) {
    //remove player to the team
    
   
  }

  if (action.type === FETCH_TEAMS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  if (action.type === FETCH_TEAMS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      teams: action.teams
    });
  }

  if (action.type === FETCH_TEAMS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
}
