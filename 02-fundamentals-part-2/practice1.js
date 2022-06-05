const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgTeam1, avgTeam2) => {
    if (avgTeam1 >= 2 * avgTeam2) {
        console.log(`team1 win (${avgTeam1} vs. ${avgTeam2})`);
    } else if (avgTeam2 >= 2 * avgTeam2) {
        console.log(`team2 win (${avgTeam2} vs. ${avgTeam1})`);
    } else {
        console.log(`no team wins`);
    }
};

// test data 1:
// team 1 score : 44,23 and 71
// team 2 score : 65,54 and 49

// const avgTeam1 = calcAverage(44, 23, 71);
// const avgTeam2 = calcAverage(65, 54, 49);

const avgTeam1 = calcAverage(85, 54, 71);
const avgTeam2 = calcAverage(23, 34, 27);

checkWinner(avgTeam1, avgTeam2);
