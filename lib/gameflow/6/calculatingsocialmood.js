//Function for increaseMileStoneLevel
function changeSocialMood (number) {
  if (number + socialMood >100) {
    socialMood = 100
  } else {
    socialMood = socialMood + number   //socialMood += number
  }
}

updateSocialMood() {
    for (const sectorName in SECTORS) {
        const sector = this.sectors[sectorName];
        if (sector.isUnderinvested) {
            this.socialMood -= 2;
        }
    }
}
