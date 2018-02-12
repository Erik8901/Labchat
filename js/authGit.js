window.addEventListener("load", nameFunction)

function nameFunction() {
    
    let provider = new firebase.auth.GithubAuthProvider();   
    let login = document.getElementById("login");
    let logOut = document.getElementById("logOut")
    let signedInUser = document.getElementById("signedInUser");
    let photoURL;
    let displayName;
    let signedInDiv = document.getElementById("signedInUser");
    let btnSend = document.getElementById("sendMsg");
    let chatDiv = document.getElementById("chatBox"); 
    let btnRoom = document.getElementById("btnChatRoom")
    let div2 = document.getElementById("div2");
    let chatten = document.getElementById("theChat");
    
    login.addEventListener("click", function(popUp) {          
        firebase.auth().signInWithPopup(provider).then(function(result) {            
            console.log("Sign in success!")
            
            //show div and store user data
            signedInDiv.style.display = "block";
            var user = result.user;
            displayName = user.displayName;
            photoURL = user.photoURL;  
            
            //open chat
            chatDiv.style.display = "block";
            chatten.style.display = "block";
            div2.style.display = "block";
            btnSend.style.display = "block";
            chatDiv.scrollTop = chatDiv.scrollHeight;
            
            //disable login, enable logout
            logOut.disabled = false;
            login.disabled = true;
            
            //update displayname to enable writing to database
            updateDisplayName(displayName);
            
            //add h3 
            let h3 = document.createElement("h3");
            h3.innerHTML = "Signed in as: " +displayName;
            signedInUser.appendChild(h3);
            
            //add img
            let img = document.createElement("img");
            img.setAttribute("src", photoURL);
            signedInUser.appendChild(img);

        }).catch(function(fail) {
            console.log("Sign in failed")
        })
    });

    logOut.addEventListener("click", function(outlog) {
        firebase.auth().signOut().then(function (result) {
            console.log("Sign out success!");
            
            //hide div and remove text, name and img of user
            signedInDiv.style.display = "none";
            signedInUser.removeChild(document.getElementsByTagName("h3")[0])
            signedInUser.removeChild(document.getElementsByTagName("img")[0])
            
            //hide chat
            chatDiv.style.display = "none";
            chatten.style.display = "none";
            div2.style.display = "none";
            btnSend.style.display = "none";
            
            //enable login and disable logout
            logOut.disabled = true;
            login.disabled = false; 
            
        }).catch(function (err){
            console.log("Sign out failed");
        })        
    });   
}