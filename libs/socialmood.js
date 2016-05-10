//randomEvents of socialMood
//Write a function that pick a random event in the list
//Calculate it's effect on socialMood
function getRandomNumber(min, max) {
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

//the data team will have this **we can access it with the code ||EX. randomEvents[0].ind.RI01.money.industry or randomEvents[0].ind.RI01.description or randomEvents[0].ind.RI01.socialMood.industry
