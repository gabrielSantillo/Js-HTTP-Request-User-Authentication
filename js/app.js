/* when trying to post the email and password is successful, this function is called */
function post_success(response) {
  /* set the key token with token sent from the API*/
  Cookies.set(`token`, `${response[`data`][`token`]}`);
  /* the user goes the home page */
  location.href = `/home.html`;
}

/* when trying to post the email and password fails, this function is called */
function post_failure(error) {
  /* insert a message onto the page asking for the user to try again */
  login_button.insertAdjacentHTML(
    `afterend`,
    `<h1>Sorry, the login was invalid.</h1>`
  );
}

/* This function is called after the user typed the email and password and click in the button log in */
function loginFunction(details) {
  /* getting the email input by its id from the page
         use eve.holt@reqres.in when trying to log in*/
  let user_email_input = document.getElementById(`email`);
  /* gets the value, that means what the user has typed */
  let user_email_value = user_email_input[`value`];

  /* getting the password input by its id from the page
        any password will work */
  let user_password_input = document.getElementById(`password`);
  /* gets the value, that means what the user has typed */
  let user_password_value = user_password_input[`value`];

  /* making an axios request */
  axios
    .request({
      /* the API which the request is being made */
      url: `https://reqres.in/api/login`,
      /* posting the valuesm such as email and password */
      method: `POST`,
      /* paramater data which the post will be made */
      data: {
        /* user email */
        email: user_email_value,
        /* user password */
        password: user_password_value,
      },
    })
    /* if succeeds, call the function post_success */
    .then(post_success)
    /* if fails, call the function post_failure */
    .catch(post_failure);
}

/* getting the login button by its id */
let login_button = document.getElementById(`login_button`);
/* when the button is clicked, call the function loginFunction */
login_button.addEventListener(`click`, loginFunction);