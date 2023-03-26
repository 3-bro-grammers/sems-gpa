const axios = require('axios');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

module.exports = async (req,res) => {

    var res_body = {}
    var req_body = JSON.parse(req.body);


    var { reg, sem_code, cookies, stud_details_required } = req_body;



    var get_mark_res = await axios({
        method: 'post',
        url: "https://acoe.annauniv.edu/sems/student/get_mark",
        headers: {
            Cookie: cookies
        },

        data: `regno=${reg}&session=${sem_code}`
    })


    var sp = get_mark_res.data.msg.split('</td>')

    var sub_data = [];

    if(stud_details_required){
        var { name, branch, brcode, sem } = get_mark_res.data.student;
        res_body["stud_details"] = {
            name: name,
            sem: sem,
            branch: branch,
            brcode: brcode,
        }
    }
    

    for (j = 0; j < sp.length / 12 - 1; j++) {
        
        sub_data.push(sp[j * 12 + 1].split(">")[1]);
        sub_data.push(sp[j * 12 + 2].split(">")[1]);
        sub_data.push(sp[j * 12 + 11].split(">")[1]);
        
    }

    res_body["result"] = sub_data;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(JSON.stringify(res_body));
}