## SWapiBox

An application used to present Star Wars information, built with the StarWars API, React, React-Router, Javascript, and CSS.

View it live [here](http://starwarswikipm.surge.sh/)
## Team

Pat McLaughlin

## Project Status

This project is currently through the extensions of the project specification. Users can sign in by entering their name on the landing page. They can then view various star wars canon featured around characters, vehicles, starships, and planets. They can favorite information cards that will persist until their next visit. Functionality to add a single Card layout so that users can view more detailed information about the chosen card is in progess. 

## Project Screen Shots

![Project landing page](readme-images/landing-page.png)

![Main page](readme-images/main.png)

![Category Page](readme-images/category.png)

![Favorites page](readme-images/favs.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`

## Reflection

This was a one week solo project during Module Three of the front end program at Turing. Project goals included handling multiple fetchs of the Star Wars API to bring in app content, as well as creating small, reusable React components. Additionally, we were to use jest/enzyme to build a thorough testing suite to help guide us during app development. An extension to implement React-Router was also an option;

We set out to build an app that would allow a user to view different sets of Star Wars information retrieved from the Star Wars api, including characters, vehicles, starships, and planets. Users can add a card to their favorites, which they can view in one location after visiting the favorites page. 

One of the main challenges was handling the chained fetch calls required to get the necessary information populated on the people and planet cards. This was our first dive into handing complex, asynchronous Javascript. Additionally, implementing React-router added some issues as I transitioned the app to add the new technology. 

Technologies used to to implement this project were the StarWars API, React, React-Router, JSX, vanillaJS, and CSS, as well as Jest/Enzyme for the testing suite. The boilerplate repo used to build this app was constructed using `create-react-app`.
