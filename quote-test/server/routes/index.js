const router = require("express").Router();
const axios = require("axios") 

router.get("/", (req, res, next) => {
  res.json("All good in here");
});



router.post("/name", async (req, res, next) => {
 let {name} = req.body
  let response = await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
 response.data.quotes[0].author = name
  res.json(response.data)
});






//{quote.quotes[0].text}


module.exports = router;

