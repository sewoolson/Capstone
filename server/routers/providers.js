//start recommend provider form
const Router = require("express")
const Provider = required("../models/provider")
const router = Router()

router.post("/", (request, response) => {

  const newProvider = new Provider(request.body)
  newProvider.save((error, record)=> {
    if (error?.name === "validate error")
      return response.status(400).json(error.errors);
      if (error) return response.status(500).json(error.errors);

      response.json(record);

  })

})

router.get("/", (request, response)=> {
  Provider.find({}, (error, record)=> {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  })

})
//end recommend provider form

