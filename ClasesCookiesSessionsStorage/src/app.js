import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port =8080;
const server = app.listen(port,()=>console.log(`Listening on port: ${port}`))

app.use(express.json());
app.use(cookieParser('palabraSecreta007DelPoder'));


app.get('/getCookie',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
})
app.get('/getSignedCookies',(req,res)=>{
    res.send(req.signedCookies);
})
app.get('/setCookie',(req,res)=>{
    res.cookie('cookieConQuesito',{a:1,b:3}).status(400).send("Cookie set")
})

app.get('/setExpCookie',(req,res)=>{
    res.cookie('cookieMortal','cookie :)',{
        maxAge:10000,
        signed:true
    }).send("Otra cookie mortal ha sido seteada")
})
app.get('/logout',(req,res)=>{
    res.clearCookie('cookieConQuesito').send('No more cookie');
})