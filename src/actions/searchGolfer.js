// import { API_BASE_URL } from '../config';

export const SEARCH_GOLFERS_REQUEST = 'SEARCH_GOLFERS_REQUEST';
export const searchGolfersRequest = () => ({
  type: SEARCH_GOLFERS_REQUEST
});

export const SEARCH_GOLFERS_SUCCESS = 'SEARCH_GOLFERS_SUCCESS';
export const searchGolfersSuccess = golfers => ({
  type: SEARCH_GOLFERS_SUCCESS,
  golfers
});

export const SEARCH_GOLFERS_ERROR = 'SEARCH_GOLFERS_ERROR';
export const searchGolfersError = error => ({
  type: SEARCH_GOLFERS_ERROR,
  error
});

export const SEARCH_GOLFERS_NAME = 'SEARCH_GOLFERS_NAME';
export const searchGolfersName = name => ({
  type: SEARCH_GOLFERS_NAME,
  name
});


export const searchGolfers = (name) => dispatch => {
    
    dispatch(searchGolfersName(name));
   
    // let filterGolfers = golfers.filter(golfer => golfer.name === name )
    //     dispatch(searchGolfersSuccess(filterGolfers));
   
};

// export function _search(name) {
//     // if (Math.random() < 0.25) {
//     //     return Promise.reject('Something went wrong');
//     // }

//     return fetch(API_BASE_URL).then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(data => data.results.map(golfer => golfer.name));
// }