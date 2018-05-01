import React from 'react';
import {connect} from 'react-redux';
import { fetchGolfers } from '../actions';

export function RankingsButton(props){
 return(
   <div> 
       <button onClick={()=>props.dispatch(fetchGolfers())}>Show All Players</button>
        
   </div>
   )
}

export default connect()(RankingsButton)