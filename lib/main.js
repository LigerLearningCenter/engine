var gs = new GameState();

// in the turn loop

function loop() {
    //Modifying sectors’ effectiveness according to current Social Mood
    gs.updateAllCoefficientEffects();
    //Selecting Random Event that instantly influences the game
    gs.getRandomEvent(agricultureEvents);
    //Money laying on the last unbuilt milestone in each sector is deducted, multiplied by sector’s effectiveness and returned to player’s budget
    gs.checkForUnbuiltMilestone();
    //Calculating Milestones’ progress
    gs.updateAllInvestments();
    //Calculating Social Mood
    gs.updateSocialMood();

    gs.increaseMonth();
    
    updateUI();

    window.setTimeout(gs.updateBudget, 1000);

    if (!gs.isGameOver) {
        window.setTimeout(loop, 4000);
    }
}

function updateUI() {
    updateBudgetToUI();
    // updateSocialMoodToUI();
    // updateMilestoneToUI();
}
  
function updateMilestoneToUI() {
    for (const sectorName in SECTORS){
        animateToGivenSector(sectorName);
    }
    
}

function animateToGivenSector(sectorName){
    for (var i = 0; i < gs.sectors[sectorName].milestone.numberOfMilestonesBuiltInLastCycle; i++){
        animateMilestone(sectorName);
    }    
}

function animateMilestone(){
    // Data team is working  on it
}

function updateBudgetToUI(){
    $(".money").html("$" + numberWithCommas(Math.round(gs.budget * 1000)));
}

function addCommaToNumber (number){
    number = number.toString();
    var listOfNumber = [];
    for (var i = 0; i < number.length; i++){
        listOfNumber.push(number[i]);
    }
    for (var i = 0 ; i < Math.floor(listOfNumber.length / 3) - 1; i++){
        for (var a = listOfNumber.length - 1, b = 1; a > -1; a--, b++){
            if (a % 3 === 0){
                listOfNumber.insert();
            }
        }
    }  
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function test(){
    loop();
    gs.invest("industry", 500);
    console.log(gs.sectors.industry.milestone.level === 1);
}