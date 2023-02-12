// Step-1 : Add click Event handeler with the submit button.

document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2 : Get the email address inside email input field
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    // step-3 : get password
    // 3.1 : set id on the html element
    // 3.2 : get the element
    // 3.3 : get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Danger : DO NOT verify email passord on the client side

    if(email ==='ph@gmail.com' && password === '1234'){
        window.location.href = 'bank.html';
    }
    else{
       alert('Please provide a valid email address and  password');
    }


    
})



