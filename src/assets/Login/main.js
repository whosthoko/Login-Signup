console.log('Hello World');
    
    // connect to Moralis server
    const serverUrl = "https://go90mbumvr75.usemoralis.com:2053/server";
    const appId = "CrzAy1UA7zHyxd9RJPH4Z32izEnBhxUFezrp2CHf";
    Moralis.start({ serverUrl, appId });


    login = async () => {
       await Moralis.authenticate().then(async function (user) {
            console.log('logged in');
            user.set("username", document.getElementById('user-username').value);
            user.set("email", document.getElementById('user-emailaddress').value);
            user.set("password", document.getElementById('floatingpassword'));
            await user.signup();
        })

    }
    document.querySelector('#btn-login').onclick = login;

