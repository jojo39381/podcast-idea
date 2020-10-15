const router = require('express').Router();
let axios = require('axios');
const { json } = require('express');


// get twitter info
router.route('/getpodcast').get((req, res) => {
    axios.get("https://s7hsify46l.execute-api.us-east-1.amazonaws.com/prod/get-random-snippet")    
    .then(response=> res.json(response.data))
    .catch(error => res.json(error))
  })


    // verify token
  

  module.exports = router;