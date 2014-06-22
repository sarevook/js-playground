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

  describe('should have a valid password', function() {
    it('should have 8 characters', function(done) {
      user.password = 'paco';
      user.save(function(err) {
        should.exist(err);
        done();
      }) 
    });
    it('should contain at least one uppercase character', function(done) {
      user.password = 'pacopaco';
      user.save(function(err) {
        should.exist(err);
        done();
      }) 
    });
    it('should contain at least one number', function(done) {
      user.password = 'Pacopaco';
      user.save(function(err) {
        should.exist(err);
        done();
      }) 
    });
    it('should contain at least one non-alphanumeric character', function(done) {
      user.password = 'Pacopac1';
      user.save(function(err) {
        should.exist(err);
        done();
      }) 
    });
    it('should not contain more than 3 consecutive characters that are the same', function(done) {
      user.password = 'Paaapa1!';
      user.save(function(err) {
        should.exist(err);
        done();
      }) 
    });
  });

  describe('should be a valid email address: ', function() {
    it('should be an unique email address', function(done) {
      user.save(function() {
        var userDup = new User(user);
        userDup.save(function(err) {
          should.exist(err);
          done();
        });
      });
    });

    it("shouldn't be an empty email", function(done) {
      user.email = '';
      user.save(function(err) {
        should.exist(err);
        done();
      });
    });

    it("should have the form *@*.*", function(done) {
      user.email = 'test';
      user.save(function(err) {
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