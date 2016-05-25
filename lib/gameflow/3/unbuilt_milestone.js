function UnbuiltMilestone() {
  var moneyLeft = 0;
  for (var i = 0; i < sectors.length; i++) {
    moneyLeft = investment[sectors[i]] % 500;
    investment[sectors[i]] = investment[sectors[i]] - moneyLeft;
    budget += moneyLeft * effectiveness[sectors[i]];
  }
}