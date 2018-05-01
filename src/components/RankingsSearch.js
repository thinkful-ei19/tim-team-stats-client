import React from 'react';
import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';
// import {searchGolfers} from '../actions';
import { searchGolfers } from '../actions/searchGolfer';

export class RankingsSearch extends React.Component {
 
    onSubmit(event) {
        event.preventDefault();
        if(this.input.value.trim() === ''){
            return;
        }
        console.log(this.props);
        const value = this.input.value;
        this.props.dispatch(searchGolfers(value));
        this.input.value = '';
        this.input.focus();
      }

    render() {
      
        console.log("sdlkfjsldkfjldkjld", this.props);

        return (
            <div className="Rankings-search">
                {/* When this form is submitted you should submit the
                    searchCharacters action */}
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <input type="search" ref={input => (this.input = input)} />
                    <button type="submit">Search</button>
                </form>
 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    golfers: state.golfers,
    loading: state.loading,
    error: state.error,
    teams: state.teams
});

export default connect(mapStateToProps)(RankingsSearch);