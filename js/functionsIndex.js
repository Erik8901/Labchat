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
        let chatDiv = document.getElementById("chatBox");   
            
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
           
           chatDiv.innerHTML =  mes.value;
           
       }) 
        
        
        
        };
        