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

router.get('/register/how-many-objects', function callback(request, response) {
  console.debug("on how many page")

  console.debug("session data:", request.session.data);

  // here we're passing a second argument to 'render', the keys will be available
  // as variables within the template
  response.render('register/how-many-objects', {
    question: `How many ${request.session.data["which-object"]} can you juggle at once?` }
  );
});

router.post('/register/how-many-objects', function callback(request, response) {
  console.debug("submitting which objects page")

  console.debug("session data:", request.session.data);

  response.redirect('/register/complete');
});

router.get('/register/complete', function callback(request, response) {
  console.debug("complete!")

  console.debug("session data:", request.session.data);

  // now we've answered two questions we can summarise both in the panel text variable, or pass
  // the individual values out to the template individually:
  response.render('register/complete', {
    panel_text: `You can now officially juggle ${request.session.data["how-many"]} ${request.session.data["which-object"]} at once.`,
    which_object: request.session.data["which-object"],
    how_many: request.session.data["how-many"],
  });
});

module.exports = router
