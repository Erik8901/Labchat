 window.addEventListener("load", nameFunction )

function nameFunction() { 
	let theUsers = document.getElementById("text1");
	let theTime = document.getElementById("text2");
	let userList = [];
	let getUserName = document.getElementById("userName");
	let datum = new Date();
	let h = datum.getHours();
	let m = datum.getMinutes();
	let btnMakeUser = document.getElementById("newUser");   
	let div1 = document.getElementById("boxUserName");
	let btnRoom = document.getElementById("btnChatRoom")
	let chatten = document.getElementById("theChat");
	let btnSend = document.getElementById("sendMsg");
	let mes = document.getElementById("msg");
	let chatDiv = document.getElementById("chatBox");   
	const db = firebase.database();

	btnMakeUser.addEventListener("click", function(saveUser) {
		theUsers.style.color = "white";
		theUsers.innerHTML = "Your username is: " + getUserName.value;
		theTime.innerHTML = " login time: " + h+":"+m;
		userList.push(getUserName.value,h+":"+m);
		console.log(userList);
	});

	btnRoom.addEventListener("click", function(EnterTheChat) {
			chatten.style.display = "block";
	});

   btnSend.addEventListener("click", function(SendToChat) {
	   //get currentTime when message sends
	   let currentTime = new Date();
       let addZero = num => {
         if (num < 10) {
             return 0 + String(num);
         }  
       };
	   let currentHour = addZero(currentTime.getHours());
	   let currentMinute = addZero(currentTime.getMinutes());
	   
       //send message to database
	   db.ref("messages/").push({"Time": currentHour + ":" + currentMinute, "User": getUserName.value, "Message": mes.value});  
   });

	//realtime, when database changes it posts a new snapshot
	db.ref().child("messages").on("value", snap => chatDiv.innerHTML = JSON.stringify(snap.val()));
};


