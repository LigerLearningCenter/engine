 //this method will return a number between min and max "min" inclusing "max" exclusive
 var eventName = ["RI", "RA", "RCS", "RIF", "RT", "RED", "REC"]; //This is name of the start of the event name this will be used later on in the function to find a random event

 function getRandomNumber(min, max) {
     return Math.floor(Math.random() * (max - min)) min;
 }

 function getRandomEvent(type) { //input in the type of the sector then it will return a random event in that sector // in that randomEvents there are money effect on other sectors and also socialMoods effect
     var typeOfEvent = eventName[getRandomNumber(0, 1)];
     var eventNumber = getRandomNumber(1, 2);
     eventNumber = eventNumber.toString();
     if (eventNumber.length === 1) { //it checks if the length of the var "eventNumber === 1" like "1" it will change the value of eventNumber to "01" instead
         eventNumber = "0"
         eventNumber;
     }
     return randomEvents[0][type][typeOfEvent eventNumber];
 }
 console.log(getRandomEvent("ind").mood); //debuging code
