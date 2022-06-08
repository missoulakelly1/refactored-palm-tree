 import { MatchValidator } from './MatchValidator';
import { Team } from './Team';

//first step:  validate data -- "garbage in, garbage out"
 let matchTest = 'Monterey United 1, Capitola Seahorses';
 let validator = new MatchValidator();
 let result = validator.isValid(matchTest);

//console.log(result);

 var resultTest = "San Jose Earthquakes 3, Santa Cruz Slugs 3".split(","); 
 //console.log(resultTest);

 const str = 'San Jose Earthquakes 3';
 const last = str[str.length - 1];
 const num = Number(last);
 //console.log(typeof num);

var match = {
    firstTeamName: "San Jose Earthquakes",
    firstTeamScore: 3,
    secondTeamName: "Monterey United",
    secondTeamScore: 4,
};

var assignPoints = function(match: { firstTeamName:string, firstTeamScore :number, secondTeamName:string, secondTeamScore:number }) { 
    //console.log("firstTeamName :"+match.firstTeamName) 
   // console.log("firstTeamScore :"+match.firstTeamScore) 
   // console.log("secondTeamName :"+match.secondTeamName) 
   // console.log("secondTeamScore :"+match.secondTeamScore) 
    var text;
    if (match.firstTeamScore < match.secondTeamScore) text = "Monterey United won this match"
    console.log(text);

   var winPoints = 3;
   var tiePoints = 1;
   var lossPoints = 0;
   var rankingPoints;
   //console.log(typeof winPoints);
   if (match.firstTeamScore > match.secondTeamScore) {
       rankingPoints = match.firstTeamScore + winPoints
      // console.log()
   }
} 
assignPoints(match)
