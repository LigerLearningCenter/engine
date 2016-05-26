class Milestone {

    constructor(coefficientLists,investment) {
        this.coefficientEffect = 0;
        this.coefficientLists = coefficientLists;
        this.level = 0;
        this.previousLevel = 0;
        this.investment = investment;
    }

    /*
     * Loops through coefficientList and calculate for coefficientEffect
     * @returns {number}
     */
    updateCoefficientEffect() {
        this.coefficientEffect = 0;
        for (var i = 0; i < this.coefficientList.length; i++) {
            //coefficientEffect equal to the sum of coefficientList. 
            //[1.60, 0.2, 0, -0.1, 0.1, 0, -0.1] == 1.7
            this.coefficientEffect += this.coefficientList[i];
        }     
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