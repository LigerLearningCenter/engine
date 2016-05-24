class Milestone {

    constructor(coefficientLists) {
        this.coefficientEffect = 0;
        this.coefficientLists = coefficientLists;
        this.level = 0;
        this.previousLevel = 0;
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

    increaseMileStoneLevel() {
        this.level += 1;
        this.update();
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