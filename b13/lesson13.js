"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "1.	What is the main purpose of a vehicle's suspension system? ",
    A: "To make the car go faster",
    B: "To help the car turn corners ",
    C: "To provide a comfortable ride and protect the car from damage",
    D: "To improve fuel efficiency",
    answer: 3,
  },
  {
    TT: 2,
    question:
      "2. Which type of spring is commonly used in modern cars and light vans?",
    A: "Leaf spring ",
    B: "Coil spring ",
    C: "Torsion bar ",
    D: "Air spring",
    answer: 2,
  },
  {
    TT: 3,
    question: "3. What is a disadvantage of leaf springs? ",
    A: "They are too stiff",
    B: "They are too expensive",
    C: "They are difficult to install",
    D: "They do not provide enough ground clearance",
    answer: 1,
  },
  {
    TT: 4,
    question: "4. What is the function of shock absorbers? ",
    A: "To absorb shocks from bumps in the road",
    B: "To increase the stiffness of the springs",
    C: "To dampen spring oscillations and control vehicle motion",
    D: "To reduce tire wear",
    answer: 3,
  },
  {
    TT: 5,
    question:
      "5. What type of spring allows for automatic adjustment of vehicle height? ",
    A: "Leaf spring ",
    B: "Coil spring ",
    C: "Torsion bar ",
    D: "Air spring",
    answer: 4,
  },
  {
    TT: 6,
    question:
      "1. _______ springs are made of a single length of spring steel formed into a coil.",
    A: "Leaf",
    B: "Coil",
    C: "Torsion",
    D: "Air",
    answer: 2,
  },
  {
    TT: 7,
    question:
      "2. _______ bars are a type of spring that uses twisting force to absorb shocks.",
    A: "Leaf",
    B: "Coil",
    C: "Torsion",
    D: "Air",
    answer: 3,
  },
  {
    TT: 8,
    question:
      "3. _______ springs use compressed air to support the vehicle's weight. ",
    A: "Leaf",
    B: "Coil",
    C: "Torsion",
    D: "Air",
    answer: 4,
  },
  {
    TT: 9,
    question:
      "4. Shock absorbers are also known as _______ in many countries. ",
    A: "Springs ",
    B: "Dampers",
    C: "Struts",
    D: "Torsion bars",
    answer: 2,
  },
  {
    TT: 10,
    question:
      "5. The _______ cycle of a shock absorber controls the motion of the vehicle body and spring weight. ",
    A: "Compression",
    B: "Extension",
    C: "Jounce",
    D: "Rebound",
    answer: 2,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Suspension system",
    Pronuncation: "/səˈspɛnʃən ˈsɪstəm/",
    meaning: "Hệ thống treo",
  },
  {
    TT: 2,
    Word: "Knuckle (Upright)",
    Pronuncation: "/ˈnʌkəl/",
    meaning: "Trụ đứng",
  },
  {
    TT: 3,
    Word: "Wheel’s hub",
    Pronuncation: "/wiːlz hʌb/",
    meaning: "Trục bánh xe",
  },
  {
    TT: 4,
    Word: "Caster angle",
    Pronuncation: "/ˈkɑːstər ˈæŋɡəl/",
    meaning: "Góc nghiêng dọc trụ lái đứng",
  },
  {
    TT: 5,
    Word: "King-pin angle",
    Pronuncation: "/ˈkɪŋpɪn ˈæŋɡəl/",
    meaning: "Góc nghiêng ngang trụ lái đứng",
  },
  {
    TT: 6,
    Word: "Wishbones or A-arm",
    Pronuncation: "/ˈwɪʃbəʊnz ɔː ə-ɑːm/",
    meaning: "Xương đòn hoặc tay chữ A",
  },
  {
    TT: 7,
    Word: "Solid axle or live axle",
    Pronuncation: "/ˈsɒlɪd ˈæksəl ɔː lɪv ˈæksəl/",
    meaning: "Trục rắn hoặc trục truyền động",
  },
  {
    TT: 8,
    Word: "Multiple links",
    Pronuncation: "/ˈmʌltɪpəl lɪŋks/",
    meaning: "Đa liên kết",
  },
  {
    TT: 9,
    Word: "Wheels - Tyres",
    Pronuncation: "/wiːlz / ˈtaɪəz/",
    meaning: "Bánh xe/lốp xe",
  },
  {
    TT: 10,
    Word: "The actual irregularities",
    Pronuncation: "/ði ˈækʧuəl ɪˌrɛɡjəˈlærətiz/",
    meaning: "Những bất thường thực tế",
  },
  {
    TT: 11,
    Word: "The actual vibration",
    Pronuncation: "/ði ˈækʧuəl vaɪˈbreɪʃən/",
    meaning: "Những giao động thực tế",
  },
  {
    TT: 12,
    Word: "Absorb",
    Pronuncation: "/əbˈzɔːb/",
    meaning: "Hấp thụ",
  },
  {
    TT: 13,
    Word: "Dampers-Shock Absorbers",
    Pronuncation: "/ˈdæmpəz/ʃɒk əbˈzɔːbəz/",
    meaning: "Bộ giảm chấn/Giảm sóc",
  },
  {
    TT: 14,
    Word: "Dissipate",
    Pronuncation: "/ˈdɪsɪpeɪt/",
    meaning: "Phân tán",
  },
  {
    TT: 15,
    Word: "The friction effect",
    Pronuncation: "/ðə ˈfrɪkʃən ɪˈfɛkt/",
    meaning: "Tác dụng ma sát",
  },
  {
    TT: 16,
    Word: "Semi rotary vane-type dampers",
    Pronuncation: "/ˈsɛmi 'rəʊtəri veɪn-taɪp ˈdæmpəz/",
    meaning: "Bộ giảm chấn cánh quạt bán phần",
  },
  {
    TT: 17,
    Word: "Affected by wear",
    Pronuncation: "/əˈfɛktɪd baɪ weə",
    meaning: "Ảnh hưởng bởi mài mòn",
  },
  {
    TT: 18,
    Word: "Reservoirs of energy",
    Pronuncation: "/ˈrɛzəvwɑːz ɒv ˈɛnəʤi/",
    meaning: "Lưu trữ năng lượng",
  },
  {
    TT: 19,
    Word: "A bump",
    Pronuncation: "/ə bʌmp/",
    meaning: "Sự va mạnh",
  },
  {
    TT: 20,
    Word: "The rigid suspension",
    Pronuncation: "/ðə ˈrɪʤɪd səˈspɛnʃən/",
    meaning: "Treo cứng",
  },
  {
    TT: 21,
    Word: "A jerk or bounce",
    Pronuncation: "/ə ʤɜːk ɔː baʊns/",
    meaning: "Giật hoặc bật lại",
  },
  {
    TT: 22,
    Word: "Strut",
    Pronuncation: "/strʌt/",
    meaning: "Tay đòn nối bánh xe với thân xe",
  },
  {
    TT: 23,
    Word: "Kinetic energy",
    Pronuncation: "/kɪˈnɛtɪk ˈɛnəʤi/",
    meaning: "Động năng",
  },
  {
    TT: 24,
    Word: "Potential energy",
    Pronuncation: "/pəˈtɛnʃəl ˈɛnəʤi/",
    meaning: "Thế năng",
  },
  {
    TT: 25,
    Word: "Anti Sway Bars-anti roll bars",
    Pronuncation: "/ˈænti sweɪ bɑːz/ˈænti-rəʊl bɑːz/",
    meaning: "Thanh chống xoay",
  },
  {
    TT: 26,
    Word: "Cornering conditions",
    Pronuncation: "/ˈkɔːnərɪŋ kənˈdɪʃənz/",
    meaning: "Điều kiện vào cua",
  },
  {
    TT: 27,
    Word: "Ball joints",
    Pronuncation: "/bɔːl ʤɔɪnts/",
    meaning: "Khớp bi",
  },
  {
    TT: 28,
    Word: "The grease lubrication",
    Pronuncation: "/ðə ɡriːs ˌluːbrɪˈkeɪʃən/",
    meaning: "Mỡ bôi trơn",
  },
  {
    TT: 29,
    Word: "Spindle",
    Pronuncation: "/ˈspɪndl/",
    meaning: "Trục chính",
  },
  {
    TT: 30,
    Word: "Backward inclination",
    Pronuncation: "/ˈbækwəd ˌɪnklɪˈneɪʃən/",
    meaning: "Nghiêng về sau",
  },
  {
    TT: 31,
    Word: "Isolate",
    Pronuncation: "/ˈaɪsəleɪt/",
    meaning: "Cách ly",
  },
  {
    TT: 32,
    Word: "Occupants",
    Pronuncation: "/ˈɒkjəpənts/",
    meaning: "Hành khách ngồi trên xe",
  },
  {
    TT: 33,
    Word: "The vertical movement",
    Pronuncation: "/ðə ˈvɜːtɪkəl ˈmuːvmənt/",
    meaning: "Chuyển động thẳng đứng",
  },
  {
    TT: 34,
    Word: "Pass over",
    Pronuncation: "/pɑːs ˈəʊvə/",
    meaning: "Vượt qua",
  },
  {
    TT: 35,
    Word: "Excessive shocks",
    Pronuncation: "/ɪkˈsɛsɪv ʃɒks/",
    meaning: "Chấn động mạnh",
  },
  {
    TT: 36,
    Word: "The undulations",
    Pronuncation: "/ði ˌʌndjʊˈleɪʃənz/",
    meaning: "Sự nhấp nhô",
  },
  {
    TT: 37,
    Word: "The leaf spring",
    Pronuncation: "/ðə liːf sprɪŋ/",
    meaning: "Lò xo lá",
  },
  {
    TT: 38,
    Word: "Stiff",
    Pronuncation: "/stɪf/",
    meaning: "Cứng đơ",
  },
  {
    TT: 39,
    Word: "Flexible",
    Pronuncation: "/ˈflɛksəbəl/",
    meaning: "Linh hoạt",
  },
  {
    TT: 40,
    Word: "An axle-locating device",
    Pronuncation: "/ən ˈæksəl-ləʊˈkeɪtɪŋ dɪˈvaɪs/",
    meaning: "Thiết bị định vị trục",
  },
  {
    TT: 41,
    Word: "The fixed shackle",
    Pronuncation: "/ðə fɪkst ˈʃækəl/",
    meaning: "Cùm cố định",
  },
  {
    TT: 42,
    Word: "The swinging shackle",
    Pronuncation: "/ðə ˈswɪŋɪŋ ˈʃækəl/",
    meaning: "Cùm dao động",
  },
  {
    TT: 43,
    Word: "The coil spring-The helical spring",
    Pronuncation: "/ðə kɔɪl sprɪŋ/ðə ˈhiːlɪkəl sprɪŋ/",
    meaning: "Lò xo vòng",
  },
  {
    TT: 44,
    Word: "Be tapered",
    Pronuncation: "/biː ˈteɪpəd/",
    meaning: "Được làm nhọn",
  },
  {
    TT: 45,
    Word: "The torsion bar",
    Pronuncation: "/ðə ˈtɔːʃən bɑː/",
    meaning: "Thanh xoắn",
  },
  {
    TT: 46,
    Word: "The ground clearance of the vehicle",
    Pronuncation: "/ðə ɡraʊnd ˈklɪərəns ɒv ðə ˈvɪəkəl/",
    meaning: "Khoảng sáng gầm xe",
  },
  {
    TT: 47,
    Word: "The stiffness",
    Pronuncation: "/ðə ˈstɪfnəs/",
    meaning: "Độ cứng",
  },
  {
    TT: 48,
    Word: "The air-spring",
    Pronuncation: "ði eə-sprɪŋ/",
    meaning: "Lò xo khí",
  },
  {
    TT: 49,
    Word: "An electrically powered compressor",
    Pronuncation: "/ən ɪˈlɛktrɪkəli ˈpaʊəd kəmˈprɛsə/",
    meaning: "Máy nén chạy bằng điện",
  },
  {
    TT: 50,
    Word: "Counteract",
    Pronuncation: "/kaʊntəˈrækt/",
    meaning: "Chống lại",
  },
  {
    TT: 51,
    Word: "Body tilt",
    Pronuncation: "/ˈbɒdi tɪlt/",
    meaning: "Nghiêng thân xe",
  },
  {
    TT: 52,
    Word: "A velocity sensitive hydraulic damping device",
    Pronuncation: "/ə vəˈlɒsəti ˈsɛnsɪtɪv haɪˈdrɔːlɪk ˈdæmpɪŋ dɪˈvaɪs/",
    meaning: "Thiết bị giảm chấn thủy lực thay đổi theo vận tốc",
  },
  {
    TT: 53,
    Word: "Power stroke",
    Pronuncation: "/ˈpaʊə strəʊk/",
    meaning: "Kỳ sinh công",
  },
];

let componentText = [
  {
    content:
      "A suspension system irrespective of their type has some main components in common that are:<br></br><strong>Knuckle or Upright: </strong> This is used to connect the wheels to the suspension system. It is mounted on the wheel’s hub. The suspension system is connected together with the linkages provided. The knuckle is having a caster angle and a king-pin on the front wheels which helps in steering of vehicle in left or right direction..<br></br><strong>Linkages: </strong> Linkages are like frame of suspension system. All the parts of suspension system are connected together with the help of linkages. These linkages have universal joints on their both ends which help in smooth connection between different components. On the basis of the type of suspension used linkages are of 3 types:<br></br>Wishbones or A-arm<br></brSolid axle or live axle<br></brMultiple links<br></br<strong>Wheels/ Tyres: </strong> Wheel or tyres are those components of suspension system which comes in contact with the actual irregularities of road. Wheels are the main components of automobile as well because they are eventually responsible for motion of automobile. When wheels come across surface irregularities of road they move up and down. This up and down motion causes the actual vibration in the body. To eliminate these vibrations suspension system is placed between body and wheels. The suspension system absorbs the vibrations and helps in comfort ride.<br></br><strong>Dampers/Shock Absorbers: </strong> Shock Absorber/Dampers are used to absorb the vibration and dissipate it in form of heat energy. Damping action energy is converted from one form or the other. In old days, the friction effect between two surfaces is used as a damping agent. Semi rotary vane-type dampers were also used. However, they were abandoned because the ratio of sealing length around their vanes to the volume displaced was so high that these units were rapidly adversely affected by wear.<br></br><strong>Springs: </strong> Springs act as reservoirs of energy. Springs store the energy when impact force which acts when the vehicle passes over irregularities of the road. It compresses the spring. This energy is released when spring expands subsequently and with the help of dampers, thus the energy is converted into heat and the shocks and bounce are absorbed.<br></br>When the vehicle hits a bump, the tire is suddenly pushed up. In the case of rigid suspension, the full force will be transferred to the carriage unit and push it up with almost no loss in force in the form of a jerk or bounce. However, when spring is present, the force which acts on the vehicle compresses the spring which absorbs the shock and avoids this from transfer to the vehicle frame.<br></br><strong>Strut:</strong> Strut is main component of suspension system. It is used in MacPherson Strut Assembly. Strut is basically the combination of spring and damper which is having two ends which will be attached to the frame and the wheel. Spring is used to store kinetic energy into potential energy and damper dissipates the kinetic energy into heat energy. Both these components works together to form a strut assembly. The size of spring used in strut depend upon the load capacity of the vehicle.<br></br><strong>Anti Sway Bars: </strong> These are also known as anti-roll bars. Anti sway bars play a key role in passenger comfort and vehicle stability to improve performance. Anti sway bars acts as one of the key components in a vehicle suspension system. As the name suggests their purpose is to reduce body roll or sway when operating under cornering conditions.<br></br><strong>Ball joints: </strong> Ball joints are the critical components of suspension system. It helps to connect different parts and linkages and allow them to move relative to other linkages. Ball joints consist of a metal housing and stud. The stud is able to swing and rotate within the housing. The grease lubrication is also provided in the socket of ball joint. Inside the housing bearings are provided which can be of metal or plastic. Two ends of ball joints are connected to housing and stud respectively.<br></br><strong>Spindle: </strong> Spindle enables to drive forward, backward, turn in both directions and brake. The basic function of a spindle is to allow an axle to rotate. The spindle also helps the vehicle to move in straight line by gearing which is called a castor. The castor is basically a forward and backward inclination that regulates the steering procedure.",
    title: "Figure 13.1. Major components of suspension system",
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
componentFunc("img131", componentText[0]);

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
        <source id = "audioSource" src = "../audio/vocabulary13/${audioName}.mp3"></source>
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
