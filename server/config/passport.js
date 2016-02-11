//define local strategy

var LocalStrategy = require('passport-local').Strategy;

// import the user model

var User = require('../models/user');

//passing refrence to passport from app.js
module.exports = function(passport) {
	
	//serializeing user
	passport.serializeUser(function (user,done) {
		done(null, user);
	});//end of serializeUser
	
	//deserializing user
	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});// end of findbyid
	});// end of deserialize
	
	passport.use('loginLocal', new LocalStrategy({
		passReqToCallback: true
	},
	function(req, username, password, done) {
		
		//asynchronous process
		process.nextTick(function() {
			User.findOne({
				'username' : username
			}, function(err, user) {
				if(err) {
					return done(err);
				}
				
				//if user found not valid
				
				if(!user) {
					return done(null, false, req.flash('loginMessage', 'Incorrect UserName...'));
				}
				
				// if the password is not valid
				
				if(!user.validPassword(password)) {
					return done(null, false, req.flash('loginMessage', 'Incorrect User Password...'));
				}
				
				// If everything went ok - lets proceed with login
				
				return done(null, user);
				
			});
		});
	}));


	
}
	
