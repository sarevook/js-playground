'use strict';

var should = require('should');
var User = require('./user.model');

var user;

describe('User Model', function() {
  before(function(done) {
    user = new User({
      provider: 'local',
      name: 'Fake User',
      email: 'test@test.com',
      password: 'password'
    });

    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no users', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('should have an unique email address', function(done) {
    user.save(function() {
      var userDup = new User(user);
      userDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  describe('should be a valid email address: ', function() {
    it("email can't be empty", function(done) {
      user.email = '';
      user.save(function(err) {
        should.exist(err);
        done();
      });
    });

    it("email should have the form *@*.*", function(done) {
      user.email = 'test';
      user.save(function(err) {
        console.log(err);
        should.exist(err);
        done();
      });
    });
  });

  it("should authenticate user if password is valid", function() {
    user.authenticate('password').should.be.true;
  });

  it("should not authenticate user if password is invalid", function() {
    user.authenticate('blah').should.not.be.true;
  });
});