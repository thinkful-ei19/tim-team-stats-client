import React from 'react';
import {connect} from 'react-redux';


class TeamList extends React.Component{

    render(){
 const title = Object.keys(this.props.teams)
 console.log(this.props.teams);
//  console.log('this.props===', this.props)

 let list;
 if(Object.getOwnPropertyNames(this.props.teams).length > 0)  {
 list = title.map((teamName, index) => {    
     let playersList = this.props.teams[teamName].players.map((player,index) => { 
        return <li key={index}>
        <strong>{player.name}</strong> rank: {player.rank} 
        </li>
 })
 return (
     <div>
         <h2>{teamName}</h2>
         <ul>
             {playersList}
         </ul>
     </div>
 )

}
);
 }
    return(
        <div>
     <h2>hello</h2>
        {list}
        </div>
    )
    }


    
    
}    
const mapStateToProps = (state) => ({
       
        teams: state.teams
    })
export default connect(mapStateToProps)(TeamList)