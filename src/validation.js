export const emailValidation = email => {
    const correctEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return correctEmail.test(String(email).toLowerCase())
}

export const phoneNumberValidation = number =>{
   return (number.split('').length === 9 && !number.match(/^[A-Za-z]+$/)) 

}