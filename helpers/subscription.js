
const payWithCredit = ()=>{

    const randomNumber = Math.floor(Math.random()*10)

    let isPaid = randomNumber>5?true:false
    return isPaid
}

const getDiscount = (price)=>{
const priceAfterDiscount = price - (price *20)   
return priceAfterDiscount 
}



module.exports = {payWithCredit,getDiscount}