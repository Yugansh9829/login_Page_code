const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
//express to set up server
const app = express();
// https is used to request data or to post data to another place ex :- database
const https = require("https");
//importing mailc library
const mailchimp = require("@mailchimp/mailchimp_marketing");



//by using this static folder public states below below we can access our page css and images.
app.use(express.static("public"));
//now we uses Body Parser to get the text entered by user and we provide endcoding as urlencoded
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});


mailchimp.setConfig({
    //ENTER YOUR API KEY HERE
     apiKey: "8896a74958267449df465145fcdf2c29-us14",
    //ENTER YOUR API KEY PREFIX HERE i.e.THE SERVER
     server: "us14"
    });

//it sends our first response

//


app.post("/",function(req,res){
    const FirstName = req.body.fname;
    const LastName = req.body.lname;
    const E_mail = req.body.email;
    
    const list_ID = "";

    const subscribingUser = {
        firstName: FirstName,
        lastName: LastName,
        email: E_mail
       };
//************* below function named run must be run to add data at mailchimp website **********
    async function run() {
        const response = await mailchimp.lists.addListMember(list_ID, {
         email_address: subscribingUser.email,
         status: "subscribed",
         merge_fields: {
         FNAME: subscribingUser.firstName,
         LNAME: subscribingUser.lastName,
        }
        });
        res.sendFile(__dirname+"/success.html");
        //console.log("successfully added")
    }
    
    run().catch(e => res.sendFile(__dirname + "/failure.html"));
});

app.post("/failure",function(req,res){
    res.redirect("/");
})



app.listen(process.env.PORT||3000,function(){
    console.log("server is live at port number 3000");
})


// My Mailchimp api key is :-   6d3ad68a370346c93f347b39329e707f-us14
//My audience(list) id is :- e016428961.