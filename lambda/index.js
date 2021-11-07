const axios = require('axios')
const crypto = require('crypto')

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

exports.handler = async (event) => {

    var res_body = {}
    var req_body = JSON.parse(event.body);

    if (!req_body.captcha) {

        var captcha_res = await axios.get("https://acoe.annauniv.edu/sems/Login/captcha", {
            responseType: 'arraybuffer'
        })

        res_body["cookies"] = captcha_res.headers["set-cookie"];
        res_body["captcha"] = Buffer.from(captcha_res.data, 'binary').toString('base64')

    } else {
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

            var stud_img_res;

            try {
                stud_img_res = await axios.get(`https://acoe.annauniv.edu/sems/student/get_image/${reg}`, {
                    responseType: 'arraybuffer',
                    headers: {
                        Cookie: cookies
                    }
                })
            } catch (err) {
                stud_img_res = { data: "" };
            }


            var mark_res = await axios({
                method: 'get',
                url: "https://acoe.annauniv.edu/sems/student/mark",
                headers: {
                    Cookie: cookies
                },
            })
            // console.log(mark_res.data)

            var sp = mark_res.data.split('<option value="')
            // var ses = [];
            var ses_c = [];
            for (i = 1; i < sp.length; i++) {
                var temp = sp[i].split('">');
                ses_c.push(temp[0]);
                // ses.push(temp[1].split('</option')[0]);
            }

            // console.log("ses_c", ses_c)

            var data_Promises = ses_c.map((e, i) =>

                new Promise(async (resolve, reject) => {
                    var sem_data = [];

                    var get_mark_res = await axios({
                        method: 'post',
                        url: "https://acoe.annauniv.edu/sems/student/get_mark",
                        headers: {
                            Cookie: cookies
                        },

                        data: `regno=${reg}&session=${e}`
                    })

                    // console.log("get_Mark", get_mark_res.data)

                    var sp = get_mark_res.data.msg.split('</td>')

                    for (j = 0; j < sp.length / 12 - 1; j++) {
                        var sub_data = [];
                        sub_data.push(sp[j * 12 + 1].split(">")[1]);
                        sub_data.push(sp[j * 12 + 2].split(">")[1]);
                        sub_data.push(sp[j * 12 + 11].split(">")[1]);
                        sem_data.push(sub_data);
                    }

                    if (i == ses_c.length - 1) {
                        // console.log(get_mark_res.data);
                        var { name, branch, brcode, sem } = get_mark_res.data.student;
                        res_body["stud_details"] = {
                            name: name,
                            sem: sem,
                            branch: branch,
                            brcode: brcode,
                            img: stud_img_res.data ? Buffer.from(stud_img_res.data, 'binary').toString('base64') : null
                        }
                    }

                    // console.log(i);
                    resolve(sem_data);
                    // data.push(sem_data);

                })
            )

            var data = await Promise.all(data_Promises);

            // console.log(data)

            res_body["result"] = data;
        }

    }

    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200,
        body: JSON.stringify(res_body),
    }

}