js-playground/accounts
=============

For this task
You should create a web application with these features


**Features**
1. Create account page
* Unique email address
* Valid email address
* Password that has 8 characters
* Password must contain at least one uppercase character
* Password must contain at least one number
* Password must contain at least one non-alphanumeric character
* Password should not contain more than 3 consecutive characters that are the same
* Unique username
* Username should consist of only alphanumerics
* Username should not be more than 20 characters in length
2. Log in page 
* Accept login with username or email
* Username/email is not case sensitive
* Password is case sensitive
* Lock the account for 15 minutes, after 5 failed logins in a 5 minute period
* Session should expire after 15 minutes of inactivity
3. Profile editor page
* Only accessible to a logged in users
* Should allow a user to provide
 - A unique nickname
 - Their full name
 - Their date of birth
 - Their favourite food
 - Their country
* A nickname is mandatory
* A nickname can never be changed
* A country is mandatory
* If any mandatory field is not filled in, the profile should be hidden
* A user should be able to mark their profile as hidden
4. Public profile page
* should be accessible to logged in and non-logged in users
* should be reachable with the a url format of /profile/:nickname
* if a profile is marked as hidden, it should return a 404
5. An administration page
* should accept log in with
- Admin role: admin / admin
- Support role: support / support
* Admin and support users can see a list of all users
* Admin and support users can see all the profile information
* Admin users can see the login attempts for a user
* Admin and Support users can hide and unhide a profile
* Admin and support users can search for a user by nickname, email address and username
	
	

	
**Restrictions**
* Mongo is your database
* This should function on browsers IE9 and upwards
* This should be useable on any mobile device
* This will be run on an Ubuntu machine


**Important**
Please complete in a branch clearly marked with your Github account name
