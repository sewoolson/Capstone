//start recommend provider form
const Router = require("express")
const Provider = require("../models/Provider")
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

// Get (read) all records from the collection
router.get("/", (request, response)=> {
  Provider.find({}, (error, record)=> {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  })

})
// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Provider.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Provider.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

//do I need to implement a put method? how would my information populate in the code below?

// router.put("/:id", (request, response) => {
//   const body = request.body;
//   Pizza.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         // Take note that the customer is not included, so it can't update the customer
//         crust: body.crust,
//         cheese: body.cheese,
//         sauce: body.sauce,
//         toppings: body.toppings
//       }
//     },
//     {
//       new: true,
//       upsert: true
//     },
//     (error, record) => {
//     if (error?.name === 'ValidationError') return response.status(400).json(error.errors);
//     if (error) return response.status(500).json(error.errors);

//     response.json(record);
//     }
//   );
// });
module.exports = router;
//end recommend provider form

