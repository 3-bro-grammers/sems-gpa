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
    await (require('./get_semester_details')({
                body: JSON.stringify({
                    cookies: "ci_session=12710c996bac64c4e2603f5bf46161e7e6c6741d; path=/; secure; HttpOnly"}
                    )}, 
            res));
    console.log(JSON.parse(res.sendData));   
})()

