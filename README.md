# Overview
This is an image repository developed for the Shopify Developer Challenge. 
I used the MERN stack to develop this application. 
This is my first project using the MERN stack, and I learned a lot. 

Features:
- A single page React.js frontend
- A MongoDB Atlas remote database
- An Express backend
- View all images
- Search for images by keyword/regex
- Add images

Please note: The provided public database access link is read-only, so you can not add images but the functionality is there and working.  
In addition, due to the free version limitations of MongoDB Atlas, the database stores the image filenames and the actual images are stored in the /public folder.  
Lastly, database access is limited to 500 requests per hour. 

### Screenshot of search for "science"
![Screenshot of search for "science"](/public/Screenshot.png)

# Run Instructions
First, clone the repository.  

## Backend

### `cd backend`
### `npm install`
### `nodemon server.js`
Launches the backend server (port 5000).  
You should see that connection was established with database. 


## Front end
In a new terminal:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Testing
Backend server+database tests are prodivided, to run:  
First make sure that the backend server is not currently running!
### `cd backend`
### `npm test`

These tests (while not fully comprehensive) ensure that the features of getting all the images, and getting images matching a search are working. 
