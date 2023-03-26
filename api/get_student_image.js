const axios = require('axios')

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

module.exports = async (req,res) => {

    var res_body = {}
    var req_body = JSON.parse(req.body);

    
    var { reg, cookies } = req_body;

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

    res_body["stud_img"] = stud_img_res.data ? Buffer.from(stud_img_res.data, 'binary').toString('base64') : "ERROR";

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(res_body));
}