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
    await (require('./get_student_image')({
                body: JSON.stringify({
                    reg: "2018504001", 
                    cookies: "ci_session=3f04fb1467ae36f6c4f0a90e1c1864f8e9d01d76; path=/; secure; HttpOnly"}
                    )}, 
            res));
    console.log(JSON.parse(res.sendData).stud_img);   

    require('child_process').exec(`start chrome "data:image/png;base64, ${JSON.parse(res.sendData).stud_img}"`);
})()

