// TeamA = {players:[{id:1,name:'name name'}...]}

export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = (player, team) => ({
    type: ADD_PLAYER,
    player,
    team
});

export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const removePlayer = (player, team) => ({
    type: REMOVE_PLAYER,
    player,
    team
});

