function mainLoop(socialMood, sectors, budget, mileStone){
	//This loop will run every 4.2 seconds
	//It will set new budget, reset the money in different sectors
	//Calculate
}

function increaseMileStoneLevel (name){
	mileStone[name].level += 1;
	mileStone.update();
	return;
}
//***************************************************************************************************//
var socialMood = {
	industry:100,
	agriculture:100,
	consumerServices:100,
	infrastructure:100,
	education:100,
	tourism:100,
	ecology:100
};

var mileStone = {
	industry:{
		initCoefficient:1.10,
		coefficientEffect:0,
		finalCoefficient:1.10,
		coefficientList:,
		level:0
		},
	agriculture:{
		initCoefficient:1.10,
		coefficientEffect:0,
		finalCoefficient:1.10,
		level:0
		},
	consumerServices:{
		initCoefficient:1.10,
		coefficientEffect:0,
		finalCoefficient:1.10,
		level:0
		},
	infrastructure:{
		initCoefficient:1.10,
		coefficientEffect:0,
		finalCoefficient:1.10,
		level:0
		},
	education:{
		initCoefficient:1.10,
		coefficientEffect:0,
		finalCoefficient:1.10,
		level:0
		},
	tourism:{
		initCoefficient:1.10,
		coefficientEffect:0,
		finalCoefficient:1.10,
		level:0
		},
	ecology:{
		initCoefficient:1.10,
		coefficientEffect:0,
		finalCoefficient:1.10,
		level:0
		},
	update:function(){
		for(){

		}
		return;
	}
};
//**These is the structure of the object of mileStone**//

//var mileStone = {
//		ecology:{
//			initCoefficient:1.10,
//			coefficientEffect:0,
//			finalCoefficient:1.10,
//			level:0
//		},
//};