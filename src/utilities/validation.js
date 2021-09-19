export const emailValidation = (email, setFlash) => {
    const correctEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!correctEmail.test(String(email).toLowerCase())){
        setFlash('Wrong Email')
    }
    return correctEmail.test(String(email).toLowerCase())
}

export const phoneNumberValidation = (number, setFlash) =>{
    const validate = number.split('').length === 9 && !number.match(/^[A-Za-z]+$/)
    if(!validate){
        setFlash('Wrong phone-number')
    }

   return validate 
}

export const repeatPassword = (firstPassword, secondPassword, setFlash) =>{
    if(firstPassword !== secondPassword){
        setFlash('Passwords are not the same')
    }
    return firstPassword === secondPassword
 }

export const imageValidation = img => {
    return img[0]['type'].split('/')[0] === 'image'
}

export const requiredValue = (...value) => {
    const checkValues = value
    for(let i=0; i<checkValues.length; i++){
        if(checkValues[i].length === 0) {
            return false
        }
    }
    return true
}