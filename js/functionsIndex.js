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
   // let list = document.getElementById("msgList");

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
	   //TODO: add 0 to minutes and hours under 10.
	   db.ref("messages/").push({"Date": currentYear + ":" + currentMonth + ":"+ currentDate, "Time": currentHour + ":" + currentMinute, "User": getUserName, "Message": mes.value});  
       //console.log(db.ref);
   });

	//realtime, when database changes it posts a new snapshot
	db.ref().child("messages").on("value", snap => { 
        //chatDiv.innerHTML = JSON.stringify(snap.val())
        let obj = snap.val();
        //let list = document.getElementById("msgList");
        let list = document.createElement("ul");
        let li = document.createElement("li");
        
        //loop through all the li´s and remove them
        let allTheLis = document.getElementsByTagName("li");
       // console.log(allTheLis);
        for (let x of allTheLis) {
            chatDiv.removeChild(x);
        }
        
        for( let x in obj ) {
           // console.log('key: ' + x);         // 'key: a'
            //console.log('value: ' + obj[x]);  // 'value: exempel'
            //console.log('key: ' + x);         // 'key: a'
           // console.log('time: ' + obj[x].Time);  // 'value: exempel'
            //console.log('user: ' + obj[x].User);
            //console.log('message: ' + obj[x].Message);
            let date = obj[x].Date;
            let u = obj[x].User;
            let t = obj[x].Time;
            let m = obj[x].Message;
            
            //chatDiv.innerHTML = u +":" + t + m // Funkar att skriva ut div'n
           
            let li = document.createElement("li");

            
            li.innerHTML = (date + "[" + t + "]" + u + ":" + m);
            chatDiv.appendChild(li);
            //console.log(li);
        }
            chatDiv.scrollTop = chatDiv.scrollHeight;
            //li.innerHTML = (u +":" + t + ":" + m);
            //list.innerHTML += li;
            //console.log(li); 
        });        
    
    
    //console.log(list);
           
};



