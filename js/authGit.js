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
        
        signedInDiv.style.display = "block";
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            var user = result.user;
            displayName = user.displayName;
            photoURL = user.photoURL;
            console.log(user);

        }).catch(function(fail) {
            console.log("fail")
        })
        
        chatDiv.style.display = "block";
        chatten.style.display = "block";
        div2.style.display = "block";
        btnSend.style.display = "block";
    
    });
    
  
    
    
    

    logOut.addEventListener("click", function(outlog) {
        signedInDiv.style.display = "none";
        firebase.auth().signOut().then(function (result) {
            console.log("Signout success!");
            signedInUser.removeChild(document.getElementsByTagName("h2")[0])
            signedInUser.removeChild(document.getElementsByTagName("img")[0])
        }).catch(function (err){
            console.log("Signout failed");
        })
            chatDiv.style.display = "none";
            chatten.style.display = "none";
            div2.style.display = "none";
            btnSend.style.display = "none";
        
    });   

    firebase.auth().onAuthStateChanged(function(user) {
        if (user != null) {
            updateDisplayName(displayName);
            logOut.disabled = false;
            login.disabled = true;
            //add h3 
            let h3 = document.createElement("h3");
            h3.innerHTML = "Signed in as: " +displayName;
            signedInUser.appendChild(h3);
            //add img
            let img = document.createElement("img");
            img.setAttribute("src", photoURL);
            signedInUser.appendChild(img);

            console.log("Login success!, displayName: " + displayName);
            console.log("Find photo: " + photoURL);
        } else {
            logOut.disabled = true;
            login.disabled = false; 
            console.log("onAuthStateChanged: user is signed out")
        }
    })
}