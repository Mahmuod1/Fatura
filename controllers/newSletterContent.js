const NewSletterContent = require('../modal/newSletterContent')
const NewSletterTires = require('../modal/newsettlerTires')

const createNewSletterContent = (req, res) => {
    const content = req.body.content
      NewSletterContent.create(
          {
              content:content,
          }
      ).then(result =>{
        
        next()
      })
      .catch(error=>{
          res.status(404).json(
              {
                  message:'there is an error in creating new Sletter ',
                  error:error
              }
          )
      })

}

exports.createNewSletterContent = createNewSletterContent 
