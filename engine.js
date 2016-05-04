function mainLoop(socialMood, sectors, budget, mileStone){
	//This loop will run every 4.2 seconds
	//It will set new budget, reset the money in different sectors
	//Calculate
}

function increaseMileStoneLevel (name){
	mileStoneLevel[name] += 1; 
}

function mileStoneEffect(sectors){

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
var mileStoneLevel = {
	industry:0,
	agriculture:0,
	consumerServices:0,
	infrastructure:0,
	education:0,
	tourism:0,
	ecology:0
};
var coefficient = {
	industry:1.10,
	agriculture:1.10,
	consumerServices:1.10,
	infrastructure:1.10,
	education:1.10,
	tourism:1.10,
	ecology:1.10
};