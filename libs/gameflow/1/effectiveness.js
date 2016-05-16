var effectiveness = {
  industry: 1 ,
  agriculture: 1,
  consumerServices:1,
  infrastructure: 1,
  education:1 ,
  tourism: 1,
  ecology: 1,
}
function calculate (sector){
  //this will calculate the socialMood with the coefficientEffect from the mileStone
  effectiveness[sector] = socialMood[sector] * 0.01 * mileStone[sector].coefficientEffect;
}

function calculateEffectiveness (){
  for (var i = 0; i < sectors.length; sectors++){
    calculate(sectors[i]);
  }
}
