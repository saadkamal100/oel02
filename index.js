
const express =require('express')



const app=express();
app.get('',(req,res)=>{
    res.send("<h1>The AutoMobileCompany</h1><p><h1>Car-Type</h1></br>Suzuki <img src=file:///C:/Users/Spring2020/Desktop/saadkamal-075-Oel02/Node-Basic/image/pic01.jfif alt=Cars=40 height=70></br>Suzuki Ravi.<img src=file:///C:/Users/Spring2020/Desktop/saadkamal-075-Oel02/Node-Basic/image/pic01.jfif alt=Cars=40 height=70> .</br>Suzuki Cultus.<img src=file:///C:/Users/Spring2020/Desktop/saadkamal-075-Oel02/Node-Basic/image/pic01.jfif alt=Cars=40 height=70></br>Toyota Hilux.<img src=file:///C:/Users/Spring2020/Desktop/saadkamal-075-Oel02/Node-Basic/image/pic01.jfif alt=Cars=40 height=70> </p> <a href= /about> Go to about page</a> </br><a href= /cartype> Go to Car Detail Page</a>");
})
app.get('/about',(req,res)=>{
    res.send('<input type="text" placeholder="user-name"/></br><input type="password" placeholder="password"/></p></br><button> Login</button></br><a href= /> Go to home page</a></br><a href= /cartype> Go to Car Detail Page</a>');
}) 
app.get('/cartype',(req,res)=>{
    res.send('<input type="text" placeholder="Car-Type"/></br><input type="text" placeholder="Car-Name"/></br><input type="text" placeholder="Car-Detail"/></br><button> Submit</button></br><a href= /about> Go to home page</a>');
}) 
app.listen(5000);
