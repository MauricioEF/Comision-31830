import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/session.router.js';
import MongoStore from 'connect-mongo';
import session from 'express-session';

const app = express();
const server = app.listen(8080,()=>console.log("Listening :)"));
const connection = mongoose.connect('AQUÍ TU URL DE MONGODB ATLAS');

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(__dirname+'/public'))

app.use(session({
    store:MongoStore.create({
        mongoUrl:'mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/coderBase?retryWrites=true&w=majority',
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:100
    }),
    secret:"PapaConQuesito",
    resave:false,
    saveUninitialized:false
}))

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter)