function post_success(response) {
    Cookies.set(`token`, `${response[`data`][`token`]}`);
    location.href = `/home.html`;
    }
    
    function post_failure(error) {
        login_button.insertAdjacentHTML(`afterend`, `<h1>Sorry, the login was invalid.</h1>`)
    }
    
    function loginFunction(details) {
        /* use eve.holt@reqres.in */
        let user_email_input = document.getElementById(`email`);
        let user_email_value = user_email_input[`value`];
    
        /* use cityslicka */
        let user_password_input = document.getElementById(`password`);
        let user_password_value = user_password_input[`value`];
    
        axios.request({
            url: `https://reqres.in/api/login`,
            method: `POST`,
            data: {
                email: user_email_value,
                password: user_password_value
            }
        }).then(post_success).catch(post_failure);
    }
    
    let login_button = document.getElementById(`login_button`);
    login_button.addEventListener(`click`, loginFunction)