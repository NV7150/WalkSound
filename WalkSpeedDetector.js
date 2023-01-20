const option = {
    enableHighAccuracy : true,
    timeout: 1000,
    maximumAge: 0
}

var speed = {val: 0};

// get speed (m/s)
function* getSpeed(){
    let id = navigator.geolocation.watchPosition(
        (pos) => {
            speed.val = pos.coords.speed;
            console.log(pos.coords.speed);
            },
        () => {console.log("some error happened"); speed.val = -1; },
        option
    );
    while(true){
        yield speed.val;
    }
}

// Length of 1 step (m)
const stepLength = 0.70;

// get current bpm (beats per minute)
// if error, it returns -1
function getCurrentBpm(){
    // speed(m/s)
    let currentSpeed = getSpeed().next().value;
    if (currentSpeed < 0){
        return -1;
    }
    // steps (/s)
    let numStepsSec = currentSpeed / stepLength;
    // steps (/min) as BPM
    let numStepMin = numStepsSec * 60;
    // round to integer; as BPM
    let bpm = Math.round(numStepMin);

    return bpm;
}
