require('./index').handler({
    body: JSON.stringify({
        reg: "2018504001", pass: "Ikaa@2001", captcha: "", 
        cookies:'ci_session=e26e0e716a8044cf808384bc20b14962750f9394; cookiesession1=678B2867FGHIJKLMNOPQRSTUWXYZA2BB;'
        
    })
}).then(res=>console.log(res))