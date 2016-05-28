var gs = new GameState();

// in the turn loop
gs.sectors["industry"].numberOfTurnsAfterLastInvestment++


gs.sectors["industry"].invest(1000)

function loop(){
    console.log("Budget :" + gs.budget);
    console.log("socialMood :" + gs.socialMood);
    gs.updateAllCoefficientEffect();
    //Modifying sectors’ effectiveness according to current Social Mood
    for (const sectorName in SECTORS){
	    var effect = gs.sectors[sectorName].effectiveness;
	    console.log(gs.sectors;
    }
    gs.updateBudget();
}

