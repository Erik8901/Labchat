window.addEventListener("load", nameFunction)

function nameFunction() {
        
    let provider = new firebase.auth.GithubAuthProvider();   
    let login = document.getElementById("login");
    let logOut = document.getElementById("logOut")
   
    
        login.addEventListener("click", function(popUp) {
          
        logOut.disabled = false;
        login.disabled = true; 
            
              firebase.auth().signInWithPopup(provider).then(function(result) {
				//var user = result.user;
                //var email = user.email;
                
				console.log('Popup result: logged in as ');
				
			}).catch(function(fail) {
                console.log("fail")
            })
		
           
		});
    
        logOut.addEventListener("click", function(outlog) {
            
            logOut.disabled = true;
            login.disabled = false; 
                
            
        });         
    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            var displayName = user.displayName;
            console.log(displayName);
        } else {
            console.log("onAuthStateChanged: user is signed out")
        }
    })
    
}