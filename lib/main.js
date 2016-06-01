var gs = new GameState();

// in the turn loop
gs.sectors["industry"].numberOfTurnsAfterLastInvestment++
gs.sectors["industry"].invest(1000)

gs.sectors["agriculture"].numberOfTurnsAfterLastInvestment++
gs.sectors["agriculture"].invest(1000)

function loop() {
    //Modifying sectors’ effectiveness according to current Social Mood
    gs.updateAllCoefficientEffects();
    //Selecting Random Event that instantly influences the game
    gs.getRandomEvent(allEvents);
    //Money laying on the last unbuilt milestone in each sector is deducted, multiplied by sector’s effectiveness and returned to player’s budget
    gs.checkForUnbuiltMilestone();
    //Calculating Milestones’ progress
    gs.updateAllInvestments();
    //Calculating Social Mood
    gs.updateSocialMood();

    gs.increaseMonth();
    if (!gs.isGameOver) {
        window.setTimeout(loop, 4200);
    }
}

function updateUI() {

}
