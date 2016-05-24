//Function for increaseMileStoneLevel
function changeSocialMood (number) {
  if (number + socialMood >100) {
    socialMood = 100
  } else {
    socialMood = socialMood + number   //socialMood += number
  }
}
//Function calculate investment
updateSocialMood() {
    for (const sectorName in SECTORS) {
        const sector = this.sectors[sectorName];
        if (sector.isUnderinvested) {
            this.socialMood -= 2;
        }
    }
}

/**
 * Returns effectiveness for the sector.
 *
 * @returns {float}
 */
get effectiveness() {
    return this.socialMood * 0.01 * this.milestone.coefficientEffect + this.eventMoneyEffect;
}
/**
 * Returns staement of the investment turns.
 *
 * @returns {boolean}
 */
get isUnderinvested() {
    return numberOfTurnsAfterLastInvestment >= 2;
}
