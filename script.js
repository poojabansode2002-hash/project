var express = require("express");
var app = express();
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://pooja:pooja@cluster0.c4obztp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "test";

const path = require('path');

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/home.html");
});

app.get("/signup", function (request, response) {
    response.sendFile("http://localhost:3000");
});

app.get("/signin", function (request, response) {
    var username = request.query.username;
    var password = request.query.aadhar;
    console.log(username, password);
    async function run() {
        try {
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("UserInfo");
            const myDoc = await col.findOne({ "firstname": username });
            if (myDoc.firstname == username && myDoc.aadhar == password) {
                console.clear()
                console.log("succcesssfullly logged in");
            
            }
            else {
                console.clear()
                console.log("invallllid");
                
            }
        } catch (err) {
            console.log(err.stack);
        }

        finally {
            await client.close();
        }
    }

    run().catch(console.dir);


});

app.get("/getpage", function (request, response) {
    var username = request.query.first_name;
    var number = request.query.aadhar_card_number;
    var question = request.query.last_name;
    console.log("get page is working")

    async function run() {
        try {
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("UserInfo");
            let personDocument = {
                "firstname": username,
                "aadhar": number,
                "lastname": question
            }
            console.log("inserted")
            await col.insertOne(personDocument);
            response.sendFile(__dirname + "/farmersaccountpage.html");
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});
app.get("/farmeraccountpage", function (request, response) {
    var fullname = request.query.fullname;
    var aadhar = request.query.aadhar;
    var phone = request.query.phone;
    var age = request.query.age;
    var currentadd = request.query.currentadd;
    var permanentadd = request.query.permanentadd;
    
    console.log("farmeraccount page is working")

    async function run() {
        try {
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("farmeraccount");
            let personDocument = {
                "fullname": fullname,
                "aadhar": aadhar,
                "phone": phone,
                "age": age,
                "currentadd": currentadd,
                "permanentadd": permanentadd,
            }
            console.log("inserted")
            await col.insertOne(personDocument);
            response.sendFile(path.join(__dirname + "/farmeraccountID.html"))
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});

app.get("/getcontact", function (request, response) {
    var name = request.query.name;
    var mobile = request.query.mobile;
    var message = request.query.message;
    console.log("get contact page is working")

    async function run() {
        try {
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("contact");
            let personDocument = {
                "name": name,
                "mobile": mobile,
                "message": message
            }
            console.log("inserted contact info")
            await col.insertOne(personDocument);
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});

app.get("/getlinkHome", function (request, response) {
    response.sendFile(path.join(__dirname + "/home.html"))
});

app.get("/getlinkProducts", function (request, response) {
    response.sendFile(path.join(__dirname + "/Products.html"))
});

app.get("/getlinkContact", function (request, response) {
    response.sendFile(path.join(__dirname + "/Contact.html"))
});

app.get("/getlinksignin", function (request, response) {
    response.sendFile(path.join(__dirname + "/signin.html"))
});
app.get("/getlinkregister", function (request, response) {
    response.sendFile(path.join(__dirname + "/registeration.html"))
});


app.get("/getlinkKnowmore", function (request, response) {
    response.sendFile(path.join(__dirname + "/Introduction.html"))
});


app.get("/getlinkfarmeraccount", function (request, response) {
    response.sendFile(path.join(__dirname + "/farmersaccountpage.html"))
});
const port = 3002
app.listen(process.env.PORT || port)
console.log("Something awesome to happen at http://localhost:" + port);