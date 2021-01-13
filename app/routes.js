// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// MVP ROUTES
router.post('/mvp/submit-medium', function (req, res) {
  var medium = req.session.data['medium']

  if (medium == "postal") {
    res.redirect('/mvp/postal-form')
  }
  else {
    res.redirect('/mvp/pharmacy-form')
  }
})

router.post('/mvp/external-pharmacy', function (req, res) {
  var pharmacy = req.session.data['pharmacy']

  if (pharmacy == "boots") {
    res.redirect('https://www.boots.com/')
  }
  else {
    res.redirect('https://www.superdrug.com/')
  }
})

// MVP2 ROUTES
router.post('/mvp2/submit-medium', function (req, res) {
  var medium = req.session.data['medium']

  if (medium == "postal") {
    res.redirect('/mvp2/postal-form')
  }
  else {
    res.redirect('/mvp2/pharmacy-form')
  }
})

router.post('/mvp2/address', function (req, res) {
  var postalAddress = req.session.data['postal-address']

  if (postalAddress == "address") {
    res.redirect('/mvp2/postal-complete')
  }
  else {
    res.redirect('/mvp2/new-address')
  }
})

module.exports = router;
