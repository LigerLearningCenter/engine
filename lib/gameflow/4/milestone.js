
//mileStone
//use mileStone.increaseMileStoneLevel('industry'); - This will also update the new coefficient
var mileStone = {
    industry: {
        coefficientEffect: 0,
        coefficientList: [ //this is the list of coefficientEffect for every mileStone level
            [1.10, 0, 0, 0, 0, 0, 0],
            [1.60, 0.2, 0, -0.1, 0.1, 0, -0.1],
            [1.80, 0.3, 0.1, -0.2, 0.1, -0.1, -0.2],
            [2, 0.3, 0.2, -0.1, 0.2, -0.2, -0.3],
            [1.90, 0.2, 0.2, 0, 0.2, -0.3, -0.3],
            [1.70, 0.1, 0.2, 0.1, 0.3, -0.2, -0.2],
            [1.50, 0, 0.3, 0.1, 0.3, -0.2, -0.1],
            [1.40, 0, 0.3, 0.2, 0.3, -0.1, -0.1],
            [1.30, -0.1, 0.2, 0.2, 0.3, 0, 0],
            [1.20, -0.1, 0.1, 0.3, 0.3, 0, 0],
            [1.10, -0.2, 0.1, 0.3, 0.3, 0.1, 0]
        ],
        level: 0
    },
    agriculture: {
        coefficientEffect: 0,
        coefficientList: [ //this is the list of coefficientEffect for every mileStone level
            [0, 1.1, 0, 0, 0, 0, 0],
            [0, 1.1, 0, 0, 0, 0, 0],
            [0, 1.30, 0, 0, 0, 0, 0],
            [0, 1.20, 0, 0.1, 0.1, 0, -0.1],
            [0.1, 1.50, 0.1, 0.1, 0.1, 0, -0.1],
            [0.2, 1.40, 0.1, 0.1, 0.1, 0, -0.1],
            [0.2, 1.70, 0.1, 0.2, 0.1, -0.1, -0.2],
            [0.2, 1.60, 0.1, 0.2, 0.2, -0.1, -0.2],
            [0.3, 1.90, 0.2, 0.2, 0.2, -0.1, -0.2],
            [0.3, 1.80, 0.2, 0.3, 0.3, -0.2, -0.3],
            [0.3, 2.00, 0.2, 0.3, 0.3, -0.2, -0.3]
        ],
        level: 0
    },
    consumerServices: {
        coefficientEffect: 0,
        coefficientList: [ //this is the list of coefficientEffect for every mileStone level
            [0, 0, 1.10, 0, 0, 0, 0],
            [0.1, 0, 1.10, 0, 0, 0, 0],
            [0.1, 0, 1.20, 0, 0.1, 0, 0],
            [0.1, -0.1, 1.30, 0, 0.1, 0, 0],
            [0.2, -0.1, 1.40, 0.1, 0.1, 0.1, 0],
            [0.2, -0.2, 1.50, 0.1, 0.2, 0.1, 0],
            [0.2, -0.2, 1.60, 0.1, 0.2, 0.1, 0],
            [0.2, -0.3, 1.70, 0.1, 0.2, 0.1, -0.1],
            [0.3, -0.3, 1.80, 0.1, 0.3, 0.2, -0.1],
            [0.3, -0.3, 1.90, 0.2, 0.3, 0.2, -0.2],
            [0.3, -0.3, 2.00, 0.2, 0.3, 0.2, -0.2]
        ],
        level: 0
    },
    infrastructure: {
        coefficientEffect: 0,
        coefficientList: [ //this is the list of coefficientEffect for every mileStone level
            [0, 0, 0, 1.10, 0, 0, 0],
            [0.3, 0.3, 0, 1.00, 0, 0.2, 0],
            [0.3, 0.3, 0, 1.00, 0, 0.2, 0],
            [0.3, 0.2, 0, 1.00, 0.1, 0.2, -0.1],
            [0.2, 0.2, 0.1, 1.00, 0.1, 0.1, -0.1],
            [0.2, 0.1, 0.1, 1.00, 0.1, 0.1, -0.2],
            [0.2, 0, 0.1, 1.00, 0.2, 0, -0.2],
            [0.1, 0, 0.1, 1.00, 0.2, 0, -0.2],
            [0.1, -0.1, 0, 1.00, 0.2, 0, -0.3],
            [0, -0.1, 0, 1.00, 0.3, -0.1, -0.3],
            [0, -0.1, 0, 1.00, 0.3, -0.1, -0.3]
        ],
        level: 0
    },
    education: {
        coefficientEffect: 0,
        coefficientList: [ //this is the list of coefficientEffect for every mileStone level
            [0, 0, 0, 0, 1.10, 0, 0],
            [0.1, 0, 0, 0, 1.10, 0, 0.1],
            [0.1, 0, 0, 0, 1.30, 0, 0.1],
            [0.1, 0.1, 0.1, 0.1, 1.20, 0, 0.1],
            [0.1, 0.1, 0.1, 0.1, 1.50, 0.1, 0.1],
            [0.2, 0.1, 0.1, 0.1, 1.40, 0.1, 0.2],
            [0.2, 0.2, 0.2, 0.2, 1.70, 0.2, 0.2],
            [0.2, 0.2, 0.2, 0.2, 1.60, 0.2, 0.2],
            [0.2, 0.2, 0.2, 0.3, 1.90, 0.2, 0.2],
            [0.3, 0.3, 0.3, 0.3, 1.80, 0.3, 0.3],
            [0.3, 0.3, 0.3, 0.3, 2.00, 0.3, 0.3]
        ],
        level: 0
    },
    tourism: {
        coefficientEffect: 0,
        coefficientList: [ //this is the list of coefficientEffect for every mileStone level
            [0, 0, 0, 0, 0, 1.10, 0],
            [0.2, 0, 0.1, 0.1, 0, 1.60, 0],
            [0.2, 0, 0.1, 0.2, 0, 1.80, 0],
            [0.1, 0, 0.1, 0.3, 0.1, 2.00, 0],
            [0.1, 0, 0.1, 0.3, 0.1, 1.90, -0.1],
            [0, 0.1, 0.2, 0.2, 0.1, 1.70, -0.1],
            [-0.1, 0.1, 0.2, 0.1, 0.1, 1.50, -0.2],
            [-0.1, 0.1, 0.2, 0, 0.2, 1.40, -0.2],
            [-0.2, 0.1, 0.2, 0, 0.2, 1.30, -0.2],
            [-0.2, 0.2, 0.3, -0.1, 0.3, 1.20, -0.3],
            [-0.3, 0.2, 0.3, -0.1, 0.3, 1.10, -0.3]
        ],
        level: 0
    },
    ecology: {
        coefficientEffect: 0,
        coefficientList: [ //this is the list of coefficientEffect for every mileStone level
            [0, 0, 0, 0, 0, 0, 1.10],
            [0, 0.3, 0, 0, 0.1, 0.3, 1.10],
            [-0.1, 0.2, 0, 0, 0.1, 0.3, 1.20],
            [-0.1, 0.2, 0, 0, 0.1, 0.3, 1.30],
            [-0.1, 0.1, 0, -0.1, 0.2, 0.3, 1.40],
            [-0.2, 0.1, 0.1, -0.1, 0.2, 0.2, 1.50],
            [-0.2, 0, 0.1, -0.1, 0.2, 0.2, 1.60],
            [-0.2, 0, 0.2, -0.1, 0.3, 0.2, 1.70],
            [-0.3, -0.1, 0.2, -0.2, 0.3, 0.2, 1.80],
            [0.3, -0.1, 0.3, -0.2, 0.3, 0.1, 1.90],
            [0.3, -0.1, 0.3, -0.2, 0.3, 0.1, 2.00]
        ],
        level: 0
    },
    update: function() {
        for (var i = 0; i < sectors.length; i++) {
            this[sectors[i]].coefficientEffect = 0;
            for (var a = 0; a < sectors.length; a++) {
                this[sectors[i]].coefficientEffect += this[sectors[a]].coefficientList[this[sectors[a]].level][i];
            }
            console.log(sectors[i] + " is " + this[sectors[i]].coefficientEffect);
        }
        return;
    },
    increaseMileStoneLevel: function(name) {
        this[name].level += 1;
        this.update();
        changeSocialMood(-1);
    },
    calculateMileStoneLevel: function(name){// calculateMileStoneLevel(industry)
        mileStone[name].level = Math.floor(investment[name]/500);
        if(mileStone[name].level > 10){
            mileStone[name].level = 10;
        }
        this.update();
        return
    }
}
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