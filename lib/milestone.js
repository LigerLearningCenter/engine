class Milestone {

    constructor(coefficientLists) {
        this.coefficientEffect = 0;
        this.coefficientLists = coefficientLists;
        this.level = 0;
        this.previousLevel = 0;
    }

    /*
     * Get the different between previous level and current level
     * @returns {number}
     */
    get milestoneBuiltfor1cycle() {
        return this.level - this.previousLevel;
    }

}
