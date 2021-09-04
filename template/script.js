document.getElementById('loginbtn').addEventListener('click', loginwithFacebook, false)


function loginwithFacebook() {
    FB.login( response => {
        const{ authResponse:{accessToken, userID}} = response

        fetch('/login-with-facebook', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ accessToken, userID})
        }).then(res => {
            console.log(res)
        })

        FB.api('/me', function(response) {
            console.log(JSON.stringify(response));
        });

    }, {scope: 'public_profile,email'})
    return false
}

