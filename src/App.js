import React from 'react';
import Header from './components/Header'
import RankingButton from './components/RankingsButton'
import RankingList from './components/Ranking-list';
import  RankingsSearch  from './components/RankingsSearch';
import TeamList from './components/TeamList';
// import './App.css';

export default function App(props){
  
    
     return (
      
      <div> 
        <Header />
        <RankingButton />
        <RankingsSearch />
        <RankingList />
        <TeamList />
        {/* <RankingButton onClickProp={() => this.toggleList()} /> */}
        {/* {this.state.list && <RankingList rankings={rankings} />} */}
     </div>
     )
     
}


// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       list:true
//     }
//   }  
//    toggleList(list){
//      this.setState(
//        {list: !this.state.list}
//      )
//    }

//   render() {

//      const rankings = this.props.rankings
     
    
//      return (
      
//       <div> 
//         <Header />
//         <RankingButton />
//         {/* <RankingButton onClickProp={() => this.toggleList()} /> */}
//         {/* {this.state.list && <RankingList rankings={rankings} />} */}
//      </div>
//       )}
     
// }

// export default App;
