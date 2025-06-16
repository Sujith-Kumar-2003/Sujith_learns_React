function addAnotherListener(typeOfEvent, callback){
    var eventThatHappened = {
        eventType: "keydown",
        key:"p",
        durationOfKeyPress:2
    }

    if (eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}

addAnotherListener("keydown", function (event){
    console.log(event);
});