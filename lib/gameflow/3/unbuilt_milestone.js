var money = [];
function checkUnbuiltMilestone(){
  var moneyLeft = 0;
  for (var i = 0; i < sectors.length; i++){
    moneyLeft = investment[sectors[i]] % 500;
    investment[sectors[i]] = investment[sectors[i]] - moneyLeft;
    money.push(moneyLeft);
  }
  for (var i = 0; i < sectors.length; i++){
    //This will return the money that is left from the last unbuilt milestone to the player's budget
    budget += money[i] * effectiveness[sectors[i]];
  }
  return ;
}
