"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "1.	What is the main function of a universal joint (U-joint)? ",
    A: "To transmit power between two shafts that are not aligned",
    B: "To change the direction of rotation",
    C: "To reduce friction between moving parts",
    D: "To absorb shocks in the drivetrain",
    answer: 1,
  },
  {
    TT: 2,
    question:
      "2.	What is a common type of U-joint used in front-engine, rear-wheel drive (RWD) luxury vehicles?",
    A: "Single Cardan U-joint",
    B: "Double-Cardan U-joint",
    C: "Tripod U-joint",
    D: "Rzeppa U-joint",
    answer: 2,
  },
  {
    TT: 3,
    question:
      "3.	What is the purpose of a centering ball socket in a double-Cardan U-joint? ",
    A: "To increase the operating angle",
    B: "To reduce noise and vibration",
    C: "To divide the operating angle equally between two U-joints",
    D: "To connect the driveshaft to the transmission",
    answer: 3,
  },
  {
    TT: 4,
    question:
      "4.	Which type of CV joint is typically used as the inboard joint on front-wheel drive (FWD) vehicles? ",
    A: "Fixed ball-type CV joint",
    B: "Double-offset CV joint",
    C: "Cross-groove CV joint",
    D: "Tripod CV joint",
    answer: 4,
  },
  {
    TT: 5,
    question:
      "5.	What is a key characteristic of a plunging ball-type CV joint? ",
    A: "It can accommodate changes in shaft length.",
    B: "It has a fixed operating angle.",
    C: "It is only used on RWD vehicles.",
    D: "It is not a constant velocity (CV) joint.",
    answer: 1,
  },
  {
    TT: 6,
    question:
      "1.	A _______ U-joint has two U-joints connected by a centering ball socket. ",
    A: "single",
    B: "double-Cardan",
    C: "tripod",
    D: "Rzeppa",
    answer: 2,
  },
  {
    TT: 7,
    question: "2.	_______ bearings are used in U-joints to reduce friction. ",
    A: "Ball",
    B: "Roller",
    C: "Needle",
    D: "Sleeve",
    answer: 3,
  },
  {
    TT: 8,
    question: "3.	CV joints are commonly used in _______ vehicles. ",
    A: "rear-wheel drive",
    B: "front-wheel drive (FWD)",
    C: "all-wheel drive (AWD)",
    D: "four-wheel drive (4WD)",
    answer: 2,
  },
  {
    TT: 9,
    question: "4.	The _______ CV joint allows for changes in shaft length. ",
    A: "fixed",
    B: "plunging",
    C: "inboard",
    D: "outboard",
    answer: 2,
  },
  {
    TT: 10,
    question: "5.	The _______ joint is a type of fixed ball-type CV joint. ",
    A: "double-offset",
    B: "cross-groove",
    C: "tripod",
    D: "Rzeppa",
    answer: 4,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Drive shaft",
    Pronuncation: "/draɪv ʃæft/",
    meaning: "Trục dẫn động",
  },
  {
    TT: 2,
    Word: "Vehicle chassis",
    Pronuncation: "/ˈviːəkl ˈʃæsi/",
    meaning: "Khung xe",
  },
  {
    TT: 3,
    Word: "Flexible rubber",
    Pronuncation: "/ˈfleksəbl ˈrʌbər/",
    meaning: "Cao su dẻo",
  },
  {
    TT: 4,
    Word: "Rear differential axle",
    Pronuncation: "/rɪr ˌdɪfəˈrenʃl ˈæksl/",
    meaning: "Trục vi sai cầu sau",
  },
  {
    TT: 5,
    Word: "Suspension travel",
    Pronuncation: "/səˈspenʃn ˈtrævl/",
    meaning: "Hành trình hệ thống treo",
  },
  {
    TT: 6,
    Word: "Variety of angles",
    Pronuncation: "/vəˈraɪəti əv ˈæŋɡl/",
    meaning: "Các góc khác nhau",
  },
  {
    TT: 7,
    Word: "Mechanical power",
    Pronuncation: "/məˈkænɪkl ˈpaʊər/",
    meaning: "Công cơ học",
  },
  {
    TT: 8,
    Word: "Torsion stress",
    Pronuncation: "/ˈtɔːrʃn stres/",
    meaning: "Ứng suất xoắn",
  },
  {
    TT: 9,
    Word: "Shear stress",
    Pronuncation: "/ʃɪr stres/",
    meaning: "Ứng suất cắt",
  },
  {
    TT: 10,
    Word: "Front-wheel drive",
    Pronuncation: "/frʌnt- wiːl draɪv/",
    meaning: "Dẫn động cầu trước",
  },
  {
    TT: 11,
    Word: "Four-wheel drive",
    Pronuncation: "/fɔːr- wiːl draɪv/",
    meaning: "Dẫn động bốn bánh",
  },
  {
    TT: 12,
    Word: "Rear-wheel drive",
    Pronuncation: "/rɪr- wiːl draɪv/",
    meaning: "Dẫn động cầu sau",
  },
  {
    TT: 13,
    Word: "Universal joint (U-joint)",
    Pronuncation: "/ˌjuːnɪˈvɜːrsl dʒɔɪnt/",
    meaning: "Khớp chữ U",
  },
  {
    TT: 14,
    Word: "Tube",
    Pronuncation: "/tuːb/",
    meaning: "Ống nối",
  },
  {
    TT: 15,
    Word: "Acceleration",
    Pronuncation: "/əkˌseləˈreɪʃn/",
    meaning: "Sự tăng tốc",
  },
  {
    TT: 16,
    Word: "Centre bearing",
    Pronuncation: "/ˈsentər ˈberɪŋ/",
    meaning: "Ổ bi đỡ",
  },
  {
    TT: 17,
    Word: "Harmonic vibration",
    Pronuncation: "/hɑːrˈmɑːnɪk vaɪˈbreɪʃn/",
    meaning: "Dao động điều hòa",
  },
  {
    TT: 18,
    Word: "Midship Shaft",
    Pronuncation: "/mɪdʃɪps ʃæft/",
    meaning: "Trục nối",
  },
  {
    TT: 19,
    Word: "End yoke",
    Pronuncation: "/end yoke /",
    meaning: "Chạc đầu trục",
  },
  {
    TT: 20,
    Word: "Slip yoke",
    Pronuncation: "/slɪp yoke /",
    meaning: "Chạc trục trượt",
  },
  {
    TT: 21,
    Word: "Flange",
    Pronuncation: "/flændʒ/",
    meaning: "Mặt bích",
  },
  {
    TT: 22,
    Word: "Differential",
    Pronuncation: "/ˌdɪfəˈrenʃl/",
    meaning: "Truyền động vi sai",
  },
  {
    TT: 23,
    Word: "Hydraulic pump",
    Pronuncation: "/haɪˈdrɔːlɪk pʌmp/",
    meaning: "Bơm thủy lực",
  },
  {
    TT: 24,
    Word: "Single U-joint",
    Pronuncation: "/ˈsɪŋɡl Juː - dʒɔɪnt/",
    meaning: "Khớp U đơn",
  },
  {
    TT: 25,
    Word: "Double U-joint",
    Pronuncation: "/ˈDʌbl Juː - dʒɔɪnt/",
    meaning: "Khớp U kép",
  },
  {
    TT: 26,
    Word: "Snap ring",
    Pronuncation: "/snæp rɪŋ/",
    meaning: "Vòng hãm",
  },
  {
    TT: 27,
    Word: "Lock plate",
    Pronuncation: "/lɑːk pleɪt/",
    meaning: "Đệm hãm",
  },
  {
    TT: 28,
    Word: "The cross",
    Pronuncation: "/ðiː krɔːs/",
    meaning: "Trục chữ thập",
  },
  {
    TT: 29,
    Word: "Trunnion",
    Pronuncation: null,
    meaning: "Ngõng trục",
  },
  {
    TT: 30,
    Word: "Needle bearings",
    Pronuncation: "/ˈniːdl ˈberɪŋ/",
    meaning: "Vòng bi kim",
  },
  {
    TT: 31,
    Word: "Bearing cup",
    Pronuncation: "/ˈberɪŋ kʌp/",
    meaning: "Cốc ổ bi",
  },
  {
    TT: 32,
    Word: "Abate",
    Pronuncation: "/əˈbeɪt/",
    meaning: "Giảm",
  },
  {
    TT: 33,
    Word: "Harmonic vibration",
    Pronuncation: "/hɑːrˈmɑːnɪk vaɪˈbreɪʃn/",
    meaning: "Dao động điều hòa",
  },
  {
    TT: 34,
    Word: "Midship Shaft",
    Pronuncation: "/mɪdʃɪps ʃæft/",
    meaning: "Trục nối",
  },
  {
    TT: 35,
    Word: "End yoke",
    Pronuncation: "/end yoke /",
    meaning: "Chạc đầu trục",
  },
  {
    TT: 36,
    Word: "Slip yoke",
    Pronuncation: "/slɪp yoke /",
    meaning: "Chạc trục trượt",
  },
  {
    TT: 37,
    Word: "Flange",
    Pronuncation: "/flændʒ/",
    meaning: "Mặt bích",
  },
  {
    TT: 38,
    Word: "Differential",
    Pronuncation: "/ˌdɪfəˈrenʃl/",
    meaning: "Truyền động vi sai",
  },
  {
    TT: 39,
    Word: "Hydraulic pump",
    Pronuncation: "/haɪˈdrɔːlɪk pʌmp/",
    meaning: "Bơm thủy lực",
  },
  {
    TT: 40,
    Word: "Single U-joint",
    Pronuncation: "/ˈsɪŋɡl Juː - dʒɔɪnt/",
    meaning: "Khớp U đơn",
  },
  {
    TT: 41,
    Word: "Double U-joint",
    Pronuncation: "/ˈDʌbl Juː - dʒɔɪnt/",
    meaning: "Khớp U kép",
  },
  {
    TT: 42,
    Word: "Snap ring",
    Pronuncation: "/snæp rɪŋ/",
    meaning: "Vòng hãm",
  },
  {
    TT: 43,
    Word: "Lock plate",
    Pronuncation: "/lɑːk pleɪt/",
    meaning: "Đệm hãm",
  },
  {
    TT: 44,
    Word: "The cross",
    Pronuncation: "/ðiː krɔːs/",
    meaning: "Trục chữ thập",
  },
  {
    TT: 45,
    Word: "Trunnion",
    Pronuncation: null,
    meaning: "Ngõng trục",
  },
  {
    TT: 46,
    Word: "Needle bearings",
    Pronuncation: "/ˈniːdl ˈberɪŋ/",
    meaning: "Vòng bi kim",
  },
  {
    TT: 47,
    Word: "Bearing cup",
    Pronuncation: "/ˈberɪŋ kʌp/",
    meaning: "Cốc ổ bi",
  },
  {
    TT: 48,
    Word: "Abate",
    Pronuncation: "/əˈbeɪt/",
    meaning: "Giảm",
  },
  {
    TT: 49,
    Word: "Friction",
    Pronuncation: "/ˈfrɪkʃn/",
    meaning: "Ma sát",
  },
  {
    TT: 50,
    Word: "Split drive shafts",
    Pronuncation: "/splɪt draɪv ʃæft/",
    meaning: "Trục dẫn động trượt",
  },
  {
    TT: 51,
    Word: "Inboard Joint",
    Pronuncation: "/ˈɪnbɔːrd dʒɔɪnt/",
    meaning: "Khớp nối bên trong",
  },
  {
    TT: 52,
    Word: "Outboard Joint",
    Pronuncation: "/ˈaʊtbɔːrd dʒɔɪnt/",
    meaning: "Khớp nối bên ngoài",
  },
  {
    TT: 53,
    Word: "Half shaft",
    Pronuncation: "/hæf ʃæft/",
    meaning: "Bán trục",
  },
  {
    TT: 54,
    Word: "Independent rear suspension",
    Pronuncation: "/ˌɪndɪˈpendənt rɪr səˈspenʃn/",
    meaning: "Treo sau độc lập",
  },
  {
    TT: 55,
    Word: "Be referred",
    Pronuncation: "/bi rɪˈfɜːr/",
    meaning: "Được đề cập đến",
  },
  {
    TT: 56,
    Word: "Fixed Ball-Type CV Joints",
    Pronuncation: null,
    meaning: "Khớp nối đồng tốc loại bi cố định",
  },
  {
    TT: 57,
    Word: "Rzeppa joint",
    Pronuncation: null,
    meaning: "Khớp nối Rzeppa",
  },
  {
    TT: 58,
    Word: "Ball race",
    Pronuncation: "/bɔːl reɪs/",
    meaning: "Vòng bi",
  },
  {
    TT: 59,
    Word: "Outer housing",
    Pronuncation: "/ˈaʊtər ˈhaʊzɪŋ/",
    meaning: "Vỏ ngoài",
  },
  {
    TT: 60,
    Word: "Track",
    Pronuncation: "/træk/",
    meaning: "Rãnh",
  },
  {
    TT: 61,
    Word: "Flex",
    Pronuncation: "/fleks/",
    meaning: "Uốn cong",
  },
  {
    TT: 62,
    Word: "Serve",
    Pronuncation: "/sɜːrv/",
    meaning: "Đóng vai trò",
  },
  {
    TT: 63,
    Word: "Plunging Ball-Type Joints",
    Pronuncation: "/ˈplʌndʒɪŋ bɔːl - taɪp dʒɔɪnt/",
    meaning: "Khớp nối loại bi chìm",
  },
  {
    TT: 64,
    Word: "Compact design",
    Pronuncation: "/kəmˈpækt dɪˈzaɪn/",
    meaning: "Thiết kế nhỏ gọn",
  },
  {
    TT: 65,
    Word: "Grooves",
    Pronuncation: "/ɡruː v/",
    meaning: "Các đường rãnh",
  },
  {
    TT: 66,
    Word: "A cross-groove joint",
    Pronuncation: "/ə krɔːs- ɡruːv dʒɔɪnt/",
    meaning: "Khớp nối rãnh chéo",
  },
  {
    TT: 67,
    Word: "Tripod Plunging Joints",
    Pronuncation: "/ˈtraɪpɑːd ˈplʌndʒɪŋ dʒɔɪnt/",
    meaning: "Khớp nối chìm 3 điểm",
  },
  {
    TT: 68,
    Word: "Spherical rollers",
    Pronuncation: "/ˈsfɪrɪkl ˈrəʊlər/",
    meaning: "Con lăn hình cầu",
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
//componentFunc("img101");

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
function componentFunc(imgsrc) {
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
 `;
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
        <source id = "audioSource" src = "../audio/vocabulary10/${audioName}.mp3"></source>
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
