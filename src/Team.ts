class Team {
    teamName: string;
    rankingPoints: number;
  
    constructor(teamName: string, rankingPoints: number) {
        this.teamName = teamName;
        this.rankingPoints = rankingPoints;
    }
  
    displayRanking(): string {
        return `${this.teamName} ${this.rankingPoints}`;
       
    
    }
  }
  
  let team = new Team("Capitola Seahorses", 20);
  //console.log((team));
  export { Team };
  
  
  
  
