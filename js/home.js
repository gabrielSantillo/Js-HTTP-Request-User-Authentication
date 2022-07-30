/* verify if the cookies is not undefined, that means, if contains value in it */
if (Cookies.get(`token`) !== undefined) {
    /* if this is true, make an axios request to this API */
  axios
  /* API being requested */
    .request({
      url: `https://reqres.in/api/unknown`,
    })
    /* if succeeds, call the function post_success */
    .then(post_success)
    /* if fails, call the function post_failure */
    .catch(post_failure);
} 
/* if its false, insert onto the page a message and button */
else {
    let article = document.querySelector(`article`);
    article.insertAdjacentHTML(
    `beforeend`,
    `
      <h1>Go back and try a valid email and password</h1>
      <button id="log_in">Back to log in page</button>
      `
  );
}

/* this function is call if the user is at the page without making any login*/
function backToLogin(details) {
    /*leave the user to the login page  */
  location.href = `/index.html`;
  /* delete the cookie, just in case */
  Cookies.delete(`token`);
}

/* if the cookie, contains value, this function is called */
function post_success(response) {
    /* for loop that go through each index of the array */
  for (let i = 0; i < response[`data`][`data`].length; i++) {
    /* insert onto the page, the name of the color, the year that was created and a div that wil contain these color */
    section.insertAdjacentHTML(
      `beforeend`,
      `
    <div id="box_color">
        <h3>Name: ${response[`data`][`data`][i][`name`]}</h3>
        <p>Year created: ${response[`data`][`data`][i][`year`]}</p>
        <div id="div_${i}"></div>
    </div>
    `
    );
  }
}

/* if when trying to display the response from the api fails, print this message */
function post_failure(error) {
    section.insertAdjacentHTML(
        /* message that asks for the user to reload the page */
        `beforeend`, `<h1>Reload the page, please.</h1>`);
}

/* getting the section from the page with query selector */
let section = document.querySelector(`section`);

/* getting the button that leave the user back to the login page by its id */
let back_to_login_page = document.getElementById(`log_in`);
/* when this button is clicked, call the function backToLogin */
back_to_login_page.addEventListener(`click`, backToLogin)