//***************************************************************************************************//
//randomEvents of socialMood
var socialMood = {
    industry: 100,
    agriculture: 100,
    consumerServices: 100,
    infrastructure: 100,
    education: 100,
    tourism: 100,
    ecology: 100
};
var randomEvents = []; //the data team will have this **we can access it with the code ||EX. RI01.discription or RI01.industry.effect

//mileStone
//use mileStone.increaseMileStoneLevel('industry'); - This will also update the new coefficient
var sectors = ["industry", "agriculture", "consumerServices", "infrastructure", "education", "tourism", "ecology"];

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
        return;
    }

};
//
//**This is the structure of the object of mileStone**//

//var mileStone = {
//		  industry: {
//       	 	coefficientEffect: 0,
//        	coefficientList: [
//            [1.10, 0, 0, 0, 0, 0, 0],
//            [1.60, 0.2, 0, -0.1, 0.1, 0, -0.1],
//            [1.80, 0.3, 0.1, -0.2, 0.1, -0.1, -0.2],
//            [2, 0.3, 0.2, -0.1, 0.2, -0.2, -0.3],
//            [1.90, 0.2, 0.2, 0, 0.2, -0.3, -0.3],
//            [1.70, 0.1, 0.2, 0.1, 0.3, -0.2, -0.2],
//            [1.50, 0, 0.3, 0.1, 0.3, -0.2, -0.1],
//            [1.40, 0, 0.3, 0.2, 0.3, -0.1, -0.1],
//            [1.30, -0.1, 0.2, 0.2, 0.3, 0, 0],
//            [1.20, -0.1, 0.1, 0.3, 0.3, 0, 0],
//            [1.10, -0.2, 0.1, 0.3, 0.3, 0.1, 0]
//        	],
//        	level: 0
//    		},
//};
