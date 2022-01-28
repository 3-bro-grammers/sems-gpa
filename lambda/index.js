const axios = require('axios')
const crypto = require('crypto')

var admin = require("firebase-admin");

//ENCRYPTED FIREBASE_PRIVATE_KEY
function _0x4a1d4f(_0x26d9c6,_0x38d41e){return _0x5646(_0x26d9c6- -0xa,_0x38d41e);}(function(_0x5d7248,_0x637c52){const _0x122973=_0x5d7248();function _0x2b27bb(_0x3f9364,_0x1d32e6){return _0x5646(_0x3f9364- -0x90,_0x1d32e6);}while(!![]){try{const _0x4a9cf5=parseInt(_0x2b27bb(0x108,0x11c))/0x1*(-parseInt(_0x2b27bb(0x146,0x174))/0x2)+parseInt(_0x2b27bb(0xe1,0xbc))/0x3*(parseInt(_0x2b27bb(0xe4,0x106))/0x4)+parseInt(_0x2b27bb(0x12f,0x13f))/0x5+parseInt(_0x2b27bb(0xa3,0x62))/0x6+parseInt(_0x2b27bb(0xb2,0xdd))/0x7*(parseInt(_0x2b27bb(0xd8,0x11c))/0x8)+-parseInt(_0x2b27bb(0x138,0x161))/0x9*(parseInt(_0x2b27bb(0xf0,0x9c))/0xa)+-parseInt(_0x2b27bb(0xef,0xd2))/0xb;if(_0x4a9cf5===_0x637c52)break;else _0x122973['push'](_0x122973['shift']());}catch(_0x51c472){_0x122973['push'](_0x122973['shift']());}}}(_0x3833,0x521ff));const FIREBASE_PRIVATE_KEY='-----'+_0x4a1d4f(0x17a,0x18b)+_0x4a1d4f(0x14a,0x1a0)+'ATE\x20K'+_0x4a1d4f(0x188,0x148)+_0x4a1d4f(0x1ab,0x1e5)+'IEvgI'+'BADAN'+'Bgkqh'+'kiG9w'+'0BAQE'+'FAASC'+_0x4a1d4f(0x131,0x167)+'gSkAg'+_0x4a1d4f(0x1c4,0x20c)+'BAQC5'+'EnNNL'+'ZMKvT'+_0x4a1d4f(0x157,0x10c)+_0x4a1d4f(0x158,0x19d)+'ctVVN'+'KpQvk'+'5T9uM'+_0x4a1d4f(0x19e,0x170)+'7fAFE'+_0x4a1d4f(0x1bd,0x19e)+'N7iRX'+_0x4a1d4f(0x124,0x141)+_0x4a1d4f(0x151,0x147)+_0x4a1d4f(0x155,0x177)+_0x4a1d4f(0x135,0x10b)+_0x4a1d4f(0x18f,0x1e8)+'3wPlB'+'SuHub'+'sAy3o'+_0x4a1d4f(0x143,0x193)+'HyiMP'+_0x4a1d4f(0x1b2,0x165)+'AhBB7'+_0x4a1d4f(0x162,0x117)+_0x4a1d4f(0x1a4,0x15a)+_0x4a1d4f(0x139,0x174)+_0x4a1d4f(0x15a,0x1b1)+'fWaLH'+'Jj\x0a3L'+'EphJN'+_0x4a1d4f(0x170,0x1c9)+_0x4a1d4f(0x1ca,0x1b2)+_0x4a1d4f(0x18b,0x1a5)+_0x4a1d4f(0x19a,0x164)+_0x4a1d4f(0x12c,0x181)+_0x4a1d4f(0x1ce,0x21d)+'hrVXD'+'+e3CS'+_0x4a1d4f(0x186,0x193)+_0x4a1d4f(0x1cb,0x210)+'OOEcl'+_0x4a1d4f(0x174,0x1ba)+'5Mali'+'QnTIa'+_0x4a1d4f(0x153,0x198)+_0x4a1d4f(0x12d,0xe5)+'uXMie'+_0x4a1d4f(0x16c,0x12e)+'hLodd'+_0x4a1d4f(0x164,0x141)+'VQjs8'+'eLhU3'+_0x4a1d4f(0x173,0x180)+'FBkpE'+'eq\x0aTW'+_0x4a1d4f(0x1c0,0x166)+_0x4a1d4f(0x1bc,0x1a4)+_0x4a1d4f(0x17b,0x132)+_0x4a1d4f(0x154,0x15e)+_0x4a1d4f(0x1ac,0x1c8)+'FrHDc'+'4I7IW'+_0x4a1d4f(0x142,0x10e)+'ZzuCk'+'LAwhy'+'UJbXf'+'tZGMr'+_0x4a1d4f(0x199,0x1a9)+'TwyRZ'+_0x4a1d4f(0x1a1,0x1cd)+'AAECg'+'gEALd'+_0x4a1d4f(0x14f,0x10e)+_0x4a1d4f(0x150,0x10c)+_0x4a1d4f(0x1c2,0x189)+'6NNkQ'+'BF0wn'+'MD8vX'+'hMwP1'+'moYqF'+'wY\x0aZG'+'Fc3qi'+'4GAdk'+'JVMcO'+'mb4mU'+_0x4a1d4f(0x193,0x13c)+'tDKDc'+_0x4a1d4f(0x17f,0x1bc)+_0x4a1d4f(0x197,0x1a3)+_0x4a1d4f(0x1b4,0x188)+'oRcAa'+'vSTvJ'+'UNAXQ'+_0x4a1d4f(0x19d,0x19a)+'YzqF+'+_0x4a1d4f(0x15b,0x14f)+'VCdsm'+_0x4a1d4f(0x14c,0x148)+'GymoG'+_0x4a1d4f(0x187,0x1b1)+'Xvvy0'+_0x4a1d4f(0x17e,0x194)+_0x4a1d4f(0x12b,0x123)+'NOmx2'+_0x4a1d4f(0x1cf,0x19a)+'TIWjr'+'m+\x0aiH'+'n4dpH'+_0x4a1d4f(0x18a,0x1dc)+'WTpCG'+'IvWH+'+_0x4a1d4f(0x169,0x18a)+'O7eDy'+_0x4a1d4f(0x145,0xf8)+'aBGUc'+_0x4a1d4f(0x1b1,0x169)+'8KqrA'+_0x4a1d4f(0x128,0xd3)+'9UTqd'+_0x4a1d4f(0x1b3,0x1c3)+_0x4a1d4f(0x19f,0x19f)+'/cTR9'+'a/HuJ'+_0x4a1d4f(0x192,0x1cc)+'e1ZQL'+_0x4a1d4f(0x16f,0x179)+_0x4a1d4f(0x1b7,0x1a7)+'EBqnD'+_0x4a1d4f(0x136,0x11c)+'eFCZ3'+'T6EVT'+_0x4a1d4f(0x134,0x101)+_0x4a1d4f(0x1a6,0x1a1)+'SHZ1D'+_0x4a1d4f(0x152,0x174)+_0x4a1d4f(0x1bb,0x19d)+'WBSu5'+'Q4ame'+'2VOIm'+_0x4a1d4f(0x177,0x187)+_0x4a1d4f(0x190,0x1c7)+'KBgQD'+_0x4a1d4f(0x160,0x1b4)+'DRD7Z'+_0x4a1d4f(0x159,0x195)+_0x4a1d4f(0x185,0x1d0)+'3FeEq'+'SX4PO'+'lb1Hy'+'p21zo'+'sm6Ch'+'vgnlD'+_0x4a1d4f(0x1af,0x180)+_0x4a1d4f(0x16e,0x145)+_0x4a1d4f(0x122,0x141)+_0x4a1d4f(0x1c1,0x1f3)+_0x4a1d4f(0x198,0x1b4)+_0x4a1d4f(0x1a3,0x1ca)+_0x4a1d4f(0x1a7,0x1cd)+'e5QFV'+_0x4a1d4f(0x1c9,0x187)+'GbD27'+_0x4a1d4f(0x130,0x171)+'m+m4q'+'SQ9ev'+'t/G+w'+_0x4a1d4f(0x191,0x161)+_0x4a1d4f(0x1a5,0x189)+_0x4a1d4f(0x137,0x15d)+'Qdkrb'+_0x4a1d4f(0x179,0x122)+_0x4a1d4f(0x180,0x16b)+'zlhod'+'RsxMl'+'CIUw9'+'dExgk'+_0x4a1d4f(0x16b,0x192)+_0x4a1d4f(0x1ae,0x204)+_0x4a1d4f(0x141,0xee)+'hsnGv'+'VEPhR'+'sRoce'+_0x4a1d4f(0x13f,0x194)+'RSsel'+(_0x4a1d4f(0x166,0x19e)+_0x4a1d4f(0x1b9,0x17e)+'Qg3o3'+'t1USl'+_0x4a1d4f(0x194,0x180)+'1m3k1'+'/Reu0'+'y6YGf'+_0x4a1d4f(0x17c,0x1b7)+_0x4a1d4f(0x1a8,0x152)+_0x4a1d4f(0x144,0x132)+'goxze'+'+WLdf'+'pg\x0ala'+_0x4a1d4f(0x178,0x1ac)+_0x4a1d4f(0x1ba,0x1a7)+'BVITA'+_0x4a1d4f(0x168,0x12f)+_0x4a1d4f(0x1aa,0x154)+_0x4a1d4f(0x1ad,0x1d7)+'hkWa1'+'O3wtG'+_0x4a1d4f(0x125,0x131)+_0x4a1d4f(0x13b,0x102)+'NzVMe'+'9AzSE'+'Vl\x0akZ'+_0x4a1d4f(0x13a,0x190)+_0x4a1d4f(0x181,0x15c)+_0x4a1d4f(0x13c,0x110)+_0x4a1d4f(0x140,0x138)+_0x4a1d4f(0x19b,0x19f)+_0x4a1d4f(0x1d2,0x1b7)+_0x4a1d4f(0x1b6,0x199)+'ungp2'+_0x4a1d4f(0x133,0xe9)+_0x4a1d4f(0x189,0x1b1)+'p1VEg'+_0x4a1d4f(0x12f,0x14a)+_0x4a1d4f(0x126,0xd4)+_0x4a1d4f(0x1c8,0x1db)+'uMXEf'+'kOqhi'+'Hj6V/'+'+TmT7'+'lb2Bb'+_0x4a1d4f(0x1b8,0x1da)+_0x4a1d4f(0x16d,0x127)+_0x4a1d4f(0x1d5,0x1f0)+_0x4a1d4f(0x1d0,0x1d6)+'fCAsH'+'XLq4P'+'EO\x0aFO'+_0x4a1d4f(0x146,0x15b)+_0x4a1d4f(0x18c,0x1aa)+'21aCA'+_0x4a1d4f(0x156,0x13c)+_0x4a1d4f(0x1a9,0x1a8)+'kNhd1'+'KnfaX'+'GjZiv'+_0x4a1d4f(0x14e,0x1a4)+'LOrHT'+_0x4a1d4f(0x149,0x136)+'oGBAJ'+_0x4a1d4f(0x184,0x150)+_0x4a1d4f(0x147,0x17e)+_0x4a1d4f(0x1c5,0x20d)+_0x4a1d4f(0x1b0,0x163)+'KZ41Y'+_0x4a1d4f(0x13d,0x165)+'tI3tQ'+_0x4a1d4f(0x15f,0x113)+'TOGfy'+'WF7j0'+'tCwPg'+_0x4a1d4f(0x12e,0xd5)+_0x4a1d4f(0x14d,0x13c)+'MX\x0aP0'+_0x4a1d4f(0x1c7,0x1ce)+'EMmIx'+'xlE9r'+_0x4a1d4f(0x195,0x168)+'7J/r/'+'V14hK'+'cssEh'+'5xK5E'+'h6pMc'+'mEWEf'+_0x4a1d4f(0x15d,0x13b)+_0x4a1d4f(0x171,0x18c)+_0x4a1d4f(0x132,0x185)+_0x4a1d4f(0x12a,0x101)+'daWPA'+'f7C1w'+'Ro8S+'+'TMzC7'+_0x4a1d4f(0x148,0x153)+'mXM3h'+_0x4a1d4f(0x196,0x1ce)+_0x4a1d4f(0x18d,0x1a5)+_0x4a1d4f(0x1a0,0x153)+'QbTOS'+_0x4a1d4f(0x19c,0x1c1)+_0x4a1d4f(0x17d,0x18d)+'1z2w7'+_0x4a1d4f(0x1cd,0x18a)+'6Kc+C'+'UDtBT'+'aUqHi'+_0x4a1d4f(0x163,0x15b)+_0x4a1d4f(0x123,0x11a)+'AGzDG'+_0x4a1d4f(0x1d4,0x18d)+_0x4a1d4f(0x1d3,0x198)+_0x4a1d4f(0x165,0x190)+_0x4a1d4f(0x14b,0x12f)+_0x4a1d4f(0x1bf,0x166)+_0x4a1d4f(0x183,0x1b8)+_0x4a1d4f(0x15c,0x153)+'wkaC5'+'W2eSY'+_0x4a1d4f(0x1d1,0x1ea)+_0x4a1d4f(0x13e,0x18f)+_0x4a1d4f(0x161,0x1b1)+'iJc5l'+'0jG5N'+'5+lAS'+'vft6V'+'kvsvz'+'qL\x0apD'+_0x4a1d4f(0x127,0xea)+_0x4a1d4f(0x1c3,0x1f7)+'tP+YB'+_0x4a1d4f(0x1a2,0x1f5)+'Tm\x0a--'+_0x4a1d4f(0x182,0x150)+'D\x20PRI'+_0x4a1d4f(0x1c6,0x174)+'KEY--'+_0x4a1d4f(0x172,0x1bc));function _0x5646(_0xfb4353,_0x2acb6a){const _0x383322=_0x3833();return _0x5646=function(_0x564642,_0x45d3b6){_0x564642=_0x564642-0x12c;let _0xea5692=_0x383322[_0x564642];return _0xea5692;},_0x5646(_0xfb4353,_0x2acb6a);}function _0x3833(){const _0x12c830=['84yRG','EY---','ipCQ+','OD90c','bZaab','nayCy','GBAIS','4SlBCoG','Wa\x0ae8','UETsQ','2PmPe','cLliX','+CNvJ','za94+','3jfTT','xv7Ao','l37vb','+exCt','Jd\x0ayl','XC630','FjiOV','GwxtT','Ns\x0aPy','Tp4dK','clYp9','8+FYA','1AgMB','dsln1','DHYgP','Jvu1u','gNliw','It\x0anZ','l8\x0at0','j2ROX','jwqnr','TnGTJ','--\x0aMI','2GowX','oFEGt','BgQC6','wOdjf','CKkI1','XIRaV','efXbc','3A\x0aUh','/4u6B','2187475BDZmQP','cyvIr','lXuCE','qx4iY','AiPL3','pfqgB','fZfaQ','UOf0c','/zMMh','567XORgPw','ze\x0aJ6','6AOQc','4ZGFD','BqvMO','OOYH4','EAAoI','QyHpJ','VATE\x20','SEROC','6sxN4','VXPfj','1qlEf','n/u8u','15408YtkDYd','/YGZZ','Q8aKn','jwTGA','PYoKN','RExov','gaq/V','vgiUG','oZSj/','v8qrn','Bm+ff','YYftx','oMWyR','LtUeR','U6\x0a8M','V7umw','HCdi/','3842208jfgArJ','5TZCM','mJuke','D/KFB','TQ7Os','i2eYn','9+4qP','IFjOo','BKgwg','J/\x0aBY','FS97R','+/c3y','yt2J6','bhuWs','nvEo7','7OAOypN','8L1WE','yUNNg','fmo92','gEKNJ','TgMjm','CT9i4','VRAEv','KDCAm','QHExw','Mr3Uz','Rql8z','eXUrD','bEJYY','ctw2M','pQd96','xWMox','PyZdA','\x20PRIV','fyshc','7iM0I','Gp6Cm','azZfV','OnwWC','bnHkm','es6Hb','PnXqW','B+nwf','Qfnap','p9c2Z','oHCVo','c1\x0a2p','BdomC','m2aq7','rXM5r','SYyqL','9/KXB','dyZOz','276424CSvKSK','Qp32E','+YOrM','y3Pcr','Z48p5','4FiAN','CKq2M','eO8lE','nt\x0anl','1515TDLBkN','HaUk4','dG92+','3564dHleIT','yHRwK','a91Xa','LD2o7','b0YYf','eQMIz','yIsJI','etWBb','---\x0a','9CECp','S6\x0aFr','7061659WmbfBV','87810jOJQdK','onng7','3jlej','6RwYM','BEGIN','T81vm','Ey3gT','4o\x0agr','nkFma','nNgzM','PT\x0aIy','KYwKB','---EN','aZBOH','ku\x0a2S','Pq\x0a3D','zDEyL'];_0x3833=function(){return _0x12c830;};return _0x3833();}

var serviceAccount = {
    "type": "service_account",
    "project_id": "sems-gpa",
    "private_key_id": "d8821900171ccee5771ac92a58687ec5818dcb21",
    "private_key": FIREBASE_PRIVATE_KEY,
    "client_email": "firebase-adminsdk-97nch@sems-gpa.iam.gserviceaccount.com",
    "client_id": "111059650010615118365",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-97nch%40sems-gpa.iam.gserviceaccount.com"
};


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sems-gpa.firebaseio.com"
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var db = admin.database();

var main = async (params) => {

    var res_body = {}
    var req_body = params

    if (!req_body.captcha) {

        var captcha_res = await axios.get("https://acoe.annauniv.edu/sems/Login/captcha", {
            responseType: 'arraybuffer'
        })

        res_body["cookies"] = captcha_res.headers["set-cookie"];
        res_body["captcha"] = Buffer.from(captcha_res.data, 'binary').toString('base64');

        res_body["count"] = (await (db.ref("stats/count").once("value"))).val();

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
                        await db.ref(`visits/${Date.now()}`).set(`${reg}_${name}`);
                    }

                    // console.log(i);
                    resolve(sem_data);
                    // data.push(sem_data);

                })
            )

            var data = await Promise.all(data_Promises);
            await db.ref("stats/count").transaction(v => v + 1);

            var x = await axios({
                method: 'get',
                url: "https://acoe.annauniv.edu/sems/login/logout",
                headers: {
                    Cookie: cookies
                },

            })

            // console.log(x.data)

            res_body["result"] = data;
        }

    }

    return res_body;

    // return {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     statusCode: 200,
    //     body: JSON.stringify(res_body),
    // }

}