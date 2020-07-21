## Installation

This project was created with create-react-app, it worked with hooks and in the css it worked with material-ui Google library.

# To run the project you must implement the command: npm start or yarn start

## Components

The project has a main component called App.js in which the project view is shown, this is responsible for showing the Header.js component header, SearchItem as the main page and Repos.js (second page). React router was implemented to go from one page to another.
Through the "src / components" folder, there you will see the different components that are related to different parts of the pages.
•Header.js => Header of the pages.
•SearchItem.js => Home page where the input and search button of the information of github users is located.
On this page we manage 2 state values, one to detect when the user copies the input called "users" and the other to map the error when it does not exist called "error", through the function "handleSumit" we call the users api (api.getDates) and we validate if that user exists, if it exists then through the history.push which is a react router functionality that allows me to go to another page, and if it does not exist it maps the error.
•Repos.js => This contains the repos search input and filter button for the programming languages.
In this component the different parts of the second page are centralized, this component has 2 children:

1. It is infoUser.js this is the one that loads the user information that is displayed on the left side of the page.
2. List.js this shows me the list of user repositories.

For this component we manage 4 states which are:
 repoFilter = This state filters the repositories, it is sent by means of props to the List component to be traversed by means of .map and to filter the repository that it looks for in the input.
 isLoading = Allows me to enable or disable it if the data has loaded on the page or not.
 repor = This state receives the api from the repositories through the api.getRepo and sends them through props to the list.js component, so they can be mapped.
 list = It is a state that through a function called "getUniquelang" filters the repeated programming languages.

There is a function called language that is responsible for calling the repository api
"Api.getRepo" if it responds then the repo state stores the response and the getUniqueland function with the response is added to the list and the loading is false.
As this component also has the “infoUser” component, which is the one that is in charge of user information, by means of a constant called “dateUser” and with the help of history I was able to access its status and obtain the state of the api. getDates, through props it is passed to infoUser.
Finally I have the Theme.js component here I make all the css styles, to be able to use it in the pages I must import useStyles in the different pages where I use it and through a variable called classes I can access all the styles or create classes for the components that need it.
In the "src / service" folder we can see the component "api.js" which contains the getDates user api and the one of the getRepo repositories, the user api returns a variable called userData which is the one that I send to the component where The information of the SerchItem user is validated and the infoUser by means of Repos the user info is mapped.
getRepo is in charge of showing all the repositories, it has a variable that returns called repos and the Repos component receives it to be sent through the list component and to be mapped in the front.

### Questions:

1. What would you do to test the project? R / Api performance tests, in order to determine their response times, which may vary depending on calls to them.
2. What would you like to add to the website or change the code? A / I would refactor the code, consume the Apis better, perform tests.
3. What were the main obstacles you had to overcome while working on your solution? A / It cost me a little more to understand the consumption of the Apis, since always in my challenges I had the json and it was only to extract the info, I consider that this took me a long time to understand it, it is necessary to fix things in the consumption, but I feel happy that I learned something new in this challenge.
4. What patterns did you use? Why?
   •React-router Because it saves me having to carry out logic to go from one page to another, it is very practical and easy to use.
   •Components Because I can enter states without changing any of the components that use it.
   •Props because it allows me to abstract logic or data from one component to another.
