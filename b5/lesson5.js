"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "What is the main function of the engine cooling system?",
    A: "To increase engine power",
    B: "To reduce engine emissions",
    C: "To maintain optimal engine temperature",
    D: "To lubricate engine components",
    answer: 3,
  },
  {
    TT: 2,
    question:
      "Which component is responsible for circulating coolant through the system?",
    A: "Radiator",
    B: "Thermostat",
    C: "Water pump",
    D: "Freeze plugs",
    answer: 2,
  },
  {
    TT: 3,
    question: "What is the purpose of the fins on a radiator?",
    A: "To store coolant",
    B: "To increase the surface area for heat dissipation",
    C: "To regulate coolant flow",
    D: "To prevent leaks",
    answer: 2,
  },
  {
    TT: 4,
    question:
      "What happens when the coolant temperature is below the specified temperature?",
    A: "The thermostat opens, allowing coolant to flow to the radiator",
    B: "The thermostat closes, allowing coolant to circulate only within the engine",
    C: "The water pump stops circulating coolant",
    D: "The cooling fan turns off",
    answer: 2,
  },
  {
    TT: 5,
    question: "What can cause leaks in the cooling system?",
    A: "Deterioration of hoses",
    B: "A damaged head gasket",
    C: "Corrosion of the core plugs",
    D: "All of the above",
    answer: 4,
  },
  {
    TT: 6,
    question: "The _______ controls the flow of coolant to the radiator.",
    A: "water pump",
    B: "thermostat",
    C: "radiator cap",
    D: "cooling fan",
    answer: 2,
  },
  {
    TT: 7,
    question:
      "_______ is the process of burning the air-fuel mixture inside the engine.",
    A: "Compression",
    B: "Combustion",
    C: "Ignition",
    D: "Exhaust",
    answer: 2,
  },
  {
    TT: 8,
    question: "The _______ transfers heat from the coolant to the outside air.",
    A: "thermostat",
    B: "water pump",
    C: "radiator",
    D: "cooling fan",
    answer: 3,
  },
  {
    TT: 9,
    question:
      "_______ are used to connect the engine to the radiator and allow coolant to flow between them.",
    A: "Gaskets",
    B: "Hoses",
    C: "Pipes",
    D: "Valves",
    answer: 2,
  },
  {
    TT: 10,
    question:
      "_______ plugs in the engine block can rust and cause coolant leaks.",
    A: "Spark",
    B: "Glow",
    C: "Core",
    D: "Freeze",
    answer: 3,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Radiator",
    Pronuncation: "/ˈreɪdieɪtər/",
    meaning: "Bộ tản nhiệt",
  },
  {
    TT: 2,
    Word: "Anti-freeze",
    Pronuncation: "/ˈæntaɪ friːz/",
    meaning: "Chống đóng băng",
  },
  {
    TT: 3,
    Word: "Coolant mixture",
    Pronuncation: "/ˈkuːlənt ˈmɪkstʃər/",
    meaning: "Hỗn hợp làm mát",
  },
  {
    TT: 4,
    Word: "Fins",
    Pronuncation: "/fɪns/",
    meaning: "Các cánh tản nhiệt",
  },
  {
    TT: 5,
    Word: "Water Pump",
    Pronuncation: "/ˈwɔːtər pʌmp/",
    meaning: "Bơm nước",
  },
  {
    TT: 6,
    Word: "Freeze Plugs",
    Pronuncation: "/friːz plʌɡ/",
    meaning: "Nút chống đóng băng",
  },
  {
    TT: 7,
    Word: "Head gasket",
    Pronuncation: "/hed ˈɡæskɪt/",
    meaning: "Đệm nắp máy",
  },
  {
    TT: 8,
    Word: "Cover gasket",
    Pronuncation: "/ˈkʌvərˈɡæskɪt/",
    meaning: "Gioăng nắp máy",
  },
  {
    TT: 9,
    Word: "Blower motor",
    Pronuncation: "/ˈbləʊər ˈməʊtər/",
    meaning: "Quạt gió",
  },
  {
    TT: 10,
    Word: "steam",
    Pronuncation: "/stiːm/",
    meaning: "Hơi nước",
  },
  {
    TT: 11,
    Word: "Odor (smell)",
    Pronuncation: "/ˈəʊdər/",
    meaning: "Mùi",
  },
  {
    TT: 12,
    Word: "Dripping",
    Pronuncation: "/ˈdrɪpɪŋ/",
    meaning: "Nước nhỏ giọt",
  },
  {
    TT: 13,
    Word: "Hoses",
    Pronuncation: "/həʊz/",
    meaning: "Ống mềm cao su",
  },
  {
    TT: 14,
    Word: "Deterioration",
    Pronuncation: "/dɪˌtɪriəˈreɪʃn/",
    meaning: "Sự hư hỏng",
  },
  {
    TT: 15,
    Word: "Heater Core",
    Pronuncation: "/ˈhiːtər kɔːr/",
    meaning: "Bộ sưởi",
  },
  {
    TT: 16,
    Word: "Thermostat",
    Pronuncation: "/ˈθɜːrməstæt/",
    meaning: "Van hằng nhiệt",
  },
  {
    TT: 17,
    Word: "Fan clutch",
    Pronuncation: "/fæn dʌtʃ/",
    meaning: "Ly hợp quạt",
  },
  {
    TT: 18,
    Word: "Electric cooling fan",
    Pronuncation: "/ɪˈlektrɪk kuːlɪŋ fæn/",
    meaning: "Quạt điện làm mát",
  },
  {
    TT: 19,
    Word: "The transverse mounted engine",
    Pronuncation: "/ðə ˈtrænzvɜːrs ˈmaʊntɪd ˈendʒɪn/",
    meaning: "Động cơ lắp ngang",
  },
  {
    TT: 20,
    Word: "Destroy the engine",
    Pronuncation: "/dɪˈstrɔɪ ðə endʒɪn/",
    meaning: "Phá hủy động cơ",
  },
  {
    TT: 21,
    Word: "Be removed",
    Pronuncation: "/bi rɪˈmuːvd/",
    meaning: "Được loại bỏ",
  },
  {
    TT: 22,
    Word: "Quickly warm up",
    Pronuncation: "/ˈkwɪkli wɔːrm ʌp/",
    meaning: "Làm ấm nhanh",
  },
  {
    TT: 23,
    Word: "Regardless of",
    Pronuncation: "/rɪˈɡɑːrdləs əv/",
    meaning: "Bất kể",
  },
  {
    TT: 24,
    Word: "A heat-absorbing liquid",
    Pronuncation: "/ə hiːt əbˈzɔːrbɪŋ ˈlɪkwɪd/",
    meaning: "Chất lỏng hấp thụ nhiệt",
  },
  {
    TT: 25,
    Word: "Normal operating temperatures",
    Pronuncation: "/ˈnɔːrml ˈɑːpəreɪtɪŋ ˈtemprətʃərs/",
    meaning: "Nhiệt độ vận hành thông thường",
  },
  {
    TT: 26,
    Word: "Cooling fan",
    Pronuncation: "/kuːlɪŋ fæn/",
    meaning: "Quạt làm mát",
  },
  {
    TT: 27,
    Word: "A specified temperature",
    Pronuncation: "/ə ˈspesɪfaɪd ˈtemprətʃər/",
    meaning: "Một nhiệt độ xác định",
  },
  {
    TT: 28,
    Word: "Reenter",
    Pronuncation: "/ˌriː ˈentər/",
    meaning: "Quay trở lại",
  },
  {
    TT: 29,
    Word: "Condensation",
    Pronuncation: "/ˌkɑːndenˈseɪʃn/",
    meaning: "Sự ngưng tụ",
  },
  {
    TT: 30,
    Word: "Formation of sludge",
    Pronuncation: "/fɔːrˈmeɪʃn əv slʌdʒ/",
    meaning: "Gây ra cặn",
  },
  {
    TT: 31,
    Word: "An impeller-type water pump",
    Pronuncation: "/ən ɪmˈpelər taɪp ˈwɔːtər pʌmp/",
    meaning: "Bơm nước kiểu cánh gạt",
  },
  {
    TT: 32,
    Word: "Pulleys",
    Pronuncation: "/ˈpʊli/",
    meaning: "Bu ly",
  },
  {
    TT: 33,
    Word: "A drive belt (timing belt)",
    Pronuncation: "/ə draɪv belt/",
    meaning: "Đai dẫn động",
  },
  {
    TT: 34,
    Word: "Aluminum tanks",
    Pronuncation: "/ˌæləˈmɪniəm tæŋk/",
    meaning: "Két nhôm",
  },
  {
    TT: 35,
    Word: "Flattened aluminum tubes",
    Pronuncation: "/ˈflætn ˌæləˈmɪniəm tuːb/",
    meaning: "Các ống nhôm dẹt",
  },
  {
    TT: 36,
    Word: "Conduct the heat",
    Pronuncation: "/kənˈdʌkt ðə hiːt/",
    meaning: "Dẫn nhiệt",
  },
  {
    TT: 37,
    Word: "Radiator cap",
    Pronuncation: "/ˈreɪdieɪtər kæp/",
    meaning: "Nắp két nước",
  },
  {
    TT: 38,
    Word: "Water jackets",
    Pronuncation: "/ˈwɔːtər ˈdʒækɪt/",
    meaning: "Áo nước",
  },
  {
    TT: 39,
    Word: "Hollow passages",
    Pronuncation: "/ˈhɑːləʊ ˈpæsɪdʒ/",
    meaning: "Ống rỗng",
  },
  {
    TT: 40,
    Word: "Engine teardown",
    Pronuncation: "/endʒɪn ter/",
    meaning: "Sự phá bỏ động cơ",
  },
  {
    TT: 41,
    Word: "Be prone",
    Pronuncation: "/bi prəʊn/",
    meaning: "Có xu thế",
  },
  {
    TT: 42,
    Word: "Rust",
    Pronuncation: "/rʌst/",
    meaning: "Gỉ sét",
  },
  {
    TT: 43,
    Word: "Corrosion",
    Pronuncation: "/kəˈrəʊʒn/",
    meaning: "Ăn mòn",
  },
  {
    TT: 44,
    Word: "Will weep coolant",
    Pronuncation: "/wɪl /wiːp/ ˈkuːlənt/",
    meaning: "Sẽ thấm nước",
  },
  {
    TT: 45,
    Word: "The core plugs",
    Pronuncation: "/ðə kɔːr plʌɡ/",
    meaning: "Các đầu nối",
  },
];
let componentText = [
  {
    content:
      "<strong>Radiator</strong> cools off the anti-freeze/coolant mixture by allowing air passing through the tube/fin area to dissipate the heat generated by the engine.<br></br><strong>Water Pump</strong> draws the cooled anti-freeze from the radiator and pumps it through the engine block, cylinder head(s), heater core and back to the radiator.<br></br><strong>Freeze Plugs</strong> is actually a steel plug designed to seal holes in the engine block and cylinder head(s) created from the casting process. In freezing weather they may push out if there is not enough anti-freeze protection.<br></br><strong>Head gasket /cover gasket</strong> seals the major parts of the engine. Prevents oil, anti-freeze and cylinder pressure from mixing together.<br></br><strong>Heater Core</strong> provides heat to the interior of the car by using heat removed from the antifreeze and blown in by the blower motor. May cause steam, odor or actual dripping inside the car when it leaks.<br></br><strong>Thermostat</strong> controls the minimum operating temperature of the engine. The thermostat is closed when the engine is cold in order to speed warm-up and opens when normal operating temperature is reached to allow the anti-freeze/coolant to pass through the radiator.<br></br><strong>Hoses (Radiator, Heater, By-pass)</strong> connect the other main components of the cooling system. Hose manufacturers recommend replacing every 4 years regardless of appearance because there may be deterioration of the inside of the hose which cannot be seen.<br></br><strong>Fan Clutch</strong> senses the temperature of the air coming through the radiator and either slips or binds up to pull the required amount of air through the radiator.<br></br><strong>Electric Cooling Fan</strong> most front wheel drive cars use this because of the transverse mounted engine. It is turned on by a system of sensors and relays when the engine reaches about 230 F and stays on until R is cooled to about 200 F.",
    title: "Figure 5 1. Cooling system",
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
componentFunc("img51", componentText[0]);

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
        <source id = "audioSource" src = "../audio/vocabulary5/${audioName}.mp3"></source>
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
