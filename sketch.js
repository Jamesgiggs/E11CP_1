let unit, canvas, music;
let timeStamps = [];
let texts = [];
let images = [];
let start = false;
// let start = false;
function preload() {
  for (let i = 1; i <= 34; i++) {
    let name = "assets/fchild" + i + ".png";
    images.push(loadImage(name));
  }
  music = loadSound("assets/music.mp3");
}
function setup() {
  if (windowWidth > windowHeight * 1.5) {
    unit = windowHeight / 225;
  } else {
    unit = windowWidth / 400;
  }
  canvas = createCanvas(400 * unit, 225 * unit);
  frameRate(60);
  music.play();
  music.jump(3);
  music.setVolume(0.1);

  textAlign(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);
  addText();
  let prevTime = 0;
  for (let i = 0; i < textArr.length; i++) {
    prevTime += textArr[i].length * 180;
    timeStamps.push(textArr[i].length * 180);
    setTimeout(() => {
      if (textIndex < textArr.length) {
        textIndex++;
      }
      frame = 0;
    }, prevTime);
  }

  let w = 20 * unit;
  for (let i = 0; i < width / w + 1; i++) {
    let arr = [];
    for (let j = 0; j < height / w + 1; j++) {
      arr[j] = new Text(w * i, w / 2 + w * j, w, w);
    }
    texts.push(arr);
  }
  background(255);
  //console.log(timeStamps, texts[0][0]);
}
let charIndex = 0;
let textIndex = 0;
let textIndexPrev = 0;
function draw() {
  if (start) {
    if (music.isPlaying() == false) {
      music.play();
      music.jump(3);
    }
    fill(0);
    background(255);
    stroke(200);
    let showText = textArr[textIndex];
    if (textIndex <= 10) {
      // if (start == true) {
      let imgIndex = 3 * textIndex;
      imgPop(
        width / 2 - 112 * unit - (frame * unit) / 5,
        height / 2,
        imgIndex + 1,
        timeStamps[imgIndex]
      );
      imgPop(
        width / 2 + 112 * unit + (frame * unit) / 5,
        height / 2,
        imgIndex + 2,
        timeStamps[imgIndex]
      );
      imgPop(width / 2, height / 2, imgIndex, timeStamps[imgIndex]);
      frame++;
      if (textIndexPrev != textIndex) {
        frameCount = 0;
        textIndexPrev = textIndex;
      }
    } else {
      ////
      if (textIndex >= 11 && textIndex < 13) {
        addMsg(6, 3, "1 billion");
        if (textIndex == 12) {
          addMsg(3, 5, "2-17");
          addMsg(7, 5, "YEARS OF AGE");
        }

        for (let i = 0; i < texts.length; i++) {
          for (let j = 3; j < 6; j += 2) {
            texts[i][j].show();
            texts[i][j].strFix = false;
          }
        }
      }
      ////
      else if (textIndex == 13 || textIndex == 14) {
        addMsg(0, 1, "LIMITED SKILLS");
        addMsg(4, 3, "LACK IN CARE");
        addMsg(0, 4, "FALIURE TO PROTECT");
        addMsg(0, 10, "LESS CARE-GIVING");
        addMsg(3, 6, "EMOTIONAL NEGLECT");
        for (let i = 0; i < texts.length; i++) {
          for (let j = 0; j < texts[i].length; j++) {
            texts[i][j].show();
            texts[i][j].strFix = false;
          }
        }
      }
      if (textIndex == 15) {
        line(40 * unit, 200 * unit, 360 * unit, 200 * unit);
        line(40 * unit, 200 * unit, 40 * unit, 50 * unit);
        rectMode(CORNER);
        let data1 = [6, 2, 75, 7, 17, 9];
        let dataStr1 = [
          "Emotional Absense",
          "Medical Neglect",
          "Neglect",
          "Other",
          "Physical Abuse",
          "Sexual Abuse",
        ];
        textSize(8 * unit);
        for (let i = 0; i < 6; i++) {
          let h =
            map(frame, 0, (timeStamps[textIndex] / 1000) * 60, 0, data1[i]) *
            unit;
          text(dataStr1[i], 75 * unit + 50 * unit * i, 180 * unit - h);
          rect(60 * unit + 50 * unit * i, 200 * unit - h, 30 * unit, h);
        }
      }
      if (textIndex == 16) {
        line(40 * unit, 200 * unit, 360 * unit, 200 * unit);
        line(40 * unit, 200 * unit, 40 * unit, 50 * unit);
        rectMode(CORNER);
        let data = [45, 53, 77, 84, 60, 100];
        let dataStr = ["2011", "2012", "2013", "2014", "2015", "2016"];
        textSize(8 * unit);
        for (let i = 0; i < 6; i++) {
          let h =
            map(frame, 0, (timeStamps[textIndex] / 1000) * 60, 0, data[i]) *
            unit;
          text(dataStr[i], 75 * unit + 50 * unit * i, 180 * unit - h);
          rect(60 * unit + 50 * unit * i, 200 * unit - h, 30 * unit, h);
        }
      }
      if (textIndex == 17) {
        imgPop(width / 2, height / 2, 33, timeStamps[textIndex + 1]);
      }
      if (textIndex > 17) {
        background(b);
        b -= 2;
        fill(255 - b);
        noStroke();
        textSize(6 * unit);
        if (b < -500) {
          text(ref, width / 2, 70 * unit);
        } else {
          stroke(200);
          textSize(9 * unit);
          text(
            "Designed and Presented by James Giggs O, for the Creative Programming Course (E11CP)",
            width / 2,
            height / 2 - 6 * unit
          );
        }
      }
      frame++;
      //console.log(frame);
    }
    fill(0);
    stroke(200);
    textSize(12 * unit);
    if (showText) {
      strokeWeight(unit);
      text(showText, 200 * unit, 215 * unit);
    }
  }else{
    background(0);
    fill(255);
    text("tap anywhare to start",width/2,height/2);
  }
}
let b = 255;
let frame = 0;

function imgPop(
  x = width / 2,
  y = height / 2,
  ind = textIndex,
  time = timeStamps[textIndex]
) {
  push();
  translate(x, y);
  let ani = map(frame, 0, (time / 1000) * 60, 0, 10);
  let s = ani;
  if (ani > 0.5) {
    s = 0.5;
  }
  if (ani > 8) {
    s = map(ani, 8, 9, 0.5, 0);
  }
  if (s + (s * frame) / 1000 < 0) {
    s = 0;
  }
  scale(s + (s * frame) / 1000);
  //console.log(timeStamps[index]);
  image(images[ind], -112 * unit, -112 * unit, 225 * unit, 225 * unit);
  pop();
}
let textArr = [];
function addText() {
  textArr.push("The future is our children");
  textArr.push("And the children are our future");
  textArr.push("They are interchangeable expressions");
  textArr.push('That bespeak "why every child needs to be');
  textArr.push('"Valued","Respected","Honored"');
  textArr.push("by a collaborative society that aims to protect them");
  textArr.push("Sadly, child abuse is one of the most");
  textArr.push("Significant and substantive issues the world facing today");
  textArr.push("Despite its alarmingly high global prevalance");
  textArr.push("It has remained dramatically underreported");
  textArr.push(
    'The estimate number repoted by the "WORLD HEALTH ORGANIZATION"'
  );
  textArr.push("At least 1 billion children");
  textArr.push("between the age of 2-17 years");
  textArr.push("have experienced");
  textArr.push("physical, sexual or emotional neglect");
  textArr.push("Records like these represent");
  textArr.push("the escalating crime of abuse to our");
  textArr.push('"Future Pillars"');
}
let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class Text {
  constructor(x, y, w, h) {
    this.str = al[floor(random(26))];
    this.strFix = false;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    rectMode(CENTER);
    textAlign(CENTER);
    this.b = random(255);
    this.bini = this.b;
  }
  show() {
    push();
    fill(100);
    translate(this.x, this.y);
    noStroke(0);
    if (this.srtFix == true) {
      fill(50 + this.b);
      rect(0, 0, this.w, this.h);
      fill(255 - this.b);
    } else {
      fill(50 + this.b);
      rect(0, 0, this.w, this.h);
      fill(255 - this.b);
    }
    textSize((this.h + this.w) / 2);
    text(this.str, 0, this.h * 0.35);
    pop();
    if (this.strFix == true) {
      // this.b = random(255);
      // this.str = al[floor(random(26))];
      this.b -= 3;
    } else {
      this.b = this.bini;
    }
  }
}
function addMsg(x, y, msg) {
  for (let i = 0; i < msg.length; i++) {
    texts[x + i][y].str = msg[i];
    texts[x + i][y].strFix = true;
  }
}
let ref =
  "REFERENCES\n1. Brilleslijper-Kater S.N., Friedrich W.N., Corwin D.L.\nSexual knowledge and emotional reaction as indicators of sexual abuse in \nyoung children: Theory and research challenges\n(2004)  Child Abuse and Neglect,  28  (10) , pp. 1007-1017.\n2. Chandan JS, Gokhale KM, Bradbury-Jones C, et al\nExploration of trends in the incidence and prevalence of childhood maltreatment and domestic abuse recording in UK\n primary care: a retrospective cohort study using ‘the health improvement network’ database\nBMJ Open 2020;10:e036949. doi: 10.1136/bmjopen-2020-036949\n3. Gonzalez-Izquierdo A, Cortina-Borja M, Woodman J, et al\nMaltreatment or violence-related injury in children and adolescents admitted to the \nNHS: comparison of trends in England and Scotland between 2005 and 2011\nBMJ Open 2014;4:e004474. doi: 10.1136/bmjopen-2013-004474\n\n Images used in the project are crated by an AI (dalle-2)\n and user have the rights of their generated images. ";
function mousePressed(){
  start=true;
}