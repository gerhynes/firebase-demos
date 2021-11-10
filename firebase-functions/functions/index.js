const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello World");
});

exports.doubleNumber = functions.https.onRequest((request, response) => {
  let doubled = `Result is ${parseInt(request.query.data) * 2}`;
  response.send(doubled);
});

exports.postComment = functions.https.onRequest((request, response) => {
  const body = JSON.parse(request.body);
  body.timestamp = Date.now();
  const updatedBody = JSON.stringify(body);
  response.send(updatedBody);
});
