"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(teamName, rankingPoints) {
        this.teamName = teamName;
        this.rankingPoints = rankingPoints;
    }
    displayRanking() {
        return `${this.teamName} ${this.rankingPoints}`;
    }
}
exports.Team = Team;
let team = new Team("Capitola Seahorses", 20);
