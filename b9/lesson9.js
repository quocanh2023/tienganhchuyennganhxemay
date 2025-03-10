"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "1.	What is the primary function of a transmission?  ",
    A: "To start the engine",
    B: "To steer the vehicle",
    C: "To change the speed and torque of the engine",
    D: "To power the headlights",
    answer: 3,
  },
  {
    TT: 2,
    question:
      "2.	What is the input shaft of a manual transmission connected to?  ",
    A: "The driveshaft",
    B: "The clutch disc",
    C: "The wheels",
    D: "The engine",
    answer: 2,
  },
  {
    TT: 3,
    question: "3.	What type of gear is known for its quiet operation? ",
    A: "Spur gear",
    B: "Helical gear",
    C: "Idler gear",
    D: "Planetary gear",
    answer: 2,
  },
  {
    TT: 4,
    question: "4.	What is the purpose of an idler gear? ",
    A: "To change the direction of rotation",
    B: "To increase speed",
    C: "To decrease speed",
    D: "To transfer motion without changing direction",
    answer: 4,
  },
  {
    TT: 5,
    question:
      "5.	What is the function of synchronizers in a manual transmission?",
    A: "To lubricate the gears",
    B: "To cool the transmission",
    C: "To make shifting smoother",
    D: "To engage the clutch",
    answer: 3,
  },
  {
    TT: 6,
    question:
      "11.	The _______ shaft transmits power from the transmission to the driveshaft.",
    A: "input",
    B: "output",
    C: "counter",
    D: "idler",
    answer: 2,
  },
  {
    TT: 7,
    question:
      "2.	_______ gears are used to change the direction of rotation in a transmission.  ",
    A: "Spur",
    B: "Helical",
    C: "Idler",
    D: "Synchronizer",
    answer: 3,
  },
  {
    TT: 8,
    question:
      "3.	The _______ _______ allows the driver to select different gears.",
    A: "clutch pedal",
    B: "gearshift lever",
    C: "brake pedal",
    D: "accelerator pedal",
    answer: 2,
  },
  {
    TT: 9,
    question:
      "4.	_______ prevent the accidental selection of two gears at the same time. ",
    A: "Synchronizers",
    B: "Shift forks",
    C: "Interlocks",
    D: "Detents",
    answer: 3,
  },
  {
    TT: 10,
    question:
      "5.	_______ gears have teeth that are cut at an angle to the gear's axis of rotation.",
    A: "Spur",
    B: "Helical",
    C: "Idler",
    D: "Bevel",
    answer: 2,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Manual transmission",
    Pronuncation: "/ˈmænjuəl trænzˈmɪʃn/",
    meaning: "Hộp số tay (hộp số sàn)",
  },
  {
    TT: 2,
    Word: "The torque",
    Pronuncation: "/ðə tɔːrk /",
    meaning: "Mô men xoắn",
  },
  {
    TT: 3,
    Word: "The input shaft",
    Pronuncation: "/ðə ˈɪnpʊt ʃæft /",
    meaning: "Trục chủ động",
  },
  {
    TT: 4,
    Word: "The output shaft",
    Pronuncation: "/ðə ˈaʊtpʊt ʃæft /",
    meaning: "Trục bị động",
  },
  {
    TT: 5,
    Word: "The countershaft",
    Pronuncation: "/ðə ˈkaʊntərˈkaʊntər/",
    meaning: "Trục trung gian",
  },
  {
    TT: 6,
    Word: "The shift rail",
    Pronuncation: "/ðə ʃɪft reɪl /",
    meaning: "Trục chuyển số",
  },
  {
    TT: 7,
    Word: "The shift fork",
    Pronuncation: "/ðə ʃɪft fɔːrk /",
    meaning: "Càng gài",
  },
  {
    TT: 8,
    Word: "The reverse gear",
    Pronuncation: "/ðə rɪˈvɜːrs ɡɪr /",
    meaning: "Bánh răng số lùi",
  },
  {
    TT: 9,
    Word: "The synchronizer",
    Pronuncation: "/ðə 'siɳkrənaizə/",
    meaning: "Bộ đồng tốc",
  },
  {
    TT: 10,
    Word: "Exert (v)",
    Pronuncation: "/ɪɡˈzɜːrt/",
    meaning: "Tác động",
  },
  {
    TT: 11,
    Word: "Accelerate (v)",
    Pronuncation: "/əkˈseləreɪt/",
    meaning: "Gia tốc",
  },
  {
    TT: 12,
    Word: "The 1st, 2nd, 3rd, 4th, 5th speed Gear",
    Pronuncation: "/ðə 1st, 2nd, 3rd, 4th, 5th spiːd ɡɪr/",
    meaning: "Bánh răng chủ động số 1, 2, 3, 4, 5",
  },
  {
    TT: 13,
    Word: "The 1st, 2nd, 3rd, 4th, 5th Gear",
    Pronuncation: "/ðə 1st, 2nd, 3rd, 4th, 5th ɡɪr/",
    meaning: "Bánh răng bị động số 1, 2, 3, 4, 5",
  },
  {
    TT: 14,
    Word: "Climb hills",
    Pronuncation: "/klaɪm hɪl/",
    meaning: "Leo đồi",
  },
  {
    TT: 15,
    Word: "Twisting force",
    Pronuncation: "/twɪstɪŋ fɔːrs/",
    meaning: "Lực xoắn",
  },
  {
    TT: 16,
    Word: "Turning force",
    Pronuncation: "/ˈtɜːrnɪŋ fɔːrs/",
    meaning: "Lực uốn",
  },
  {
    TT: 17,
    Word: "Reduce exhaust emissions",
    Pronuncation: "/rɪˈduːs ɪɡˈzɔːst ɪˈmɪʃn /",
    meaning: "Giảm lượng khí thải",
  },
  {
    TT: 18,
    Word: "Be constructed",
    Pronuncation: "/biː kənˈstrʌkt/",
    meaning: "Được làm bằng",
  },
  {
    TT: 19,
    Word: "Cast aluminum",
    Pronuncation: "/kæst ˌæljəˈmɪniəm/",
    meaning: "Nhôm đúc",
  },
  {
    TT: 20,
    Word: "Be splined",
    Pronuncation: "/biː",
    meaning: "Được lắp có rãnh",
  },
  {
    TT: 21,
    Word: "Counter gears",
    Pronuncation: "/ˈkaʊntər ɡɪr/",
    meaning: "Các bánh răng bị động",
  },
  {
    TT: 22,
    Word: "Transmit",
    Pronuncation: "/trænzˈmɪt/",
    meaning: "Truyền",
  },
  {
    TT: 23,
    Word: "Be mounted",
    Pronuncation: "/biː ˈmaʊntɪd/",
    meaning: "Được gắn",
  },
  {
    TT: 24,
    Word: "The spur gear",
    Pronuncation: "/ðə spɜːr ɡɪr/",
    meaning: "Bánh răng trụ, thẳng",
  },
  {
    TT: 25,
    Word: "Mesh",
    Pronuncation: "/meʃ/",
    meaning: "Ăn khớp",
  },
  {
    TT: 26,
    Word: "Full contact",
    Pronuncation: "/fʊl ˈkɑːntækt /",
    meaning: "Tiếp xúc toàn bộ",
  },
  {
    TT: 27,
    Word: "Straight tooth",
    Pronuncation: "/streɪt tuːθ/",
    meaning: "Răng thẳng",
  },
  {
    TT: 28,
    Word: "Popping out of gear",
    Pronuncation: "/pɑːp aʊt əv ɡɪr/",
    meaning: "Bật ra khỏi răng",
  },
  {
    TT: 29,
    Word: "The clicking noise",
    Pronuncation: "/ðə klɪking nɔɪz/",
    meaning: "Tiếng ồn lách cách",
  },
  {
    TT: 30,
    Word: "A constant whine",
    Pronuncation: "/ə ˈkɑːnstənt waɪn/",
    meaning: "Tiếng rít liên tục",
  },
  {
    TT: 31,
    Word: "Eliminate",
    Pronuncation: "/ɪˈlɪmɪneɪt/",
    meaning: "Loại bỏ",
  },
  {
    TT: 32,
    Word: "The helical gear",
    Pronuncation: "/ðə ˈhelɪkl ɡɪr/",
    meaning: "Bánh răng trụ răng nghiêng",
  },
  {
    TT: 33,
    Word: "Spiral",
    Pronuncation: "/ˈspaɪrəl/",
    meaning: "Đường xoắn ốc",
  },
  {
    TT: 34,
    Word: "Configuration",
    Pronuncation: "/kənˌfɪɡjəˈreɪʃn/",
    meaning: "Cấu hình",
  },
  {
    TT: 35,
    Word: "Axial thrust",
    Pronuncation: "/ˈæksiəl θrʌst/",
    meaning: "Lực dọc trục",
  },
  {
    TT: 36,
    Word: "Be righthanded",
    Pronuncation: "/bi ˌraɪt ˈhændɪd/",
    meaning: "Được quay theo chiều thuận",
  },
  {
    TT: 37,
    Word: "Be lefthanded",
    Pronuncation: "/bi ˌleft ˈhændɪd/",
    meaning: "Được quay theo chiều nghịch",
  },
  {
    TT: 38,
    Word: "Be viewed face-on",
    Pronuncation: "/bi vjuː feɪs- ɑːn/",
    meaning: "Được nhìn trực diện",
  },
  {
    TT: 39,
    Word: "An idler gear",
    Pronuncation: "/ən ˈaɪdlər ɡɪr/",
    meaning: "Bánh răng trung gian",
  },
  {
    TT: 40,
    Word: "A drive gear",
    Pronuncation: "/ə draɪv ɡɪr/",
    meaning: "Bánh răng dẫn động",
  },
  {
    TT: 41,
    Word: "A driven gear",
    Pronuncation: "/ə ˈdrɪvn ɡɪr/",
    meaning: "Bánh răng bị động",
  },
  {
    TT: 42,
    Word: "Gearshift mechanisms",
    Pronuncation: "/ˈɡɪrʃɪft ˈmekənɪzəm/",
    meaning: "Cơ cấu chuyển số",
  },
  {
    TT: 43,
    Word: "A five-speed transmission",
    Pronuncation: "/ə faɪv- spiːd trænzˈmɪʃn/",
    meaning: "Hộp số 5 cấp số",
  },
  {
    TT: 44,
    Word: "The mainshaft",
    Pronuncation: "/ðə meɪnʃæft/",
    meaning: "Trục chính",
  },
  {
    TT: 45,
    Word: "A gearshift lever (The shifting lever)",
    Pronuncation: "/ə ˈɡɪrʃɪft ˈlevər/",
    meaning: "Cần chuyển số",
  },
  {
    TT: 46,
    Word: "Cables",
    Pronuncation: "/ˈkeɪbl/",
    meaning: "Dây cáp",
  },
  {
    TT: 47,
    Word: "Interlocks",
    Pronuncation: "/ˌɪntərˈlɑːk/",
    meaning: "Các khóa chuyển số",
  },
  {
    TT: 48,
    Word: "The accidental selection",
    Pronuncation: "/ðə ˌæksɪˈdentl sɪˈlekʃn/",
    meaning: "Sự lựa chọn ngẫu nhiên",
  },
  {
    TT: 49,
    Word: "Clash-free shift",
    Pronuncation: "/klæʃ- friː ʃɪft /",
    meaning: "Dịch chuyển không có tiếng va",
  },
  {
    TT: 50,
    Word: "The detents",
    Pronuncation: "/ðə di'tent/",
    meaning: "Các chốt chặn",
  },
  {
    TT: 51,
    Word: "A block or cone synchronizer",
    Pronuncation: "/ə blɑːk ɔːr kəʊn 'siɳkrənaizə/",
    meaning: "Bộ đồng tốc hình nón hoặc khối",
  },
  {
    TT: 52,
    Word: "The synchronizer sleeve",
    Pronuncation: "/ðə 'siɳkrənaizə sliːv/",
    meaning: "Ống trượt",
  },
  {
    TT: 53,
    Word: "The clutch hub",
    Pronuncation: "/ðə klʌtʃ hʌb/",
    meaning: "Moay ơ đồng tốc",
  },
  {
    TT: 54,
    Word: "Pin-type synchronizers",
    Pronuncation: "/pɪn taɪp 'siɳkrənaizə/",
    meaning: "Bộ đồng tốc loại chốt",
  },
];
let componentText = [
  {
    content:
      "A vehicle requires a lot of torque to start off and to climb hills, yet it does not require as much torque to move on level ground. The source of the torque is the engine. Torque is a twisting or turning force that is exerted on the input shaft of a transmission. An engine produces increasing torque as its speed increases up to a certain point where the torque output starts to decrease. Therefore, to get a vehicle moving or to accelerate up a hill, it is desirable to use a transmission that allows the engine speed to be increased even though the vehicle speed may be low. Using gears allows the engine speed to increase at low vehicle speeds yet still permits the engine speed to drop at higher speeds to save fuel and reduce exhaust emissions.",
    source: "img91",
    title: "Figure 9.1. An interior view of a five-speed transmission",
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
componentFunc(componentText[0]);

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
function componentFunc(data) {
  //componentBox.innerHTML = "";
  const div = document.createElement("div");
  let html = ` <p style="margin-top:32px">${data.content}</p>
  <img src   = "../image/${data.source}.png" alt= "" usemap = "#b12" style =  "height: auto;
  min-height: 350px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;" />
 
  <p style="text-align: center"><strong>${data.title}</strong></p>`;
  componentBox.insertAdjacentHTML("afterend", html);
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
        <source id = "audioSource" src = "../audio/vocabulary9/${audioName}.mp3"></source>
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
