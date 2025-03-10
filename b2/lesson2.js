"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question:
      "What is the MAIN purpose of a hydraulic lift in an automotive workshop?",
    A: "To paint vehicles efficiently",
    B: "To store vehicles when not in use",
    C: "To provide access to the underside of a vehicle",
    D: "To test the vehicle's suspension system",
    answer: 3,
  },
  {
    TT: 2,
    question:
      "Which of the following is NOT mentioned as a common type of vehicle fastener?",
    A: "Nuts and bolts",
    B: "Welding rods",
    C: "Screws",
    D: "Rivets",
    answer: 2,
  },
  {
    TT: 3,
    question: 'What is the function of a "feeler gauge" in automotive repair?',
    A: "To measure the temperature of engine components",
    B: "To measure air gaps and clearances between parts",
    C: "To check the pressure of tires",
    D: "To tighten or loosen fasteners in tight spaces",
    answer: 2,
  },
  {
    TT: 4,
    question:
      "Which tool is used to diagnose electrical problems in a vehicle by retrieving diagnostic trouble codes?",
    A: "Dial indicator",
    B: "Scan tool",
    C: "Oscilloscope",
    D: "Depth micrometer",
    answer: 2,
  },
  {
    TT: 5,
    question: "What type of measurement does an outside micrometer provide?",
    A: "The depth of a hole",
    B: "The thickness of a metal sheet",
    C: "The external diameter of a cylindrical object",
    D: "The internal diameter of a pipe",
    answer: 3,
  },
  {
    TT: 6,
    question:
      "A _______ is used to deliver blows to an object, often for driving nails or fitting parts.",
    A: "Screwdriver",
    B: "Hammer",
    C: "Chisel",
    D: "Punch",
    answer: 2,
  },
  {
    TT: 7,
    question:
      "_______ are handy tools used for cutting, twisting, and clamping.",
    A: "Wrenches",
    B: "Pliers",
    C: "Screwdrivers",
    D: "Hammers",
    answer: 2,
  },
  {
    TT: 8,
    question:
      "_______ are used to support a vehicle after it has been lifted by a jack.",
    A: "Hydraulic lifts",
    B: "Jack stands",
    C: "Floor jacks",
    D: "Dollies",
    answer: 2,
  },
  {
    TT: 9,
    question:
      "The _______ _______ _______ is used to measure the diameter of a hole with high accuracy.",
    A: "Outside Micrometer",
    B: "Depth Micrometer",
    C: "Inside Micrometer",
    D: "Dial Caliper",
    answer: 3,
  },
  {
    TT: 10,
    question:
      "A _______ _______ displays voltage in relation to time, showing voltage vertically and time horizontally.",
    A: "Scan Tool",
    B: "Dial Indicator",
    C: "Multimeter",
    D: "Oscilloscope",
    answer: 4,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Assembly and disassembly tools",
    Pronuncation: "/əˈsɛmbli ænd dɪsəˈsɛmbəli tuːlz/",
    meaning: "Dụng cụ tháo và lắp",
  },
  {
    TT: 2,
    Word: "Basic hand tools",
    Pronuncation: "/ˈbeɪsɪk hænd tuːlz/",
    meaning: "Dụng cụ cầm tay cơ bản",
  },
  {
    TT: 3,
    Word: "Wrenches",
    Pronuncation: "/ˈrɛnʧɪz/",
    meaning: "Các loại cờ lê",
  },
  {
    TT: 4,
    Word: "Screwdrivers",
    Pronuncation: "/ˈskruːˌdraɪvəz/",
    meaning: "Các loại tuốc nơ vít",
  },
  {
    TT: 5,
    Word: "Pliers",
    Pronuncation: "/ˈplaɪəz/",
    meaning: "Các loại kìm",
  },
  {
    TT: 6,
    Word: "Hammers",
    Pronuncation: "/ˈhæməz/",
    meaning: "Các loại búa",
  },
  {
    TT: 7,
    Word: "Punches",
    Pronuncation: "/ˈpʌnʧɪz/",
    meaning: "Các loại đột",
  },
  {
    TT: 8,
    Word: "Chisels",
    Pronuncation: "/ˈʧɪzəlz/",
    meaning: "Các loại đục",
  },
  {
    TT: 9,
    Word: "Common support devices",
    Pronuncation: "/ˈkɒmən səˈpɔːt dɪˈvaɪsɪz/",
    meaning: "Các thiết bị hỗ trợ",
  },
  {
    TT: 10,
    Word: "Hydraulic lift",
    Pronuncation: "/haɪˈdrɔːlɪk lɪft/",
    meaning: "Cầu nâng thủy lực",
  },
  {
    TT: 11,
    Word: "Hydraulic floor jack",
    Pronuncation: "/haɪˈdrɔːlɪk flɔː ʤæk/",
    meaning: "Kích thủy lực",
  },
  {
    TT: 12,
    Word: "Jack stands",
    Pronuncation: "/ʤæk stændz/",
    meaning: "Đội kê",
  },
  {
    TT: 13,
    Word: "Common vehicle fasteners",
    Pronuncation: "/ˈkɒmən ˈvɪəkəl ˈfɑːsnəz/",
    meaning: "Chi tiết bắt chặt phổ biến",
  },
  {
    TT: 14,
    Word: "Nut",
    Pronuncation: "/nʌt/",
    meaning: "Đai ốc",
  },
  {
    TT: 15,
    Word: "Bolt",
    Pronuncation: "/bəʊlt/",
    meaning: "Bu lông",
  },
  {
    TT: 16,
    Word: "Washers",
    Pronuncation: "/ˈwɒʃəz/",
    meaning: "Các loại đệm",
  },
  {
    TT: 17,
    Word: "Screws",
    Pronuncation: "/skruːz/",
    meaning: "Các loại đinh vít",
  },
  {
    TT: 18,
    Word: "Rivets",
    Pronuncation: "/ˈrɪvɪts/",
    meaning: "Các loại đinh tán",
  },
  {
    TT: 19,
    Word: "Hydraulic floor jack",
    Pronuncation: "/",
    meaning: "Kích thủy lực",
  },
  {
    TT: 20,
    Word: "Stud",
    Pronuncation: "/stʌd/",
    meaning: "Gu dông",
  },
  {
    TT: 21,
    Word: "Measuring equipments",
    Pronuncation: "/ˈmɛʒərɪŋ ɪˈkwɪpmənts/",
    meaning: "Thiết bị đo lường",
  },
  {
    TT: 22,
    Word: "The outside micrometer",
    Pronuncation: "/ði ˌaʊtˈsaɪd maɪˈkrɒmɪtə/",
    meaning: "Trắc vi kế đo ngoài",
  },
  {
    TT: 23,
    Word: "The inside micrometer",
    Pronuncation: "/ði ɪnˈsaɪd maɪˈkrɒmɪtə/",
    meaning: "Trắc vi kế đo trong",
  },
  {
    TT: 24,
    Word: "The depth micrometer",
    Pronuncation: "/ðə dɛpθ maɪˈkrɒmɪtə/",
    meaning: "Trắc vi kế đo độ sâu",
  },
  {
    TT: 25,
    Word: "The dial indicator",
    Pronuncation: "/ðə ˈdaɪəl ˈɪndɪkeɪtə/",
    meaning: "Đồng hồ so",
  },
  {
    TT: 26,
    Word: "The feeler gauge",
    Pronuncation: "/ðə ˈfiːlə ɡeɪʤ/",
    meaning: "Thước lá",
  },
  {
    TT: 27,
    Word: "The dial caliper",
    Pronuncation: "/ðə ˈdaɪəl caliper/",
    meaning: "Thước cặp",
  },
  {
    TT: 28,
    Word: "The digital multimeter",
    Pronuncation: "/ðə ˈdɪʤɪtəl ˌmʌltɪˈmiːtə",
    meaning: "Đồng hồ đo điện kỹ thuật số",
  },
  {
    TT: 29,
    Word: "The scan tool",
    Pronuncation: "/ðə skæn tuːl/",
    meaning: "Máy chẩn đoán cầm tay",
  },
  {
    TT: 30,
    Word: "The oscilloscope",
    Pronuncation: "/ði oscilloscope/",
    meaning: "Máy đo xung",
  },
];

const textArr = [
  {
    content:
      "Wrenches: Wrenches are available in a variety of styles for different applications. Some are designed to work with standard fasteners, and some are for metric applications. Look for color-coded wrenches to help you quickly identify standard or metric. Here are some of the more common wrench types",
    source: "img21",
    title: "Figure 2.1.  Typical of wrenches",
  },
  {
    content:
      "Screwdrivers: screwdriver usually hand-operated, for turning screws with slotted heads. For screws with one straight diametral slot cut across the head, standard screwdrivers with flat blade tips and in a variety of sizes are used. Special screws with cross-shaped slots in their heads require a special screwdriver with a blade tip that fits the slots.",
    source: "img22",
    title: "Figure 2.2.  Typical of screwdrivers",
  },
  {
    content:
      "Pliers: Pliers are referred to as some of the handiest tools as they are mostly used for cutting, twisting, clamping and many more technical operations. While selecting a plier one must always look on the handle material, considering how tight the hinge will feel and how precisely the cutting surface will take place and also the overall quality of the tool",
    source: "img23",
    title: "Figure 2.3.  Typical of pliers",
  },
  {
    content:
      "Hammers: A hammer is a tool meant to deliver blows to an object. The most common uses are for driving nails, fitting parts, and breaking up objects. Hammers are often designed for a specific purpose, and vary widely in their shape and structure. Usual features are a handle and a head, with most of the weight in the head. The basic design is hand-operated, but there are also many mechanically operated models for heavier uses.",
    source: "img24",
    title: "Figure 2.4.  Typical of hammers",
  },
  {
    content:
      "Punches: A punch is a tool used to indent or create a hole through a hard surface.",
    source: "img25",
    title: "Figure 2.5.  Typical of punches",
  },
  {
    content:
      "Chisels: Chisels are designed to remove material with their hardened, sharpened point. The type we use for automotive repair is the cold chisel, named simply because they are designed to remove material and cut cold metal.",
    source: "img26",
    title: "Figure 2.6.  Typical of chisels",
  },
  {
    content:
      "Hydraulic lift: In order to inspect or repair a vehicle, it is frequently necessary to get the vehicle off the ground to provide access to the underside. A wide variety of equipment is available for lifting vehicles, such as lifts and hydraulic floor jacks. Most equipment is hydraulic, but there are also pneumatic lifts",
    source: "img27",
    title: "Figure 2.7.  Hydraulic lift",
  },
  {
    content:
      "Hydraulic floor jack: A device, such as a hydraulic floor jack, that raises the front, rear, or side of a vehicle off the ground.",
    source: "img28",
    title: "Figure 2.8.  Hydraulic floor jack",
  },
  {
    content:
      "Jack stands: Sturdy metal devices that support the vehicle after being lifted by a jack",
    source: "img29",
    title: "Figure 2.9.  Jack stands",
  },
  {
    content:
      "Vehicles use many types of fasteners to hold various components together and technicians need to be familiar with each type. Some of the more common types of threaded fasteners include nuts and bolts, washers, screws, and studs. Other common fasteners include snap rings, rivets, and adhesives.",
    source: "img210",
    title: "Figure 2.10.  Typical of nut and bolt",
  },
  {
    content:
      "Vehicles use many types of fasteners to hold various components together and technicians need to be familiar with each type. Some of the more common types of threaded fasteners include nuts and bolts, washers, screws, and studs. Other common fasteners include snap rings, rivets, and adhesives.",
    source: "img211",
    title: "Figure 2.11.  Types of washers",
  },
  {
    content:
      "Vehicles use many types of fasteners to hold various components together and technicians need to be familiar with each type. Some of the more common types of threaded fasteners include nuts and bolts, washers, screws, and studs. Other common fasteners include snap rings, rivets, and adhesives.",
    source: "img212",
    title: "Figure 2.12.  Types of screws",
  },
  {
    content:
      "Vehicles use many types of fasteners to hold various components together and technicians need to be familiar with each type. Some of the more common types of threaded fasteners include nuts and bolts, washers, screws, and studs. Other common fasteners include snap rings, rivets, and adhesives.",
    source: "img213",
    title: "Figure 2.13.  Typical of rivet",
  },
  {
    content:
      "Vehicles use many types of fasteners to hold various components together and technicians need to be familiar with each type. Some of the more common types of threaded fasteners include nuts and bolts, washers, screws, and studs. Other common fasteners include snap rings, rivets, and adhesives.",
    source: "img214",
    title: "Figure 2.14.  Typical of stud",
  },
  {
    content:
      "Some vehicle components, particularly in the engine and transmission, contain precision machined parts that require precise measurements for inspection or replacement.The outside micrometer is used when an outside measurement must be accurate to 0.001 in or less. Parts requiring these measurements include crankshafts, pistons, valves, and camshafts.",
    source: "img215",
    title: "Figure 2.15.  The outside micrometer ",
  },
  {
    content:
      "The inside micrometer is used when a measurement of the diameter of a hole must be accurate to less than .001 in. Examples of such holes are cylinder bores and main bearing bores",
    source: "img216",
    title: "Figure 2.16.  The inside micrometer ",
  },
  {
    content:
      "The depth micrometer makes precise depth measurements of holes or cavities. For example, it can be used to measure the distance from the center of the crankshaft to the top of the engine block (deck height) and the distance from the top of the piston to the top of the engine block (piston deck clearance).",
    source: "img217",
    title: "Figure 2.17.  The depth micrometer",
  },
  {
    content:
      "The dial indicator tool measures thrust, back-and-forth movement, and runout (side-to-side play). These measurements are made on valves, crankshafts, and flywheels. The dial indicator can also measure the backlash or movement between gear teeth.",
    source: "img218",
    title: "Figure 2.18.  The dial indicator",
  },
  {
    content:
      "A feeler gauge measures air gaps and clearance between moving parts and has numerous flat leaves of different specific thicknesses",
    source: "img219",
    title: "Figure 2.19.  The feeler gauge ",
  },
  {
    content:
      "A dial caliper is used for inside, outside, and depth measurements. One application is measuring bolts and small machined parts.",
    source: "img220",
    title: "Figure 2.20.  The dial caliper",
  },
  {
    content:
      "The digital multimeter (DMM) checks the condition of electrical system components.",
    source: "img221",
    title: "Figure 2.21.  The digital multimeter",
  },
  {
    content:
      "A scan tool is used to diagnose electrical problems. The tool is connected to the vehicle’s data link connector (DLC) to retrieve diagnostic trouble codes (DTCs) and engine sensor information that are generated by the vehicle’s on-board diagnostics system.",
    source: "img222",
    title: "Figure 2.22.  The scan tool",
  },
  {
    content:
      "An oscilloscope, or scope, is a voltmeter that displays voltage in relation to time, showing voltage vertically and time horizontally. Its connections are similar to a DMM.",
    source: "img223",
    title: "Figure 2.23.  The oscilloscope",
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
//componentFunc("img12");
for (let i = textArr.length - 1; i >= 0; i--) {
  componentFunc(textArr[i]);
}

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
        <source id = "audioSource" src = "../audio/vocabulary2/${audioName}.mp3"></source>
        </audio>`;
    cell4.innerHTML = data[i].meaning;
  }
}

//====================================================================================//
//================ PHẦN 3 BÀI TẬP FILL AND MULTICHOICE ===============================//

// Tạo hàm hiển thị câu hỏi Fill of blank
function addQuestion(data, boxName, name) {
  //tạo div
  boxName.innerHTML = "";
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
