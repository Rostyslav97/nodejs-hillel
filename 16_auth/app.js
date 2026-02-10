import express from 'express';
import session from 'express-session';
import FileStore from 'session-file-store';
import fs from 'fs';

const SessionFileStore = FileStore(session);

if (!fs.existsSync('./sessions')) {
    fs.mkdir('./sessions');
}

const app = express();
const PORT = 3400;

const users = {
    "admin" : "pass123",
    "user" : "qwerty"
};

app.set('view engine', 'pug');
app.set('views', './views');
// POST
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret : 'secret key',
    resave: false,
    saveUninitialized : true,
    cookie : {secure : false},
    store : new SessionFileStore({
        path: './sessions',
        ttl : 60*60,
        retries : 1,
        logFn:  ()=> {},
        reapAsync :false
    })
}));

app.listen(PORT , ()=> console.log(`http://localhost:${PORT}`));

app.use((req, res, next)=>{
    console.log(req.method, req.url);
    next();
});

const requireAuth = (req, res, next) => {
    if (req.session.username) next();
    else res.redirect('/login');
}

app.use((req, res, next)=> {
    console.log(req.session);
    if (req.session.username) {
        res.locals.username = req.session.username;
    }
    next();
})

app.get('/', (req, res)=> {
    res.render('index', {message : 'main page '})
});

app.get('/page', requireAuth, (req, res)=> {
    res.render('page', {message : 'secure page '});
});

app.get('/login', (req, res)=> {
    res.render('login', {})
});

app.post('/login', (req, res)=> {
    const {username, password} = req.body;
    if (users[username] && users[username] === password) {
        req.session.username = username;
        req.session.obj = {
            one : 111
        };
        res.redirect('/');
    }
    else {
        res.render('login', {error : 'Invalid login and pass'});
    }
});

app.get('/logout', (req, res)=>{
    req.session.destroy((err)=> {
        if (err) {
            console.log('Error destroy session');
        }
        res.redirect('/');
    })
});