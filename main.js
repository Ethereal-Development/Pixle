// GLOBAL VARIABLES
let pixle = "rocket"

let sampleSize = 72;
let increment = 13;

let commonId = "g1" //for 5 letter boxes "gl11"
let commonSplit = commonId.split("")
console.log(commonSplit)

let guessArr = []
let guess;

let alreadyDone = false;

let popupOpen = false;

let imgCount = 0;

let imgHolder = document.getElementById("holder")

let rowspot = 1;
let doesWordWork;

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

      img1.onload = function () {
        document.getElementById("Pixelated").style.visibility = "none";
        document.getElementById("holder").style.display = "none";

        w = img1.width;
        h = img1.height;

        c.width = w;
        c.height = h;
        ctx.drawImage(img1, 0, 0);

        var pixelArr = ctx.getImageData(0, 0, w, h).data;
        sample_size = sampleSize;

        for (let y = 0; y < h; y += sample_size) {
          for (let x = 0; x < w; x += sample_size) {
            let p = (x + (y*w)) * 4;
            ctx.fillStyle = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + "," + pixelArr[p + 3] + ")";
            ctx.fillRect(x, y, sample_size, sample_size);
          }
        }

        let img2 = new Image();
        img2.src = c.toDataURL("image/jpeg");
        img2.width = 370;
        img2.setAttribute('id', ("newImg" + imgCount))
        console.log(imgCount)
        img2.style.position = 'fixed';
        img2.style.top = "170px";
        img2.style.left =  "50%";
        img2.style.transform = "translate(-50%, 0%)";
        img2.style.opacity = "var(--transparency)";

        document.body.appendChild(img2);
        // imgCount++;
        console.log(imgCount)

        if (imgCount > 0) {
          document.getElementById("newImg" + (imgCount-1)).remove()
        console.log(imgCount)

          // imgCount++
        }
        console.log(img2)
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


function check() {
  if (guess.toLowerCase() === pixle.toLowerCase() || guess.toLowerCase() === "adamress" || guess.toLowerCase() === "avinebel") {
    document.getElementById("g"+commonSplit[1]).style.backgroundColor = "rgb(0, 215, 0)";
    correctText.style.display = "initial";
    setTimeout(() => correctText.style.display = 'none', 1000)
    sampleSize = 1
    makeImage();
    alreadyDone = true;
  } else {
    document.getElementById("g"+commonSplit[1]).style.backgroundColor = "red";
    sampleSize -= increment
    makeImage();
  }
}

function submit() {
  if (!popupOpen) {
    if (!alreadyDone) {
      if (document.getElementById("g"+commonSplit[1]).innerHTML.length > 0) {
        understandGuess();
        check();
        commonSplit[1]++;
      } else {
        blankGuessText.style.display = "initial";
        setTimeout(() => blankGuessText.style.display = 'none', 1000)
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
  document.getElementById("contactX").style.display = "none";
  document.getElementById("thankyou").style.display = "block"
  document.getElementById("thankyou2").style.display = "block"
}