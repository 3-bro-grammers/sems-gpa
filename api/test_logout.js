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
    await (require('./logout')({
                body: JSON.stringify({
                    cookies: "ci_session=406fda8f44b6fc5061db39dfe4c2f8abe35e8a76; path=/; secure; HttpOnly",}
                    )}, 
            res));
    console.log(JSON.parse(res.sendData));   
})()

