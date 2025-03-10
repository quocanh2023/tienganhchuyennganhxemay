"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "1.	What is the primary purpose of a steering system?  ",
    A: "To accelerate the vehicle",
    B: "To stop the vehicle",
    C: "To turn the wheels",
    D: "To provide suspension",
    answer: 3,
  },
  {
    TT: 2,
    question:
      "2.	What type of steering system is most commonly used in modern vehicles?",
    A: "Manual steering",
    B: "Power-assist steering",
    C: "Hydraulic steering",
    D: " Electric steering",
    answer: 2,
  },
  {
    TT: 3,
    question:
      "3.	Which steering system uses a spiral groove and steel balls to improve efficiency? ",
    A: "Rack and pinion",
    B: "Recirculating ball",
    C: "Worm and roller",
    D: "Worm and sector",
    answer: 2,
  },
  {
    TT: 4,
    question: "4.	What is the function of the steering rack? ",
    A: "To connect the steering wheel to the steering column",
    B: "To convert rotational motion into linear motion",
    C: "To provide power assistance to the steering system",
    D: "To reduce friction in the steering system",
    answer: 2,
  },
  {
    TT: 5,
    question:
      "5.	What is the purpose of the adjusting screw in a worm and roller steering system? ",
    A: "To adjust the steering wheel position ",
    B: "To control backlash and end float",
    C: "To increase steering effort ",
    D: "To lubricate the steering gear",
    answer: 2,
  },
  {
    TT: 6,
    question:
      "1.	The _______ _______ connects the steering wheel to the steering gear.",
    A: "steering rack",
    B: "steering column ",
    C: "Pitman arm ",
    D: "tie rod",
    answer: 2,
  },
  {
    TT: 7,
    question:
      "2.	The _______ _______ _______ steering system is commonly found in vehicles with independent suspension. ",
    A: "recirculating ball ",
    B: "worm and roller ",
    C: "rack and pinion",
    D: "worm and sector",
    answer: 3,
  },
  {
    TT: 8,
    question:
      "3.	The _______ _______ converts the rotational motion of the steering wheel into linear motion to turn the wheels. ",
    A: "steering column ",
    B: "steering gear ",
    C: "steering linkage",
    D: "steering knuckle",
    answer: 2,
  },
  {
    TT: 9,
    question:
      "4.	_______ _______ is the play or looseness between the steering wheel and the road wheels.",
    A: "Steering effort ",
    B: "Steering ratio ",
    C: "Steering angle ",
    D: "Steering backlash",
    answer: 4,
  },
  {
    TT: 10,
    question:
      "5.	Power-assist steering systems use either _______ or _______ power to help the driver turn the wheels. ",
    A: "mechanical, electrical ",
    B: "hydraulic, pneumatic ",
    C: "hydraulic, electrical ",
    D: "pneumatic, mechanical",
    answer: 3,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "The steering system",
    Pronuncation: "/ðə ˈstɪrɪŋ ˈsɪstəm/",
    meaning: "Hệ thống lái",
  },
  {
    TT: 2,
    Word: "Steering wheel",
    Pronuncation: "/ˈstɪrɪŋ wiːl/",
    meaning: "Vô lăng",
  },
  {
    TT: 3,
    Word: "Swivelling",
    Pronuncation: "/ˈswɪvl/",
    meaning: "Xoay",
  },
  {
    TT: 4,
    Word: "Light forces",
    Pronuncation: "/laɪt ˈfɔːrsɪz/",
    meaning: "Lực nhẹ",
  },
  {
    TT: 5,
    Word: "Steer",
    Pronuncation: "/stɪr/",
    meaning: "Lái",
  },
  {
    TT: 6,
    Word: "The rim",
    Pronuncation: "/ðə rɪm/",
    meaning: "Vành tay lái",
  },
  {
    TT: 7,
    Word: "Edge of a road wheel",
    Pronuncation: "/edʒ əv ə rəʊd wiːl/",
    meaning: "Mép của bánh xe",
  },
  {
    TT: 8,
    Word: "Passes to the wheels",
    Pronuncation: "/pæs tə ðə wiːl/",
    meaning: "Truyền đến các bánh xe",
  },
  {
    TT: 9,
    Word: "The steering angle",
    Pronuncation: "/ðə ˈstɪrɪŋ ˈæŋɡl/",
    meaning: "Góc lái",
  },
  {
    TT: 10,
    Word: "The inner front wheel",
    Pronuncation: "/ðə ˈɪnər frʌnt wiːl/",
    meaning: "Bánh trong trước",
  },
  {
    TT: 11,
    Word: "The joints",
    Pronuncation: "/ðə dʒɔɪnt/",
    meaning: "Các khớp nối",
  },
  {
    TT: 12,
    Word: "Be adjusted",
    Pronuncation: "/bi əˈdʒʌstɪd/",
    meaning: "Được điều chỉnh",
  },
  {
    TT: 13,
    Word: "Very precisely",
    Pronuncation: "/ˈveri prɪˈsaɪsli/",
    meaning: "Rất chính xác",
  },
  {
    TT: 14,
    Word: "The rack and pinion",
    Pronuncation: "/ðə ræk ənd ˈpɪnjən/",
    meaning: "Trục răng và thanh răng",
  },
  {
    TT: 15,
    Word: "The steering box",
    Pronuncation: "/ðə ˈstɪrɪŋ bɑːks/",
    meaning: "Hộp tay lái",
  },
  {
    TT: 16,
    Word: "Be power assisted",
    Pronuncation: "/bi ˈpaʊər əˈsɪst/",
    meaning: "Được trợ lực",
  },
  {
    TT: 17,
    Word: "Turn the front wheels",
    Pronuncation: "/tɜːrn ðə frʌnt wiːlz/",
    meaning: "Xoay các bánh xe trước",
  },
  {
    TT: 18,
    Word: "Turns the rear wheels",
    Pronuncation: "/tɜːrn ðə rɪr wiːlz/",
    meaning: "Xoay các bánh xe sau",
  },
  {
    TT: 19,
    Word: "Change direction",
    Pronuncation: "/tʃeɪndʒ dəˈrekʃn/",
    meaning: "Thay đổi hướng",
  },
  {
    TT: 20,
    Word: "Switching lanes",
    Pronuncation: "/swɪtʃ leɪn/",
    meaning: "Chuyển làn",
  },
  {
    TT: 21,
    Word: "Rounding sharp turns",
    Pronuncation: "/ˈraʊndɪŋ ʃɑːrp tɜːrn/",
    meaning: "Quay vòng gấp",
  },
  {
    TT: 22,
    Word: "Roadway obstacles",
    Pronuncation: "/ˈrəʊdweɪ ˈɑːbstəkl/",
    meaning: "Chướng ngại vật trên đường",
  },
  {
    TT: 23,
    Word: "The power-assist steering",
    Pronuncation: "/ðə ˈpaʊər- əˈsɪst ˈstɪrɪŋ/",
    meaning: "Hệ thống lái trợ lực",
  },
  {
    TT: 24,
    Word: "The manual-steering systems",
    Pronuncation: "/ðə ˈmænjuəl- ˈstɪrɪŋ ˈsɪstəm/",
    meaning: "Hệ thống lái cơ khí",
  },
  {
    TT: 25,
    Word: "The steering column",
    Pronuncation: "/ðə ˈstɪrɪŋ ˈkɑːləm/",
    meaning: "Trụ lái đứng",
  },
  {
    TT: 26,
    Word: "Steering gears",
    Pronuncation: "/ˈstɪrɪŋ ɡɪr/",
    meaning: "Bánh răng lái",
  },
  {
    TT: 27,
    Word: "Steering linkage",
    Pronuncation: "/ˈstɪrɪŋ ˈlɪŋkɪdʒ/",
    meaning: "Dẫn động lái",
  },
  {
    TT: 28,
    Word: "Rack and pinion steering system",
    Pronuncation: "/ræk ənd ˈpɪnjən ˈstɪrɪŋ ˈsɪstəm/",
    meaning: "Hệ thống lái trục răng thanh răng",
  },
  {
    TT: 29,
    Word: "Independent suspension",
    Pronuncation: "/ˌɪndɪˈpendənt səˈspenʃn/",
    meaning: "Treo độc lập",
  },
  {
    TT: 30,
    Word: "Recirculating - ball steering system",
    Pronuncation: null,
    meaning: "Hệ thống lái bi tuần hoàn",
  },
  {
    TT: 31,
    Word: "Screw and nut steering system",
    Pronuncation: "/skruː ənd nʌt ˈstɪrɪŋ ˈsɪstəm/",
    meaning: "Hệ thống lái trục vít và đai ốc",
  },
  {
    TT: 32,
    Word: "The threads",
    Pronuncation: "/ðə θred/",
    meaning: "Các ren",
  },
  {
    TT: 33,
    Word: "Worm shaft",
    Pronuncation: "/wɜːrm ʃæft/",
    meaning: "Trục vít hõm",
  },
  {
    TT: 34,
    Word: "The Pitman arm",
    Pronuncation: "/ðə pɪtmæn ɑːrm/",
    meaning: "Tay quay đứng",
  },
  {
    TT: 35,
    Word: "Worm and roller steering system",
    Pronuncation: "/wɜːrm ənd ˈrəʊlər ˈstɪrɪŋ ˈsɪstəm/",
    meaning: "Hệ thống lái trục vít lõm con lăn",
  },
  {
    TT: 36,
    Word: "A hourglass shaped worm",
    Pronuncation: "/ə ˈaʊərɡlæs ʃeɪpt wɜːrm/",
    meaning: "Trục vít hõm dạng đồng hồ cát",
  },
  {
    TT: null,
    Word: "Taper roller bearings",
    Pronuncation: "/ˈteɪpər ˈrəʊlər ˈberɪŋ/",
    meaning: "Ổ lăn côn",
  },
  {
    TT: null,
    Word: "A small offset",
    Pronuncation: "/ə smɔːl ˈɔːfset/",
    meaning: "Độ lệch nhỏ",
  },
  {
    TT: null,
    Word: "An adjusting screw",
    Pronuncation: "/ən əˈdʒʌst skruː/",
    meaning: "Vít điều chỉnh",
  },
  {
    TT: null,
    Word: "Backlash",
    Pronuncation: "/ˈbæklæʃ/",
    meaning: "Khe hở",
  },
  {
    TT: null,
    Word: "Rocker shaft",
    Pronuncation: "/ˈrɑːkər ʃæft/",
    meaning: "Trục con lăn",
  },
];
let componentText = [
  {
    content:
      "The steering system converts the rotation of the steering wheel into a swivelling movement of the road wheels in such a way that the steering-wheel turns a long way to move the road wheels a short way.<br></br>The system allows a driver to use only light forces to steer a heavy car. The rim of a 15 in. (380 mm) diameter steering wheel moving four turns from full left lock to full right lock travels nearly 16 ft (5 m), while the edge of a road wheel moves a distance of only slightly more than 12 in. (300 mm). If the driver swivelled the road wheel directly, he or she would have to push nearly 16 times as hard.<br></br>The steering forces passes to the wheels through a system of pivoted joints. These are designed to allow the wheels to move up and down with the suspension without changing the steering angle.<br></br>They also ensure that when cornering, the inner front wheel - which has to travel round a tighter curve than the outer one - becomes more sharply angled.<br></br>The joints must be adjusted very precisely, and even a little looseness in them makes the steering dangerously sloppy and inaccurate.<br></br>There are two steering systems in common use - the rack and pinion and the steering box.<br></br>On large cars, either system may be power assisted to reduce further the effort needed to move it, especially when the car is moving slowly.",
    title: "Figure 11.1. Typical steer system components",
  },
];
const componentBox = document.getElementById("component");
let playPause = document.getElementById("play");
let video = document.getElementById("myvideo");
const element = document.getElementById("options");
const fillOfBlanks = document.getElementById("fillOfBlank");

const questionBox = document.getElementById("question-box");
const result = document.getElementById("multichoice-result");
const multichoicePoint = document.getElementById("btn_ultil_point");

const fillBox = document.getElementById("fillbox");
const fillResult = document.getElementById("fillresult");
const btnFillAnswer = document.getElementById("btn-fill-point");

let scores = 0;
let currentQuestion = 0;

// Gọi hàm hiển thị component
componentFunc("img111", componentText[0]);

// Gọi hàm hiển thị bảng từ vựng
renderTable(vocabularyData);

// hiển thị câu hỏi phần multichoice
let question = "multiBox";
addQuestion(multichoiceData, questionBox, question);

//Hiển thị câu hỏi phần fillofblank
let fill = "fillBox";
addQuestion(multichoiceData, fillBox, fill);

//const fillanswer = ShowResult(fillResult);
btnFillAnswer.addEventListener("click", function () {
  scores = 0;
  let form = "formfillBox";
  ShowResult(form);
  fillResult.innerHTML = "Bạn đã trả lời đúng " + scores + "/10" + " câu hỏi.";
});
//================ PHẦN 1 COMPONENT ================================================//   //
// ////=================================================================================//
// Hàm add nội dung component
function componentFunc(imgsrc, data) {
  componentBox.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = ` <h1  class = "w3-xxxlarge w3-text-red"><b>Component.</b></h1>
  <hr  style = "width: 50px; border: 5px solid green" class = "w3-round" />
 
  <img src   = "../image/${imgsrc}.png" alt                 = "" usemap = "#b12" style =  "height: auto;
  min-height: 350px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;" />
 <p style="text-align: center"><strong>${data.title}</strong></p>
   <p>${data.content}</p>`;
  componentBox.appendChild(div);
}
//===================================================================================//
//================ PHẦN 2 TỪ VỰNG ===================================================//
// Tạo hàm render bảng từ vựng
function renderTable(data) {
  let table = document.getElementById("tbody");
  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    //let row = table.insertRow(0);
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = data[i].Word;
    cell2.innerHTML = data[i].Pronuncation;

    let audioName = data[i].Word.toString();
    cell3.innerHTML = `<audio id="audio" controls="controls">
        <source id = "audioSource" src = "../audio/vocabulary11/${audioName}.mp3"></source>
        </audio>`;
    cell4.innerHTML = data[i].meaning;
  }
}

//====================================================================================//
//================ PHẦN 3 BÀI TẬP FILL AND MULTICHOICE ===============================//

// Tạo hàm hiển thị câu hỏi Fill of blank
function addQuestion(data, boxName, name) {
  //tạo div
  //boxName.innerHTML = "";
  let isChange = name === "multiBox" ? 5 : 0;
  console.log(isChange);

  for (let i = 0 + isChange; i < 5 + isChange; i++) {
    const div = document.createElement("div");
    div.innerHTML = ` <h3><strong>${data[i].question}</strong></h3>
    <form id="form${name}" name="${name}">
            <div class = "radioBox">
            <input type  = "radio" id = "DAA${i}" name = "question${
      i + 1
    }" value = "1" />
            <label for   = "DAA${i}">${data[i].A}</label><br />
            </div>
            <div class = "radioBox">
            <input type = "radio" id = "DAB${i}" name = "question${
      i + 1
    }" value = "2" />
            <label for  = "DAB${i}">${data[i].B}</label><br />
            </div>
            <div class = "radioBox">
            <input type = "radio" id = "DAC${i}" name = "question${
      i + 1
    }" value = "3" />
            <label for  = "DAC${i}">${data[i].C}</label><br />
            </div>
            <div class = "radioBox">
            <input type = "radio" id = "DAD${i}" name = "question${
      i + 1
    }" value = "4" />
            <label for  = "DAD${i}">${data[i].D}</label><br />
            </div>
          </form>`;
    boxName.appendChild(div);
  }
}

//

// Hàm hiển thị kết quả các câu trả lời khi ấn button
function ShowResult(form) {
  //let els = form === "";
  console.log(form);

  // let els = document.querySelectorAll("form[name = 'multiBox']");
  let els = document.querySelectorAll("form");
  console.log(els);

  let countArray = Array(4).fill(0);
  const answerArray = [];
  let ans = false;
  els.forEach((el) => {
    const div = el.querySelectorAll(".radioBox");
    console.log(div);
    // qies.forEach((element) => {
    //   console.log(element);
    // });
    // xoá class wright
    div.forEach((e) => {
      e.classList.remove("wright");
      e.classList.remove("wrong");
    });
  });

  for (let i = 0; i < 10; i++) {
    answerArray.push(multichoiceData[i].answer);
    //let formName = els[i].name;
    let inputQuestion = document.getElementsByName(`question${i + 1}`);
    inputQuestion.forEach((e) => {
      if (e.checked) {
        const parentNode = e.parentElement;
        countArray[i] = e.value;
        countArray[i] == answerArray[i]
          ? parentNode.classList.add("wright")
          : parentNode.classList.add("wrong");
      }
    });
  }
  compareArray(countArray, answerArray);
}

//Hàm so sánh 2 mảng
function compareArray(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) scores++;
  }
  //console.log(scores)
}

//===================================================================================//
//================ PHẦN 4 DIALOGUE ===================================================//
// Điều khiển video
playPause.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playPause.classList.toggle("pause");
    playPause.textContent = "pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playPause.classList.toggle("play");
    playPause.textContent = "play";
  }
});
