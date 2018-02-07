window.addEventListener("load", auth)

function auth() {
        let provider = new firebase.auth.GithubAuthProvider();
        let btnGit = document.getElementById("login");
    
    
        btnGit.addEventListener("click", function(popUp) {
            
            
        firebase.auth().signInWithPopup(provider).then(function(result) {
				var user = result.user;
				console.log('Popup result: logged in as ', user.displayName);
				fetchFromDatabase();
			}).catch(function(error) {
				console.log('Popup result, error: ' + error.message);
			});
		});
            
            
            
            
            
        
    












};