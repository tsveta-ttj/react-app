# Photography blog
A React app for viewing and managing posts in photography blog.
Created for educational purposes as a final project for Softuni's ReactJS - June 2022 course.

## Get Started
### Start the Rect app
In the client directory in your terminal, you can run the following command:
```
> npm run
```
Open http://localhost:3000

### Start the REST server
In the server directory in your terminal, you can run the following command:
```
> npm run 
```

## Authentication
The App have Public Part (Accessible without authentication) and Private Part (Available for Registered Users).

### Public Part 
Public Part includes Home page, the user login and user registration forms, as well as the public data of the blog posts (guest users can see catalog list but can not see details of the post). Guest user also can not access Create page.

### Private Part
Registered users can create posts and can access Details page of the post.

## NavBar
Guests (un-authenticated visitors) can see the links to the Home Page, Catalog page, as well as the links to the Login and Register pages.

The logged-in user navbar contain Welcome, { user’s username } and the links to Catalog page, the Create page,  and a link for the Logout action.

## Login & Registration User functionality
The Login page contains a form for existing user authentication. By providing an email and password the app will login a user.

The Registration page contains a form and by given username, email, password  the app will register a new user in the system.

If the Login / Registration was successful:
- redirect to Catalog page
- store the returned from the REST service object(which contains info about the logged user) in localStorage in order to make authenticated requests.
- welcome span is shown in navBar, with the username of the user

## Logout functionality
The logout action is available to logged-in users.

Upon success:
- redirect the user to the Home page
- clear session information in localStorage.

## All Posts
This page displays a list of all posts in the system and it is visible to guests and logged-in users. 
The description of the post is abbreviated to one line. The full description is displayed in Details page.

Clicking on the "Continue reading" button in the posts leads to the details page for the selected post. 
Guests can not see the "Continue reading" button, so they can't open the detail page.

If there are no posts, the "no post" message will be displayed.

## Details page
Only logged users should be able to view details about post. 
The page displayes the full info about the post.

Only creator of the post is able to see the Edit and Delete buttons.
Logged user that are not the owner of the post see only the Back button.

the Edit button displayed the Edit page, with all fields filled with the data for the meme.
the Delete button displayed a confirmation dialog.
the Back button redirect to Details page.

## Create post
Available to logged-in users. It contains a form for creating new post.
Upon success:
- redirect the user to the Home page

## Edit details page
The Edit page is available to logged-in users and it allows authors to edit their own posts. 
Edit page contains a form with all fields filled with the data for the post.

After clicking the edit button - redirect the user to the Details page of the post. The newly edited info of the post is displayed.

## Delete post
Available to logged-in users, for posts they have created. When the author clicks on the Delete action on any of their post, a confirmation dialog will be displayed, and upon confirming this dialog, the post will be deleted from the system.
Upon success, redirect the user to the Catalog page


## NotFound page
If user (guest or lodded) attempts to access a URL that does not exist, Not Found page is shown. The page contains message with go-to-home button which will redirect to Home page
 