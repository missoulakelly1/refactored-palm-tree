var match = {
    teamName: "San Jose Earthquakes",
    score: 3
};

var assignPoints = function(obj: { teamName:string, score :number }) { 
    console.log("teamName :"+obj.teamName) 
    console.log("score :"+obj.score) 
 } 
 assignPoints(match)