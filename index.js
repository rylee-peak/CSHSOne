var email_id;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

	if (email_id == "rylee.peak@thewca.us")
	{
		document.getElementById("welcome").innerHTML = "Hi, Rylee!";
	}
	function findPage()
	  {
		  var params = new URLSearchParams(window.location.search);
		  var name = params.get("name");
		  if (name == "search")
		  {
			  window.location.href = "https://search.thewca.us/search.html";
		  }
		  else if (name == "tny")
		  {
			  window.location.href = "https://howto.tny.thewca.us";
		  }
		  else if (name == "portal")
		  {
			  window.location.href = "https://portal.thewca.us/authed.html?email=" + email_id;
		  }
		  else if (name == "myWCA")
		  {
			  window.location.href = "https://my.thewca.us/authed.html?email=" + email_id;
		  }
		  else
		  {
			  alert("No service was made available to redirect you to. We are very sorry for this inconvenience");
		  }
	  }

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
