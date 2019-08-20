//ADD  New contacts
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.insightly.com/v3.0/Contacts/',
  headers: 
   {'cache-control': 'no-cache',
    authorization: 'Basic ' + Buffer.from("Your Api Key").toString('base64'),
    'content-type': 'application/json' },
    body:{  
            SALUTATION: 'lead',
            FIRST_NAME: 'Team Leader',
            LAST_NAME: 'Test' },
     json: true};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
