# Insightly-CRUD-nodejs
Simple crud operations for Contacts 

1-Overview
Users on all plans can use the REST-based Application Programming Interface (API) to query and update their Insightly data. Four HTTP verbs are supported:

GET requests to retrieve information
POST to add new records
PUT to update records
DELETE requests to remove records.

2-Objects
 Objects, such as Organisations or Projects, are accessible via the following 
URL: https://api.insightly.com/v3.1/{resource_name}. 

Accessing the main endpoint for each object retrieves a list. For example, 
the following endpoint retrieves a list of Contacts:
https://api.insightly.com/v3.1/Contacts

The ID of each record is an integer and it's used to reference individual records for retrievals, updates and deletes. 
For example, if you want to retrieve a contact with the ID 123456:
https://api.insightly.com/v3.1/Contacts/123456

3-Get your API key
-Click the profile icon in Insightly and select User Settings.

-Scroll down to the bottom of the page and copy the API key, which is a long string of characters.
You can now paste the key into the application that you are connecting to.

4-Change your API key
  After you've shared your API key with another system, you can revoke that access by creating a new API key. 
Just click the Generate New API Key link to change your key.
You'll have to update any applications with the new key if you still want them to have access to your Insightly data.

5-usage
-Install the repo and in the root npm install request. 
-Change the "Your Api Key" to newly obtained api key. 
authorization: 'Basic ' + Buffer.from("Your Api Key").toString('base64'), 
-run node <file> in cmd for your CRUD operations. 
