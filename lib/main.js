var gs = new GameState();

// in the turn loop
gs.sectors["industry"].numberOfTurnsAfterLastInvestment++
gs.sectors["industry"].invest(1000)

gs.sectors["agriculture"].numberOfTurnsAfterLastInvestment++
gs.sectors["agriculture"].invest(1000)

function loop() {
	console.log(gs.date);
    console.log("Budget :" + gs.budget);
    console.log("socialMood :" + gs.socialMood);
    gs.updateAllCoefficientEffect();
    gs.updateSocialMood();
    //Modifying sectors’ effectiveness according to current Social Mood
    var effect = {};
    var investment = {};
    for (const sectorName in SECTORS){    
	    effect[sectorName] = gs.sectors[sectorName].effectiveness;
	    investment[sectorName] = gs.sectors[sectorName].investment;
	    gs.sectors[sectorName].calculateInvestment();
	    
    }
    console.log("Effect");
    console.log(effect);
    console.log("investment")
    console.log(investment);
    window.setTimeout(loop, 4200);
    gs.increaseMonth();
}



