# Latest news - react/redux learning app

This is a [basic archive + adding comments app](https://react-redux-news-app.netlify.app/) demonstartes usage of Redux clices, action creators, reducers and extra-reducers with asynchronous requests from a database (Firebase Database). 

<img src="/src/images/app-screenshot.png" alt="Screenshot of the app" width="75%">

The application queries the database on the first load and shows the results as a list of news items. Each news can be opened and has the funcionality of commenting. User can leave a comment and immediately see it in the comment list. Comments are also stored in the database.

This project is a part of an offline challenge from Codecademy's Frontend developer path.

## Features
Here's a quick summary of the functionalities in the app:

- Initial loading of news from the database at the first rendering via asynchronous request
- Opening particular news items with all details retrieved from the database
- Loading comments list from the database connected to particular news
- A form with the ability to leave a comment and send it to the database

## Technologies
- React.js
- React Hooks
- React Router
- Redux.js
- Redux Toolkit
- Redux Middleware and Thunks
- HTML, CSS, JavaScript
- Firebase database
- Firebase storage
- Node.js & npm
- Responsive design

## What I Learned
- General React features I have studied previously, but with increased complexity
- General Redux workflow in one-way direction
- Working with the Store in React/Redux apps
- Working with action creators, reducers, and extra-reducers
- Using createSlice() from Redux Toolkit
- Using createAsyncThunk() from Redux Toolkit
- Working with Firebase and creating a database for the app
- Working with the Firebase Library and its methods
- Making responsive design

## Using this project
To run this project:

- you will need a Node environment
- clone or fork this project
- install npm in the root of the project directory
- to run the app in development mode, in the project directory run 'npm start' and open http://localhost:3000 to view it in the browser.

Just to see:
- go to [News shop](https://react-redux-news-app.netlify.app/)

## Contributions and Feedback
Thanks for taking a look at this code. Feel free to comment on this App. I appreciate any thoughts or ideas that about how to make it better. 
For more information about me and my projects, visit my account or my website: [https://marina-romanova.com/](https://marina-romanova.com/)
