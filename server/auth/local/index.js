'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var Spark = require('intellihot-spark-js');
var User = require('./../../api/user/user.model');
var _ = require('lodash');


var router = express.Router();

router.post('/', function(req, res, next) {
	//console.log("passowrd -->"+req.body.password);

  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    var token = auth.signToken(user._id, user.role);
    //console.log('frontened server token: ', token);

   //console.log(user);


    
    Spark.login({username: req.body.email, password: req.body.password}).then(
	  function(backendtoken){

	  	var backEndAccessToken={"backEndAccessToken":backendtoken.access_token};

	  	/*
	  	  User.findById(user._id, function (err, userForUpdate) {
		    //if (err) { return handleError(res, err); }
		    //if(!userForUpdate) { return res.send(404); }
		    var updatedUser = _.merge(userForUpdate, backEndAccessToken);
		    updatedUser.save(function (err) {
		      if (err) { return handleError(res, err); }

		      res.json({token: token});
		      //return res.json(200, device);
		    });
		  });
		  */

	  	  var updatedUser = _.merge(user, backEndAccessToken);
	  	  		updatedUser.save(function (err) {
			      //if (err) { return handleError(res, err); }
			      res.json({token: token});
			      //return res.json(200, device);
			    });
	    //console.log('API call completed on promise resolve: ', backendtoken);
	   	 
	  },
	  function(err) {
	    //console.log('API call completed on promise fail: ', err);
	    res.json({token: token});
	  }
	);
	/**/
    
    
  })(req, res, next)
});

module.exports = router;