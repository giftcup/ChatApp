var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:s1alome@cluster0.d8t6h.mongodb.net/Salome?retryWrites=true&w=majority";

// let message = document.getElementById('message_body');
let message = "I love the LORD!";
timeStamp = Date.now();
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ChatApp");
    var messageObj = {id: timeStamp, message_body: message}
    var userData = {username: "Tambe", matricule: "FE20A109"}
    dbo.collection("Message").insertOne(messageObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        // db.close();
      });
    dbo.collection("Users").insertOne(userData, function(err, res) {
        if (err) throw err;
        console.log("2nd document inserted");
        db.close;
    });  
});
