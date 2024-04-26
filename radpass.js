const passwordBox = document.querySelector("#password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$^&*()_+~|}{[]<>/-=";
const length = 16;


function createPassword(){
    let password = ""
    password = password + upperCase[Math.floor(Math.random()*upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password = password + number[Math.floor(Math.random()*number.length)];
    password = password + symbol[Math.floor(Math.random()*symbol.length)];
    
    const allChars = upperCase + lowerCase + number + symbol

    while(length > password.length){
        password = password + allChars[Math.floor(Math.random()*allChars.length)];

    }
    passwordBox.value = password;

}

function copyPassword(){
    //---------------
    passwordBox.select()
    // passwordBox.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(passwordBox.value)
    // alert("copied the Password")
    //---------------
    // passwordBox.select()
    // document.execCommand("copy")
    

}

