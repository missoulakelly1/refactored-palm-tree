// var person = {
//     firstName:"Tom", 
//     lastName:"Hanks", 
//     sayHello:function() {  }  //Type template 
//  } 
//  person.sayHello = function() {  
//     console.log("hello "+person.firstName)
//  }  
//  person.sayHello()

// var team = {
//     teamName: "Capitola Seahorses",
//     rankingPoints: 20,
//     displayRanking: function() {
//         console.log()
//     }
// }

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