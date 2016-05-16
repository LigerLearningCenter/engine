//this method will return a number between min and max "min" inclusing "max" exclusive
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//new code
//is this shorter than your version of code Vuthy?
function getRandomEvent1(type){//type === the array of the random events
 return type[Math.floor(Math.random() * type.length)]
}