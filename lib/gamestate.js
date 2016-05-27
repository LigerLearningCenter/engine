class GameState {

    constructor() {
        this.sectors = {}
        this.budget = 100000;
        this.socialMood = 100;
        for (const sectorName in SECTORS) {
            const coefficientLists = SECTORS[sectorName].coefficientLists;
            this.sectors[sectorName] = new Sector(coefficientLists, this.socialMood)
        }

    }

    updateSocialMood() {
            for (const sectorName in SECTORS) {
                const sector = this.sectors[sectorName];

                for (var i = sector.milestone.milestoneBuiltfor1cycle; i > 0; i--) {
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
            sectors[sectorName].socialMood = this.socialMood;
        }
    }
    /** 
    Choose a random event and call calculateRandomEventEffect to calculate its effect
    @param {randomEventList}
    @returns {description}

    @equation {randomNumber = Math.floor(Math.random() * allEvent.length)}
    @equation {randomEvent = allEvent[a]}
    */
    getRandomEvent (randomEventList){
        //this will give a random number
        this.randomNumber = Math.floor(Math.random() * randomEventList.length);
        this.randomEvent = randomEventList[randomNumber];
        calculateRandomEventEffect(randomEvent);
        return this.randomEvent.description;
    }
    /**
    Calculate a given randomEvent effect on this.moodEffect and this.sector[sectorName].eventMoneyEffect
    @param {randomEvent}
    */
    calculateRandomEventEffect(randomEvent){
        for (const sectorName in SECTORS){
            this.sector[sectorName].eventMoneyEffect += randomEvent.money[sectorName];
        }
        for (const sectorName in SECTORS){
            this.socialMood += randomEvent.mood[sectorName];
        }
    }
}

