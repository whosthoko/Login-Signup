console.log('Hello World');
    
    // connect to Moralis server
    const serverUrl = "https://pytm4iyszjij.usemoralis.com:2053/server";
    const appId = "be7qsxIhYywvuCgsYGIaG8lEzO87TyFY1ksoL92r";
    Moralis.start({ serverUrl, appId });

 
signupFunc = async () => {
    let username = document.getElementById("userusername").value;
    let email = document.getElementById("useremailaddress").value;
    let password= document.getElementById("userpassword").value;
     console.log(username, email, password);

     const user = new Moralis.User()
user.set("username", document.getElementById('userusername').value);
user.set("email", document.getElementById('useremailaddress').value);
user.set("password", document.getElementById('userpassword').value);

try {
  await user.signUp();
  alert("Successfully Signed Up")
  // Hooray! Let them use the app now.
} catch (error) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
}
document.querySelector('#btn-login').onclick = signupFunc;


