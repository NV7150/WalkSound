const option = {
    enableHighAccuracy : true,
    timeout: 1000,
    maximumAge: 0
}
async function getSpeed(){
    let position = await new Promise(
        (resovle, reject) => navigator.geolocation.getCurrentPosition(resovle, reject, option)
    );
    return position.speed;
}

