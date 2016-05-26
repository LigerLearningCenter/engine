class Milestone {

    constructor(coefficientLists,investment) {
        this.coefficientEffect = 0;
        this.coefficientLists = coefficientLists;
        this.level = 0;
        this.previousLevel = 0;
        this.investment = investment;
    }


    calculateMileStoneLevel() {
        // calculateMileStoneLevel(industry)
        this.level += Math.floor(this.investment / 500);
        if (this.level > 10) {
            this.level = 10;
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