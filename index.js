//inputs
const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')


function showError(input , errorMessage){
let errorDiv = document.getElementById(input.id + "Error")
errorDiv.textContent = errorMessage
input.classList.add(`error`)
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let isValid = true;

    if(username.value.length < 3){
    showError(username , `name must be at least 3 characters long.`)
    isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!emailRegex.test(email.value)){
        showError(email ,`Please enter a valid email.`)
        isValid = false;

    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    if(!passwordRegex.test(password.value)) {
        showError(password,   "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.")
        isValid = false;
    }

    if(password.value !== confirmPassword.value){
        showError(confirmPassword, "passwords do not match");
        isValid = false;
    }
    if(isValid){
        alert('Form submitted successfully')
    }
  
})

const myInputsArray = [username , email , password , confirmPassword]
myInputsArray.forEach(input => {
    input.addEventListener('input' , () => {
        input.classList.remove('error');
        document.getElementById(input.id + "Error").textContent = ""
    })
})
