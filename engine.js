function loop(){
  //Modifying sectors’ effectiveness according to current Social Mood
  calculateEffectiveness();
  //Selecting Random Event that instantly influences the game
  calculateRandomEvent();//this will set eventMoodEffect and eventMoneyEffect to the effect from the random events
  //Money laying on the last unbuilt milestone in each sector is deducted,
  //multiplied by sector’s effectiveness and returned to player’s budget
  checkUnbuiltMilestone();//this will set the money array
}
