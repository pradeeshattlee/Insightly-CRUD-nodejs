//GET Contacts by id
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.insightly.com/v3.0/Contacts/295428808',
  headers: 
   { 
     'cache-control': 'no-cache',
     authorization: 'Basic ' + Buffer.from("Your Api Key").toString('base64') } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});