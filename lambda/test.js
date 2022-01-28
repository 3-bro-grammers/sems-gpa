require('dotenv').config({override:true});

require('./dist/bundle').handler({
    body: JSON.stringify({
        reg: "2018504001", pass: "Ikaa@2001", captcha: "692124",
        cookies: 'ci_session=bfb62eea32aac6dbfa4705f468b8fac4368d5f3f; path=/; secure; HttpOnly'

    })
}).then(res => {
    var data = JSON.parse(res.body);
    if (data.captcha) {
        require('child_process').exec(`start chrome "data:image/jpeg;base64, ${data.captcha}"`);
    }
    console.log(data)
    

})