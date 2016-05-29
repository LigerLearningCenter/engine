var gs = new GameState();

// in the turn loop
gs.sectors["industry"].numberOfTurnsAfterLastInvestment++

gs.sectors["industry"].invest(1000)

function loop() {
    console.log("Budget :" + gs.budget);
    console.log("socialMood :" + gs.socialMood);
    gs.updateAllCoefficientEffect();
    gs.updateSocialMood();
    gs.updateSocialMoodToSectors()
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
    gs.updateBudget();

}

