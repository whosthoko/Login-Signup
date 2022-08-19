async function logIn() {
    console.log('Hello World');
    
    // connect to Moralis server
    const serverUrl = "https://pytm4iyszjij.usemoralis.com:2053/server";
    const appId = "be7qsxIhYywvuCgsYGIaG8lEzO87TyFY1ksoL92r";
    Moralis.start({ serverUrl, appId });

 
try {
    let username = document.getElementById("userusername").value;
    let password= document.getElementById("userpassword").value;
    console.log(username, password)
    const user = await Moralis.User.logIn(username, password);
    console.log(user)
    window.location.href = "userhome.html"
  } 
  catch (error) {
    console.log(error)
  }
}

document.querySelector('#btn-login').onclick = logIn;