require('./index').handler({
    body: JSON.stringify({
        reg: "2018504001", pass: "", captcha: "",
        cookies: 'ci_session=fcca1464489979836b50b2b4ffe672495479c97e; path=/; secure; HttpOnly'

    })
}).then(res => {

    var data = JSON.parse(res.body);
    if (data.captcha) {
        require('child_process').exec(`start chrome "data:image/jpeg;base64, ${data.captcha}"`);
    }
    console.log(data)
    

})