export function changeScore(team, scoreChangeAmount) {
    return {
        // Always need a type - it's how redux knows what to do
        type: 'SCORE_CHANGE',
        team,
        scoreChangeAmount
    };
}

export function resetScoreboard() {
    return {
        type: 'RESET_SCOREBOARD'
    };
}

export function saveTeamName(newTeamName) {
    return {
        type: 'SAVE_TEAM_NAME',
        newTeamName
    };
}

export function switchTeamName(teamNumber) {
    return {
        type: 'CHANGE_TEAM_NAME',
        teamNumber
    }
}