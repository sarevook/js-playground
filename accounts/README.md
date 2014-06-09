js-playground/accounts
=============

For this task
You should create a web application with these features

Please complete in a branch clearly marked with your Github account name

1. Create account page
	a) Unique email address
	b) Valid email address
	c) Password that has 8 characters
	d) Password must contain at least one uppercase character
	e) Password must contain at least one number
	f) Password must contain at least one non-alphanumeric character
	g) Password should not contain more than 3 consecutive characters that are the same
	h) Unique username
	i) Username should consist of only alphanumerics
	j) Username should not be more than 20 characters in length
2. Log in page 
	a) Accept login with username or email
	b) Username/email is not case sensitive
	c) Password is case sensitive
	d) Lock the account for 15 minutes, after 5 failed logins in a 5 minute period
	e) Session should expire after 15 minutes of inactivity
3. Profile editor page
	a) Only accessible to a logged in users
	b) Should allow a user to provide
	 i) A unique nickname
	 ii) Their full name
	 iii) Their date of birth
	 iv) Their favourite food
	 v) Their country
	c) A nickname is mandatory
	d) A nickname can never be changed
	e) A country is mandatory
	f) If any mandatory field is not filled in, the profile should be hidden
	g) A user should be able to mark their profile as hidden
4. Public profile page
	a) should be accessible to logged in and non-logged in users
	b) should be reachable with the a url format of /profile/:nickname
	c) if a profile is marked as hidden, it should return a 404
5. An administration page
	a) should accept log in with
		i) Admin role: admin / admin
		ii) Support role: support / support
	b) Admin and support users can see a list of all users
	c) Admin and support users can see all the profile information
	d) Admin users can see the login attempts for a user
	e) Admin and Support users can hide and unhide a profile
	f) Admin and support users can search for a user by nickname, email address and username
	
	
	
	
Restrictions:
1) Mongo is your database
2) This should function on browsers IE9 and upwards
3) This should be useable on any mobile device
4) This will be run on an Ubuntu machine