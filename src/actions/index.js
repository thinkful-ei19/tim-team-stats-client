import { API_BASE_URL } from '../config';

export const FETCH_GOLFERS_REQUEST = 'FETCH_GOLFERS_REQUEST';
export const fetchGolfersRequest = () => ({
  type: FETCH_GOLFERS_REQUEST
});

export const FETCH_GOLFERS_SUCCESS = 'FETCH_GOLFERS_SUCCESS';
export const fetchGolfersSuccess = golfers => ({
  type: FETCH_GOLFERS_SUCCESS,
  golfers
});

export const FETCH_GOLFERS_ERROR = 'FETCH_GOLFERS_ERROR';
export const fetchGolfersError = error => ({
  type: FETCH_GOLFERS_ERROR,
  error
});

export const fetchGolfers = () => (dispatch) => {
  dispatch(fetchGolfersRequest());
  return fetch(`${API_BASE_URL}/golfers`)
    .then(res => {
      return res.json();
    })
    .then(data => dispatch(fetchGolfersSuccess(data)))
    .catch(err => dispatch(fetchGolfersError(err)));
};

export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST';
export const fetchTeamsRequest = () => ({
  type: FETCH_TEAMS_REQUEST
});

export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const fetchTeamsSuccess = teams => ({
  type: FETCH_TEAMS_SUCCESS,
  teams
});

export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';
export const fetchTeamsError = error => ({
  type: FETCH_TEAMS_ERROR,
  error
});

export const fetchTeams = () => (dispatch) => {
  dispatch(fetchTeamsRequest());
  return fetch(`${API_BASE_URL}/teams`)
    .then(res => {
      return res.json();
    })
    .then(data => dispatch(fetchTeamsSuccess(data)))
    .catch(err => dispatch(fetchTeamsError(err)));
};

