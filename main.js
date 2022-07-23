let startingDay = "July 19, 22"

const images = [
  {
    "pixle": ["Apple"],
    "url": "./images/apple.png",
    "change": [78, 65, 52, 39, 26, 13],
  },
  {
    "pixle": ["Cucumber"],
    "url": "./images/cucumber.jpg",
    "change": [78, 65, 52, 39, 26, 13],
  },
  {
    "pixle": ["Rocket", "Spaceship", "Shuttle"],
    "url": "./images/rocket.png",
    "change": [101, 90, 74, 67, 53, 37],
  },
  {
    "pixle": ["Lion"],
    "url": "./images/lion.png",
    "change": [200, 160, 106, 90, 70, 40],
  },
  {
    "pixle": ["Coke", "CocaCola"],
    "url": "./images/coke.jpg",
    "change": [78, 65, 52, 39, 26, 13],
  },
  {
    "pixle": ["Airplane", "Plane"],
    "url": "./images/airplane.png",
    "change": [78, 65, 52, 39, 26, 13],
  },
  {
    "pixle": ["Egg", "Eggs"],
    "url": "./images/egg.png",
    "change": [78, 65, 52, 39, 26, 13],
  },
  {
    "pixle": ["Cruise", "Boat", "Cruiseship", "Ship"],
    "url": "./images/cruise.png",
    "change": [78, 65, 52, 39, 26, 13],
  },
  {
    "pixle": ["Salad"],
    "url": "./images/salad.png",
    "change": [66, 53, 48, 41, 31, 21],
  },
  {
    "pixle": ["Car", "Sedan"],
    "url": "./images/car.jpg",
    "change": [48, 40, 26, 18, 15, 10],
  },
  {
    "pixle": ["Cookie"],
    "url": "./images/cookie.jpg",
    "change": [135, 116, 89, 78, 61, 36],
  },
  {
    "pixle": ["Basketball"],
    "url": "./images/basketball.jpeg",
    "change": [101, 83, 67, 47, 35, 27],
  },
]

//dog and cat from adam? need pixel values if so



// CODE FOR DAILY IMAGES
let currentDate = new Date()
let currentDateMilli = currentDate.getTime()
let startDate = new Date(startingDay)
let startDateMilli = startDate.getTime()

date = Math.floor((currentDateMilli - startDateMilli)/86400000)

// GLOBAL VARIABLES

let pixle = images[date]["pixle"]

let url = images[date]["url"]

let change = images[date]["change"]

// CODE FOR ONLY ROCKET
// let pixle = images[3]["pixle"]
// let url = images[3]["url"]
// let change = images[3]["change"]

// CODE FOR MOST RECENT IMAGE TESTING
// let pixle = images[images.length-1]["pixle"]
// let url = images[images.length-1]["url"]
// let change = images[images.length-1]["change"]


let finalGuess;

var element1 = document.getElementById("linkElement");
element1.setAttribute("href", url);
var element2 = document.getElementById("Pixelated");
element2.setAttribute("src", url);
var element3 = document.getElementById("imageOnCorrect");
element3.setAttribute("src", url);
var element3 = document.getElementById("correctAnswerWord");




let startGuess = 1;

let sampleSize = change[0]
let increment = -1;

let commonId = "g1" //for 5 letter boxes "gl11"
let commonSplit = commonId.split("")

let guessArr = []
let guess;

let alreadyDone = false;

let popupOpen = false;

let imgCount = 0;

let imgHolder = document.getElementById("holder")

let rowspot = 1;
let doesWordWork;

let setToFalse = true;

let correctText = document.getElementById("guessedCorrect")
let invalidGuessText = document.getElementById("invalidGuess")
let blankGuessText = document.getElementById("blankGuess")
let ranOutText = document.getElementById("ranOut")

// PIXELATE CODE
function makeImage() {
  let c = document.createElement("canvas");
      ctx = c.getContext('2d');
      let img1 = new Image();
      // c.setAttribute('id', "pixImg")
      increment++;
      img1.onload = function () {
        document.getElementById("Pixelated").style.visibility = "none";
        document.getElementById("holder").style.display = "none";

        w = img1.width;
        h = img1.height;

        c.width = w;
        c.height = h;
        ctx.drawImage(img1, 0, 0);

        var pixelArr = ctx.getImageData(0, 0, w, h).data;
        sample_size = change[increment/2]; //Idk why sample size auto adds two not one so i just divide by two

        for (let y = 0; y < h; y += sample_size) {
          for (let x = 0; x < w; x += sample_size) {
            let p = (x + (y*w)) * 4;
            ctx.fillStyle = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + "," + pixelArr[p + 3] + ")";
            ctx.fillRect(x, y, sample_size, sample_size);
          }
        }

        let img2 = new Image();
        img2.src = c.toDataURL("image/jpeg");
        img2.height = 335;
        img2.setAttribute('id', ("newImg" + imgCount))
        img2.style.position = 'fixed';
        img2.style.top = "170px";
        img2.style.left =  "50%";
        img2.style.margin = "20px"
        img2.style.transform = "translate(-50%, 0%)";
        img2.style.opacity = "var(--transparency)";

        document.body.appendChild(img2);
        // imgCount++;

        if (imgCount > 0) {
          document.getElementById("newImg" + (imgCount-1)).remove()

          // imgCount++
        }

      };

      img1.src = document.getElementById("Pixelated").src;
}    
makeImage();

// CODE FOR GUESSES
function input(e) {
  if (!popupOpen) {
      if (!alreadyDone) {
        // var guessInput = document.getElementById("guess1");
        // guessInput.value = guessInput.value + e.value;

        parseInt(commonSplit[1])
        document.getElementById("g" + commonSplit[1]).innerHTML += e.value;


        //5 letters:
        // parseInt(commonSplit[2])
        // parseInt(commonSplit[3])
        //document.getElementById("gl" + commonSplit[2] + commonSplit[3]).innerHTML = e.value;
        //commonSplit[3]++;

        // if (commonSplit[2] === "1") {
            
        // }
      //  document.getElementById("gl11").innerHTML = e.value
      }
    }
}

function del() {
  if (!popupOpen) {
    if (!alreadyDone) {
      if (document.getElementById("g"+commonSplit[1]).innerHTML.length > 0) {
        let guessedLetters = document.getElementById("g"+commonSplit[1]).innerHTML.split('');
        guessedLetters.splice(guessedLetters.length-1, 1);
        document.getElementById("g"+commonSplit[1]).innerHTML = guessedLetters.join("");
      }
      //5 letters
      // if (commonSplit[3] > 1) {
      //     commonSplit[3]--;
      //     document.getElementById("gl" + commonSplit[2] + commonSplit[3]).innerHTML=""
      // }
    }
  }
}

function understandGuess() {
  guess = document.getElementById("g"+commonSplit[1]).innerHTML
  // console.log(guess.toLowerCase());
  // console.log(lowerCasePixle)
  // console.log(lowerCasePixle.indexOf(guess.toLowerCase()) > -1);

    //FOR 5 LETTERS ------- 
    //guessArr = []

    // guessArr.push(document.getElementById("gl" + commonSplit[2] + "1").innerHTML)
    // guessArr.push(document.getElementById("gl" + commonSplit[2] + "2").innerHTML)
    // guessArr.push(document.getElementById("gl" + commonSplit[2] + "3").innerHTML)
    // guessArr.push(document.getElementById("gl" + commonSplit[2] + "4").innerHTML)
    // guessArr.push(document.getElementById("gl" + commonSplit[2] + "5").innerHTML)

    // guess = guessArr.join("")
    // if(guess.length === 5){
    //   doesWordWork = true;
    // }else{
    //   doesWordWork = false;
    //   shortGuessText.style.display = "initial"
    //   setTimeout(() => shortGuessText.style.display = 'none', 2000)

    // }
}

let lowerCasePixle = []

pixle.forEach(word => {lowerCasePixle.push(word.toLowerCase())})


function check() {
  if (lowerCasePixle.indexOf(guess.toLowerCase()) > -1 || guess.toLowerCase() === "adamress" || guess.toLowerCase() === "avinebel") {
    finalGuess = guess.toLowerCase();
    finalGuess = finalGuess[0].toUpperCase() + finalGuess.substring(1);;
    element3.innerHTML = finalGuess;
    document.getElementById("g"+commonSplit[1]).style.backgroundColor = "rgb(0, 215, 0)";
    correctText.style.display = "initial";
    setTimeout(function(){
      document.getElementById("howToPlayPopupInfo").style.display = "initial"
      popupOpen = true;
    }, 1000);
    setTimeout(() => correctText.style.display = 'none', 1000)
    sampleSize = 1
    makeImage();
    alreadyDone = true;
    setToFalse = false
  } else {
    finalGuess = pixle[0]
    element3.innerHTML = finalGuess;
    document.getElementById("g"+commonSplit[1]).style.backgroundColor = "red";
    sample_size = change[increment];
    increment++;
    makeImage();
  }
  // if(startGuess == 6 && alreadyDone == false) {
  //   document.getElementById("CorrectOrIncorrect").style.color = "red";
  //   document.getElementById("howToPlayPopupInfo").style.display = "initial"
  //   // setTimeout(function(){
  //   //   
  //   // }, 200);
  // }
}


function submit() {
  setToFalse = true
  if (!popupOpen) {
    if (!alreadyDone) {
      startGuess++
      if (document.getElementById("g"+commonSplit[1]).innerHTML.length > 0) {
        understandGuess();
        check();
        if(startGuess == 7 && setToFalse == true){
          setTimeout(function(){
            document.getElementById("CorrectOrIncorrect").innerHTML = "Incorrect";
            document.getElementById("CorrectOrIncorrect").style.color = "red" ;
            document.getElementById("howToPlayPopupInfo").style.display = "initial"
          }, 300);
        }
        commonSplit[1]++;
      } else {
        blankGuessText.style.display = "initial";
        setTimeout(() => blankGuessText.style.display = 'none', 1000);
        startGuess--;
      }
    }
  }
}

function contactPopup() {
  if (!popupOpen)  {
    document.getElementById("contactPopup").style.display = "initial"
    let root = document.querySelector(":root")
    root.style.setProperty("--transparency", 0.8)

    popupOpen = true;
  }
}

function creatorPopup() {
  if (!popupOpen) {
    document.getElementById("creatorPopup").style.display = "initial"
    let root = document.querySelector(":root")
    root.style.setProperty("--transparency", 0.8)

    popupOpen = true;
  }
}

function howToPlayPopup() {
  if (!popupOpen) {
    document.getElementById("howToPlayPopup").style.display = "initial"
    let root = document.querySelector(":root")
    root.style.setProperty("--transparency", 0.8)

    popupOpen = true;
  }
}

function xOut(x) {
  let pID = x.parentNode.id;
  document.getElementById(pID).style.display = "none"
  let root = document.querySelector(":root")
  root.style.setProperty("--transparency", 1)

  popupOpen = false;

  document.getElementById("feedback").style.display = "block";
  document.getElementById("name").style.display = "block";
  document.getElementById("email").style.display = "block";
  document.getElementById("contactheader").style.display = "inline";
  document.getElementById("submit").style.display = "block";
  document.getElementById("header2contact").style.display = "inline";
  document.getElementById("contactform").style.display = "block";
  document.getElementById("thankyou").style.display = "none"
  document.getElementById("thankyou2").style.display = "none"
}


// FOR PURELY RED OR GREEN DEPENDING ON RIGHT OR WRONG (5 letters)
// function check(row, guess){
//   let commonId = "glxx"
//   let commonSplit = commonId.split("");
//   commonSplit[2] = row.toString();;
//   if(guess.toUpperCase() !== pixle.toUpperCase()){
//     for(let i = 1; i < 6; i++){
//       commonSplit[3] = i;
//       let Id = commonSplit.join("");
//       console.log(Id);
//       document.getElementById(Id).style.backgroundColor = "red";
//     }
//   }else{
//     for(let i = 1; i < 6; i++){
//       commonSplit[3] = i;
//       let Id = commonSplit.join("");
//       document.getElementById(Id).style.backgroundColor = "green";
//     }
//   }
//   rowspot++
// }

//5 Letters
// function submit() {
//   understandGuess();
//   console.log(guess);
//   if(doesWordWork === true){ 
//     imgCount++;
//     if(guess === pixle.toUpperCase()){
//         check(rowspot, guess)
//         console.log('correct');
//         sampleSize = 1;
//         // correctText.style.visibility = 'visible'
//           // setTimeout(() => correctText.style.visibility = 'hidden', 5000)
//         correctText.style.display = 'initial'
//           setTimeout(() => correctText.style.display = "none", 2000)
//         makeImage()
//     } else {
//         console.log('incorrect');
//         check(rowspot, guess)
//         sampleSize -= increment
//         makeImage();
//     }
//     commonSplit[2]++
//     commonSplit[3] = 1
//   } else {
//     console.log("Guess does not work.");
//   }
// }

// For GREEN, YELLOW, GREY (THIS IS MORE LIKE WORDLE) just switch out check function
/*
function check(row, guess){
  let commonId = "glxx"
  let commonSplit = commonId.split("");
  commonSplit[2] = row.toString();;
  for(let i = 1; i < 6; i++){
      commonSplit[3] = i
      let Id = commonSplit.join("")
      let positionOfGuessLetter = i;
      let correctWordLetterPosition = pixle.toUpperCase().indexOf(document.getElementById(Id).innerHTML) + 1;
      console.log(document.getElementById(Id).innerHTML)
      if(pixle.toUpperCase().includes(document.getElementById(Id).innerHTML) && correctWordLetterPosition === positionOfGuessLetter){
        console.log("GREEN")
        document.getElementById(Id).style.backgroundColor = "green";
      } else if(pixle.toUpperCase().includes(document.getElementById(Id).innerHTML) && correctWordLetterPosition !== positionOfGuessLetter){
        console.log("YELLOW")
        document.getElementById(Id).style.backgroundColor = "yellow";
      } else {
        console.log("GREY")
        document.getElementById(Id).style.backgroundColor = "grey";
      }
  }
  rowspot++
}
*/

//

const Thankyou = () => {
  document.getElementById("feedback").style.display = "none";
  document.getElementById("name").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("contactheader").style.display = "none";
  document.getElementById("submit").style.display = "none";
  document.getElementById("header2contact").style.display = "none";
  document.getElementById("contactform").style.display = "none";
  document.getElementById("thankyou").style.display = "block"
  document.getElementById("thankyou2").style.display = "block"
}

//Get time till 12:00 am
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

  if (minutes == 60){
    minutes = 0;
    hour++;
  }
  let timeUntilNextPixle = `There are ${hour} hours and ${minutes} minutes until the next PIXLE.`;
  timeElement = document.getElementById("timeTillNext")
  timeElement.innerHTML = timeUntilNextPixle
}, 1000);
