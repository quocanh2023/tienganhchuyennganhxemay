"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "1.	What is the main function of the clutch in a vehicle? ",
    A: "To change gears",
    B: "To connect and disconnect the engine from the transmission",
    C: "To apply brakes to the wheels ",
    D: "To steer the vehicle",
    answer: 2,
  },
  {
    TT: 2,
    question: "2.	What happens when the clutch pedal is depressed? ",
    A: "The engine and transmission are connected.",
    B: "The engine and transmission are disconnected.",
    C: "The gears shift.",
    D: "The car accelerates.",
    answer: 2,
  },
  {
    TT: 3,
    question: "3.	What is the purpose of clutch adjustment?  ",
    A: "To improve fuel efficiency",
    B: "To increase engine power",
    C: "To compensate for wear in the clutch system",
    D: "To make the car easier to steer",
    answer: 3,
  },
  {
    TT: 4,
    question:
      "4.	What can happen if there is too much free play in the clutch pedal? ",
    A: "The clutch may slip.",
    B: "The clutch may drag.",
    C: "The engine may stall. ",
    D: "The car may not start.",
    answer: 2,
  },
  {
    TT: 5,
    question: "5.	What tool is used to adjust the pressure plate fingers? ",
    A: "Wrench",
    B: "Screwdriver",
    C: "Feeler gauge",
    D: "Punch",
    answer: 1,
  },
  {
    TT: 6,
    question:
      "1.	The _______ plate and _______ are the driving members of the clutch assembly. ",
    A: "clutch, disc",
    B: "pressure, flywheel",
    C: "release, bearing",
    D: "input, output",
    answer: 2,
  },
  {
    TT: 7,
    question: "2.	The _______ disc is the driven member of the clutch assembly.",
    A: "pressure",
    B: "flywheel",
    C: "clutch",
    D: "release",
    answer: 3,
  },
  {
    TT: 8,
    question:
      "3.	_______ _______ is the amount of movement in the clutch pedal before it starts to disengage the clutch.  ",
    A: "Pedal travel",
    B: "Free play",
    C: "Clutch drag",
    D: "Clutch slippage",
    answer: 2,
  },
  {
    TT: 9,
    question:
      "4.	Adjusting the _______ _______ can change the amount of free play in the clutch pedal.",
    A: "pressure plate",
    B: "clutch cable",
    C: "release rod",
    D: "flywheel",
    answer: 3,
  },
  {
    TT: 10,
    question:
      "5.	When adjusting the pressure plate, the _______ _______ should be measured and adjusted to ensure proper contact with the release bearing. ",
    A: "finger height",
    B: "pedal height",
    C: "disc thickness ",
    D: "flywheel diameter",
    answer: 1,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Automotive clutch",
    Pronuncation: "/ ˌɔːtəˈməʊtɪv klʌtʃ/",
    meaning: "Ly hợp ô tô",
  },
  {
    TT: 2,
    Word: "Flywheel",
    Pronuncation: "/ˈflaɪwiːl/",
    meaning: "Bánh đà",
  },
  {
    TT: 3,
    Word: "Input shaft",
    Pronuncation: null,
    meaning: "Trục đầu vào hộp số",
  },
  {
    TT: 4,
    Word: "Linkage",
    Pronuncation: "/ˈlɪŋkɪdʒ/",
    meaning: "Cần dẫn động",
  },
  {
    TT: 5,
    Word: "The passenger compartment",
    Pronuncation: null,
    meaning: "Khoang lái",
  },
  {
    TT: 6,
    Word: "Clutch housing",
    Pronuncation: null,
    meaning: "Vỏ bộ ly hợp",
  },
  {
    TT: 7,
    Word: "Engage",
    Pronuncation: "/ɪnˈɡeɪdʒ/",
    meaning: "Kết nối",
  },
  {
    TT: 8,
    Word: "Disengage",
    Pronuncation: "/ˌdɪsɪnˈɡeɪdʒ/",
    meaning: "Ngắt kết nối",
  },
  {
    TT: 9,
    Word: "Shifting between gears",
    Pronuncation: "/ʃɪftɪŋ bɪˈtwiːn ɡɪr/",
    meaning: "Chuyển số giữa các tay số",
  },
  {
    TT: 10,
    Word: "An integral part",
    Pronuncation: null,
    meaning: "Một phần không thể thiếu",
  },
  {
    TT: 11,
    Word: "The engine crankshaft",
    Pronuncation: "/ðə ˈendʒɪn ˈkræŋkʃæft/",
    meaning: "Trục khuỷu động cơ",
  },
  {
    TT: 12,
    Word: "The pilot bearing",
    Pronuncation: "/ðə ˈpaɪlət  ˈberɪŋ/",
    meaning: "Vòng bi chặn",
  },
  {
    TT: 13,
    Word: "The bushing",
    Pronuncation: "/ðə bʊʃ/",
    meaning: "Ống lót",
  },
  {
    TT: 14,
    Word: "Wobbling",
    Pronuncation: "/ˈwɑːbl/",
    meaning: "Lắc lư",
  },
  {
    TT: 15,
    Word: "The clutch disc",
    Pronuncation: "/ðə klʌtʃ dɪsk/",
    meaning: "Đĩa ma sát ly hợp",
  },
  {
    TT: 16,
    Word: "Be splined",
    Pronuncation: "/bi /",
    meaning: "Được lắp then hoa",
  },
  {
    TT: 17,
    Word: "Withstand",
    Pronuncation: "/wɪθˈstænd/",
    meaning: "Chống lại",
  },
  {
    TT: 18,
    Word: "The pressure plate",
    Pronuncation: "/ðə ˈpreʃər pleɪt/",
    meaning: "Đĩa ép",
  },
  {
    TT: 19,
    Word: "The pressure springs",
    Pronuncation: "/ðə ˈpreʃər springs/",
    meaning: "Các lò xo ép",
  },
  {
    TT: 20,
    Word: "Exert",
    Pronuncation: "/ɪɡˈzɜːrt/",
    meaning: "Tác động",
  },
  {
    TT: 21,
    Word: "Release levers",
    Pronuncation: "/rɪˈliːs ˈlevər/",
    meaning: "Cần tách",
  },
  {
    TT: 22,
    Word: "Release levers pivots",
    Pronuncation: "/rɪˈliːs ˈlevər ˈpɪvət/",
    meaning: "Trục cần tách",
  },
  {
    TT: 23,
    Word: "The clutch cover assembly",
    Pronuncation: "/ðə klʌtʃ ˈkʌvər əˈsembli/",
    meaning: "Vỏ bộ ly hợp",
  },
  {
    TT: 24,
    Word: "The clutch cover",
    Pronuncation: "/ðə klʌtʃ ˈkʌvər /",
    meaning: "Vỏ ly hợp",
  },
  {
    TT: 25,
    Word: "Revolve",
    Pronuncation: "/rɪˈvɑːlv/",
    meaning: "Quay",
  },
  {
    TT: 26,
    Word: "The outer ends",
    Pronuncation: "/ðə ˈaʊtər  end/",
    meaning: "Các đầu ngoài",
  },
  {
    TT: 27,
    Word: "The inner ends",
    Pronuncation: "/ðə ˈɪnər end/",
    meaning: "Các đầu trong",
  },
  {
    TT: 28,
    Word: "Adjustment",
    Pronuncation: "/əˈdʒʌstmənt/",
    meaning: "Sự điều chỉnh",
  },
  {
    TT: 29,
    Word: "Clutch shaft",
    Pronuncation: "/klʌtʃ ʃæft/",
    meaning: "Trục ly hợp",
  },
  {
    TT: 30,
    Word: "The hub",
    Pronuncation: "/ðə hʌb/",
    meaning: "Moay ơ",
  },
  {
    TT: 31,
    Word: "Compensate",
    Pronuncation: "/ˈkɑːmpenseɪt/",
    meaning: "Bù đắp",
  },
  {
    TT: 32,
    Word: "Free play",
    Pronuncation: "/friː pleɪ/",
    meaning: "Hành trình tự do",
  },
  {
    TT: 33,
    Word: "The clutch to drag",
    Pronuncation: "/ðə klʌtʃ tə dræɡ/",
    meaning: "Ly hợp bị kéo",
  },
  {
    TT: 34,
    Word: "Clutch slippage",
    Pronuncation: "/klʌtʃ ˈslɪpɪdʒ/",
    meaning: "Sự trượt ly hợp",
  },
  {
    TT: 35,
    Word: "Release rod",
    Pronuncation: "/rɪˈliːs rɑːd/",
    meaning: "Thanh nhả",
  },
  {
    TT: 36,
    Word: "Pressure plate adjustment",
    Pronuncation: "/ˈpreʃər pleɪt əˈdʒʌstmənt/",
    meaning: "Điều chỉnh đĩa ép",
  },
  {
    TT: 37,
    Word: "The straightedge",
    Pronuncation: "/ðə streɪtedʒ/",
    meaning: "Thước thẳng",
  },
  {
    TT: 38,
    Word: "The scale",
    Pronuncation: "/ðə skeɪl/",
    meaning: "Thang chia độ",
  },
  {
    TT: 39,
    Word: "Cearance",
    Pronuncation: null,
    meaning: "Khe hở",
  },
  {
    TT: 40,
    Word: "The manufacturer’s service manual",
    Pronuncation: "/ðə manufacturer ˈsɜːrvɪs manual/",
    meaning: "Sổ tay hướng dẫn sử dụng",
  },
  {
    TT: 41,
    Word: "Clutch cable adjustment",
    Pronuncation: "/klʌtʃ ˈkeɪbl əˈdʒʌstmənt/",
    meaning: "Điều chỉnh cáp ly hợp",
  },
];
let componentText = [
  "The clutch is located between the transmission and engine where it provides a mechanical coupling between the engine’s flywheel and the transmission’s input shaft. The driver operates the clutch through a linkage that extends from the passenger compartment to the clutch housing (clutch cover) between the engine and the transmission.<br></br>All manual transmissions require a clutch to engage or disengage the transmission. If the vehicle had no clutch and the engine was always connected to the transmission, the engine would stop every time the vehicle was brought to a stop. The clutch allows the engine to idle while the vehicle is stopped. It also allows for easy shifting between gears. (Of course, all of this applies to manual transaxles as well.)<br></br><strong>Flywheel:</strong> The flyWheel is an integral part of the engine, which also use as a part of the clutch. It is a driving member and connects to the pressure plate of the clutch shaft is houses with bearings in a flywheel. The flywheel rotates as the engine crankshaft rotates.<br></br><strong>Pilot bearing:</strong> The pilot bearing or bushing press into the end of the crankshaft to support the end of the transmission input shaft. The pilot bearing prevents the transmission shaft and clutch disc from wobbling up and down when the clutch releases. It also assists the input shaft center of the disc on the flywheel.<br></br><strong>lutch Disc:</strong> The clutch disc is splined to the transmission's input shaft and receives the driving motion from the flywheel and pressure plate assembly and transmits that motion to the transmission input shaft.",
  "The parts of a clutch disc are shown in Figure 8.2. There are two types of friction facings. Molded friction facings are preferred because they withstand greater pressure plate loading force without damage.<br></br><strong>Pressure plate: </strong>The pressure plate is made of special cast iron. It is the heaviest part of the clutch assembly. The main function of the pressure plate is to establish even contact with the driven plate facing through which the pressure springs can exert a sufficient force to transmit the full torque of the engine.<br></br>The pressure plate presses the clutch plate on to the flywheel from its machined surface. Between the pressure plate and clutch cover assembly, pressure springs are fits. The pressure will be withdrawn from the flywheel whenever release levers depress by the release levers pivots accordingly.<br></br><strong>Clutch cover: </strong>The clutch cover assembly bolts to the flywheel. It consists of a pressure plate, release lever mechanism, clutch cover, and pressure springs. Generally, the clutch plate revolves with the flywheel. However, when the clutch has disengaged, the flywheel, as well as the pressure plates, are free to rotate independently from the driven plate and driving shaft.<br></br><strong>Release levers: </strong>These pivots are on pins to the clutch cover, their outer ends locate and positions on pressure plate legs, and the inner ends are projecting towards the clutch shaft. A careful and accurate adjustment of the release mechanism is one of the most important factors governing the performance of a clutch assembly.<br></br><strong>Clutch shaft:</strong> It is a component of the gearbox. Since it is a splined shaft to the hub of the clutch plate, which is sliding on it. One end of the clutch shaft attaches to the crankshaft or flywheel and the other end connects to the gearbox or forms a part of the gearbox.",
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
componentFunc("img81", componentText[0]);
componentFunc("img82", componentText[1]);

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
  div.innerHTML = ` <img src   = "../image/${imgsrc}.png" alt                 = "" usemap = "#b12" style =  "height: auto;
  min-height: 350px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;" />

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
        <source id = "audioSource" src = "../audio/vocabulary8/${audioName}.mp3"></source>
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
