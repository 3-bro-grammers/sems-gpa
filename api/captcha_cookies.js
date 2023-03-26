const axios = require('axios');

var admin = require("firebase-admin");

var serviceAccount = {
    "type": "service_account",
    "project_id": "sems-gpa",
    "private_key_id": "d8821900171ccee5771ac92a58687ec5818dcb21",
    // "private_key": "",
    "client_email": "firebase-adminsdk-97nch@sems-gpa.iam.gserviceaccount.com",
    "client_id": "111059650010615118365",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-97nch%40sems-gpa.iam.gserviceaccount.com"
};

serviceAccount["private_key"] = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sems-gpa.firebaseio.com"
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var db = admin.database();

module.exports = async (req,res) => {

    var res_body = {}

    var captcha_res = await axios.get("https://acoe.annauniv.edu/sems/Login/captcha", {
        responseType: 'arraybuffer'
    })

    res_body["cookies"] = captcha_res.headers["set-cookie"];
    res_body["captcha"] = Buffer.from(captcha_res.data, 'binary').toString('base64');

    res_body["count"] = (await (db.ref("stats/count").once("value"))).val();


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(res_body));
}