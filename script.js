// (1) Make all inputs red when empty(excl. radio) and write field required

const form = document.getElementById('form');
const firstName = document.getElementById('name');
const lastName = document.getElementById('surname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const generalEnquiry = document.getElementById('rbGeneralQuery');
const supportRequest = document.getElementById('rbSupportRequest');
const checkbox = document.getElementById('agree');

const name_error = document.getElementById('name_error');
const surname_error = document.getElementById('surname_error');
const email_error = document.getElementById('email_error');
const message_error = document.getElementById('message_error');
const rb_error = document.getElementById('rb_error');
const checkbox_error = document.getElementById('checkbox_error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) =>
{

    let hasError = false;

    const showToast = () =>
    {
        const toast = document.getElementById('toast');
        toast.classList.add("show");

        setTimeout (() => {
            toast.classList.remove("show");
        }, 2000); 
    }

    if (firstName.value.trim() === "")
    {
        hasError = true;
        name_error.innerHTML = "This field is required";
        firstName.style.border = "1px solid hsl(0, 66%, 54%)";
    } else {
        name_error.innerHTML = "";
        firstName.style.border = "";
    }

    if (lastName.value.trim() === "")
    {
        hasError = true;
        surname_error.innerHTML = "This field is required";
        lastName.style.border = "1px solid hsl(0, 66%, 54%)";
    } else {
        surname_error.innerHTML = "";
        lastName.style.border = "";
    }

    if (email.value.trim() === "")
    {
        hasError = true;
        email_error.innerHTML = "Please enter a valid email address";
        email.style.border = "1px solid hsl(0, 66%, 54%)";
    } else if (!emailRegex.test(email.value.trim())) {
        email_error.innerHTML = "Invalid email address";
        email.style.border = "1px solid hsl(0, 66%, 54%)";
        hasError = true;
    } else {
        email_error.innerHTML = "";
        email.style.border = "";
    }

    if (generalEnquiry.checked || supportRequest.checked)
    {
        rb_error.innerHTML = "";
    } else {
        hasError = true;
        rb_error.innerHTML = "Please select a query type";
    }

    if (message.value.trim() === "")
    {
        hasError = true;
        message_error.innerHTML = "This field is required";
        message.style.border = "1px solid hsl(0, 66%, 54%)";
    } else {
        message_error.innerHTML = "";
        message.style.border = "";
    }

    if (!checkbox.checked)
    {
        hasError = true;
        checkbox_error.innerHTML = "To submit this form, please consent to being contacted";
    } else {
        checkbox_error.innerHTML = "";
    }

    if (hasError) {
        e.preventDefault();
    } else {
        e.preventDefault();
        showToast();
    }
    
});





// (2) Show a toast saying message sent when successful 
