//start contact form
const Router = require("express")
const Contact = require("../models/Contact")
const router = Router()

router.post("/", (request, response) => {
  const newContact = new Contact(request.body)
  newContact.save((error, record)=> {
    if (error?.name === "validate error")
      return response.status(400).json(error.errors);
      if (error) return response.status(500).json(error.errors);

      response.json(record);

  })
})

// Get (read) all records from the collection
router.get("/", (request, response)=> {
  Contact.find({}, (error, record)=> {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  })

})
// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Contact.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Contact.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

module.exports = router;
//end contact form
