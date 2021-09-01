export const emailValidation = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

export const phoneNumberValidation = number =>{
   const num = number.split('')
   if(num.length !== 9) return false;
   const correctNumber = []
   for(let i=0; i<=num.length; i+3){
        correctNumber.push([num.splice(0,3)])
   }
   console.log(correctNumber)
}