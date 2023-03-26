class Response {
    constructor(){
        this.headers = "";
        this.stat = "";
        this.sendData = "";
    }

    setHeader(header, val){
        this.headers += (header + ":" + val + "; ");
        return this;
    }

    status(stat){
        this.stat = stat;
        return this;
    }

    send(data){
        this.sendData = data;
        return this;
    }

}
(async ()=>{
    var req, res = new Response();
    await (require('./captcha_cookies')(req, res));
    var res_json = JSON.parse(res.sendData);
    console.log(res_json.cookies);
    require('child_process').exec(`start chrome "data:image/jpeg;base64, ${res_json.captcha}"`);
})()

