"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "1.	What is the main function of a vehicle's braking system? ",
    A: "To make the car go faster",
    B: "To steer the car ",
    C: "To slow down or stop the car",
    D: "To change gears",
    answer: 3,
  },
  {
    TT: 2,
    question: "2.	What type of braking system is commonly used in modern cars?",
    A: "SiMechanical ",
    B: "Hydraulic ",
    C: "Pneumatic ",
    D: "Electric",
    answer: 2,
  },
  {
    TT: 3,
    question: "3.	What is the main component of a hydraulic braking system? ",
    A: "Brake pedal ",
    B: "Brake lines ",
    C: "Master cylinder ",
    D: "Brake caliper",
    answer: 3,
  },
  {
    TT: 4,
    question:
      "4.	What are the two main types of brake assemblies used in cars? ",
    A: "Drum and disc brakes",
    B: "Hydraulic and pneumatic brakes ",
    C: "Disc and caliper brakes ",
    D: "Drum and shoe brakes",
    answer: 1,
  },
  {
    TT: 5,
    question:
      "5.	What is the function of the brake pads in a disc brake system? ",
    A: "To absorb heat ",
    B: "To create friction and slow down the rotor ",
    C: "To transfer hydraulic pressure ",
    D: "To support the weight of the vehicle",
    answer: 2,
  },
  {
    TT: 6,
    question:
      "1.	_______ brakes use brake shoes to create friction against a rotating drum. ",
    A: "Disc ",
    B: "Drum ",
    C: "Hydraulic ",
    D: "Pneumatic",
    answer: 2,
  },
  {
    TT: 7,
    question:
      "2.	_______ brakes use brake pads to squeeze a rotating disc or rotor. ",
    A: "Disc ",
    B: "Drum ",
    C: "Hydraulic ",
    D: "Pneumatic",
    answer: 1,
  },
  {
    TT: 8,
    question:
      "3.	The _______ _______ is responsible for transferring pressure from the brake pedal to the wheels.",
    A: "brake caliper ",
    B: "brake line",
    C: "master cylinder ",
    D: "brake booster",
    answer: 3,
  },
  {
    TT: 9,
    question:
      "4.	_______ _______ is a liquid that is used to transmit pressure in a hydraulic braking system. ",
    A: "Brake fluid ",
    B: "Engine oil ",
    C: "Coolant",
    D: "Gasoline",
    answer: 1,
  },
  {
    TT: 10,
    question:
      "5.	The _______ _______ houses the pistons and pads in a disc brake system.",
    A: "brake drum",
    B: "brake rotor ",
    C: "brake caliper ",
    D: "master cylinder",
    answer: 3,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Braking system",
    Pronuncation: "/breɪkɪŋ ˈsɪstəm/",
    meaning: "Hệ thống phanh",
  },
  {
    TT: 2,
    Word: "Brake pedal",
    Pronuncation: "/breɪk ˈpedl/",
    meaning: "Bàn đạp phanh",
  },
  {
    TT: 3,
    Word: "Fluid reservoir",
    Pronuncation: "/ˈfluːɪd ˈrezərvwɑːr/",
    meaning: "Bình dầu phanh",
  },
  {
    TT: 4,
    Word: "Fluid lines",
    Pronuncation: "/ˈfluːɪd laɪn/",
    meaning: "Ống dẫn dầu",
  },
  {
    TT: 5,
    Word: "The pipes",
    Pronuncation: "/ðə paɪps/",
    meaning: "Các ống",
  },
  {
    TT: 6,
    Word: "Brake pads",
    Pronuncation: "/breɪk pæd/",
    meaning: "Má phanh",
  },
  {
    TT: 7,
    Word: "Brake shoes",
    Pronuncation: "/breɪk ʃuː/",
    meaning: "Guốc phanh",
  },
  {
    TT: 8,
    Word: "Brake drum",
    Pronuncation: "/breɪk drʌm/",
    meaning: "Tang trống phanh",
  },
  {
    TT: 9,
    Word: "Brake lining",
    Pronuncation: "/breɪk ˈlaɪnɪŋ/",
    meaning: "Lót phanh",
  },
  {
    TT: 10,
    Word: "Caliper",
    Pronuncation: "/ˈkælɪpər/",
    meaning: "Giá đỡ má phanh",
  },
  {
    TT: 11,
    Word: "Floating caliper or sliding caliper",
    Pronuncation: "/ˈfləʊtɪŋ ˈkælɪpər ɔːr slaɪdɪŋ ˈkælɪpər/",
    meaning: "Cùm phanh",
  },
  {
    TT: 12,
    Word: "Fixed calipers",
    Pronuncation: "/fɪkst ˈkælɪpər/",
    meaning: "Giá cùm phanh",
  },
  {
    TT: 13,
    Word: "Master cylinder",
    Pronuncation: "/ˈmæstər ˈsɪlɪndər/",
    meaning: "Xy lanh chính",
  },
  {
    TT: 14,
    Word: "Vacuum booster",
    Pronuncation: "/ˈvækjuːm ˈbuːstər/",
    meaning: "Bầu chân không",
  },
  {
    TT: 15,
    Word: "An energy-absorbing mechanism",
    Pronuncation: "/ən ˈenərdʒi-əbˈzɔːrbɪŋ  ˈmekənɪzəm/",
    meaning: "Một cơ cấu hấp thụ năng lượng",
  },
  {
    TT: 16,
    Word: "A hydraulic brake system",
    Pronuncation: "/ə haɪˈdrɔːlɪk breɪk ˈsɪstəm/",
    meaning: "Hệ thống phanh thủy lực",
  },
  {
    TT: 17,
    Word: "Brake fluid",
    Pronuncation: "/breɪk ˈfluːɪd/",
    meaning: "Dầu phanh",
  },
  {
    TT: 18,
    Word: "Reliable",
    Pronuncation: "/rɪˈlaɪəbl/",
    meaning: "Tin cậy",
  },
  {
    TT: 19,
    Word: "Consistent",
    Pronuncation: "/kənˈsɪstənt/",
    meaning: "Đồng nhất",
  },
  {
    TT: 20,
    Word: "Compressible",
    Pronuncation: "/kəmˈpreəbl/",
    meaning: "Tính nén được",
  },
  {
    TT: 21,
    Word: "The master cylinder",
    Pronuncation: "/ðə ˈmæstər ˈsɪlɪndər/",
    meaning: "Xy lanh chính",
  },
  {
    TT: 22,
    Word: "A pushrod",
    Pronuncation: "/ə pʊʃrɑːd/",
    meaning: "Đũa đẩy",
  },
  {
    TT: 23,
    Word: "Depress",
    Pronuncation: "/dɪˈpres/",
    meaning: "Ấn xuống",
  },
  {
    TT: 24,
    Word: "Drum Brake",
    Pronuncation: "/drʌm breɪk/",
    meaning: "Phanh trống",
  },
  {
    TT: 25,
    Word: "The braking force",
    Pronuncation: "/ðə breɪkɪŋ fɔːrs/",
    meaning: "Lực phanh",
  },
  {
    TT: 26,
    Word: "The anchor pin",
    Pronuncation: "/ðə ˈæŋkər pɪn/",
    meaning: "Chốt neo",
  },
  {
    TT: 27,
    Word: "The wedging action",
    Pronuncation: "/ðə wedʒɪŋ ˈækʃn/",
    meaning: "Sự cường hóa",
  },
  {
    TT: 28,
    Word: "Disc brake",
    Pronuncation: "/dɪsk breɪk/",
    meaning: "Phanh đĩa",
  },
  {
    TT: 29,
    Word: "Be squeezed",
    Pronuncation: "/bi skwiːz/",
    meaning: "Được ép chặt",
  },
  {
    TT: 30,
    Word: "Be clampe",
    Pronuncation: "/bi klæmp/",
    meaning: "Được kẹp",
  },
  {
    TT: 31,
    Word: "Metal backing",
    Pronuncation: "/ˈmetl ˈbækɪŋ/",
    meaning: "Tấm đệm kim loại",
  },
  {
    TT: 32,
    Word: "The steering knuckle",
    Pronuncation: "/ðə ˈstɪrɪŋ ˈnʌkl/",
    meaning: "Khớp lái",
  },
  {
    TT: 33,
    Word: "Seal",
    Pronuncation: "/siːl/",
    meaning: "Phớt làm kín",
  },
  {
    TT: 34,
    Word: "Spring",
    Pronuncation: "/sprɪŋ/",
    meaning: "Lò xo",
  },
  {
    TT: 35,
    Word: "Bleeder screw",
    Pronuncation: "/ˈbliːdər skruː/",
    meaning: "Vít xả",
  },
  {
    TT: 36,
    Word: "Boots",
    Pronuncation: "/buːts/",
    meaning: "Bát cao su ép dầu",
  },
];
let componentText = [
  {
    content:
      "<strong>Brake pedal:</strong> the component of a brake system is used to activate the brake by pressing it down by foot. It’s located in the middle of the accelerator and clutch pedal inside the vehicle.<br></br><strong>Fluid reservoir:</strong> The fluid reservoir is the housing where the brake fluid or brake oil is store.<br></br><strong>Fluid lines:</strong> The fluid lines are the pipes through which the brake fluid flows in the vehicle.<br></br><strong>Brake pads:</strong> The brake pad is a steel backing plate employed on disc brakes. It’s often made of ceramic, metal, or other hard-wearing composite materials.<br></br><strong>Brake shoes:</strong> Brake shoes are two pieces of sheet steel joined together so it can carry the brake lining.<br></br><strong>Brake drum: </strong>The brake drum is a rotating drum-shaped component used in the drum brake system.<br></br><strong>Rotor: </strong>The rotor is a cast-iron brake disc connected to a wheel or axle, sometimes made of reinforced carbon-carbon, ceramic matric, or some other composite.<strong>Brake lining:</strong> A brake lining is a heat-resistant, soft but also tough material with high friction characteristics. It’s enclosed inside the brake shoe.<br></br><strong>Piston:</strong> The piston is a moving component contained by the cylinder.<br></br><strong>Caliper:</strong> The caliper carries the brake pads and pistons.<br></br><strong>Floating caliper or sliding caliper:</strong> the part moves relatively with the rotor as it uses a piston on a single side of the disc to push the inner brake pad into the braking surface. It then pulls the caliper body in to apply pressure on the opposite side of the disc.<br></br><strong>Fixed calipers:</strong> the fixed caliper does not move in relative to the rotor, which works sensitive to imperfections. It uses one or more single pairs of opposing pistons to clamp from each side of the rotor.<br></br><strong>Master cylinder:</strong> the master cylinder converts the non-hydraulic pressure from the driver’s foot into hydraulic pressure. it then controls the slave cylinders at the opposite end of the hydraulic system.<br></br><strong>Vacuum booster: </strong>this braking system component is used to improve the master cylinder and increase pressure to which the driver foot supply through the use of a vacuum in the engine intake. This is effective while the vehicle’s engine is running.",
    title: "Figure 12.1. Typical brake system components",
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
componentFunc("img121", componentText[0]);

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
        <source id = "audioSource" src = "../audio/vocabulary12/${audioName}.mp3"></source>
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
