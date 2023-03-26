const axios = require('axios');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

module.exports = async (req,res) => {

    var res_body = {}
    var req_body = JSON.parse(req.body);

    var {cookies } = req_body;
        

    var mark_res = await axios({
        method: 'get',
        url: "https://acoe.annauniv.edu/sems/student/mark",
        headers: {
            Cookie: cookies
        },
    })
    

    var sp = mark_res.data.split('<option value="')
    
    var ses_c = [];
    for (i = 1; i < sp.length; i++) {
        var temp = sp[i].split('">');
        ses_c.push(temp[0]);
        // ses.push(temp[1].split('</option')[0]);
    }

         

    res_body["sem_codes"] = ses_c;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(res_body));
}