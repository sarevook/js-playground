'use strict';

var should = require('should');
var User = require('./user.model');

var user;

describe('User Model', function() {
  beforeEach(function(done) {
    user = new User({
      provider: 'local',
      name: 'FakeUser',
      email: 'test@test.com',
      password: 'Pacopa1!'
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

  describe('should be a valid username ', function() {  
    it('should be an unique username', function(done) {
      user.save(function() {
        var userDup = new User(user);
        userDup.save(function(err) {
          should.exist(err);
          done();
        });
      });
    });
    it('should consist of only alphanumerics', function(done) {
      user.name = "paco1!";
      user.save(function(err) {
        should.exist(err);
        done();
      });
    });
    it('should not be more than 20 characters in length', function(done) {
      user.name = Array(22).join("p");
      user.save(function(err) {
        should.exist(err);
        done();
      });
    });
    it('should be something like paco', function(done) {
      user.name = "paco";
      user.save(function(err) {
        should.not.exist(err);
        done();
      });
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
    it('should allow something like Pacopa1! for a password', function(done) {
      user.password = 'Pacopa1!';
      user.save(function(err) {
        should.not.exist(err);
        done();
      }) 
    });
  });
  describe('should be a valid email address: ', function() {
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
        user.email = 'test@test.com';
        done();
      });
    });

    it('should be an unique email address', function(done) {
      user.save(function(err1) {
        var userDup = new User(user);
        userDup.save(function(err2) {
          should.exist(err2);
          done();
        });
      });
    });
  });
});