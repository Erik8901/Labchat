 window.addEventListener("load", nameFunction )
        
        function nameFunction() {
    
        //let div1 = document.getElementById("box1");   
        let theUsers = document.getElementById("text1");
        let theTime = document.getElementById("text2");
        let userList = [];
        let getUserName = document.getElementById("userName");
        let datum = new Date();
        //let d = datum.getUTCDay();
        let h = datum.getHours();
        let m = datum.getMinutes();
        let btnMakeUser = document.getElementById("newUser");   
        let div1 = document.getElementById("boxUserName");
        let btnRoom = document.getElementById("btnChatRoom")
        let chatten = document.getElementById("theChat");
        let btnSend = document.getElementById("sendMsg");
        let mes = document.getElementById("msg");
<<<<<<< HEAD
        let chatDiv = document.getElementById("chatBox");   
        let msgSave = [];
        let msgList = document.createElement("ul");
        let med = document.createElement("li");
        

=======
        let chatDiv = document.getElementById("chatBox");
		const db = firebase.database();
>>>>>>> 31dc7bef2101224f1dc9842e3f9de336bc9585a2
            
        btnMakeUser.addEventListener("click", function(saveUser) {
                
                theUsers.style.color = "white";
                theUsers.innerHTML = "Your username is: " + getUserName.value;
                theTime.innerHTML = " login time: " + h+":"+m;
                userList.push(getUserName.value,h+":"+m);
                console.log(userList);
            
            
                
            
        
        });
            
<<<<<<< HEAD
=======
            chatten.style.display = "block";
			
>>>>>>> 31dc7bef2101224f1dc9842e3f9de336bc9585a2
            
            btnRoom.addEventListener("click", function(EnterTheChat) {
            
                    chatten.style.display = "block";
            
            });
            
            
       btnSend.addEventListener("click", function(SendToChat) {
<<<<<<< HEAD

           let x = getUserName.value;
           let t = h +":" + m
           let y = mes.value;
           let b = x + "[" + t + "]" + ":" + y
           
           chatDiv.innerHTML = getUserName.value +   mes.value 
          
           msgSave.push(b);
           //console.log(msgSave);
           msgSave.toString(); 
           chatDiv.innerHTML = msgSave;
               
           /* med.appendChild(document.createTextNode(msgSave));
            msgList.appendChild(med);
            chatDiv.innerHTML = med;
            */
       });
        
        
        
       
        
        
=======
		   //get currentTime when message sends
		   //let currentTime = new Date();
		   //TODO: add 0 to minutes and hours under 10.
           db.ref("messages/").push({"Time": h + ":" + m, "User": getUserName.value, "Message": mes.value});
           //chatDiv.innerHTML =  mes.value;    
       });
		//take snapshot, and print to console
        db.ref("/").on("value", function(snapshot) {
        console.log("On value: hämtar hela databasen.");
        let data = snapshot.val();
        console.log(data);
		});
			
		//realtime, when database changes it posts a new snapshot
		db.ref().child("messages").on("value", snap => chatDiv.innerHTML = JSON.stringify(snap.val()));
>>>>>>> 31dc7bef2101224f1dc9842e3f9de336bc9585a2
        
        };
            
        
        