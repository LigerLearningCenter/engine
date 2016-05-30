class GameState {

    constructor() {
        this.sectors = {}
        this.budget = 100000;
        this.socialMood = 100;
        this.date = new Date(2017,0);
        for (const sectorName in SECTORS) {
            const coefficientLists = SECTORS[sectorName].coefficientLists;
            this.sectors[sectorName] = new Sector(coefficientLists);
        }

    }

        /**
 * returns the level of the social mood
 * @returns {number}
 */
    get socialMoodLevel() {
        if (this.socialMood > 80) {
            return 4;
        } else if (this.socialMood > 60 && this.socialMood < 81) {
            return 3;
        } else if (this.socialMood > 40 && this.socialMood < 61) {
            return 2;
        } else if (this.socialMood > 20 && this.socialMood < 41) {
            return 1;
        }
        return 0;
    }

    changeSocialMood(socialMoodChange) {
        this.socialMood += socialMoodChange;
        
        if (this.socialMood > 100) {
            this.socialMood = 100;
        }
        if (this.socialMood < 0) {
            this.socialMood = 0;
        }
    }

    updateSocialMood() {
        for (const sectorName in SECTORS) {
            const sector = this.sectors[sectorName];

            for (var i = sector.milestone.numberOfMilestonesBuiltInLastCycle; i > 0; i--) {
                this.changeSocialMood(3);
            }

            switch (sector.numberOfTurnsAfterLastInvestment) {
                case 0:
                    break; // we don't get a penalty
                case 1:
                    this.changeSocialMood(-1);
                    break;
                default: // 2 or more
                    this.changeSocialMood(-3);
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

    getSectorIndex(sectorName) {
        const sec = ["industry", "agriculture", "consumerServices", "infrastructure", "education", "tourism", "ecology"];
        return sec.indexOf(sector);
    }

    /**
     * calculate and set the coefficientEffect for a given sector
     * @param {name of Sector}
     */
    setCaculateCoefficientEffect(givenSectorName) {
        const givenSectorIndex = getSectorIndex(givenSectorName); 
        this.sectors[givenSectorName].milestone.coefficientEffect = 0;
        for (const sectorName in SECTORS) {
            this.sectors[givenSectorName].milestone.coefficientEffect += this.sectors[sectorName].milestone.coefficientList[givenSectorIndex];
        }
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
        for (const sectorName in SECTORS) {
            this.checkSectorForUnbuitMilestone(sectorName);
        }
    }

    checkSectorForUnbuitMilestone(sectorName) {
        var effectiveness = this.sectors[sectorName].effectiveness(this.socialMoodLevel);
        var investment = this.sectors[sectorName].investment;
        var moneyLeft = investment % 500;
        this.sectors[sectorName].investment -= moneyLeft;
        this.budget += moneyLeft * effectiveness;
    }

    /**
     * return all money that all sectors produce each second.
     * return {number}
     */
    get moneyCreatedFromSectors() {
        var allMoney = 0;
        for (const sectorName in SECTORS) {
            const sector = this.sectors[sectorName];
            allMoney += sector.moneyProduced;
        }
        return allMoney;
    }

    /**
     * Add money to the budget that created by all the sectors.
     * @equation budget += moneyCreatedFromSectors;
     */
    updateBudget() {
        this.budget += this.moneyCreatedFromSectors;
    }

    /** 
    Choose a random event and call calculateRandomEventEffect to calculate its effect
    @param {randomEventList}
    @returns {description}

    @equation {randomNumber = Math.floor(Math.random() * allEvent.length)}
    @equation {randomEvent = allEvent[a]}
    */
    getRandomEvent(randomEventList) {
        //this will give a random number
        this.randomNumber = Math.floor(Math.random() * randomEventList.length);
        this.randomEvent = randomEventList[this.randomNumber];
        this.calculateRandomEventEffect(this.randomEvent);
        return this.randomEvent.description;
    }
    /**
    Calculate a given randomEvent effect on this.moodEffect and this.sector[sectorName].eventMoneyEffect
    @param {randomEvent}
    */

    calculateRandomEventEffect(randomEvent) {
        for (const sectorName in SECTORS) {
            this.sector[sectorName].eventMoneyEffect += randomEvent.money[sectorName];
            this.changeSocialMood(randomEvent.mood[sectorName]);
        }
    }

    /**
    * Add investment money for given sector and deduct that money from the budget.
    * @param {sectorName}
    * @parm {money} investment money
    */
    invest(sectorName, money) {
        this.sectors[sectorName].invest(money);
        this.budget -= money;
    }

    /*
    * @equation {dateMonth = currentMonth + 1}
    */
    increaseMonth () {
        var currentMonth = this.date.getMonth();
        this.date.setMonth(currentMonth + 1);
    }
}
