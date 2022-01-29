// require('dotenv').config({override:true});

eval(require('fs').readFileSync('./index.js').toString());
main({
    __ow_body: JSON.stringify({
        reg: "2018504001", pass: "", captcha: "",
        cookies: 'ci_session=3316478a3510f280806cfe6e1528f88279db80d2; path=/; secure; HttpOnly'

    })
}).then(res => {
    var data = res;
    if (data.captcha) {
        require('child_process').exec(`start chrome "data:image/jpeg;base64, ${data.captcha}"`);
    }
    console.log(data)
    

})