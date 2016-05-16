function loop(){
  //Modifying sectors’ effectiveness according to current Social Mood
  calculateEffectiveness();
  //Selecting Random Event that instantly influences the game
  calculateRandomEvent();//this will set eventMoodEffect and eventMoneyEffect to the effect from the random events
}
