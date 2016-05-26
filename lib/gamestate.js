class GameState {

    constructor() {
        this.sectors = {}
        this.budget = 100000;
        this.socialMood = 100;

        for (const sectorName in SECTORS) {
            const coefficientLists = SECTORS[sectorName].coefficientLists;
            this.sectors[sectorName] = new Sector(coefficientLists, this.socialMood, this.socialMoodLevel)
        }

    }

    updateSocialMood() {
        for (const sectorName in SECTORS) {
            const sector = this.sectors[sectorName];

            for (var i = sector.milestoneBuiltfor1cycle; i > 0; i--) {
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
    get socialMoodLevel() {
        if (this.socialMood > 80) {
            return 5
        } else if (this.socialMood > 60 && this.socialMood < 81) {
            return 4
        } else if (this.socialMood > 40 && this.socialMood < 61) {
            return 3
        } else if (this.socialMood > 20 && this.socialMood < 41) {
            return 2
        }
        return 1
    }
    /*
    Money laying on the last unbuilt milestone in each sector is deducted, multiplied by sector’s
    effectiveness and returned to player’s budget
    @variable {effectiveness} gs.sectors["industry"].effectiveness
    @variable {investment} gs.sectors["industry"].investment
    @equation {a = investment % 500} -  This will set a to the money that is 
                                        left after building the milestone
    @equation {investment -= a} - This will set investment to to the money that is deducted 
                                  after building the milestone
    @equation {budget += a * effectiveness} - this will return the money that is left multiplied by the
                                                    affectiveness after building the milestone to budget
  */
    checkForUnbuiltMilestone() {
        const sec = ["industry", "agriculture", "consumerServices", "infrastructure", "education", "tourism", "ecology"];
        for (var i = 0; i < sec.length; i++) {
            var sectorName = sec[i];
            this.checkSectorForUnbuitMilestone(sectorName);
        }
    }

    checkSectorForUnbuitMilestone(sectorName) {
        var effectiveness = this.sectors[sectorName].effectiveness;
        var investment = this.sectors[sectorName].investment;
        var moneyLeft = investment % 500;
        this.sectors[sectorName].investment -= moneyLeft;
        this.budget += moneyLeft * effectiveness;
    }

    updateSocialMoodToSectors() {
        for (const sectorName in SECTORS) {
            sectorName.socialMood = this.socialMood;
        }
    }
}