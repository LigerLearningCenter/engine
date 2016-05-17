function calculate (sector){
  //this will calculate the socialMood with the coefficientEffect from the mileStone
  effectiveness[sector] = socialMood[sector] * 0.01 * mileStone[sector].coefficientEffect + eventMoneyEffect[sector];
}

function calculateEffectiveness (){
  mileStone.update();
  for (var i = 0; i < sectors.length; i++){
    calculate(sectors[i]);
  }
}
