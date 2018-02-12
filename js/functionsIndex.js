window.addEventListener("load", nameFunction )

//getting userName from authGit.js
var getUserName;
function updateDisplayName(setName) {
        getUserName = setName;
        console.log("Updating displayName")
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
        
        //empty message field
        mes.value = "";
   });

	//realtime, when database changes it posts a new snapshot
	db.ref().child("messages").on("value", snap => { 
        let obj = snap.val();
        let list = document.createElement("ul");
        let li = document.createElement("li");
        
        //loop through all the li´s and remove them
        let allTheLis = document.getElementsByTagName("li");
        for (let i; i < allTheLis.length; i++) {
            chatDiv.removeChild(i);
        };
        
        //loop through the database, create li´s and add them to chatDiv
        for( let x in obj ) {
            let date = obj[x].Date;
            let u = obj[x].User;
            let t = obj[x].Time;
            let m = obj[x].Message;
            let li = document.createElement("li");
            li.innerHTML = (date + "[" + t + "]" + u + ":" + m);
            chatDiv.appendChild(li);
        };
        //scroll to bottom of chatDiv
        chatDiv.scrollTop = chatDiv.scrollHeight;
    });        
};



