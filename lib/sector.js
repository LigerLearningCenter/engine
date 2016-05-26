class Sector {

    constructor(milestoneCoefficentLists,socialMood,socialMoodLevel) {
        this.milestone = new Milestone(milestoneCoefficentLists);
        this.socialMood = socialMood;
        this.socialMoodLevel = socialMoodLevel;
        this.eventMoneyEffect =  0;
        this.eventMoodEffect = 0;
        this.investment = 0;
        this.numberOfTurnsAfterLastInvestment = 0;
        //the name of each property repersent the level of the socialMoodLevel
        //the data is the effect on the efficency 
        this.socialMoodLevelEffect = {
            "lv4" :-0.05,
            "lv3" : -0.1,
            "lv2" : -0.15,
            "lv1" : -0.2,
        }
    }

    /*
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
        if (this.socialMood > 80){
            return 0
        }
        else if (this.socialMood > 60 && this.socialMood < 81){
            return this.socialMoodLevelEffect.lv4
        }
        else if (this.socialMood > 40 && this.socialMood < 61){
            return this.socialMoodLevelEffect.lv3
        }
        else if (this.socialMood > 20 && this.socialMood < 41){
            return this.socialMoodLevelEffect.lv2
        }
        return this.socialMoodLevelEffect.lv1
    }

    invest(money) {
        this.investment += money;
        this.numberOfTurnsAfterLastInvestment = 0;
    }
    
    

}
