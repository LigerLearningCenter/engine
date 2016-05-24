var gs = new GameState()

// in the turn loop
gs.sectors["industry"].numberOfTurnsAfterLastInvestment++


gs.sectors["industry"].invest(200)

console.log(gs.sectors["industry"].effectiveness)