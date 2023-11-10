//Page 1
//inputs
const form = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const checkBox = document.querySelector('#check-box')


function showError(input , errorMessage){
let errorDiv = document.getElementById(input.id + "Error")
errorDiv.textContent = errorMessage
input.classList.add(`error`)
}


form.addEventListener('submit', (e) =>{
    localStorage.setItem('username :' , username.value)
    localStorage.setItem('email :' , email.value)
    localStorage.setItem('password :' , password.value)
    e.preventDefault()
    let isValid = true;

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
    if(checkBox.checked === false){
        if(isValid){
            
        localStorage.getItem('username')
        localStorage.getItem('email')
        localStorage.getItem('password')
        window.location.href = 'regular.html'
        }
    }
    if(checkBox.checked === true){
    if(isValid){
        localStorage.getItem('username')
        localStorage.getItem('email')
        localStorage.getItem('password')
        console.log(`Admin Mode`)
        window.location.href = 'admin.html'
    }
}
  
})

const myInputsArray = [username , email , password , confirmPassword]
myInputsArray.forEach(input => {
    input.addEventListener('input' , () => {
        input.classList.remove('error');
        document.getElementById(input.id + "Error").textContent = ""
    })
})
