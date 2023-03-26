const axios = require('axios');
const crypto = require('crypto');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


module.exports = async (req, res) => {

    var res_body = {}
    var req_body = JSON.parse(req.body);


    var { reg, pass, captcha, cookies } = req_body;

    var pass_hash = crypto.createHash('sha512').update(pass).digest('hex');

    login_res = await axios({
        method: 'post',
        url: "https://acoe.annauniv.edu/sems/login/student",

        headers: {
            Cookie: cookies
        },

        data: `username=${reg}&password=${pass_hash}&captcha_code=${captcha}`

    })
    // console.log("LOGIN res", login_res.data);
    if (login_res.data.indexOf("Incorrect captcha") > -1)
        res_body["error"] = "INCORRECT_CAPTCHA";
    else if (login_res.data.indexOf("Invalid Username or Password") > -1)
        res_body["error"] = "INVALID_USER_PASS";
    else {

        if (login_res.data.indexOf("Logout from all other machine") > -1) {
            await axios({
                method: 'post',
                url: "https://acoe.annauniv.edu/sems/login/logout_all",
                headers: {
                    Cookie: cookies
                },
            })
            // console.log("LOGOUT others")
        }
        
        res_body["logged_in"] = "DONE";

    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(res_body));

}

