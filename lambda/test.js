require('./index').handler({
    body: JSON.stringify({
        reg: "2018504001", pass: "", captcha: "",
        cookies: 'ci_session=28086c9cf5838b22f94a0f0ebcf4a7995a1d93d1; path=/; secure; HttpOnly'

    })
}).then(res => {
    var data = JSON.parse(res.body);
    if (data.captcha) {
        require('child_process').exec(`start chrome "data:image/jpeg;base64, ${data.captcha}"`);
    }
    console.log(data)
    

})