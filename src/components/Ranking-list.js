import React from 'react';
import {connect} from 'react-redux';
import { addPlayer } from '../actions/makeTeam';
import { fetchTeams } from '../actions';

class RankingList extends React.Component {
    constructor(props){
        super(props);

        this.teamDropdown = null;
    }
    componentDidMount() {
       this.props.dispatch(fetchTeams())
    }

    onClick(id) {
        console.log('this is event.target.id =', id);
        console.log(this.props);
        const player = this.props.golfers.find(player => player.id === id);
        const team = Object.keys(this.props.teams).find(team => this.teamDropdown.value === team );
        this.props.dispatch(addPlayer(player, team));
        
        // console.log(this.props.teamA);
    }

    render() {
        let golfers = this.props.golfers;
        console.log("this is asdlkfja;sdlfkja;sdlfk", this.props)
        if(this.props.searchTerm) {
            golfers = this.props.golfers.filter(golfer => golfer.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
        }

        const teamOptionElements = Object.keys(this.props.teams).map((team, index) => {
            console.log('sdfkasldfkjaf',team);
            console.log(Object.keys(this.props.teams));
            return <option value={team.id} key={index}>{team}</option>;
        })
    
        const rankings = golfers.map((ranking, index) =>
            <li key={index}>
                <strong>{ranking.name}</strong> rank: {ranking.rank} <select name="teams" ref={(elem) => this.teamDropdown = elem} >{teamOptionElements}</select> <button onClick={()=>this.onClick(ranking.id)}>add to team</button>
            </li>
        );
 
        return (
            <ul className="rank-list">
                {rankings} 
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    golfers: state.golfers,
    searchTerm: state.searchTerm,
    teams: state.teams
})

export default connect(mapStateToProps)(RankingList)