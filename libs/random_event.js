//this method will return a number between min and max "min" inclusing "max" exclusive
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomEvent(type){
  if (type === "all"){
      return allEvents[getRandomNumber[0, allEvents.length]];
  }
  else if (type === "industry"){
      return industryEvents[getRandomNumber[0, industryEvents.length]];
  }
  else if (type === "agriculture"){
      return agricultureEvents[getRandomNumber[0, agricultureEvents.length]];
  }
  else if (type === "costumerServices"){
      return costumerServicesEvents[getRandomNumber[0, costumerServicesEvents.length]];
  }
  else if (type === "infrastructure"){
      return infrastructureEvents[getRandomNumber[0, infrastructureEvents.length]];
  }
  else if (type === "tourism"){
      return tourismEvents[getRandomNumber[0, tourismEvents.length]];
  }
  else if (type === "education"){
      return educationEvents[getRandomNumber[0, educationEvents.length]];
  }
  return agricultureEvents[getRandomNumber[0, agricultureEvents.length]];
}
