require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;
const client = require('twilio')(accountSid, authToken);
const fs = require('fs');

let jsonData = fs.readFileSync('./numbers.json');

client.notify.services(notifyServiceSid)
  .notifications.create({
    toBinding: jsonData,
    body: 'Test Message'
  })
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error));
