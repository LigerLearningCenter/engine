class Milestone {

    constructor(coefficientLists) {
        this.coefficientEffect = 0;
        this.coefficientLists = coefficientLists;
        this.level = 0;
        this.previousLevel = 0;
    }

    update() {
        for (var i = 0; i < sectors.length; i++) {
            this[sectors[i]].coefficientEffect = 0;
            for (var a = 0; a < sectors.length; a++) {
                this[sectors[i]].coefficientEffect += this[sectors[a]].coefficientList[this[sectors[a]].level][i];
            }
            console.log(sectors[i] + " is " + this[sectors[i]].coefficientEffect);
        }
    }

    increaseMileStoneLevel(name) {
        this[name].level += 1;
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