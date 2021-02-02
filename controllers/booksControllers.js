const Schemas = require( "../models")



module.exports = {
    create: function(request,response){
       Schemas.Books.create(request.body).then(result=>response.json(result)).catch(err=>response.json(err))
    },
    getOne: function(request,response) {
        console.log("The getOne function is firing")
        Schemas.Books.findOne(
            {
                userId: request.params.id
            }
        ).then(result=>{
            response.json(result)
        }).catch(err=>{
            response.json(err)
        })
    },
    updateOne: function(request,response){
        console.log("The put request has hit the backend")
        Schemas.Books.findOneAndUpdate(
            {
                userId: request.params.id
            },
            {
                $set: {ingredients: request.body.ingredients}
            },
           
        ).then(result=>{
            response.json(result)
        }).catch(err=>{
            response.json(err)
        })
    },
    get: function(request,response){
        Schemas.Books.find({}).then(result=>{
            response.json(result)
        }).catch(err=>{
            response.json(err)
        })
    }
}


