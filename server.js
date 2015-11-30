var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var RoutingContext = Router.RoutingContext;
var routes = require('./app/routes');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var testers = require('./server/testers');
var payments = require('./server/Payments');
var systemconfigs = require('./server/SystemConfig');
var incentives = require('./server/Incentives');
var appproviders = require('./server/AppProvider');
var bugreports = require('./server/BugReport');
var projects = require('./server/Project');

var User = require('./models/user');
var Tester = require('./models/tester');
var AppProvider = require('./models/AppProvider');
//require("babel-core/register");

var app = express();

app.set('port', process.env.PORT || 4000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets',express.static(path.join(__dirname, '/assets')));

mongoose.connect('mongodb://localhost/CMPE281',function(err){
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

// Configure passport middleware
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use account model for authentication
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.post('/testers',testers.save);
app.get('/testers',testers.findAll);

/*app.post('/user',user.save);
app.get('/user',user.findAll);*/

app.post('/payments',payments.save);
app.get('/payments',payments.findAll);

app.post('/systemConfigs',systemconfigs.save);
app.get('/systemConfigs',systemconfigs.findAll);

app.post('/projects',projects.save);
app.get('/projects',projects.findAll);

app.post('/incentives',incentives.save);
app.get('/incentives',incentives.findAll);

app.post('/appProviders',appproviders.save);
app.get('/appProviders',appproviders.findAll);

app.post('/bugReports',bugreports.save);
app.get('/bugReports',bugreports.findAll);


app.get('/getUser',function(req,res,next){
    if(req.user){
        res.status(200).send({user:req.user})
    }else{
        res.status(401).send({message:'No Session Found'})
    }
})



app.post('/registerTester', function(req, res, next) {
    console.log('registering Tester');
    var roles=[];

    if(req.param('managerResponsibility')){
        roles.push("ROLE_MANAGER")
    }
    roles.push("ROLE_TESTER");

    var user = new User({
        username: req.param('username'),
        roles:roles
    });

    User.register(user, req.param('password'), function(err,user) {
        if (err) {
            console.log('error while user register!', err);
            return res.status(500).send({message:'Error occurred during registration'+JSON.stringify(err)});
        }

        console.log('user registered!');

        var tester = new Tester(req.body);

        tester.save(function (err) {
            if (err) {
                console.log('Error saving data.');
                res.status(500).send(err);
            }
            res.status(200).send({message:'Tester successfully registered.'});
        })

    });
});

app.post('/registerProvider', function(req, res, next) {
    console.log('registering Tester');
    var user = new User({
        username: req.param('username'),
        roles:["ROLE_PROVIDER"]
    });

    User.register(user, req.param('password'), function(err,user) {
        if (err) {
            console.log('error while user register!', err);
            return res.status(500).send({message:'Error occurred during registration'+JSON.stringify(err)});
        }

        console.log('user registered!');

        var provider = new AppProvider(req.body);

        provider.save(function (err) {
            if (err) {
                console.log('Error saving data.');
                res.status(500).send(err);
            }
            res.status(200).send({message:'Provider successfully registered.'});
        })

    });
});



app.post('/login',function(req,res,next){
    passport.authenticate('local', function(err, user, info) {
        if (err) {
           return res.status(401).send({message:'Please enter valid credentials.'})
        }
        // Redirect if it fails
        if (!user) {
            return res.status(401).send({message:'Please enter valid credentials.'})
        }
        req.logIn(user, function(err) {
            if (err) {
               return res.status(401).send({message:'Please enter valid credentials.'})
            }
            // Redirect if it succeeds
            return res.status(200).send({user:user})
        });
    })(req, res, next);

});

app.get('/logout', function(req, res) {
    req.logout();
    res.send({message:'You are logged out!'});
});


app.use(function(req, res) {
    Router.match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.use(function(req,res,next){

    if(req.user){
        next();
    }else{
        res.redirect('/login');
    }
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
