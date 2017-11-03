export default (state = {}, action) => {
    switch (action.type) {
        case 'SCORE_CHANGE':
            return {
                ...state,
                team_1_score: action.team === 1 ? state.team_1_score + action.scoreChangeAmount : state.team_1_score,
                team_2_score: action.team === 2 ? state.team_2_score + action.scoreChangeAmount : state.team_2_score
            }
            break;
        case 'RESET_SCOREBOARD':
            return {
                ...state,
                team_1_score: 0,
                team_2_score: 0,
                team_1_name: 'Team 1',
                team_2_name: 'Team 2',
                new_team_name: ''
            }
            break;
        case 'SAVE_TEAM_NAME':
            return {
                ...state,
                new_team_name: action.newTeamName
            }
            break;
        case 'CHANGE_TEAM_NAME':
            return {
                ...state,
                team_1_name: action.teamNumber === 1 ? state.team_1_name = state.new_team_name : state.team_1_name,
                team_2_name: action.teamNumber === 2 ? state.team_2_name = state.new_team_name : state.team_2_name
            }
            break;
        default:
            return state;
    }
}