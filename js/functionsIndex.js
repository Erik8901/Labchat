 window.addEventListener("load", nameFunction )
var getUserName
function updateDisplayName(setName) {
        getUserName = setName;
        console.log("nu uppdateas displayName")
    } 

function nameFunction() { 
	let theUsers = document.getElementById("text1");
	let theTime = document.getElementById("text2");
	let userList = [];
	let datum = new Date();
	let h = datum.getHours();
	let m = datum.getMinutes();   
    let year = datum.getFullYear();
    let date = datum.getDate();
    let month = datum.getMonth();
	let div1 = document.getElementById("boxUserName");
	let btnRoom = document.getElementById("btnChatRoom")
	let chatten = document.getElementById("theChat");
	let btnSend = document.getElementById("sendMsg");
    let div2 = document.getElementById("div2");
	let mes = document.getElementById("msg");
	let chatDiv = document.getElementById("chatBox");   
	const db = firebase.database();
    let signedInDiv = document.getElementById("signedInUser");

	btnRoom.addEventListener("click", function(EnterTheChat) {
        
        if(chatDiv.style.display === "none") {
            chatDiv.style.display = "block";
        } else {
            chatDiv.style.display = "none";
        }
        
        if(div2.style.display === "none") {
            div2.style.display = "block";
        } else {
            div2.style.display = "none";
        }
        
        if(btnSend.style.display === "none") {
            btnSend.style.display = "inline-block";
        } else {
            btnSend.style.display = "none";
        }
	});

   btnSend.addEventListener("click", function(SendToChat) {

	   //get currentTime when message sends
	   let currentTime = new Date();
       let addZero = num => {
            if (num < 10) {
                return 0 + String(num);
            } else {
                return num;
            }
        };
        let currentMonth = addZero(currentTime.getMonth()+1);
        let currentDate = addZero(currentTime.getDate());
        let currentYear = currentTime.getFullYear();
        let currentHour = addZero(currentTime.getHours());
        let currentMinute = addZero(currentTime.getMinutes());
       
        //push to database
        db.ref("messages/").push({"Date": currentYear + ":" + currentMonth + ":"+ currentDate, "Time": currentHour + ":" + currentMinute, "User": getUserName, "Message": mes.value});  
   });

	//realtime, when database changes it posts a new snapshot
	db.ref().child("messages").on("value", snap => { 
        let obj = snap.val();
        let list = document.createElement("ul");
        let li = document.createElement("li");
        
        //loop through all the li´s and remove them
        let allTheLis = document.getElementsByTagName("li");
        for (let x of allTheLis) {
            chatDiv.removeChild(x);
        }
        //loop through the database, create li´s and add them to chatDiv
        for( let x in obj ) {
            let date = obj[x].Date;
            let u = obj[x].User;
            let t = obj[x].Time;
            let m = obj[x].Message;
            let li = document.createElement("li");
            li.innerHTML = (date + "[" + t + "]" + u + ":" + m);
            chatDiv.appendChild(li);
        }
            chatDiv.scrollTop = chatDiv.scrollHeight;
    });        
};



