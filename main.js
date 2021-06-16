function login() {
    user_name = document.getElementById("user_name").value;
    user_email = document.getElementById("user_email").value;
    user_pass = document.getElementById("user_pass").value;

    if (user_name, user_email, user_pass == "") {
        document.getElementById("error_alert").innerHTML = "<i class='fa fa-warning'>&nbsp;</i> Enter a valid credintials"
    } else {
        localStorage.setItem("user_name", user_name);
        localStorage.setItem("user_email", user_email);
        localStorage.setItem("user_pass", user_pass);
        window.location = "pages/photographs.html";
    }
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})