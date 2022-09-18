const express = require('express')
const router = express.Router()

router.get('/register/which-objects', function callback(request, response) {
  console.debug("on the which objects form")

  console.debug("session data:", request.session.data);

  response.render('register/which-objects');
});

router.post('/register/which-objects', function callback(request, response) {
  console.debug("submitting which objects page")

  console.debug("session data:", request.session.data);

  response.redirect('/register/how-many-objects');
});

module.exports = router
