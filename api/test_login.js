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
    await (require('./login')({
                body: JSON.stringify({
                    reg: "2018504001", 
                    pass: "", 
                    captcha: "ea4y7x", 
                    cookies: "ci_session=12710c996bac64c4e2603f5bf46161e7e6c6741d; path=/; secure; HttpOnly"}
                    )}, 
            res));
    console.log(res.sendData);   
})()

