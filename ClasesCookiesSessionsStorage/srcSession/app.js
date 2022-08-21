import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import MongoStore from 'connect-mongo';

const app = express();
const port =8080;
const server = app.listen(port,()=>console.log(`Listening on port: ${port}`));
const FileStore = store(session);

app.use(express.json());
//new FileStore({path:'./sessions',ttl:10,retries:0})
app.use(session({
    //time to live
    store:MongoStore.create({
        mongoUrl:'AQUÍ TU URL DE MONGODB ATLAS',
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:10
    }), 
    secret:"CoderSecretConPapas",
    resave:false,
    saveUninitialized:false
}))
let users = [];
app.get('/',(req,res)=>{
    res.send("HOLA :)")
})
app.post('/register',(req,res)=>{
    const {email,password} = req.body;

    if(!email||!password) return res.status(400).send({error:"Incomplete Values"})
    let exists = users.some(user=>user.email===email);
    if(exists) return res.status(400).send({error:"User already exists"})
    let newUser = {
        email,
        password,
        role:'user'
    }
    users.push(newUser);
    res.send("User registered");
})
app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(email==="admin@correo.com"&&password==="contraseñaAdmin"){
        req.session.user = {
            email,
            role:"admin"
        }
        res.send("Logueado :)");
    }
    else{
        //Validar a un usuario
        let user = users.find(u=>u.email===email&&u.password===password);
        if(!user) return res.status(400).send({error:"Incorrect values"})
        req.session.user ={
            email : user.email,
            role : user.role
        }
        res.send("Logueado :)")
    }
})
app.get('/current',(req,res)=>{
    res.send(req.session.user);
})
app.get('/contar',(req,res)=>{
    if(req.session.user){
        res.send(`${req.session.user.email} Está contando`)
    }
})
app.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err) return res.status(500).send({error:err})
        res.send("Logged out")
    })
})