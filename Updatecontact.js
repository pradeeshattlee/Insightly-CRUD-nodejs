//update Contacts by id
var request = require("request");

var options = { method: 'PUT',
  url: 'https://api.insightly.com/v3.0/Contacts/',
  headers: 
   { 
     'cache-control': 'no-cache',
     authorization: 'Basic ' + Buffer.from("Your Api Key").toString('base64'),
     'content-type': 'application/json' },
  body: 
   { CONTACT_ID: '',
     SALUTATION: '',
     FIRST_NAME: '',
     LAST_NAME: '' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});