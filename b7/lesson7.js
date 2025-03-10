"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "What is the main function of the battery in an automobile?",
    A: "To illuminate the road ahead",
    B: "To start the engine and power electrical components",
    C: "To generate electricity while the engine is running",
    D: "To ignite the air-fuel mixture in the engine",
    answer: 2,
  },
  {
    TT: 2,
    question:
      "Which component is responsible for recharging the battery while the engine is running?",
    A: "Starter motor",
    B: "Alternator",
    C: "Ignition coil",
    D: "Spark plug",
    answer: 2,
  },
  {
    TT: 3,
    question:
      "What is the purpose of the ignition system in a spark ignition engine?",
    A: "To crank the engine",
    B: "To provide illumination for the vehicle",
    C: "To recharge the battery",
    D: "To ignite the air-fuel mixture",
    answer: 4,
  },
  {
    TT: 4,
    question:
      "Which of the following is NOT a subsystem of the automobile electrical system?",
    A: "Braking system",
    B: "Starting system",
    C: "Charging system",
    D: "Lighting system",
    answer: 1,
  },
  {
    TT: 5,
    question:
      "What type of battery is commonly found in conventional vehicles?",
    A: "Lithium-ion battery",
    B: "Nickel-metal hydride battery",
    C: "Lead-acid battery",
    D: "Fuel cell",
    answer: 3,
  },
  {
    TT: 6,
    question:
      "The _______ system provides the electrical spark to ignite the air-fuel mixture.",
    A: "starting",
    B: "charging",
    C: "ignition",
    D: "lighting",
    answer: 3,
  },
  {
    TT: 7,
    question:
      "The _______ is a device that converts chemical energy into electrical energy.",
    A: "alternator",
    B: "starter motor",
    C: "battery",
    D: "spark plug",
    answer: 3,
  },
  {
    TT: 8,
    question:
      "The _______ system is responsible for turning the engine to start it.",
    A: "ignition",
    B: "starting",
    C: "charging",
    D: "lighting",
    answer: 2,
  },
  {
    TT: 9,
    question: "The _______ recharges the battery after the engine has started.",
    A: "starter motor",
    B: "alternator",
    C: "ignition coil",
    D: "spark plug",
    answer: 2,
  },
  {
    TT: 10,
    question: "The _______ system provides illumination for the vehicle.",
    A: "ignition",
    B: "starting",
    C: "charging",
    D: "lighting",
    answer: 4,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Automobile electrical system",
    Pronuncation: "/ˈɔtəmoʊˌbil ɪˈlɛktrɪkəl ˈsɪstəm/",
    meaning: "Hệ thống điện ô tô",
  },
  {
    TT: 2,
    Word: "Starting system",
    Pronuncation: "/ˈstɑrtɪŋ ˈsɪstəm/",
    meaning: "Hệ thống khởi động",
  },
  {
    TT: 3,
    Word: "Charging system",
    Pronuncation: "/ˈʧɑrʤɪŋ ˈsɪstəm/",
    meaning: "Hệ thống nạp",
  },
  {
    TT: 4,
    Word: "Ignition system",
    Pronuncation: "/ɪɡˈnɪʃən ˈsɪstəm/",
    meaning: "Hệ thống đánh lửa",
  },
  {
    TT: 5,
    Word: "Lighting system",
    Pronuncation: "/ˈlaɪtɪŋ ˈsɪstəm/",
    meaning: "Hệ thống chiếu sáng",
  },
  {
    TT: 6,
    Word: "Spark ignition engines",
    Pronuncation: "/spɑrk ɪɡˈnɪʃən ˈɛnʤənz/",
    meaning: "Động cơ đánh lửa bằng tia lửa",
  },
  {
    TT: 7,
    Word: "Electric current",
    Pronuncation: "/ɪˈlɛktrɪk ˈkɜrənt/",
    meaning: "Dòng điện",
  },
  {
    TT: 8,
    Word: "Voltage",
    Pronuncation: "/ˈvoʊltəʤ/",
    meaning: "Điện áp",
  },
  {
    TT: 9,
    Word: "Spark plug",
    Pronuncation: "/spɑrk plʌɡ/",
    meaning: "Nến điện",
  },
  {
    TT: 10,
    Word: "Battery",
    Pronuncation: "/ˈbætəri/",
    meaning: "Ắc quy",
  },
  {
    TT: 11,
    Word: "Switch",
    Pronuncation: "/swɪʧ/",
    meaning: "Công tắc",
  },
  {
    TT: 12,
    Word: "Distributor ignition coil",
    Pronuncation: "/dɪˈstrɪbjətər ɪɡˈnɪʃən kɔɪl/",
    meaning: "Cuộn dây bộ chia điện",
  },
  {
    TT: 13,
    Word: "Wiring",
    Pronuncation: "/ˈwaɪrɪŋ/",
    meaning: "Dây điện",
  },
  {
    TT: 14,
    Word: "Alternator",
    Pronuncation: "/ˈɔltərˌneɪtər/",
    meaning: "Máy phát điện",
  },
  {
    TT: 15,
    Word: "Regulator",
    Pronuncation: "/ˈrɛɡjəˌleɪtər/",
    meaning: "Bộ chỉnh lưu",
  },
  {
    TT: 16,
    Word: "Starting motor",
    Pronuncation: "/ˈstɑrtɪŋ ˈmoʊtər/",
    meaning: "Động cơ khởi động",
  },
  {
    TT: 17,
    Word: "Subsystems",
    Pronuncation: "/ˈsʌbˌsɪstəmz/",
    meaning: "Hệ thống phụ",
  },
  {
    TT: 18,
    Word: "Illuminate",
    Pronuncation: "/ɪˈlumɪnɪt/",
    meaning: "Chiếu sáng",
  },
  {
    TT: 19,
    Word: "Hybrid vehicles",
    Pronuncation: "/ˈhaɪbrɪd ˈvihɪkəlz/",
    meaning: "Xe lai",
  },
  {
    TT: 20,
    Word: "Fuel cell",
    Pronuncation: "/ˈfjuəl sɛl/",
    meaning: "Pin nhiên liệu",
  },
  {
    TT: 21,
    Word: "Lead-acid batteries",
    Pronuncation: "/lid-ˈæsəd ˈbætəriz/",
    meaning: "Ắc quy  a xít chì",
  },
  {
    TT: 22,
    Word: "Chemical energy",
    Pronuncation: "/ˈkɛməkəl ˈɛnərʤi/",
    meaning: "Năng lượng hóa học",
  },
  {
    TT: 23,
    Word: "Electrochemical cells",
    Pronuncation: "/əˌlɛktroʊˈkɛmɪkəl sɛlz/",
    meaning: "Pin điện hóa",
  },
  {
    TT: 24,
    Word: "Terminals",
    Pronuncation: "/ˈtɜrmənəlz/",
    meaning: "Tấm bản cực",
  },
  {
    TT: 25,
    Word: "Positive plate",
    Pronuncation: "/ˈpɑzətɪv pleɪt/",
    meaning: "Bản cực dương",
  },
  {
    TT: 26,
    Word: "Negative plate",
    Pronuncation: "/ˈnɛɡətɪv pleɪt/",
    meaning: "Bản cực âm",
  },
];
let componentText = [
  "Automobile electrical system includes starting system, charging system, ignition system and lighting system and some accessories. The accessories include cigarette lighter horn and mobile charging system, etc.<br></br>In spark ignition engines, a device is required to ignite the compressed air-fuel mixture at the end of compression stroke. Ignition system fulfills this requirement. It is a part of electrical system which carries the electric current at required voltage to the spark plug which generates spark at correct time. It consists of a battery, switch, distributor ignition coil, spark plugs and necessary wiring.<br></br>A compression ignition engine, i.e. a diesel engine does not require any ignition system. Because, self ignition of fuel air mixture takes place when diesel is injected in the compressed air at high temperature at the end of compression stroke.",
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
componentFunc("img71", componentText);

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
  //componentBox.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = ` <h1  class = "w3-xxxlarge w3-text-red"><b>Component.</b></h1>
  <hr  style = "width: 50px; border: 5px solid green" class = "w3-round" />
 
  <img src   = "../image/${imgsrc}.png" alt                 = "" usemap = "#b12" style =  "height: auto;
  min-height: 350px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;" />
  <map name  = "b12"
  ><area
  shape  = "rect"
  coords = "185,780,247,826"
  href   = ""
  title  = "Bàn đạp ly hợp"
  /></map>
   <p>${data}</p>`;
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
        <source id = "audioSource" src = "../audio/vocabulary7/${audioName}.mp3"></source>
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
