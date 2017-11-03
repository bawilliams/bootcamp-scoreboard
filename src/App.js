import React, { Component } from 'react';
import './App.css';
import { changeScore } from './actions';
import { resetScoreboard } from './actions';
import { saveTeamName } from './actions';
import { switchTeamName } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super();

    this.changeScore = this.changeScore.bind(this);  
    this.resetGame = this.resetGame.bind(this);
    this.changeTeamName = this.changeTeamName.bind(this);
    this.storeTeamName = this.storeTeamName.bind(this);
  }

  changeScore(event) {
    var team = Number(event.target.id);
    var scoreChangeAmount = Number(event.target.value);

    this.props.dispatch(changeScore(team, scoreChangeAmount));
  }

  resetGame() {
    this.props.dispatch(resetScoreboard());
  }

  changeTeamName(event) {
    if (this.props.new_team_name) {
      var teamNumber = Number(event.target.id);
      this.props.dispatch(switchTeamName(teamNumber));
    }
  }

  storeTeamName(event) {
    if (event.target.value) {
      var newTeamName = event.target.value;
      this.props.dispatch(saveTeamName(newTeamName));
    }
  }

  render() {
    return (
      <div className="App">
        <label for="new-team-name">Please input your new team name: </label>
        <input type="textarea" id="new-team-name" onChange={this.storeTeamName}></input>
        <div className="scoreboard">
          <div className="team">
            <div className="team-name">{this.props.team_1_name}</div>
            <button className="name-change" id="1" onClick={this.changeTeamName}>Change Name</button>
            <div className="score">{this.props.team_1_score}</div>
            <button className="increment" id="1" value="1" onClick={this.changeScore}>+</button>
            <button className="decrement" id="1" value="-1" onClick={this.changeScore}>-</button>
          </div>
          <div className="team">
            <div className="team-name">{this.props.team_2_name}</div>
            <button className="name-change" id="2" onClick={this.changeTeamName}>Change Name</button>
            <div className="score">{this.props.team_2_score}</div>
            <button className="increment" id="2" value="1" onClick={this.changeScore}>+</button>
            <button className="decrement" id="2" value="-1" onClick={this.changeScore}>-</button>
          </div>
        </div>
        <button className="reset" onClick={this.resetGame}>New Game</button>
      </div>
    );
  }
}

// Takes state as it is in the provider then it maps
const mapStateToProps = state => ({
  team_1_score: state.team_1_score,
  team_2_score: state.team_2_score,
  team_1_name: state.team_1_name,
  team_2_name: state.team_2_name,
  new_team_name: state.new_team_name
});

// Run the function then pass in App
export default connect(mapStateToProps)(App);
