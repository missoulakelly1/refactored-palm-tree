"use strict";
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
    constructor(teamName, rankingPoints) {
        this.teamName = teamName;
        this.rankingPoints = rankingPoints;
    }
    displayRanking() {
        return `${this.teamName} ${this.rankingPoints}`;
    }
}
let team = new Team("Capitola Seahorses", 20);
