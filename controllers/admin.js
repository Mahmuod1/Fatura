const NewSletter = require('../modal/newsettlerTires')



// create new Sletter with specific trie and price in our case there is three tries 
// Daily Weekly Monthly
const createNewSletter =(req,res,next)=>{
    const tire = req.body?.tire,
    price = req.body?.price
   console.log(price,tire)
    if(typeof price == 'number' && typeof tire =='string')
    {
        NewSletter.create(
            {
                tire:tire,
                price:price
            }
        ).then(res=>{
            res.status(201).json({
                message:'new Sletter created Successfully'
            })
        }).catch(error=>{
            res.status(404).json({
                message:'there is an Error with creating new Sletter',
                error:error
            })
        })
    }
    else{
    res.status(404).json({
        message:'please make sure to write the price and tire'
    })
    }
}

// Update NewSletter Price based On their Trie
const updateNewSletter = (req,res,next)=>{
    
    const price = req.body.price
    const tire = req.body.tire
    if(price && tire)
    {
        NewSletter.updateOne({tire:tire},{$set:{price:price}}).then(res=>{
            
         res.status(200).json({message:res})

        }).catch(error=>{
            res.status(404).json({
                message:'there is an error in updating the newSletter',
                error:error
            })
        })
    }
    else
    {
        res.status(404).json({
            message:'please make sure to write the price and tire '
        })
    }



}

exports.createNewSletter = createNewSletter
exports.updateNewSletter= updateNewSletter