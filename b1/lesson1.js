"use strict";

// Lấy dữ liệu từ vựng
//import { vocabularyData, multichoiceData } from "../data/data.js";

let multichoiceData = [
  {
    TT: 1,
    question: "1. What is the main topic of the passage?",
    A: "The history of military vehicles",
    B: "The classification of automobiles",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    answer: 3,
  },
  {
    TT: 2,
    question: "2. What is NOT mentioned as a way to classify automobiles?",
    A: "Size",
    B: "Color",
    C: "Number of doors",
    D: "Intended use",
    answer: 2,
  },
  {
    TT: 3,
    question: "3. What is the purpose of a military truck?",
    A: "To transport passengers in comfort",
    B: "To carry goods for civilians",
    C: "To transport troops and supplies to the battlefield",
    D: "To be used as a personal vehicle for soldiers",
    answer: 3,
  },
  {
    TT: 4,
    question: "4. What types of engines are commonly used in military trucks?",
    A: "Electric engines",
    B: "Steam engines",
    C: "Gasoline engines",
    D: "Both b and c",
    answer: 3,
  },
  {
    TT: 5,
    question: '5. What does the word "camouflaged" in the passage mean?',
    A: "Painted in bright colors",
    B: "Disguised to blend in with the surroundings",
    C: "Decorated with military symbols",
    D: "Equipped with advanced technology",
    answer: 2,
  },
  {
    TT: 6,
    question:
      "1. The passage mainly focuses on the characteristics and purpose of _______________",
    A: "passenger cars",
    B: "Trucks",
    C: "Military vehicles",
    D: "SUVs",
    answer: 3,
  },
  {
    TT: 7,
    question:
      "2. The author states that most automobiles operate based on _______________",
    A: "Electricity",
    B: "Solar",
    C: "Internal combustion",
    D: "Steam power",
    answer: 3,
  },
  {
    TT: 8,
    question:
      "3. Military trucks are designed to carry _______________ and _______________.",
    A: "Passengers, goods",
    B: "Troops, supplies",
    C: "Weapons, ammunition",
    D: "Fuel, equipment",
    answer: 2,
  },
  {
    TT: 9,
    question:
      '4. The word "inconspicuous" in the passage means _______________',
    A: "Bright and colorful",
    B: "Not easily noticed",
    C: "Heavily armored",
    D: "Very fast",
    answer: 2,
  },
  {
    TT: 10,
    question:
      "5. Military trucks can have a varying number of _______________, depending on their size and design",
    A: "Doors",
    B: "Seats",
    C: "Wheels",
    D: "Engines",
    answer: 3,
  },
];

let vocabularyData = [
  {
    TT: 1,
    Word: "Automobile engineering",
    Pronuncation: "/ˈɔːtəməbiːl ˌɛnʤɪˈnɪərɪŋ/",
    meaning: "Kỹ thuật ô tô",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 2,
    Word: "Deal with",
    Pronuncation: "/diːl wɪð/",
    meaning: "Đề cập đến",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 3,
    Word: "Mechanism",
    Pronuncation: "/ˈmɛkənɪzəm/",
    meaning: "Cơ chế",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 4,
    Word: "Transmission system",
    Pronuncation: "/trænzˈmɪʃən ˈsɪstəm/",
    meaning: "Hệ thống dẫn động",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 5,
    Word: "Types of vehicles",
    Pronuncation: "/taɪps ɒv ˈvɪəkəlz/",
    meaning: "Các loại phương tiện vận chuyển",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 6,
    Word: "Transportation",
    Pronuncation: "/tɑːɪps ɒviː ˈviːɪəkeɪəlz/",
    meaning: "Sự vận chuyển",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 7,
    Word: "Principle of internal combustion processes",
    Pronuncation: "/ˈprɪnsəpəl ɒv ɪnˈtɜːnəl kəmˈbʌsʧən ˈprəʊsɛsɪz/",
    meaning: "Nguyên lý quá trình cháy bên trong",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 8,
    Word: "Internal combustion engine",
    Pronuncation: "/ɪnˈtɜːnəl kəmˈbʌsʧən ˈɛnʤɪn/",
    meaning: "Động cơ đốt trong",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 9,
    Word: "Applications",
    Pronuncation: "/æplɪˈkeɪʃənz/",
    meaning: "Các ứng dụng",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 10,
    Word: "Driver",
    Pronuncation: "/ˈdraɪvə/",
    meaning: "Lái xe",
    C: "An overview of military vehicles and their features",
    D: "The importance of automobile engineering",
    anwser: "C",
  },
  {
    TT: 11,
    Word: "Carry",
    Pronuncation: "/ˈkæri/",
    meaning: "Chở",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 12,
    Word: "Cargo",
    Pronuncation: "/ˈkɑːɡəʊ/",
    meaning: "Hàng hóa",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 13,
    Word: "Omnibuses",
    Pronuncation: "/ˈɒmnɪbəsɪz/",
    meaning: "Xe buýt 2 tầng",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 14,
    Word: "Pickups",
    Pronuncation: "/ˈpɪkʌps/",
    meaning: "Các xe bán tải",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 15,
    Word: "Van",
    Pronuncation: "/væn/",
    meaning: "Xe tải nhỏ có khoang sau để chở người hoặc chở hàng",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 16,
    Word: "Sport-utility vehicles (SUV)",
    Pronuncation: "/spɔːt-juːˈtɪləti ˈvɪəkəlz/",
    meaning: "Xe thể thao đa dụng",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 17,
    Word: "Fuels",
    Pronuncation: "/ˈfjuːəlz/",
    meaning: "Các loại nhiên liệu",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 18,
    Word: "Burnt",
    Pronuncation: "/bɜːnt/",
    meaning: "Cháy",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 19,
    Word: "Military vehicles",
    Pronuncation: "/ˈmɪlɪtəri ˈvɪəkəlz/",
    meaning: "Các phương tiện vận tải quân sự",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 20,
    Word: "Land-based military transport",
    Pronuncation: "/lænd-beɪst ˈmɪlɪtəri ˈtrænspɔːt/",
    meaning: "Hoạt động quân sự trên bộ",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 21,
    Word: "Combat vehicles",
    Pronuncation: "/ˈkɒmbæt ˈvɪəkəlz/",
    meaning: "Xe chiến đấu",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 22,
    Word: "Armed forces",
    Pronuncation: "/ɑːmd ˈfɔːsɪz/",
    meaning: "Lực lượng vũ trang",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 23,
    Word: "Amphibious vehicles",
    Pronuncation: "/æmˈfɪbiəs ˈvɪəkəlz/",
    meaning: "Xe lội nước",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 24,
    Word: "Camouflage",
    Pronuncation: "/ˈkæməflɑːʒ/",
    meaning: "Sự ngụy trang",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 25,
    Word: "Troops",
    Pronuncation: "/truːps/",
    meaning: "Binh lính",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 26,
    Word: "Military supplies",
    Pronuncation: "/ˈmɪlɪtəri səˈplaɪz/",
    meaning: "Quân nhu",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 27,
    Word: "Battlefield",
    Pronuncation: "/ˈbætəlfiːld/",
    meaning: "Chiến trường",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 28,
    Word: "Technical characteristics",
    Pronuncation: "/ˈtɛknɪkəl ˌkærəktəˈrɪstɪks/",
    meaning: "Tính năng kỹ thuật",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 29,
    Word: "Chassis",
    Pronuncation: "/ˈʃæsi/",
    meaning: "Khung xe",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 30,
    Word: "Motor",
    Pronuncation: "/ˈməʊtə/",
    meaning: "Động cơ",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 31,
    Word: "Transmission",
    Pronuncation: "/trænzˈmɪʃən/",
    meaning: "Hộp số",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 32,
    Word: "Cabin",
    Pronuncation: "/ˈkæbɪn/",
    meaning: "Khoang lái",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 33,
    Word: "Equipment",
    Pronuncation: "/ɪˈkwɪpmənt/",
    meaning: "Thiết bị",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 34,
    Word: "Axle",
    Pronuncation: "/ˈæksəl/",
    meaning: "Cầu xe",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 35,
    Word: "Suspension system",
    Pronuncation: "/səˈspɛnʃən ˈsɪstəm/",
    meaning: "Hệ thống treo",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 36,
    Word: "Direction system",
    Pronuncation: "/daɪˈrɛkʃən ˈsɪstəm/",
    meaning: "Hệ thống dẫn hướng",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 37,
    Word: "Transmission system",
    Pronuncation: "/trænzˈmɪʃən ˈsɪstəm/",
    meaning: "Hệ thống truyền lực",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 38,
    Word: "Electrical system",
    Pronuncation: "/ɪˈlɛktrɪkəl ˈsɪstəm/",
    meaning: "Hệ thống điện",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 39,
    Word: "Pneumatic system",
    Pronuncation: "/njuːˈmætɪk ˈsɪstəm/",
    meaning: "Hệ thống khí nén",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 40,
    Word: "Hydraulic system",
    Pronuncation: "/haɪˈdrɔːlɪk ˈsɪstəm/",
    meaning: "Hệ thống thủy lực",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 41,
    Word: "Cooling system",
    Pronuncation: "/ˈkuːlɪŋ ˈsɪstəm/",
    meaning: "Hệ thống làm mát",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 42,
    Word: "Brake system",
    Pronuncation: "/breɪk ˈsɪstəm/",
    meaning: "Hệ thống phanh",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 43,
    Word: "Gasoline engine",
    Pronuncation: "/ˈɡæsəliːn ˈɛnʤɪn/",
    meaning: "Động cơ xăng",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 44,
    Word: "Diesel engine",
    Pronuncation: "/ˈdiːzəl ˈɛnʤɪn/",
    meaning: "Động cơ diesel",
    C: null,
    D: null,
    anwser: null,
  },
  {
    TT: 45,
    Word: "Four-wheel drive (4x4) vehicles",
    Pronuncation: "/fɔː-wiːl draɪv (4ɛks4) ˈvɪəkəlz/",
    meaning: "Xe bốn bánh chủ động",
    C: null,
    D: null,
    anwser: null,
  },
];

let words = [
  {
    word: "1. Indicator (turn signal lamp)",
    meaning: "Đèn xi nhan (đèn báo rẽ)",
  },
  {
    word: "2. Headlights",
    meaning: "Đèn pha",
  },
  {
    word: "3. Front grilles",
    meaning: "Lưới chắn trước",
  },
  {
    word: "4. Front panel",
    meaning: "Nắp trước xe",
  },
  {
    word: "5. Outside mirrors",
    meaning: "Gương chiếu hậu",
  },
  {
    word: "6. High beam",
    meaning: "Đèn chiếu xa",
  },
  {
    word: "7.Windscreen (windshield)",
    meaning: "Kính chắn gió",
  },
  {
    word: "8. Maker lights",
    meaning: "Đèn nóc",
  },
  {
    word: "9.  Roof panels",
    meaning: "Mui xe",
  },
  {
    word: "10. Air filter",
    meaning: "Bầu lọc gió",
  },
  {
    word: "11. Windshield wipers",
    meaning: "Cần gạt nước",
  },
  {
    word: "12. Window",
    meaning: "Cửa sổ",
  },
  {
    word: "13. Door",
    meaning: "Cửa",
  },
  {
    word: "14. Door handle",
    meaning: "Tay nắm cửa",
  },
  {
    word: "15. Spare tire",
    meaning: "Lốp dự phòng",
  },
  {
    word: "16. Tarpaulin truck cover",
    meaning: "Bạt phủ thùng",
  },
  {
    word: "17. Rear wheel",
    meaning: "Bánh xe sau",
  },
  {
    word: "18. Truck body",
    meaning: "Thùng xe",
  },
  {
    word: "19. Rear axle",
    meaning: "Cầu sau",
  },
  {
    word: "20. Exhaust pipe",
    meaning: "Ống xả",
  },
  {
    word: "21. Fuel tank",
    meaning: "Thùng nhiên liệu",
  },
  {
    word: "22. Fuel tank cap",
    meaning: "Nắp thùng nhiên liệu",
  },
  {
    word: "23. Mudguard",
    meaning: "Tấm chắn bùn",
  },
  {
    word: "24. Wheel",
    meaning: "Vành xe",
  },
  {
    word: "25. Tyre",
    meaning: "Lốp xe",
  },
  {
    word: "26. Fender",
    meaning: "Tấm bảo vệ",
  },
  {
    word: "27. Step",
    meaning: "Bậc lên xuống",
  },
  {
    word: "28. Low beam",
    meaning: "Đèn chiếu gần",
  },
  {
    word: "29. Front axle",
    meaning: "Cầu trước",
  },
  {
    word: "30. Bumper",
    meaning: "Cản trước",
  },
  {
    word: "31. Tail lights",
    meaning: "Đèn kích thước",
  },
  {
    word: "32. Number plate",
    meaning: "Biển số",
  },
  // {
  //   word: "33. Fog lamp",
  //   meaning: "Đèn sương mù",
  // },
];

let word12 = [
  {
    word: "1. Clutch pedal",
    meaning: "Bàn đạp ly hợp",
  },
  {
    word: "2. Steering wheel",
    meaning: "Vô lăng",
  },
  {
    word: "3. Gear shift lever",
    meaning: "Cần chuyển số",
  },
  {
    word: "4. Brake pedal",
    meaning: "Bàn đạp phanh",
  },
  {
    word: "5. Accelerator pedal",
    meaning: "Bàn đạp ga",
  },
  {
    word: "6. Auxiliary brake control button",
    meaning: "Nút nhấn phanh bổ trợ",
  },
  {
    word: "7,14. Warning lamp check button",
    meaning: "Nút kiểm tra đèn cảnh báo",
  },
  {
    word: "8, 9. Interwheel differential lock warning lamp",
    meaning: "Đèn báo khóa vi sai cầu",
  },
  {
    word: "10. Interaxle differential lock warning lamp",
    meaning: "Đèn báo khóa vi sai trung tâm",
  },
  {
    word: "11,12. Trailer direction indicator warning lamp",
    meaning: "Đèn báo rẽ xe rơ moóc",
  },
  {
    word: "13. Oil pressure lamp",
    meaning: "Đèn báo áp suất dầu bôi trơn",
  },
  {
    word: "16,17,18,19. Air pressure warning lamp",
    meaning: "Đèn báo áp suất phanh mạch phanh 1,2,3,4",
  },
  {
    word: "20. Parking light (stop light)",
    meaning: "Đèn dừng",
  },
  {
    word: "21. Central light switch",
    meaning: "Công tắc đèn trung tâm",
  },
  {
    word: "22. Hazard system switch",
    meaning: "Công tắc đèn cảnh báo (ưu tiên)",
  },
  {
    word: "23. Tachograph",
    meaning: "Đồng hồ tốc độ",
  },
  {
    word: "24. Tachometer",
    meaning: "Đồng hồ vòng tua máy",
  },
  {
    word: "25. Instrument cluster",
    meaning: "Cụm tổ hợp đồng hồ chỉ báo",
  },
  {
    word: "26. Board light sdjusting switch",
    meaning: "Núm chỉnh độ sáng bảng táp lô",
  },
  {
    word: "27. Pressure gauge",
    meaning: "Đồng hồ đo áp suất",
  },
  {
    word: "28. Plug",
    meaning: "Nút",
  },
  {
    word: "29. Battery remote switch",
    meaning: "Công tắc ngắt kết nối ắc quy",
  },
  {
    word: "30. Cab heater control",
    meaning: "Điều khiển sưởi trong buồng lái",
  },
  {
    word: "31. Glow plug switch",
    meaning: "Công tắc xông máy",
  },
  {
    word: "32. Engine stop knob",
    meaning: "Nút dừng động cơ",
  },
  {
    word: "33. Interaxle differential lock control lever",
    meaning: "Khóa vi sai giữa các trục",
  },
  {
    word: "34. Manual fuel supply control knob",
    meaning: "Nút điều khiển cấp nhiên liệu bằng tay",
  },
  {
    word: "35. Parking brake valve control lever",
    meaning: "Cần điều khiển van phanh dừng",
  },
  {
    word: "36. Power take-off switch",
    meaning: "Công tắc trích công suất",
  },
  {
    word: "37. Ass tray",
    meaning: "Gạt tàn thuốc",
  },
  {
    word: "38. Seat",
    meaning: "Ghế lái",
  },
  {
    word: "39. Horn",
    meaning: "Còi xe",
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
//componentFunc("img1");
//const word1 = words.reverse();
renderWord(words, "tword1");
renderWord(word12, "tword2");

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
  <map name  = "b12"
  ><area
  shape  = "rect"
  coords = "185,780,247,826"
  href   = ""
  title  = "Bàn đạp ly hợp"
  /></map>`;
  componentBox.appendChild(div);
}
//===================================================================================//
//================ PHẦN 2 TỪ VỰNG ===================================================//
// Tạo hàm render bảng từ vựng
function renderWord(data, id) {
  let table = document.getElementById(id);
  table.innerHTML = "";
  for (let i = 0; i < data.length; i = i + 2) {
    //let row = table.insertRow(0);
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = data[i].word ?? "";
    cell2.innerHTML = data[i].meaning ?? "";
    //data[i + 1].word ?? "a";
    cell3.innerHTML = data[i + 1].word ?? "a";
    cell4.innerHTML = data[i + 1].meaning ?? "a";
  }
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
        <source id = "audioSource" src = "../audio/vocabulary1/${audioName}.mp3"></source>
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
