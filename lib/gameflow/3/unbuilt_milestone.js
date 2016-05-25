/*
  Money laying on the last unbuilt milestone in each sector is deducted, multiplied by sector’s
  effectiveness and returned to player’s budget
  @variable {effectiveness}
  @variable {investment}
  @equation {a = investment % 500} - This will set a to the money that is left after building the milestone
  @equation {investment -= a} - This will set investment to to the money that is deducted after building the milestone
  @equation {playerBudget += a * effectiveness} - this will return the money that is left multiplied by the
                                                  affectiveness after building the milestone to budget
*/
class Milestone {

    constructor(coefficientLists) {
        this.coefficientEffect = 1;
        this.coefficientLists = coefficientLists;
        this.level = 2;
        this.previousLevel = 0;
    }

    /*
     * Loops through coefficientList and calculate for coefficientEffect
     * @returns {number}
     */
    updateCoefficientEffect(arg) {
        this.coefficientEffect = 0;
        for (var i = 0; i < this.coefficientList.length; i++) {
            //coefficientEffect equal to the sum of coefficientList.
            //[1.60, 0.2, 0, -0.1, 0.1, 0, -0.1] == 1.7
            this.coefficientEffect += this.coefficientList[i];
            console.log(this.coefficientEffect);
            console.log(this.coefficientList);
        }
    }

    increaseMileStoneLevel() {
        this.level += 1;
        this.updateCoefficientEffect();
    }

    calculateMileStoneLevel(name) {
        // calculateMileStoneLevel(industry)
        mileStone[name].level = Math.floor(investment[name] / 500);
        if (mileStone[name].level > 10) {
            mileStone[name].level = 10;
        }
    }

    get coefficientList() {
        return this.coefficientLists[this.level];
    }

    /*
     * Get the different between previous level and current level
     * @returns {number}
     */
    get milestoneBuiltfor1cycle() {
        return this.level - this.previousLevel;
    }

}
class Sector {

    constructor(milestoneCoefficentLists) {
        this.milestone = new Milestone(milestoneCoefficentLists);
        this.socialMood = 100;
        this.eventMoneyEffect = 0;
        this.eventMoodEffect = 0;
        this.investment = 0;
        this.numberOfTurnsAfterLastInvestment = 0;
        //the name of each property repersent the level of the socialMoodLevel
        //the data is the effect on the efficency
        this.socialMoodLevelEffect = {
            "lv4": -0.05,
            "lv3": -0.1,
            "lv2": -0.15,
            "lv1": -0.2,
        }
    }

    /**
     * Get sector's eventMoodEffectiveness.
     * @returns {number} - effectiveness
     */
    get effectiveness() {
        return this.effectOnEffectiveness + this.milestone.coefficientEffect + this.eventMoneyEffect;
    }

    get isUnderinvested1() {
        return numberOfTurnsAfterLastInvestment = 1;
    }

    get isUnderinvested2() {
        return numberOfTurnsAfterLastInvestment >= 2;
    }

    /*
     * return the effect on effectiveness from the socialMood.
     * @returns {number}
     */
    get effectOnEffectiveness() {
        if (this.socialMood > 80) {
            return 0
        } else if (this.socialMood > 60 && this.socialMood < 81) {
            return this.socialMoodLevelEffect.lv4
        } else if (this.socialMood > 40 && this.socialMood < 61) {
            return this.socialMoodLevelEffect.lv3
        } else if (this.socialMood > 20 && this.socialMood < 41) {
            return this.socialMoodLevelEffect.lv2
        }
        return this.socialMoodLevelEffect.lv1
    }

    invest(money) {
            this.investment += money;
            this.numberOfTurnsAfterLastInvestment = 0;
        }
        /**
         * returns the level of the social mood
         * @returns {number}
         */
    get socialSocialMoodLevel() {
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


}

const SECTORS = {
    industry: {
        coefficientLists: [
            [1.10, 0, 0, 0, 0, 0, 0],
            [1.60, 0.2, 0, -0.1, 0.1, 0, -0.1],
            [1.80, 0.3, 0.1, -0.2, 0.1, -0.1, -0.2],
            [2, 0.3, 0.2, -0.1, 0.2, -0.2, -0.3],
            [1.90, 0.2, 0.2, 0, 0.2, -0.3, -0.3],
            [1.70, 0.1, 0.2, 0.1, 0.3, -0.2, -0.2],
            [1.50, 0, 0.3, 0.1, 0.3, -0.2, -0.1],
            [1.40, 0, 0.3, 0.2, 0.3, -0.1, -0.1],
            [1.30, -0.1, 0.2, 0.2, 0.3, 0, 0],
            [1.20, -0.1, 0.1, 0.3, 0.3, 0, 0],
            [1.10, -0.2, 0.1, 0.3, 0.3, 0.1, 0]
        ],
    },
    agriculture: {
        coefficientLists: [
            [0, 1.1, 0, 0, 0, 0, 0],
            [0, 1.1, 0, 0, 0, 0, 0],
            [0, 1.30, 0, 0, 0, 0, 0],
            [0, 1.20, 0, 0.1, 0.1, 0, -0.1],
            [0.1, 1.50, 0.1, 0.1, 0.1, 0, -0.1],
            [0.2, 1.40, 0.1, 0.1, 0.1, 0, -0.1],
            [0.2, 1.70, 0.1, 0.2, 0.1, -0.1, -0.2],
            [0.2, 1.60, 0.1, 0.2, 0.2, -0.1, -0.2],
            [0.3, 1.90, 0.2, 0.2, 0.2, -0.1, -0.2],
            [0.3, 1.80, 0.2, 0.3, 0.3, -0.2, -0.3],
            [0.3, 2.00, 0.2, 0.3, 0.3, -0.2, -0.3]
        ]
    },
    consumerServices: {
        coefficientLists: [
            [0, 0, 1.10, 0, 0, 0, 0],
            [0.1, 0, 1.10, 0, 0, 0, 0],
            [0.1, 0, 1.20, 0, 0.1, 0, 0],
            [0.1, -0.1, 1.30, 0, 0.1, 0, 0],
            [0.2, -0.1, 1.40, 0.1, 0.1, 0.1, 0],
            [0.2, -0.2, 1.50, 0.1, 0.2, 0.1, 0],
            [0.2, -0.2, 1.60, 0.1, 0.2, 0.1, 0],
            [0.2, -0.3, 1.70, 0.1, 0.2, 0.1, -0.1],
            [0.3, -0.3, 1.80, 0.1, 0.3, 0.2, -0.1],
            [0.3, -0.3, 1.90, 0.2, 0.3, 0.2, -0.2],
            [0.3, -0.3, 2.00, 0.2, 0.3, 0.2, -0.2]
        ]
    },
    infrastructure: {
        coefficientLists: [
            [0, 0, 0, 1.10, 0, 0, 0],
            [0.3, 0.3, 0, 1.00, 0, 0.2, 0],
            [0.3, 0.3, 0, 1.00, 0, 0.2, 0],
            [0.3, 0.2, 0, 1.00, 0.1, 0.2, -0.1],
            [0.2, 0.2, 0.1, 1.00, 0.1, 0.1, -0.1],
            [0.2, 0.1, 0.1, 1.00, 0.1, 0.1, -0.2],
            [0.2, 0, 0.1, 1.00, 0.2, 0, -0.2],
            [0.1, 0, 0.1, 1.00, 0.2, 0, -0.2],
            [0.1, -0.1, 0, 1.00, 0.2, 0, -0.3],
            [0, -0.1, 0, 1.00, 0.3, -0.1, -0.3],
            [0, -0.1, 0, 1.00, 0.3, -0.1, -0.3]
        ]
    },
    education: {
        coefficientLists: [
            [0, 0, 0, 0, 1.10, 0, 0],
            [0.1, 0, 0, 0, 1.10, 0, 0.1],
            [0.1, 0, 0, 0, 1.30, 0, 0.1],
            [0.1, 0.1, 0.1, 0.1, 1.20, 0, 0.1],
            [0.1, 0.1, 0.1, 0.1, 1.50, 0.1, 0.1],
            [0.2, 0.1, 0.1, 0.1, 1.40, 0.1, 0.2],
            [0.2, 0.2, 0.2, 0.2, 1.70, 0.2, 0.2],
            [0.2, 0.2, 0.2, 0.2, 1.60, 0.2, 0.2],
            [0.2, 0.2, 0.2, 0.3, 1.90, 0.2, 0.2],
            [0.3, 0.3, 0.3, 0.3, 1.80, 0.3, 0.3],
            [0.3, 0.3, 0.3, 0.3, 2.00, 0.3, 0.3]
        ]
    },
    tourism: {
        coefficientLists: [
            [0, 0, 0, 0, 0, 1.10, 0],
            [0.2, 0, 0.1, 0.1, 0, 1.60, 0],
            [0.2, 0, 0.1, 0.2, 0, 1.80, 0],
            [0.1, 0, 0.1, 0.3, 0.1, 2.00, 0],
            [0.1, 0, 0.1, 0.3, 0.1, 1.90, -0.1],
            [0, 0.1, 0.2, 0.2, 0.1, 1.70, -0.1],
            [-0.1, 0.1, 0.2, 0.1, 0.1, 1.50, -0.2],
            [-0.1, 0.1, 0.2, 0, 0.2, 1.40, -0.2],
            [-0.2, 0.1, 0.2, 0, 0.2, 1.30, -0.2],
            [-0.2, 0.2, 0.3, -0.1, 0.3, 1.20, -0.3],
            [-0.3, 0.2, 0.3, -0.1, 0.3, 1.10, -0.3]
        ]
    },
    ecology: {
        coefficientLists: [
            [0, 0, 0, 0, 0, 0, 1.10],
            [0, 0.3, 0, 0, 0.1, 0.3, 1.10],
            [-0.1, 0.2, 0, 0, 0.1, 0.3, 1.20],
            [-0.1, 0.2, 0, 0, 0.1, 0.3, 1.30],
            [-0.1, 0.1, 0, -0.1, 0.2, 0.3, 1.40],
            [-0.2, 0.1, 0.1, -0.1, 0.2, 0.2, 1.50],
            [-0.2, 0, 0.1, -0.1, 0.2, 0.2, 1.60],
            [-0.2, 0, 0.2, -0.1, 0.3, 0.2, 1.70],
            [-0.3, -0.1, 0.2, -0.2, 0.3, 0.2, 1.80],
            [0.3, -0.1, 0.3, -0.2, 0.3, 0.1, 1.90],
            [0.3, -0.1, 0.3, -0.2, 0.3, 0.1, 2.00]
        ]
    }
};
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

var gs = new GameState();

// in the turn loop
gs.sectors["industry"].numberOfTurnsAfterLastInvestment++;


gs.updateAllCoefficientEffect();
console.log(gs.sectors["industry"].milestone.coefficientEffect);
console.log(gs.sectors["agriculture"].milestone.coefficientEffect);