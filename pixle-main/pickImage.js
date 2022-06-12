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
        let date = new Date() //The current date
        let time = date.getTime() //The amount of time in milliseconds from Jan 1, 1970 to current date
        let baseTime = new Date('January 1, 22') //The date Jan 1, 22
        newPixleTime = baseTime.getTime() //The amount of time in milliseconds from Jan 1, 1970 to Jan 1, 22

        while((newPixleTime - time) < 0){
            newPixleTime += 86400000 //Keeps adding one day of milliseconds until it gets to current day
        }

        let timeMilli = (newPixleTime - time)/(1000*60*60);

        let hour = parseInt(timeMilli) -1;
        let minutes = Math.floor((timeMilli - parseInt(timeMilli)) *60) + 1

        let timeUntilNextPixle = `There are ${hour} hours and ${minutes} minutes until the next PIXLE.`;
        console.log(timeUntilNextPixle);
    }, 30000);

    