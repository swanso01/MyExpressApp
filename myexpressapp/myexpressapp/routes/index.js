var express = require('express');
var router = express.Router();

let phoneContacts = [
  {firstname: 'Josh', lastname: 'Swanson', email: 'swansonjoshua63@gmail.com', phone: '123-456-7890'},
  {firstname: 'John', lastname: 'Doe', email: 'john112@gmail.com', phone: '101-202-3030'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Manager App', 
    date: Date() 
  });
});

router.get('/add', function(req, res, next) {
  res.render('add', { 
    title: 'Add New Contact', 
    date: Date() 
  });
});
router.post('/add', function(req, res, next) {
  var fname = req.body.firstname;
  var lname = req.body.lastname;
  var email = req.body.email;
  var phone = req.body.phone;

  var newContact = { firstname: fname, lastname: lname, email: email, phone: phone };
  phoneContacts.push(newContact);

  res.redirect('/viewContacts');
});
router.get('/viewContacts', function(req, res, next) {
  res.render('viewContacts', { 
    title: 'My Contacts', 
    contacts: phoneContacts // Pass the contacts array to the view
  });
});
router.get('/delete/:firstname', function(req, res, next) {
  var firstname = req.params.firstname;
  phoneContacts = phoneContacts.filter(contact => contact.firstname !== firstname);
  res.render('viewContacts', { 
    title: 'My Contacts', 
    contacts: phoneContacts
  });
});
router.post('/add', function(req, res, next) {
  var fname = req.body.firstname;
  var lname = req.body.lastname;
  var email = req.body.email;
  var phone = req.body.phone;
  var newContact = {firstname: fname, lastname: lname, email: email, phone: phone};
  res.render('viewContacts', {title: 'My contacts', Data: phoneContacts, currentDate: Date(), info: newContact});
});
module.exports = router;
