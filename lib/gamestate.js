class GameState {

    constructor() {
        this.sectors = {}
        for (const sectorName in SECTORS) {
            const coefficientLists = SECTORS[sectorName].coefficientLists
            this.sectors[sectorName] = new Sector(coefficientLists)
        }
        this.budget = 0;
    }

    updateSocialMood() {
        for (const sectorName in SECTORS) {
            const sector = this.sectors[sectorName];

            for (i = milestoneBuiltfor1cycle; i > 0; i--) {
                this.socialMood += 3;
            }

            if (sector.isUnderinvested1) {
                this.socialMood -= 1;
            } else if (sector.isUnderinvested2) {
                this.socialMood -= 3;
            }
        }
    }
    /**
     * Make update to all the coefficientEffect.
     */
    updateAllCoefficientEffect() {
      for (const sectorName in SECTORS){
        this.setCaculateCoefficientEffect(sectorName);
      }
    }
   /**
   * calculate and set the coefficientEffect for a given sector
   * @param {name of Sector}
   */
  setCaculateCoefficientEffect(sector){
    const sec = ["industry", "agriculture", "consumerServices", "infrastructure", "education", "tourism", "ecology"];
    const giveSectorIndex = sec.indexOf(sector);
    this.sectors[sector].milestone.coefficientEffect = 0;
    for (var i = 0; i < sec.length; i++){
      this.sectorName = sec[i];
      this.sectors[sector].milestone.coefficientEffect += this.sectors[this.sectorName].milestone.coefficientList[giveSectorIndex];
    }
  }

}
