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

function* getSpeed(){
    let speed = 0;
    let id = navigator.geolocation.watchPosition(
        (pos) => {speed = pos.coords.speed;},
        () => {console.log("some error happened");},
        option
    );
    while(true){
        yield speed;
    }
}

