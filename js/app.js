function loginSuccess (response) {
document.body.insertAdjacentHTML(`afterbegin`, `
<h1>login success</h1>
`)
Cookies.set(`token`, `${response[`data`][`token`]}`)

}

function loginFail (error) {
    document.body.insertAdjacentHTML(`afterbegin` `
    <h1>something went wrong</h1>
    `)
}





function accountLogin (details) {


let username = document.getElementById(`username`)[`value`];
let password = document.getElementById(`password`)[`value`];

axios.request({
    url: `https://reqres.in/api/login`,
    method: `POST`,
    data: {
        username: `michael.lawson@reqres.in`, 
        password: `asd`
    }
}).then(loginSuccess).catch(loginFail)
}

let login_button = document.getElementById(`login_button`);
login_button.addEventListener(`click`, accountLogin)