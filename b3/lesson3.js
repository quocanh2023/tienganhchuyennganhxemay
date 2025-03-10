"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question:
      "1. What is the primary difference between gasoline and diesel engines in terms of ignition?",
    A: "Gasoline engines use a spark plug, while diesel engines rely on compression.",
    B: "Gasoline engines are more fuel-efficient than diesel engines",
    C: "Diesel engines have more cylinders than gasoline engines",
    D: "Gasoline engines produce less torque than diesel engines",
    answer: 1,
  },
  {
    TT: 2,
    question:
      "2. How many strokes does a typical gasoline engine cycle consist of? ",
    A: "Two ",
    B: "Three",
    C: "Four",
    D: "Five",
    answer: 3,
  },
  {
    TT: 3,
    question:
      "3. What happens during the intake stroke of a four-stroke engine?",
    A: "The air-fuel mixture is compressed",
    B: "The fuel is ignited",
    C: "The exhaust gases are expelled",
    D: "The air-fuel mixture is drawn into the cylinder",
    answer: 4,
  },
  {
    TT: 4,
    question:
      "4. Why are diesel engines generally built heavier than gasoline engines? ",
    A: "To accommodate larger fuel tanks",
    B: "To withstand higher combustion pressures",
    C: "To carry heavier loads",
    D: "To improve fuel efficiency",
    answer: 2,
  },
  {
    TT: 5,
    question:
      "5. What is the function of the exhaust valve during the exhaust stroke? ",
    A: "To allow fresh air into the cylinder",
    B: "To inject fuel into the cylinder ",
    C: "To release burned gases from the cylinder",
    D: "To seal the cylinder during compression",
    answer: 3,
  },
  {
    TT: 6,
    question:
      "1. The burning of an air and fuel mixture inside the engine is called _______.",
    A: "Compression",
    B: "Combustion",
    C: "Ignition",
    D: "Exhaust",
    answer: 2,
  },
  {
    TT: 7,
    question: "2. A diesel engine is also known as a _______ _______ engine.",
    A: "Spark ignition ",
    B: "Fuel injection ",
    C: "Compression ignition ",
    D: "Rotary combustion",
    answer: 3,
  },
  {
    TT: 8,
    question:
      "3. During the _______ stroke, the piston moves upward, compressing the air-fuel mixture.",
    A: "Intake ",
    B: "Power",
    C: "Exhaust",
    D: "Compression",
    answer: 4,
  },
  {
    TT: 9,
    question:
      "4. The _______ _______ is responsible for opening and closing the valves at the correct times. ",
    A: "Crankshaft",
    B: "Camshaft",
    C: "Piston",
    D: "Connecting Rod",
    answer: 2,
  },
  {
    TT: 10,
    question:
      "5. Diesel fuel is injected into the cylinder during the _______ stroke. ",
    A: "Intake",
    B: "Compression",
    C: "Power",
    D: "Exhaust",
    answer: 3,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Spark ignition engine (SI)",
    Pronuncation: "/spɑːk ɪɡˈnɪʃən ˈɛnʤɪn/",
    meaning: "Động cơ đánh lửa cưỡng bức",
  },
  {
    TT: 2,
    Word: "Compression-ignition engine (CI)",
    Pronuncation: "/kəmˈprɛʃən-ɪɡˈnɪʃən ˈɛnʤɪn/",
    meaning: "Động cơ cháy nén",
  },
  {
    TT: 3,
    Word: "Cylinder head",
    Pronuncation: "/ˈsɪlɪndə hɛd/",
    meaning: "Đầu xy lanh",
  },
  {
    TT: 4,
    Word: "Combustion chamber",
    Pronuncation: "/kəmˈbʌsʧən ˈʧeɪmbə/",
    meaning: "Buồng cháy",
  },
  {
    TT: 5,
    Word: "Valves",
    Pronuncation: "/Vælvz/",
    meaning: "Xu páp",
  },
  {
    TT: 6,
    Word: "Fuel mixture",
    Pronuncation: "/ˈfjuːəl ˈmɪksʧə/",
    meaning: "Hỗn hợp nhiên liệu",
  },
  {
    TT: 7,
    Word: "Engine",
    Pronuncation: "/ˈɛnʤɪn/",
    meaning: "Động cơ",
  },
  {
    TT: 8,
    Word: "Cylinder block",
    Pronuncation: "/ˈsɪlɪndə blɒk/",
    meaning: "Thân xy lanh",
  },
  {
    TT: 9,
    Word: "Cast",
    Pronuncation: "/kɑːst/",
    meaning: "Đúc",
  },
  {
    TT: 10,
    Word: "Be mounted on",
    Pronuncation: "/biː ˈmaʊntɪd ɒn/",
    meaning: "Được gắn lên",
  },
  {
    TT: 11,
    Word: "Water jackets",
    Pronuncation: "/ˈwɔːtə ˈʤækɪts/",
    meaning: "Áo nước",
  },
  {
    TT: 12,
    Word: "Cooling fins",
    Pronuncation: "/ˈkuːlɪŋ fɪnz/",
    meaning: "Cánh tản nhiệt",
  },
  {
    TT: 13,
    Word: "Water-cooling",
    Pronuncation: "/ˈwɔːtə-ˈkuːlɪŋ/",
    meaning: "Làm mát bằng nước",
  },
  {
    TT: 14,
    Word: "Air-cooling",
    Pronuncation: "/ˈeəˌkuːlɪŋ/",
    meaning: "Làm mát bằng không khí",
  },
  {
    TT: 15,
    Word: "Cylinder head gasket",
    Pronuncation: "/ˈsɪlɪndə hɛd ˈɡæskɪt/",
    meaning: "Vòng đệm đầu xy lanh",
  },
  {
    TT: 16,
    Word: "Bolt",
    Pronuncation: "/bəʊlt/",
    meaning: "Bu lông",
  },
  {
    TT: 17,
    Word: "Stud",
    Pronuncation: "/stʌd/",
    meaning: "Gu dông",
  },
  {
    TT: 18,
    Word: "Crankcase",
    Pronuncation: "/ˈkræŋkˌkeɪs/",
    meaning: "Hộp trục khuỷu",
  },
  {
    TT: 19,
    Word: "Sump (oil pan)",
    Pronuncation: "/sʌmp/",
    meaning: "Đáy dầu",
  },
  {
    TT: 20,
    Word: "Lubricating oil",
    Pronuncation: "/ˈluːbrɪkeɪtɪŋ ɔɪl/",
    meaning: "Dầu bôi trơn",
  },
  {
    TT: 21,
    Word: "Be machined",
    Pronuncation: "/biː məˈʃiːnd/",
    meaning: "Được gia công",
  },
  {
    TT: 22,
    Word: "Thermal energy",
    Pronuncation: "/ˈθɜːməl ˈɛnəʤi/",
    meaning: "Năng lượng nhiệt",
  },
  {
    TT: 23,
    Word: "Cylinder",
    Pronuncation: "/ˈsɪlɪndə/",
    meaning: "Xy-lanh",
  },
  {
    TT: 24,
    Word: "Piston",
    Pronuncation: "/ˈpɪstən/",
    meaning: "Pít-tông",
  },
  {
    TT: 25,
    Word: "Piston ring",
    Pronuncation: "/ˈpɪstən rɪŋ/",
    meaning: "Xéc-măng",
  },
  {
    TT: 26,
    Word: "Tight seal",
    Pronuncation: "/taɪt siːl/",
    meaning: "Vòng đệm kín",
  },
  {
    TT: 27,
    Word: "Prevent leakage of gases",
    Pronuncation: "/prɪˈvɛnt ˈliːkɪʤ ɒv ˈɡæsɪz/",
    meaning: "Chống lọt khí",
  },
  {
    TT: 28,
    Word: "Gas force",
    Pronuncation: "/ɡæs fɔːs/",
    meaning: "Lực khí thể",
  },
  {
    TT: 29,
    Word: "Output shaft",
    Pronuncation: "/ˈaʊtpʊt ʃɑːft/",
    meaning: "Trục đầu ra",
  },
  {
    TT: 30,
    Word: "Piston pin or gudgeon pin (wrist pin)",
    Pronuncation: "/ˈpɪstən pɪn ɔː ˈɡʌʤən pɪn/",
    meaning: "Chốt pít-tông",
  },
  {
    TT: 31,
    Word: "Transfer",
    Pronuncation: "/ˈtrænsfɜː/",
    meaning: "Truyền",
  },
  {
    TT: 32,
    Word: "Connecting rod",
    Pronuncation: "/kəˈnɛktɪŋ rɒd/",
    meaning: "Thanh truyền",
  },
  {
    TT: 33,
    Word: "Crankshaft",
    Pronuncation: "/ˈkræŋkʃɑːft/",
    meaning: "Trục khuỷu",
  },
  {
    TT: 34,
    Word: "Small end connecting rod",
    Pronuncation: "/smɔːl ɛnd kəˈnɛktɪŋ rɒd/",
    meaning: "Trục đầu nhỏ thanh truyền",
  },
  {
    TT: 35,
    Word: "Big end connecting rod",
    Pronuncation: "/bɪɡ ɛnd kəˈnɛktɪŋ rɒd/",
    meaning: "Trục đầu to thanh truyền",
  },

  {
    TT: 37,
    Word: "Crank webs",
    Pronuncation: "/kræŋk wɛbz/",
    meaning: "Má khuỷu",
  },
  {
    TT: 38,
    Word: "Flywheel",
    Pronuncation: "/ˈflaɪwiːl/",
    meaning: "Bánh đà",
  },
  {
    TT: 39,
    Word: "Inlet Manifold",
    Pronuncation: "/ˈɪnlɛt ˈmænɪfəʊld/",
    meaning: "Họng nạp",
  },
  {
    TT: 40,
    Word: "Exhaust Manifold",
    Pronuncation: "/ɪɡˈzɔːst ˈmænɪfəʊld/",
    meaning: "Họng xả",
  },
  {
    TT: 41,
    Word: "Valve Train",
    Pronuncation: "/vælv treɪn/",
    meaning: "Bộ truyền động xu-páp",
  },
  {
    TT: 42,
    Word: "Intake ports",
    Pronuncation: "/ˈɪnteɪk pɔːts/",
    meaning: "Các cửa nạp",
  },
  {
    TT: 43,
    Word: "Exhaust ports",
    Pronuncation: "/ɪɡˈzɔːst pɔːts/",
    meaning: "Các cửa xả",
  },
  {
    TT: 44,
    Word: "Camshaft",
    Pronuncation: "/ˈkæmʃɑːft/",
    meaning: "Trục cam",
  },
  {
    TT: 45,
    Word: "Cams",
    Pronuncation: "/kæmz/",
    meaning: "Vấu cam",
  },
  {
    TT: 46,
    Word: "Timing Gears",
    Pronuncation: "/ˈtaɪmɪŋ ɡɪəz/",
    meaning: "Bánh răng dẫn động",
  },
  {
    TT: 47,
    Word: "Finger",
    Pronuncation: "/ˈfɪŋɡə/",
    meaning: "Cò mổ",
  },
  {
    TT: 48,
    Word: "Drive chain",
    Pronuncation: "/draɪv ʧeɪn/",
    meaning: "Dây xích dẫn động",
  },
  {
    TT: 49,
    Word: "Pushrod",
    Pronuncation: "/Pushrod/",
    meaning: "Đũa đẩy",
  },
  {
    TT: 50,
    Word: "Tappet",
    Pronuncation: "/ˈtæpɪt/",
    meaning: "Con đội xu-páp",
  },
  {
    TT: 51,
    Word: "Intake stroke",
    Pronuncation: "/ˈɪnteɪk strəʊk/",
    meaning: "Kỳ nạp",
  },
  {
    TT: 52,
    Word: "Compression stroke",
    Pronuncation: "/kəmˈprɛʃən strəʊk/",
    meaning: "Kỳ nén",
  },
  {
    TT: 53,
    Word: "Power stroke",
    Pronuncation: "/ˈpaʊə strəʊk/",
    meaning: "Kỳ sinh công",
  },
  {
    TT: 54,
    Word: "Exhaust stroke",
    Pronuncation: "/ɪɡˈzɔːst strəʊk/",
    meaning: "Kỳ xả",
  },
];

const textArr = [
  {
    content: "",
    source: "img31",
    title: "Figure 3.1.  The exploded view of the engine",
  },
  {
    content:
      "Even though internal combustion engines look quite simple, they are highly complex machines. There are hundreds of components that have to perform their functions satisfactorily to produce output power. There are two types of engines including spark ignition (SI) and compression-ignition (CI) engine. Let us now go through the important engine components and the nomenclature associated with an engine.",
    source: "",
    title: "",
  },
  {
    content:
      "The major components of the engine and their functions are briefly described below.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Cylinder Head:</strong> Cylinder head forms the top of the combustion chamber. Contains the valves, the passageways for the fuel mixture to move in and out of the engine.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Cylinder Block:</strong> The cylinder block is the main supporting structure for the various components. The cylinders of a multi-cylinder engine is cast as a single unit, called cylinder block. The cylinder head is mounted on the cylinder block.",
    source: "",
    title: "",
  },
  {
    content:
      "The cylinder head and cylinder block are provided with water jackets in the case of water-cooling with cooling fins in the case of air-cooling. Cylinder head gasket is incorporated between the cylinder block and cylinder head. The cylinder head is held tight to the cylinder block by number of bolts or studs. The bottom portion of the cylinder block is called crankcase. A cover called crankcase, which becomes a sump for lubricating oil is fastened to the bottom of the crankcase. The inner surface of the cylinder block, which is machined and finished accurately to cylindrical shape.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Combustion Chamber:</strong> The space enclosed in the upper part of the cylinder, by the cylinder head and the piston top during the combustion process, is called the combustion chamber. The combustion of fuel and the consequent release of thermal energy results in the building up of pressure in this part of the cylinder.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Cylinder:</strong> As the name implies it is a cylindrical vessel or space in which the piston makes a reciprocating motion. The varying volume created in the cylinder during the operation of the engine is filled with the working air fuel mixture and affected by different thermodynamic processes. The cylinder is supported in the cylinder block.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Piston:</strong> It is a cylindrical component fitted into the cylinder forming the moving boundary of the combustion chamber. It fits perfectly (snugly) into the cylinder providing a gas-tight space with the piston rings and the lubricant. It forms the first link in transmitting the gas forces to the output shaft.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Piston Pins:</strong> Piston Pins also known as the wrist pin, it connects the piston to the small end of the connecting rod. It transfers the force and allows the rod to swing back and forth.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Piston Rings</strong>: Piston rings, fitted into the slots around the piston, provide a tight seal between the piston and the cylinder wall thus preventing leakage of combustion gases.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Connecting Rod:</strong> It  interconnects the piston and the crankshaft and transmits the gas forces from the piston to the crankshaft. The two ends of the connecting rod are called as small end and the big end. Small end is connected to the piston by gudgeon pin and the big end is connected to the crankshaft by crankpin.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Crankshaft: </strong>It converts the reciprocating motion of the piston into useful rotary motion of the output shaft. In the crankshaft of a single cylinder engine there is pair of crank arms and balance weights. The balance weights are provided for static and dynamic balancing of the rotating system. The crankshaft is enclosed in a crankcase..",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Flywheel: </strong> The net torque imparted to the crankshaft during one complete cycle of operation of the engine fluctuates causing a change in the angular velocity of the shaft. In order to achieve a uniform torque an inertia mass in the form of a wheel is attached to the output shaft and this wheel is called the flywheel.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Inlet Manifold: </strong> The pipe which connects the intake system to the inlet valve of the engine and through which air or air-fuel mixture is drawn into the cylinder is called the inlet manifold.",
    source: "",
    title: "",
  },
  {
    content:
      "Valve Train: A valve train is a series of parts used to open and close the intake and exhaust ports. A valve is a movable part that opens and closes a passageway. A camshaft controls the movement of the valves, causing them to open and close at the proper time. Springs are used to help close the valves. ",
    source: "",
    title: "",
  },
  {
    content:
      "Inlet and Exhaust valves: Valves are commonly mushroom shaped poppet type. They are provided either on the cylinder head or on the side of the cylinder for regulating the charge coming into the cylinder (inlet valve) and for discharging the products of combustion (exhaust valve) from the cylinder.",
    source: "",
    title: " ",
  },
  {
    content:
      "Camshaft: The camshaft and its associated parts control the opening and closing of the two valves. The associated parts are push rods, rocker arms, valve springs and tappets. This shaft also provides the drive to the ignition system. The camshaft is driven by the crankshaft through timing gears.",
    source: "",
    title: "",
  },
  {
    content:
      "Cams: These are made as integral parts of the camshaft and are designed in such a way to open the valves at the correct timing and to keep them open for the necessary duration.",
    source: "",
    title: "",
  },
  {
    content:
      "<strong>Timing Gears:</strong> These gears drive the camshaft from the crankshaft.",
    source: "",
    title: "",
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
// for (let i = textArr.length - 1; i >= 0; i--) {
//   componentFunc(textArr[i]);
// }

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
  <img src   = "../image/${data.source}.png" alt= "" style =  "height: auto;
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
        <source id = "audioSource" src = "../audio/vocabulary3/${audioName}.mp3"></source>
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
