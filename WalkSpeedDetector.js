const option = {
    enableHighAccuracy : true,
    timeout: 1000,
    maximumAge: 0
}

var speed = {val: 0};

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

