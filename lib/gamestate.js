class GameState {

    constructor() {
        this.sectors = {}
        for (const sectorName in SECTORS) {
            const coefficientList = SECTORS[sectorName].coefficientList
            this.sectors[sectorName] = new Sector(coefficientList)
        }
        this.budget = 0;
    }

    updateSocialMood() {
        for (const sectorName in SECTORS) {
            const sector = this.sectors[sectorName];
            if (sector.isUnderinvested) {
                this.socialMood -= 2;
            }
        }
    }

}