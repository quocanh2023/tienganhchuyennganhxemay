"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question:
      "What is the most common type of fuel system used in modern gasoline engines?",
    A: "The history of military Carburetor system vehicles",
    B: "Gasoline injection system",
    C: "Diesel injection system",
    D: "Hybrid fuel system",
    answer: 2,
  },
  {
    TT: 2,
    question:
      "What is the function of the throttle valve in a gasoline engine?",
    A: "To pump fuel from the tank to the engine",
    B: "To control the amount of air entering the engine",
    C: "To ignite the air-fuel mixture",
    D: "To control the timing of the spark plugs",
    answer: 2,
  },
  {
    TT: 3,
    question: "How does a diesel engine ignite the air-fuel mixture?",
    A: "Using a spark plug",
    B: "Using a glow plug",
    C: "Using high compression pressure",
    D: "Using a pilot injection",
    answer: 3,
  },
  {
    TT: 4,
    question:
      "What is the role of the control module in a gasoline injection system?",
    A: "To store fuel for the engine",
    B: "To filter the air entering the engine",
    C: "To generate the spark for ignition",
    D: "To control the timing and amount of fuel injected",
    answer: 4,
  },
  {
    TT: 5,
    question:
      "What is a key difference between gasoline and diesel injection systems?",
    A: "Gasoline systems use a throttle valve, while diesel systems do not",
    B: "Diesel systems use spark plugs, while gasolinesystems do not",
    C: "Gasoline systems are entirely mechanical, while diesel systems are electronic",
    D: "Diesel systems use lower pressure than gasoline systems",
    answer: 1,
  },
  {
    TT: 6,
    question:
      "In a gasoline injection system, fuel is delivered to the engine by electrically operated _______ _______.",
    A: "fuel pumps",
    B: "fuel injectors",
    C: "spark plugs",
    D: "throttle valves",
    answer: 2,
  },
  {
    TT: 7,
    question:
      "The _______ _______ controls the engine speed and power output in a gasoline engine.",
    A: "fuel pump",
    B: "control module",
    C: "throttle valve",
    D: "fuel injector",
    answer: 3,
  },
  {
    TT: 8,
    question: "Diesel fuel is injected directly into the _______ _______.",
    A: "intake manifold",
    B: "exhaust manifold",
    C: "combustion chamber",
    D: "fuel tank",
    answer: 3,
  },
  {
    TT: 9,
    question:
      "The high temperature required to ignite the fuel in a diesel engine is achieved through _______.",
    A: "spark plugs",
    B: "glow plugs",
    C: "compression",
    D: "catalytic converters",
    answer: 3,
  },
  {
    TT: 10,
    question:
      "Modern diesel injection systems use _______ devices to monitor and control their operation.",
    A: "mechanical",
    B: "hydraulic",
    C: "pneumatic",
    D: "electronic",
    answer: 4,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Mixture of air and fuel",
    Pronuncation: "/ˈmɪkstʃər əv er ænd ˈfjuːəl/",
    meaning: "Hỗn hợp không khí-nhiên liệu",
  },
  {
    TT: 2,
    Word: "Volatile mixture",
    Pronuncation: "/ˈvɑːlətl mɪkstʃə/",
    meaning: "Hỗn hợp dễ bay hơi",
  },
  {
    TT: 3,
    Word: "Combustion chamber",
    Pronuncation: "/kəmˈbʌstʃən tʃeɪmbər/",
    meaning: "Buồng cháy",
  },
  {
    TT: 4,
    Word: "Engine temperature",
    Pronuncation: "/ˈendʒɪn ˈtemprətʃər/",
    meaning: "Nhiệt độ động cơ",
  },
  {
    TT: 5,
    Word: "Engine speed",
    Pronuncation: "/ˈendʒɪn spiːd/",
    meaning: "Tốc độ động cơ",
  },
  {
    TT: 6,
    Word: "Engine load",
    Pronuncation: "/ˈendʒɪn ləʊd/",
    meaning: "Tải động cơ",
  },
  {
    TT: 7,
    Word: "The fuel tank",
    Pronuncation: "/ðə ˈfjuːəl tæŋk/",
    meaning: "Thùng nhiên liệu",
  },
  {
    TT: 8,
    Word: "Fuel injector",
    Pronuncation: "/ˈfjuːəl ɪnˈdʒek.tɚ/",
    meaning: "Kim phun nhiên liệu",
  },
  {
    TT: 9,
    Word: "Spray",
    Pronuncation: "/spreɪ/",
    meaning: "Phun",
  },
  {
    TT: 10,
    Word: "Throttle body",
    Pronuncation: "/ˈθrɑːtl ˈbɑːdi/",
    meaning: "Thân bướm ga",
  },
  {
    TT: 11,
    Word: "Fuel pump",
    Pronuncation: "/ˈfjuːəl pʌmp/",
    meaning: "Bơm nhiên liệu",
  },
  {
    TT: 12,
    Word: "Fuel fill hose",
    Pronuncation: "/ˈfjuːəl fɪl hoʊz/",
    meaning: "Ống nạp nhiên liệu",
  },
  {
    TT: 13,
    Word: "Gas cap",
    Pronuncation: "/ˈɡæs kæp/",
    meaning: "Nắp bình xăng",
  },
  {
    TT: 14,
    Word: "Mechanical fuel pump",
    Pronuncation: "/məˈkænɪkəl ˈfjuːəl pʌmp/",
    meaning: "Bơm nhiên liệu loại cơ khí",
  },
  {
    TT: 15,
    Word: "Electronic fuel pump",
    Pronuncation: "/ilekˈtrɑːnɪk ˈfjuːəl pʌmp/",
    meaning: "Bơm nhiên liệu loại điện",
  },
  {
    TT: 16,
    Word: "Fuel filter",
    Pronuncation: "/ˈfjuːəl ˈfɪlə/",
    meaning: "Lọc nhiên liệu",
  },
  {
    TT: 17,
    Word: "Susceptible",
    Pronuncation: "/səˈseptəbəl/",
    meaning: "Dễ bị ảnh hưởng",
  },
  {
    TT: 18,
    Word: "Fuel lines",
    Pronuncation: "/ˈfjuːəl laɪns/",
    meaning: "Ống dẫn nhiên liệu",
  },
  {
    TT: 19,
    Word: "Steel lines",
    Pronuncation: "/stiːl laɪns/",
    meaning: "Ống thép",
  },
  {
    TT: 20,
    Word: "Flexible hoses",
    Pronuncation: "/ˈfleksəbl hoʊz/",
    meaning: "Ống mềm",
  },
  {
    TT: 21,
    Word: "Fuel Gauge",
    Pronuncation: "/ˈfjuːəl ɡeɪdʒ/",
    meaning: "Đồng hồ nhiên liệu",
  },
  {
    TT: 22,
    Word: "Fuel return lines",
    Pronuncation: "/ˈfjuːəl rɪˈtɜːrn laɪns/",
    meaning: "Đường hồi nhiên liệu",
  },
  {
    TT: 23,
    Word: "Emission Vapor Controls",
    Pronuncation: "/ˈɪˈmɪʃn ˈveɪpər ˈkənˈtrəʊls/",
    meaning: "Kiểm soát hơi nhiên liệu",
  },
  {
    TT: 24,
    Word: "Fuel Pressure Regulator",
    Pronuncation: "/ˈfjuːəl ˈpreʃər ˈreɡjuleɪtər/",
    meaning: "Bộ điều áp",
  },
  {
    TT: 25,
    Word: "Pulsation Damper",
    Pronuncation: "/pʌlˈseɪʃn ˈdæmpər/",
    meaning: "Bộ điều tiết xung lực",
  },
  {
    TT: 26,
    Word: "Gasoline Injection System",
    Pronuncation: "/ˈɡæsəliːn ɪnˈdʒekʃn ˈsɪstəm/",
    meaning: "Hệ thống phun xăng",
  },
  {
    TT: 27,
    Word: "Sensors",
    Pronuncation: "/ˈsensərs/",
    meaning: "Các cảm biến",
  },
  {
    TT: 28,
    Word: "Airflow",
    Pronuncation: "/ˈerfləʊ/",
    meaning: "Dòng khí",
  },
  {
    TT: 29,
    Word: "Diesel Injection System",
    Pronuncation: "/ˈdiːzl ɪnˈdʒekʃn ˈsɪstəm/",
    meaning: "Hệ thống phun nhiên liệu Diesel",
  },
];

let componentText = [
  {
    content:
      "The fuel system must provide the correct mixture of air and fuel for efficient combustion (burning). This system must add the right amount of fuel to the air entering the cylinders. This ensures that a very volatile (burnable) mixture enters the combustion chambers.<br></br>The fuel system must also alter the air-fuel ratio (percentage of air and fuel) with changes in operating conditions (engine temperature, speed, load, and other variables).<br></br>There are three basic types of automotive fuel systems: gasoline injection systems, diesel injection systems, and carburetor systems.<br></br>The function of the fuel system is to store and supply fuel to the cylinder chamber where it can be mixed with air, vaporized, and burned to produce energy. The fuel, which can be either gasoline or diesel is stored in a fuel tank. A fuel pump draws the fuel from the tank through fuel lines and delivers it through a fuel filter to either a carburetor or fuel injector, then delivered to the cylinder chamber for combustion.<br></br><strong>Fuel Tank:</strong> The fuel tank is the main storage for the fuel that runs the vehicle. Generally speaking, the gas tank is generally found at, or under, the rear of the vehicle.<br></br><strong>Fuel Injectors:</strong> Sprays a fine mist of fuel into the combustion chamber of each cylinder or throttle body, depending on the design.<br></br>The fuel injectors are driven by the fuel pump and their job is to spray a fuel and air mixture into the combustion chamber, ready to be ignited to produce power to the driven wheels. The fuel injectors are basically a nozzle, with a valve attached, the nozzle creates a spray of fuel and air droplets (atomization). <br></br><strong>Fuel Fill Hose:</strong> The Fuel Fill Hose is the main connector from the gas cap to the fuel tank. This is the point where the Gasoline (or other fuel) is put into the vehicle.<br></br>Gas Cap: The gas cap seals the fill hose and is used to ensure that gas does not spill out from the car, and that the fuel system remains pressurized correctly (in vehicles that use pressurized systems).<br></br><strong>Fuel Pump:</strong> The fuel pump is used to pump the fuel from the fuel tank, via the fuel lines into the fuel injectors, which spray the fuel into the combustion chamber- in order to create combustion. There are two types, mechanical fuel pumps (used in carburetors) and electronic fuel pumps (used in electronic fuel injection).<br></br> Mechanical fuel pumps: these are driven normally by auxiliary belts or chains from the engine.<br></br>Electronic fuel pumps: controlled by the electronic fuel injection system, these are normally more reliable and have fewer reliability issues than their mechanical counterparts.<br></br><strong>Fuel Filter:</strong> The fuel filter is the key to a properly functioning fuel delivery system. This is more true with fuel injection than with carbureted cars. Fuel injectors are more susceptible to damage from dirt, but also fuel injected cars use electric fuel pumps. When the filter clogs, the electric fuel pump works so hard to push past the filter, that it burns itself up. Most cars use two filters. One inside the gas tank and one in a line to the fuel injectors or carburetor. Unless some severe and unusual conditions occur to cause a large amount of dirt to enter the gas tank, it is only necessary to replace the filter in the line.<br></br><strong>Fuel Lines:</strong> The Fuel Lines connect all of the various Fuel System components. Steel lines and flexible hoses carry the fuel from the tank to the engine. When servicing or replacing the steel lines, copper or aluminum must never be used. Steel lines must be replaced with steel. When replacing flexible rubber hoses, the proper hose must be used. Ordinary rubber such as used in vacuum or water hose will soften and deteriorate. Be careful to route all hoses away from the exhaust system.<br></br><strong>Fuel Gauge:</strong> The fuel gauge exists as a display item in the vehicle’s dashboard. It is intended to show to the driver the actual amount of fuel in the fuel tank. On older cars, it’s common for fuel gauges (or their related part, the sending unit) to be inaccurate. When you first start driving your classic car take time to learn how accurate the system is. It’ll save you from a long walk to the gas station if you run out of gas.<br></br><strong>Fuel return lines:</strong> They are generally the same types of line tubing as the main Fuel Line. These specific lines are used for a couple purposes. Primarily they are used to return excess fuel to the gas tank for recirculation. Additionally, they capture gasoline vapors, which, as they are pushed back to the gas tank cool and condense back into the liquid. In particular, diesel-powered fuel injected engines often use the fuel as a cooling mechanism for the fuel injector. They can recirculate significant amounts of fuel.<br></br><strong>Emission Vapor Controls:</strong> These are often used in combination with fuel return lines. The goal of this section of the overall system is to ensure that gasoline vapors are not released into the ambient air. If this occurs a number of bad things may happen: 1) The earth-shattering kaboom of gasoline vapors igniting, 2) The unpleasant smell of gasoline is routed into the interior of the vehicle, and 3) It can harm the environment.<br></br><strong>Fuel Pressure Regulator:</strong> Fuel Pressure Regulators are primarily found in fuel-injected cars. Fuel injection, as opposed to carburetion, is a high-pressure system. The fuel pressure regulator ensures that the system maintains the proper amount of pressurization.<br></br><strong>Pulsation Damper:</strong> As the fuel Injectors rapidly open and close in time with the engines OTTO cycle, pressure fluctuations appear in the fuel system. A Pulsation Damper is to help the pressure levels reducing fuel delivery inconsistency.",
    title: "Figure 4.1. The fuel system",
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
componentFunc("img41", componentText[0]);

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
        <source id = "audioSource" src = "../audio/vocabulary4/${audioName}.mp3"></source>
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
