class GameState {

    constructor() {
        this.sectors = {}
        for (const sectorName in SECTORS) {
            const coefficientLists = SECTORS[sectorName].coefficientLists;
            this.sectors[sectorName] = new Sector(coefficientLists)
        }
        this.budget = 0;
    }

    updateSocialMood() {
        for (const sectorName in SECTORS) {
            const sector = this.sectors[sectorName];
            
            for (i = milestoneBuiltfor1cycle; i > 0; i--) {
                this.socialMood += 3;
            }

            if (sector.isUnderinvested1) {
                this.socialMood -= 1;
            } else if (sector.isUnderinvested2) {
                this.socialMood -= 3;
            }
        }
    }
}