window.addEventListener("load", nameFunction)


function nameFunction() {
        
    let provider = new firebase.auth.GithubAuthProvider();   
    let login = document.getElementById("login");
    let logOut = document.getElementById("logOut")
    let signedInUser = document.getElementById("signedInUser");
    let photoURL;
    let displayName;
    let signedInDiv = document.getElementById("signedInUser");
    
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
    });

    logOut.addEventListener("click", function(outlog) {
        signedInDiv.style.display = "none;
        firebase.auth().signOut().then(function (result) {
            console.log("Signout success!");
            signedInUser.removeChild(document.getElementsByTagName("h2")[0])
            signedInUser.removeChild(document.getElementsByTagName("img")[0])
        }).catch(function (err){
            console.log("Signout failed");
        })
    });   

    firebase.auth().onAuthStateChanged(function(user) {
        if (user != null) {
            updateDisplayName(displayName);
            logOut.disabled = false;
            login.disabled = true; 
            let h3 = document.createElement("h3");
            h3.innerHTML = "Signed in as: " +displayName;
            signedInUser.appendChild(h3);

            let img = document.createElement("img");
            img.setAttribute("src", photoURL);
            img.style.width = "30px";
            signedInUser.appendChild(img);

            console.log("Login success!, displayName: " + displayName);
            console.log("Find his sexy photo: " + photoURL);
        } else {
            logOut.disabled = true;
            login.disabled = false; 
            console.log("onAuthStateChanged: user is signed out")
        }
    })
}