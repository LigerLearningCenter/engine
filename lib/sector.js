class Sector {

    constructor(milestoneCofficentList) {
        this.milestone = new Milestone(milestoneCofficentList);
        this.socialMood = 100;
        this.eventMoneyEffect = 0;
        this.eventMoodEffect = 0;
        this.investment = 0;
        this.numberOfTurnsAfterLastInvestment = 0;
    }

    /**
     * Returns effectiveness for the sector.
     *
     * @returns {float}
     */
    get effectiveness() {
        return this.socialMood * 0.01 * this.milestone.coefficientEffect + this.eventMoneyEffect;
    }

    get isUnderinvested() {
        return numberOfTurnsAfterLastInvestment >= 2;
    }

    invest(money) {
        this.investment += money;
        this.numberOfTurnsAfterLastInvestment = 0;
    }

}