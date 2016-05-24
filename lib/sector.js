class Sector {

    constructor(milestoneCoefficentList) {
        this.milestone = new Milestone(milestoneCoefficentList);
        this.socialMood = 100;
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

    get isUnderinvested() {
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
    /**
     * returns the level of the social mood
     * @returns {number}
     */
    get socialSocialMoodLevel () {
        if (this.socialMood > 80){
            return 5
        }
        else if (this.socialMood > 60 && this.socialMood < 81){
            return 4
        }
        else if (this.socialMood > 40 && this.socialMood < 61){
            return 3
        }
        else if (this.socialMood > 20 && this.socialMood < 41){
            return 2
        }
        return 1
    }

}
