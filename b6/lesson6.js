"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "What is the primary function of the engine lubrication system?",
    A: "To clean the engine",
    B: "To reduce friction and wear",
    C: "To cool the engine",
    D: "All of the above",
    answer: 4,
  },
  {
    TT: 2,
    question: "What does the oil pump do in the lubrication system?",
    A: "It filters the oil",
    B: "It cools the oil",
    C: "It circulates the oil through the system",
    D: "It stores the oil",
    answer: 3,
  },
  {
    TT: 3,
    question: "What is the purpose of the oil filter?",
    A: "To increase oil pressure",
    B: "To remove impurities from the oil",
    C: "To cool the oil",
    D: "To store the oil",
    answer: 2,
  },
  {
    TT: 4,
    question: "What is an auxiliary oil cooler used for?",
    A: "To increase oil pressure",
    B: "To provide additional cooling for the oil",
    C: "To filter the oil",
    D: "To store the oil",
    answer: 2,
  },
  {
    TT: 5,
    question: "What can happen if the oil becomes too hot?",
    A: "It can increase friction",
    B: "It can lose its viscosity",
    C: "It can cause increased wear and engine damage",
    D: "All of the above",
    answer: 4,
  },
  {
    TT: 6,
    question:
      "The _______ _______ draws oil from the oil pan and circulates it through the engine.",
    A: "oil filter",
    B: "oil pump",
    C: "oil pan",
    D: "pressure relief valve",
    answer: 2,
  },
  {
    TT: 7,
    question: "The oil _______ removes dirt and metal particles from the oil.",
    A: "pump",
    B: "pan",
    C: "filter",
    D: "gallery",
    answer: 3,
  },
  {
    TT: 8,
    question: "The _______ _______ is where the oil is stored.",
    A: "oil filter",
    B: "oil pump",
    C: "oil pan",
    D: "cylinder head",
    answer: 3,
  },
  {
    TT: 9,
    question:
      "_______ _______ in the engine block allow oil to flow to the different parts of the engine.",
    A: "Oil pumps",
    B: "Oil filters",
    C: "Oil pans",
    D: "Oil passages",
    answer: 4,
  },
  {
    TT: 10,
    question:
      "A _______ sump oil system means that the oil pan always contains oil.",
    A: "dry",
    B: "wet",
    C: "lubricated",
    D: "pressurized",
    answer: 2,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Auxiliary oil cooler",
    Pronuncation: "/ɑɡˈzɪljəri ɔɪl ˈkulər/",
    meaning: "Bộ làm mát dầu phụ",
  },
  {
    TT: 2,
    Word: "Diluted oil",
    Pronuncation: "/daɪˈlutəd ɔɪl/",
    meaning: "Dầu loãng",
  },
  {
    TT: 3,
    Word: "Dry lubricant",
    Pronuncation: "/draɪ ˈlubrəkənt/",
    meaning: "Chất bôi trơn khô",
  },
  {
    TT: 4,
    Word: "Lubricant",
    Pronuncation: "/ˈlubrəkənt/",
    meaning: "Chất bôi trơn",
  },
  {
    TT: 5,
    Word: "Oil",
    Pronuncation: "/ɔɪl/",
    meaning: "Dầu",
  },
  {
    TT: 6,
    Word: "Oil filter bypass valve",
    Pronuncation: "/ɔɪl ˈfɪltər ˈbaɪˌpæs vælv/",
    meaning: "Van thông qua bộ lọc dầu",
  },
  {
    TT: 7,
    Word: "Oil pressure relief valve",
    Pronuncation: "/ɔɪl ˈprɛʃər rɪˈlif vælv/",
    meaning: "Van giảm áp dầu",
  },
  {
    TT: 8,
    Word: "Oil pump",
    Pronuncation: "/ɔɪl pʌmp/",
    meaning: "Bơm dầu",
  },
  {
    TT: 9,
    Word: "Pickup screen",
    Pronuncation: "/ˈpɪˌkʌp skrin/",
    meaning: "Nắp két nước",
  },
  {
    TT: 10,
    Word: "Viscosity",
    Pronuncation: "/vɪˈskɑsəti/",
    meaning: "Áo nước",
  },
  {
    TT: 11,
    Word: "Bearings",
    Pronuncation: "/ˈbɛrɪŋz/",
    meaning: "Ống rỗng",
  },
  {
    TT: 12,
    Word: "Minimize wear",
    Pronuncation: "/ˈmɪnəˌmaɪz wɛr/",
    meaning: "Sự phá bỏ động cơ",
  },
  {
    TT: 13,
    Word: "Friction",
    Pronuncation: "/ˈfrɪkʃən/",
    meaning: "Ma sát",
  },
  {
    TT: 14,
    Word: "Cooling agent",
    Pronuncation: "/ˈkulɪŋ ˈeɪʤənt/",
    meaning: "Tác nhân làm mát",
  },
  {
    TT: 15,
    Word: "Absorb",
    Pronuncation: "/əbˈzɔrb/",
    meaning: "Hấp thụ",
  },
  {
    TT: 16,
    Word: "Cleaning agent",
    Pronuncation: "/ˈklinɪŋ ˈeɪʤənt/",
    meaning: "Chất làm sạch",
  },
  {
    TT: 17,
    Word: "Engine oil",
    Pronuncation: "/ˈɛnʤən ɔɪl/",
    meaning: "Dầu động cơ",
  },
  {
    TT: 18,
    Word: "Be formulated",
    Pronuncation: "/bi ˈfɔrmjəˌleɪtɪd /",
    meaning: "Được pha chế",
  },
  {
    TT: 19,
    Word: "Be submerged",
    Pronuncation: "/bi səbˈmɜrʤd/",
    meaning: "Được đặt chìm",
  },
  {
    TT: 20,
    Word: "Be channeled off",
    Pronuncation: "/bi ˈʧænəld ɔf/",
    meaning: "Được tạo thành rãnh",
  },
  {
    TT: 21,
    Word: "Oil filter",
    Pronuncation: "/ɔɪl ˈfɪltər/",
    meaning: "Lọc dầu",
  },
  {
    TT: 22,
    Word: "Suspended",
    Pronuncation: "/səˈspɛndɪd/",
    meaning: "Lơ lửng",
  },
  {
    TT: 23,
    Word: "The close-fitting engine parts",
    Pronuncation: "/ðə kloʊs-ˈfɪtɪŋ ˈɛnʤən pɑrts/",
    meaning: "Các chi tiết tiếp xúc nhau",
  },
  {
    TT: 24,
    Word: "Impurities",
    Pronuncation: "/ɪmˈpjʊrətiz/",
    meaning: "Các tạp chất",
  },
  {
    TT: 25,
    Word: "A disposable metal container",
    Pronuncation: "/ə dɪˈspoʊzəbəl ˈmɛtəl kənˈteɪnər/",
    meaning: "Hộp kim loại dùng một lần",
  },
];
let componentText = [
  {
    content:
      "<strong>Auxiliary oil cooler:</strong> A device that allows air to cool engine oil. The auxiliary oil cooler functions much like a radiator.<br></br><strong>Diluted oil:</strong> Oil that has lost its ability to lubricate as a result of being mixed with another liquid.<br></br><strong>Dry lubricant:</strong> A lubricant in a metallic or powder form.<br></br><strong>Lubricant:</strong> A substance that reduces the friction between moving parts by producing a slippery film between the parts.<br></br><strong>Oil:</strong> A liquid form of lubricant.<br></br><strong>Oil filter bypass valve:</strong> A valve usually located in the oil filter mounting base. The oil filter bypass valve opens and allows oil to bypass the oil filter if the oil filter becomes clogged.<br></br><strong>Oil pressure relief valve:</strong> A valve usually located in or near the oil pump. The oil pressure relief valve opens to limit the maximum oil pressure delivered to the lubrication system.<br></br><strong>Oil pump:</strong> An engine-driven pump that delivers oil to the engine’s moving parts.<br></br><strong>Oil pump drive:</strong> The mechanical connection between the engine and the oil pump.<br></br><strong>Pickup screen</strong>: A metal screen through which the oil pump draws its supply of oil.<br></br><strong>Viscosity:</strong> The ability of a liquid to resist flow. Viscosity is an essential quality of a lubricant.",
    title: "Figure 6.1. Lubrication system",
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
componentFunc("img61", componentText[0]);

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
        <source id = "audioSource" src = "../audio/vocabulary6/${audioName}.mp3"></source>
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
