//This keeps the accounts saved to your local storage. This is NOT SECURE so do not use real passwords, especially on public computers.
//There are 3 main functions you can do in the console that are unavailable otherwise:
//accounts.clear() does exactly as it says, it clears the accounts.
//accounts.restore() loads the accounts saved to your storage (last time it was saved, such as when the page loaded)
//accounts.save() saves the accounts you currently have to the local storage.

//Build 2 - This is a prototype build without the shortcut for the HTML DOM access, hopefully this should resolve some issues.

var accounts = {
    userList: [],
    emailList: [],
    stored: {},
    connected: {
        path: null
    },
    clear: function () {
        this.userList = [];
        this.emailList = [];
        this.stored = {};
        console.warn("Accounts list cleared.");
    },
    restore: function () {
        var confirmed = window.confirm("This will restore the accounts you have saved. If you have reloaded the page since clearing or updated the Local Storage, any accounts you had prior to clearing have been wiped.");
        if (confirmed === true) {
            accounts.stored = JSON.parse(localStorage.accounts);
            accounts.userList = JSON.parse(localStorage.userList);
            accounts.emailList = JSON.parse(localStorage.emailList);
            console.log("Restored from file:");
            console.log(accounts);
        } else console.warn("Accounts not restored from file.");
    },
    save: function () {
        var confirm = window.confirm("Are you sure you want to overwrite the accounts saved to file? \n This cannot be undone.");
        if (confirm === true) {
            localStorage.accounts = JSON.stringify(accounts.stored);
            localStorage.userList = JSON.stringify(accounts.userList);
            localStorage.emailList = JSON.stringify(accounts.emailList);
            console.log("Saved to file:");
            console.log(accounts);
        }
    }
};
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
window.onload = function() {
    if (!localStorage.accounts) {
        localStorage.setItem("accounts",{});
        console.log("Accounts list created.");
    }
    if (!localStorage.userList) {
        localStorage.setItem("userList",[]);
        console.log("Username list created.");
    }
    if (!localStorage.emailList) {
        localStorage.setItem("emailList",[]);
        console.log("Email list created.");
    }
    accounts.stored = JSON.parse(localStorage.accounts);
    accounts.userList = JSON.parse(localStorage.userList);
    accounts.emailList = JSON.parse(localStorage.emailList);
};
window.onbeforeunload = function () {
    localStorage.accounts = JSON.stringify(accounts.stored);
    localStorage.userList = JSON.stringify(accounts.userList);
    localStorage.emailList = JSON.stringify(accounts.emailList);
};
var form = {
    email: null,
    password: null,
    user: null
};
var actions = {}
function form_submit () {
    form.email = document.getElementById("form-email").value;
    form.user = document.getElementById("form-user").value;
    form.password = document.getElementById("form-pass").value;
    if (!accounts.emailList.includes(form.email) && !accounts.userList.includes(form.user) && form.email !== "" && form.user !== "" && form.password.length > 5) {
        accounts.emailList.push(form.email);
        accounts.userList.push(form.user);
        accounts.stored[form.email] = {
            username: form.user,
            password: form.password
        };
        document.getElementById("form-error").style.display = "none";
        console.log("Account created with the email \"" + form.email + "\", the username of \"" + accounts.stored[form.email].username + "\", and a password length of " + form.password.length + ".");
        alert("Account created with the email \"" + form.email + "\", the username of \"" + accounts.stored[form.email].username + "\", and a password length of " + form.password.length + ". It is saved locally, not to a database.");
        createCookie("connected",accounts.stored[form.email],1440);
    }
    else if (accounts.emailList.includes(form.email)) {
        document.getElementById("form-error").style.display = "inline-block";
        document.getElementById("form-error").innerHTML = "An account already exists with that email address.";
        console.error("The email address \"" + form.email + "\" is already created with the username " + accounts[form.email].username + ".");
    }
    else if (accounts.userList.includes(form.user)) {
        document.getElementById("form-error").style.display = "inline-block";
        document.getElementById("form-error").innerHTML = "An account already exists with that username.";
        console.error("The username \"" + form.user + "\" is already in the array at the index of " + accounts.userList.indexOf(form.user) + ".");
    }
    else if (form.email === "") {
        document.getElementById("form-error").style.display = "inline-block";
        document.getElementById("form-error").innerHTML = "Please enter an email address.";
        console.error("Email address not entered.");
    }
    else if (form.user === "") {
        document.getElementById("form-error").style.display = "inline-block";
        document.getElementById("form-error").innerHTML = "Please enter a username.";
        console.error("Username not entered.");
    }
    else if (form.password.length < 6) {
        document.getElementById("form-error").style.display = "inline-block";
        document.getElementById("form-error").innerHTML = "Passwords must be at least 6 characters in length.";
        console.error("Password length is " + form.password.length + ", minimum length is 6.");
    }
    else {
        document.getElementById("form-error").style.display = "inline-block";
        document.getElementById("form-error").innerHTML = "An unexpected error has occurred. Please try again.";
        console.error("Error creating account.");
    }
}