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
    await (require('./get_semester_results')({
                body: JSON.stringify({
                    reg: "2018504001",
                    sem_code: "KQDGij4Vr%2B0BlUgFmnZunb4JnvJHVBSJc8RdORqEUAIQ0TvNlySsYyyJ94KgDwE%3EoX5vn9njBi%3EFeFRooqoGtQ%3D%3D",
                    cookies: "ci_session=12710c996bac64c4e2603f5bf46161e7e6c6741d; path=/; secure; HttpOnly",
                    stud_details_required: true}
                    )}, 
            res));
    console.log(JSON.parse(res.sendData));   
})()

