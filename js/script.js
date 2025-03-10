        "use strict";

        // Lấy dữ liệu từ vựng 
        import vocabularyData from "../data/data-vocabulary1.json" with { type: "json" };
        import multichoiceData from "../data/multichoice-data.json" with { type: "json" };

        const componentBox = document.getElementById('component');

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
        componentFunc('img12');

        // Gọi hàm hiển thị bảng từ vựng
        renderTable(vocabularyData);

        // hiển thị câu hỏi phần multichoice
        addQuestion(multichoiceData,questionBox)
        
        //Hiển thị câu hỏi phần fillofblank
        addQuestion(multichoiceData,fillBox)
          
          multichoicePoint.addEventListener("click", function(){
            scores = 0;
            ShowResult();
            result.innerHTML = "Bạn đã trả lời đúng " + scores +"/5" + " câu hỏi."
          } );

          //const fillanswer = ShowResult(fillResult);
        btnFillAnswer.addEventListener("click", function(){
          scores = 0;
            ShowResult();
            fillResult.innerHTML = "Bạn đã trả lời đúng " + scores +"/5" + " câu hỏi."
          } );
 //================ PHẦN 1 COMPONENT ================================================//   // 
  // ////=================================================================================//                                                       
// Hàm add nội dung component
  function componentFunc(imgsrc){
        componentBox.innerHTML = '';
        const div  = document.createElement('div');
        div.innerHTML= ` <h1  class = "w3-xxxlarge w3-text-red"><b>Component.</b></h1>
          <hr  style = "width: 50px; border: 5px solid green" class = "w3-round" />
          <img src   = "../image/${imgsrc}.png" alt                 = "" usemap = "#b12" style = "width: 100%" />
          <map name  = "b12"
          ><area
          shape  = "rect"
          coords = "185,780,247,826"
          href   = ""
          title  = "Bàn đạp ly hợp"
          /></map>`
        componentBox.appendChild(div)
  }
      //===================================================================================//
      //================ PHẦN 2 TỪ VỰNG ===================================================//
        // Tạo hàm render bảng từ vựng
        function renderTable(data){
            let table = document.getElementById('tbody');
            table.innerHTML = '';
            for(let i = 0; i<data.length; i++){
                      //let row = table.insertRow(0);
                let row   = table.insertRow(0);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);

                cell1.innerHTML = data[i].Word;
                cell2.innerHTML = data[i].Pronuncation;

                let audioName  = (data[i].Word).toString();
                    cell3.innerHTML = `<audio id="audio" controls="controls">
                <source id = "audioSource" src = "../audio/vocabylary1/${audioName}.mp3"></source>
                </audio>`;
                cell4.innerHTML = data[i].meaning;
            }
        }


      //====================================================================================//
      //================ PHẦN 3 BÀI TẬP FILL AND MULTICHOICE ===============================//

        // Tạo hàm hiển thị câu hỏi Fill of blank
        function addQuestion (data,boxName){
            //tạo div
            boxName.innerHTML = '';
            for(let i = 0; i < 5 ; i++){
            const div = document.createElement("div");
            div.innerHTML = `
            <form id="mainForm${i+1}" name="mainForm${i+1}">
              <h3>${data[i].question}</h3>
                    <div class = "radioBox">
                    <input type  = "radio" id = "DAA${i}" name = "question${i+1}" value = "1" />
                    <label for   = "DAA${i}">${data[i].A}</label><br />
                    </div>
                    <div class = "radioBox">
                    <input type = "radio" id = "DAB${i}" name = "question${i+1}" value = "2" />
                    <label for  = "DAB${i}">${data[i].B}</label><br />
                    </div>
                    <div class = "radioBox">
                    <input type = "radio" id = "DAC${i}" name = "question${i+1}" value = "3" />
                    <label for  = "DAC${i}">${data[i].C}</label><br />
                    </div>
                    <div class = "radioBox">
                    <input type = "radio" id = "DAD${i}" name = "question${i+1}" value = "4" />
                    <label for  = "DAD${i}">${data[i].D}</label><br />
                    </div>
                  </form>`;
            boxName.appendChild(div);
            }
        }

      // 

        // Hàm hiển thị kết quả các câu trả lời khi ấn button 
        function ShowResult(){
            let   els         = document.querySelectorAll('form');
            let   countArray  = [0,0,0,0,0];
            const answerArray = [];
            let ans = false;
            const div         = document.querySelectorAll('.radioBox');
            // xoá class wright
            div.forEach(e=>{
              e.classList.remove("wright");
              e.classList.remove("wrong");
            })

            for(let i = 0; i < 5 ; i++){
                  answerArray.push(multichoiceData[i].answer)
                  let formName = els[i].name;
                  let inputQuestion = document.getElementsByName(`question${i+1}`);
                inputQuestion.forEach(e => {
                  if (e.checked) {
                    const parentNode = e.parentElement;
                    countArray [i] = e.value;
                    countArray[i] == answerArray[i]? parentNode.classList.add("wright") : parentNode.classList.add("wrong")
                  }
                });  
          }
          compareArray(countArray,answerArray)
          
        }

        //Hàm so sánh 2 mảng
          function compareArray(a,b){
            for(let i = 0; i < a.length; i++){
              if(a[i] == b[i]) scores++
            }
            //console.log(scores) 
          }
        
      //===================================================================================//
      //================ PHẦN 4 DIALOGUE ===================================================//
        // Điều khiển video
        playPause.addEventListener("click", function() {
          if (video.paused == true) {
            // Play the video
            video.play();

            // Update the button text to 'Pause'
            playPause.classList.toggle('pause');
            playPause.textContent = "pause";
          } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
          playPause.classList.toggle('play');
          playPause.textContent = "play";
          }
        });