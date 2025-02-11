$(document).ready(() => {
    $("button").click(() => {
        let email = $("#email").val();
        let password = $("#password").val();
        let status = validateLogin(email, password);
        status ? updateLoginMessage("Login successful!") : updateLoginMessage("Login failed!");
    });
});

function updateLoginMessage(message) {
    $("#loginMessage").html(message);
}

function onValidate() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let status = validateLogin(email, password);
    status  ? alert("Login successful!") : alert("Login failed!");
}
