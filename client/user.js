class User {

    static login(e){
        e.preventDefault()
        console.log($('#passwordLogin').val())
        $.ajax({
            method: "POST",
            url: `${url}/login`,
            data: {
                email: $('#emailLogin').val(),
                password: $('#passwordLogin').val()
            }
        })
        .done(response => {
            localStorage.setItem('access_token', response.access_token)
            console.log(response.access_token)
        })
    }
}