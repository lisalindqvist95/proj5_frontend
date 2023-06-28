# Glimpse

## Project Goals:
Glimpse is a content sharing app for makeup-artists and enthusiasts to share content. The users are able to follow each other, like each others content and pin things for later. The goal for the user is to find inspiration, share their work and find other like-minded people.

## UX

A user of Glimspe would most likely be someone who is interested in makeup and beauty. It could also be someone who works in the makeup industry or someone who's passionate about makeup. 

### User Stories

### User Profile
 - As a Site User I have an account where I can log in and create, edit and delete posts.
 - As a Site User, I can log in and out of my account so that it stays secure.
 - As a Site User I can see if I am logged in or out so that I know my status.
 - As a New User I can register for an account so that I can comment and like posts.
 - As a Site User I have an account where I can log in and like, pin and comment on posts.

### User Navigation
 - As a Site User I can immediately easily find the navigation so that I can use the website with ease.
 - As a Site User, I can view a list of posts and scroll infanetly so that I don't have to click to the next page. 
 - As a Site User, I can click on the person who has posted to fid their profile and follow them. 
 - As a Site User I can easily find new people to follow so that I can make new friends and get new inspiration.

### Post Details
 - As a Site User I can see the comments, likes and pins on all posts so that I know how other people are interacting with the post. 
 - As a Site User I can clearly see the image and text of the post so that it's easy for me to consume the content. 
 - As a Site User I can like posts of other users so that I can show my support.
 - As a Site User I can comment on posts so that I can ask qusetions and show support to other creators.
 - As a Site User I can pin posts I want to save so that I can find them later

### New Post
 - As a Site User I can upload an image so that others can see my creations. 
 - As a Site user I can add a title and text to my post so that I can describe my image.

 ### Edits
 - As a Site User I can edit my post so that I can change any mistakes. 
 - As a Site user I can add a title and text to my post so that I can describe my image.
 - As a Site User I can edit my comments so that I can change any mistakes.

 ### Filter
 - As a Site User I can serach for posts so that I can find new things or specific things I'm looking for.

### User stories not yet implemented
The following user stories haven't been made due to time constraints. It is intended that some or all of these user stories will be implemented at a later date.
- As a Site User I can post several pictures to make a tutorial
**- As a Site User there is a community tab for users to ask questions and respond to eachother.**

## Design

### Colour Pallete

The colour pallete on the site was chosen based on early 2000´s makeup computer games which the target group might recognize to give the site a playful feeling. The colors have been muted a bit in order to make the site feel more mature. 

### Wireframes
The first wireframes were rough sketches made by hand on paper for the layout.

## Agile method
To manage the user stories for this project Github project was used. The project board can be found *******HERE.******

## Data Model
This Project is based around Object-Oriented Programming.
***It is built with Django’s Class-Based Generic Views and Django AllAuth is used as the authentication system.
The project has a Post model wich allows the admin to create blogposts and a Comment model which allows users to comment on posts.***

## Testing

### User Story Testing

## User Profile
 - As a Site User I have an account where I can log in and create, edit and delete posts.
 A user can choose to create an account from the menu at the top of the page and a logged in user can create edit and delete posts.

 - As a Site User, I can log in and out of my account so that it stays secure.
 A site user can log in and out from the menu at the top of the page, if the user is inactive on the page they will be logged out automatically. 

 - As a Site User I can see if I am logged in or out so that I know my status.
The status of the user can be found in the menu at the top of the page. 

 - As a New User I can register for an account so that I can comment and like posts.
A new user can register for an account from the menu at the top of the page or from a link at the sign-in page. 

 - As a Site User I have an account where I can log in and like, pin andcomment on posts.
 A logged in user is able to comment, like and pin posts. 

## User Navigation
 - As a Site User I can immediately easily find the navigation so that I can use the website with ease.
The navigation bar is at the top of the page at all times so that it's easy to find. 

 - As a Site User, I can view a list of posts and scroll infanetly so that I don't have to click to the next page. 
Users can scroll infanetly to see all posts. 

 - As a Site User, I can click on the person who has posted to find their profile and follow them. 
 If you click on a post, a person in the most followed list or a comment it will take you to that persons profile. 

 - As a Site User I can easily find new people to follow so that I can make new friends and get new inspiration.
 Users can find all posts on the site in the normal feed on the homepage or they can find new people to follow in the "most followed" list. 

## Post Details
 - As a Site User I can see the comments, likes and pins on all posts so that I know how other people are interacting with the post.
Comments, likes and pins are displayed under each post. 

 - As a Site User I can clearly see the image and text of the post so that it's easy for me to consume the content. 
The image of the post is large enough to see and the text is paced below it. Posts are seperated with a space between them so that users aren't confused about what text is related to which image. 

 - As a Site User I can like posts of other users so that I can show my support.
 A logged in user is able to like posts of other users. 

 - As a Site User I can comment on posts so that I can ask qusetions and show support to other creators.
 A logged in user is able to comment on all posts. 

 - As a Site User I can pin posts I want to save so that I can find them later
 A logged in user is able to pin all posts, even their own if they want to save their own content for inspiration. 

## New Post
 - As a Site User I can upload an image so that others can see my creations. 
 A logged in user can create a new post and choose an image from their computer library. 

 - As a Site user I can add a title and text to my post so that I can describe my image.¨
 A logged in user can create a new post and add text to that post. 

 ## Edits
 - As a Site User I can edit my post so that I can change any mistakes. 
A logged in user can edit their own posts, not other peoples posts. 

 - As a Site User I can edit my comments so that I can change any mistakes.
 A logged in user can edit their own comments, not other peoples comments. 

 ## Filter
 - As a Site User I can serach for posts so that I can find new things or specific things I'm looking for.
 Their is a search bar at the top of the page where the user can search for titles or other users to find posts.


### Validator Testing

#### HTML
All HTML pages were run through the W3C HTML Validator and all errors where corrected.

#### CSS
The CSS passed through the official W3C CSS Validator.

#### Python
All Python files passed through Pep8.

#### Browser Testing
The website is tested on the commonly used browsers: Chrome, Safari, Edge, Firefox and Opera
All features worked on the tested browsers

#### Device Testing
The website is responsive so that it can be used on different screen-sizes
The responsiveness was tested using DevTools

#### Manual Testing


### Bugs

Log out function does not work
At first there was a bug which made it possible to log in but not out. This was fixed by rewriting some of the code for that function so the bug was probobly due to a spelling mistake. 







### Unfixed bugs
There are no known unfixed bugs.

## Security Features and Defensive Design

### User Authentication
Django's UserPassesTestMixin is used so that only users who created the comment edit/delete it.

### Form Validation
The form won't submit if it contains empty or invalid data.

### Database Security
An env.py file is used to store the database url and secret key to prevent unwanted connections to the database.
Cross-Site Request Forgery (CSRF) tokens are used on the forms on the site.

## Features

### Logo

### Navigaton

### Posts Feed

### Following Feed

### Most Followed

### Comment

### Liked Posts

### Pinned Posts

### Search Content

### User Profile

### New Post

### Log In/Out

### Sign Up

## Deployment
This project was depolyed via Heroku from the GitHub repository. See the steps taken below:

### Create Heroku App:
Log in to Heroku
Press the "New" button on the main page and choose "Create New App" from the drop-down menu
Enter the app name and select your region
Then "Create App"

### Create a database with ElephantSQL
Log in to ElephantSQL
Press the button "Create New Instance" i the top right corner
Give your plan a name and select your plan
Press the button "Select Region" and select a data center near you
Then press the "Review" button
Check that all your details are correct and press "Create instance"
Copy the URL database to paste in your GitPod workspace

### Github env.py and settings.py file:
Create an env.py file in the main directory of your GitPod workspace
In the env.py file add the DATABASE_URL value and create a chosen SECRET_KEY
Go into the settings.py file to import the env.py file, add file paths for both the SECRETKEY and DATABASE_URL (comment out the default database)
Save your files and make migrations

### Create files / directories
Create a requirements.txt file in the main directory
Create a "Procfile" in the main directory and add: gunicorn project-name.wsgi

Heroku Config Vars
DATABASE_URL value (copy database from ElephantSQL)
SECRET_KEY value
CLOUDINARY_URL
PORT = 8000
DISABLE_COLLECTSTATIC = 1

### Deployment
Under the deploy tab on Heroku conncet to your GitHub and add your repository
Deploy at the bottom of the page
Click View to view the deployed site.

## Languages
Python
HTML
CSS
Javascript

## Frameworks & Libraries Used
Django: Main framework used for the project
Django-allauth: Authentication library used for the project
PostgreSQL Used as database
Heroku: Used for deployement
Chrome Dev Tools: Used to test responsiveness
Font Awesome: Used for icons
GitHub: Used for version control and agile tool
Google Fonts: Used for fonts
W3C: Used to validate HTML & CSS
PEP8 Online: used to validate Python code
Summernote: Editor to allow users to edit their posts
Crispy Forms: used for Django Forms
Cloudinary: Image hosting service
Bootstrap: CSS Framework for responsiveness and styling
Tables Generator: Used to create markdown table

## Credits
W3Schools
Django Docs
Bootstrap
Stack Overflow
Code Institute - Blog Walkthrough Project
AliOKeeffe - Easy Eater Project
Unsplash
Adobe stock


