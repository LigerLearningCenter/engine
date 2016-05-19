function getRandomEvent(type) { //type === the array of the random events
    return type[Math.floor(Math.random() * type.length)]
}

function selectSector() {
    var random = Math.floor(Math.random() * sectors.length);
    switch(sectors[random]){
        case "industry":
            return getRandomEvent(industryEvents);
            break;
        case "agriculture":
            return getRandomEvent(agricultureEvents);
            break;
        case "consumerServicesEvents":
            return getRandomEvent(consumerServicesEvents);
            break;
        case "infrastructure":
            return getRandomEvent(infrastructureEvents);
            break;
        case "education":
            return getRandomEvent(educationEvents);
            break;
        case "tourism":
            return getRandomEvent(tourismEvents);
            break;
        default:
            return getRandomEvent(ecologyEvents);

    }
}

function calculateRandomEvent() {
    var randomEvent = selectSector();
    console.log(randomEvent);
    for (var i = 0; i < 7; i++) {
        eventMoodEffect[sectors[i]] += randomEvent.mood[sectors[i]];
    }
    for (var i = 0; i < 7; i++) {
        eventMoneyEffect[sectors[i]] += randomEvent.money[sectors[i]];
    }
    return;
}
