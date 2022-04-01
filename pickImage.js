// import images from "./imgInfo.js";

// let todaysImage;
// let todayNum = Math.floor(Math.random() * images.length)

// if(images[todayNum].used === "true"){
//     console.log("taken")
// }else{
//     todaysImage = images[todayNum];
// }


// document.getElementById("Pixelated").src = ""



    setInterval(() => {
        let d = new Date()
        let timeMilli = 24.016666667 - (d.getTime() - 1648699200000)/(1000*60*60);
        let hour = parseInt(timeMilli);
        let minutes = Math.floor((timeMilli - parseInt(timeMilli)) *60)
        let timeUntilNextPixle = `There are ${hour} hours and ${minutes} minutes until the next PIXLE.`;
        console.log(timeUntilNextPixle);

        // //avi
        // let parsed = ((d.getTime() - 1648684800000)/(1000*60*60) + "").split(".")
        // console.log(parsed[1]*60)
        // console.log(parsed[0]+":"+(Math.floor((parsed[1].slice(0, 6)/1000000)*60)))
    }, 5000);

    