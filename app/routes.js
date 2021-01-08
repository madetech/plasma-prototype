// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Branching example
router.post('/submit-medium', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var medium = req.session.data['medium']
  
    // Check whether the variable matches a condition
    if (medium == "postal"){
      // Send user to next page
      res.redirect('/postal-form')
    }
    else {
      // Send user to ineligible page
      res.redirect('/pharmacy-form')
    }
  
  })

module.exports = router;
