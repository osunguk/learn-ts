// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {object} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then((res) => {
  console.log(res);
  console.log(res.name);
});

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.textContent = user.username;
      email.textContent = user.email;
      address.textContent = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
