//randomEvents of socialMood
//we can use this method to choose randomly what event will happen
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var socialMood = {
    industry: 100,
    agriculture: 100,
    consumerServices: 100,
    infrastructure: 100,
    education: 100,
    tourism: 100,
    ecology: 100
};
var randomEvents = []; //the data team will have this **we can access it with the code ||EX. randomEvents[0].RI01.discription