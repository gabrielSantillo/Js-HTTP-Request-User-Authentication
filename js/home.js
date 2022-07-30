let token = Cookies.get(`token`);

if (token !== undefined) {
  axios
    .request({
      url: `https://reqres.in/api/unknown`,
    })
    .then(post_success)
    .catch(post_failure);
} else {
  article.insertAdjacentHTML(
    `beforeend`,
    `
      <h1>Go back and try a valid email and password</h1>
      <button id="log_out">Back to log in page</button>
      `
  );
}

function loginFunction(details) {
  location.href = `/index.html`;
}

function post_success(response) {
  for (let i = 0; i < response[`data`][`data`].length; i++) {
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

function post_failure(error) {}

let article = document.querySelector(`article`);

let section = document.querySelector(`section`);
