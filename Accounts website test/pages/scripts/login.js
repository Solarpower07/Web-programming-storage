var accounts = {
    userList: [],
    emailList: [],
    stored: {},
    current: {},
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
var connections = {
    page: {
        account_output: null
    }
};
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
    connections.page.account_output = document.getElementById("form-error");
};
window.onbeforeunload = function () {
    localStorage.accounts = JSON.stringify(accounts.stored);
    localStorage.userList = JSON.stringify(accounts.userList);
    localStorage.emailList = JSON.stringify(accounts.emailList);
};