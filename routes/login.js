var logout = require('express-passport-logout');

module.exports = function(app, passport) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('landing');
    });
    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
     req.logout();
     req.flash('success', 'Logout succes');
     res.redirect('/animes');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('error') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/animes', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('error') });
        });
        app.post('/signup', function(req, res,next) {
               passport.authenticate('local-signup', {
            successRedirect : '/animes', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        })(req,res,next)
        }
         );

};

