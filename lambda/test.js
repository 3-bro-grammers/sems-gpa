// require('dotenv').config({override:true});

require('./index').handler({
    body: JSON.stringify({
        reg: "2018504001", pass: "Ikaa@2001", captcha: "",
        cookies: 'ci_session=ffea017c9b3dd45acc6497698ddbb9e11c2a8222; path=/; secure; HttpOnly'

    })
// eval(require('fs').readFileSync('./index.js').toString());
// main({
//     __ow_body: JSON.stringify({
//         reg: "2018504001", pass: "Ikaa@2001", captcha: "c97116",
//         cookies: 'ci_session=ffea017c9b3dd45acc6497698ddbb9e11c2a8222; path=/; secure; HttpOnly'

//     })
}).then(res => {
    var data = res;
    if (data.captcha) {
        require('child_process').exec(`start chrome "data:image/jpeg;base64, ${data.captcha}"`);
    }
    console.log(data)
    

})