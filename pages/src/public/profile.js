username = localStorage.getItem("user_name");
useremail = localStorage.getItem("user_email");
userpass = localStorage.getItem("user_pass");

newPageTitle = username + "'s " + ' Profile';
document.querySelector('title').textContent = newPageTitle;