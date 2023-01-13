const option = {
    enableHighAccuracy : true,
    timeout: 1000,
    maximumAge: 0
}
// async function getSpeed(){
//     let position = await new Promise(
//         (resovle, reject) => navigator.geolocation.getCurrentPosition(resovle, reject, option)
//     );
//     console.log(position);
//     return position.speed;
// }
//
// function

var speed = {val: 0};

function* getSpeed(){
    let id = navigator.geolocation.watchPosition(
        (pos) => {
            speed.val = pos.coords.speed;
            console.log(pos.coords.speed)
            // speed.val += 1;
            },
        () => {console.log("some error happened"); speed.val = -1; },
        option
    );
    while(true){
        console.log(speed);
        yield speed.val;
    }
}

