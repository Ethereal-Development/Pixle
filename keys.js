let sampleSize = 65;
let increment = 13;

let commonId = "gl11"
let commonSplit = commonId.split("")
console.log(commonSplit)

let guessArr = []
let guess;

function input(e) {
    // var guessInput = document.getElementById("guess1");
    // guessInput.value = guessInput.value + e.value;

    parseInt(commonSplit[2])
    parseInt(commonSplit[3])
    // console.log(parseInt(commonSplit[2]));
    // console.log(parseInt(commonSplit[3]));

    // if (commonSplit[2] === "1") {
        document.getElementById("gl" + commonSplit[2] + commonSplit[3]).innerHTML = e.value;
        commonSplit[3]++;
    // }
  //  document.getElementById("gl11").innerHTML = e.value
}

function del() {
    // var guessInput = document.getElementById("guess1");
    // guessInput.value = guessInput.value.substr(0, guessInput.value.length - 1);
    if (commonSplit[3] > 1) {
        commonSplit[3]--;
        document.getElementById("gl" + commonSplit[2] + commonSplit[3]).innerHTML=""
    }
}

function understandGuess() {
    guessArr = []

    guessArr.push(document.getElementById("gl" + commonSplit[2] + "1").innerHTML)
    guessArr.push(document.getElementById("gl" + commonSplit[2] + "2").innerHTML)
    guessArr.push(document.getElementById("gl" + commonSplit[2] + "3").innerHTML)
    guessArr.push(document.getElementById("gl" + commonSplit[2] + "4").innerHTML)
    guessArr.push(document.getElementById("gl" + commonSplit[2] + "5").innerHTML)

    guess = guessArr.join("")
    console.log(guess)
}

function submit() {
    understandGuess();
    if(guess.toLowerCase() === "plane"){
        console.log('correct');
        
        // sampleSize -= increment;
    } else {
        console.log('wrong');
    }
    commonSplit[2]++
    commonSplit[3] = 1
}

let c = document.createElement("canvas");
    ctx = c.getContext('2d');
    let img1 = new Image();

    img1.onload = function () {
      document.getElementById("Pixelated").remove();

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
      img2.width = 750;
      document.body.appendChild(img2);
    };

    img1.src = document.getElementById("Pixelated").src;
