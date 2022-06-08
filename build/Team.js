"use strict";
class Team {
    constructor(teamName, rankingPoints) {
        this.teamName = teamName;
        this.rankingPoints = rankingPoints;
    }
    displayRanking() {
        return `${this.teamName} ${this.rankingPoints}`;
    }
}
let team = new Team("Capitola Seahorses", 20);
//console.log((team));
