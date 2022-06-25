let imgUrl = "./images/cruise.png";

// Above you can picke the image that you want to see all the possible 
//pixles for then yuo can use that to decide what you want. I recommend that you record it on 
//your phone and scroll through video to find right images make sure to have your console open to see the pixleAmount used.
// TO USE THIS TURN OF MAIN.JS





uju

var element1 = document.getElementById("linkElement");
element1.setAttribute("href", imgUrl);
var element2 = document.getElementById("Pixelated");
element2.setAttribute("src", imgUrl);
var element3 = document.getElementById("imageOnCorrect");
element3.setAttribute("src", imgUrl);

let imgCount = 0;

let imgHolder = document.getElementById("holder")

function makeImageForTest(sample_size) {
    let c = document.createElement("canvas");
        ctx = c.getContext('2d');
        let img1 = new Image();
        img1.onload = function () {
          document.getElementById("Pixelated").style.visibility = "none";
          document.getElementById("holder").style.display = "none";
  
          w = img1.width;
          h = img1.height;
  
          c.width = w;
          c.height = h;
          ctx.drawImage(img1, 0, 0);
  
          var pixelArr = ctx.getImageData(0, 0, w, h).data;
  
          for (let y = 0; y < h; y += sample_size) {
            for (let x = 0; x < w; x += sample_size) {
              let p = (x + (y*w)) * 4;
              ctx.fillStyle = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + "," + pixelArr[p + 3] + ")";
              ctx.fillRect(x, y, sample_size, sample_size);
            }
          }
  
          let img2 = new Image();
          img2.src = c.toDataURL("image/jpeg");
          img2.height = 350;
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

function findRightPixleAmount(){
    let i = 0;
        setInterval(function(){ 
            i++;
            makeImageForTest(i)
            console.log(i)
        }, 100);
    }
  
  findRightPixleAmount();