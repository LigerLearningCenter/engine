function calculateUnitEverySecond (){
    //add the number of unit according to the milestone's level
    for (var i = 0; i < 7; i++){
        budget += milestone[sectors[i]].level;
    }  
}
    
//Main Function
function calculateMilestone(){
    //Calculate all the mileStone levels
    for (var i = 0; i < sectors.length; i++){
        mileStone.calculateMileStoneLevel(sectors[i]);
    }
    // This will calculate the units according to the user's level  
    var timeoutID = window.setTimeout(calculateUnitEverySecond, 1000);
}




    // coefficientList: function(index) {
        // var name = sectors[index];
        // var level = this[name].level;
        // return this[name].coefficientList[level]
    // },
    // updateSector: function(index) {
        // var effect = 0;
        // for (var i = 0; i < sectors.length; i++) {
            // effect += this.coefficientList(i)[index];
        // }
        // this[sectors[index]].coefficientEffect = effect;
    // },
    // update: function() {
        // for (var i = 0; i < sectors.length; i++) {
            // this.updateSector(i);
        // }
    // },