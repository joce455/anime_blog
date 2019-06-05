var express = require("express"),
    parser = require("body-parser"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require('passport'),
    flash = require('connect-flash'),
    morgan = require('morgan'),
    methodOverride = require("method-override"),
    configDB = require('./config/database.js');
cookieParser = require('cookie-parser'),
    session = require('express-session');
   //var seedDb= require('./seed');
    //seedDb();

//Routes
var animeRoutes = require('./routes/animes'),
    commentRoutes = require('./routes/comments'),
    loginRoutes = require('./routes/login');

mongoose.connect(configDB.url, { useNewUrlParser: true })

require('./config/passport')(passport);

app.use(morgan('dev')); // log every request to the console
app.use(methodOverride("_method")); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(function (req,res,next) {
 res.locals.currentUser= req.user;
 res.locals.error= req.flash("error");
 res.locals.success= req.flash("success");
 next();
});

app.use(express.static(__dirname + "/public"));
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.set("view engine", "ejs");

app.use("/animes", animeRoutes);
app.use("/animes/:id/comments", commentRoutes);





require('./routes/login')(app, passport);




app.listen(5000, 'localhost', function() {
    console.log("Server Listen");
});