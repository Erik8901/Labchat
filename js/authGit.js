window.addEventListener("load", nameFunction)

function nameFunction() {
        
    let provider = new firebase.auth.GithubAuthProvider();
    let btnGit = document.getElementById("login");
   // let link =  "https://github.com/login/oauth/authorize=client_id";
    
        btnGit.addEventListener("click", function(popUp) {
            
          firebase.auth().signInWithPopup(provider).then(function(result) {
				var user = result.user;
				console.log('Popup result: logged in as ', user.displayName);
				fetchFromDatabase();
			}).catch(function(error) {
				console.log('Popup result, error: ' + error.message);
			});
		});
            
            
    
    
}