const login = document.querySelector(".login-form");

login.addEventListener("submit", event => {

    event.preventDefault();
    const form = event.target;
    const mail = login.elements.email.value.trim();
    const pswrd = login.elements.password.value.trim();
    if (mail === "" || pswrd === "") {
        alert("All form fields must be filled in");       
    }
    const resultObj = {
        mail: mail,
        pswrd: pswrd
    }
    console.log(resultObj);
    form.reset();
});

