var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    router = require('express-mapping'),
    session = require('express-session'),
    path = require('path'),
    authority=require('./lib/utils/authority');
    app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
    //store: new RedisStore(conf.redis),
    secret: 'csfz-food-react',
    resave: true,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(authority.filter);
app.use(router('lib/controller'));

module.exports = app;