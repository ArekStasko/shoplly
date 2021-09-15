export const emailValidation = email => {
    const correctEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return correctEmail.test(String(email).toLowerCase())
}

export const phoneNumberValidation = number =>{
   return (number.split('').length === 9 && !number.match(/^[A-Za-z]+$/)) 
}

export const repeatPassword = (firstPassword, secondPassword) =>{
    return firstPassword === secondPassword
 }

export const imageValidation = img => {
    return img[0]['type'].split('/')[0] === 'image'
}

export const requiredValue = (...value) => {
    const checkValues = value
    for(let i=0; i<checkValues.length; i++){
        if(checkValues[i].length === 0) {
            console.log(checkValues)
            return false
        }
    }
    return true
}