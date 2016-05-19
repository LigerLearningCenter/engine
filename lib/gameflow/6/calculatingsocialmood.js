//Function for increaseMileStoneLevel
function changeSocialMood (number) {
  if (number + socialMood >100) {
    socialMood = 100
  } else {
    socialMood = socialMood + number   //socialMood += number
  }
}
