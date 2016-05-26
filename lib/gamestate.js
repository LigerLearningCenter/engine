class GameState {

    constructor() {
        this.sectors = {}
        this.budget = 100000;
        this.socialMood = 100;

        for (const sectorName in SECTORS) {
            const coefficientLists = SECTORS[sectorName].coefficientLists;
            this.sectors[sectorName] = new Sector(coefficientLists,this.socialMood,this.socialMoodLevel)
        }

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
        for (const sectorName in SECTORS) {
            this.setCaculateCoefficientEffect(sectorName);
        }
    }
    /**
     * calculate and set the coefficientEffect for a given sector
     * @param {name of Sector}
     */
    setCaculateCoefficientEffect(sector) {
        const sec = ["industry", "agriculture", "consumerServices", "infrastructure", "education", "tourism", "ecology"];
        const giveSectorIndex = sec.indexOf(sector);
        this.sectors[sector].milestone.coefficientEffect = 0;
        for (var i = 0; i < sec.length; i++) {
            this.sectorName = sec[i];
            this.sectors[sector].milestone.coefficientEffect += this.sectors[this.sectorName].milestone.coefficientList[giveSectorIndex];
        }
    }

    /**
     * returns the level of the social mood
     * @returns {number}
     */
    get socialMoodLevel () {
        if (this.socialMood > 80){
            return 5
        }
        else if (this.socialMood > 60 && this.socialMood < 81){
            return 4
        }
        else if (this.socialMood > 40 && this.socialMood < 61){
            return 3
        }
        else if (this.socialMood > 20 && this.socialMood < 41){
            return 2
        }
        return 1
    }
    

}