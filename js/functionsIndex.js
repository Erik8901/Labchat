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
   // let list = document.getElementById("msgList");
   

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
<<<<<<< HEAD
	   //TODO: add 0 to minutes and hours under 10.
	   db.ref("messages/").push({"Time": currentTime.getHours() + ":" + currentTime.getMinutes(), "User": getUserName.value, "Message": mes.value});  
       //console.log(db.ref);
   });

	//realtime, when database changes it posts a new snapshot
	db.ref().child("messages").on("value", snap => { 
        //chatDiv.innerHTML = JSON.stringify(snap.val())
        let obj = snap.val();
        let list = document.getElementById("msgList");
        //let list = document.createElement("ul");
        //let li = document.createElement("li");
        for( let x in obj ) {
           // console.log('key: ' + x);         // 'key: a'
            //console.log('value: ' + obj[x]);  // 'value: exempel'
            //console.log('key: ' + x);         // 'key: a'
           // console.log('time: ' + obj[x].Time);  // 'value: exempel'
            //console.log('user: ' + obj[x].User);
            //console.log('message: ' + obj[x].Message);
        
            
            let u = obj[x].User;
            let t = obj[x].Time;
            let m = obj[x].Message;
            //chatDiv.innerHTML = u +":" + t + m // Funkar att skriva ut div'n
           
           
            let li = document.createElement("li");
            li.innerHTML = (u +":" + t + ":" + m);
            list.innerHTML += li;
            console.log(li);
            
            
        
        
        }
        
        
        //console.log(list);
     chatDiv.scrollTop = chatDiv.scrollHeight;   
});
    
   
    
    
   
   
=======
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
>>>>>>> e4392c5511e623a9889c8701e256866a27d0d764
};


