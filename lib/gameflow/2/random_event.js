function getRandomEvent(type) { //type === the array of the random events
    return type[Math.floor(Math.random() * type.length)]
}

function selectSector() {
    var random = Math.floor(Math.random() * sectors.length);

    if (sectors[random] === "industry") {
        return getRandomEvent(industryEvents);
    } else if (sectors[random] === "agriculture") {
        return getRandomEvent(agricultureEvents);
    } else if (sectors[random] === "consumerServices") {
        return getRandomEvent(consumerServicesEvents);
    } else if (sectors[random] === "infrastructure") {
        return getRandomEvent(infrastructureEvents);
    } else if (sectors[random] === "education") {
        return getRandomEvent(educationEvents);
    } else if (sectors[random] === "tourism") {
        return getRandomEvent(tourismEvents);
    }
    return getRandomEvent(ecologyEvents);
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
