# Madlibs Poem Generator

This application is built with stack consisting of Vue, Express, Node and Mongodb. 
It was a great learning experience, as I have never worked with these stack before. 

## To run the application

Begin by running the express server, by typing the following commands in the root directory -  
```
npm install
npm start
```
The server is running on http://localhost:3000/ 

To run the client side application, go tho the root directory in a new terminal and run - 
```
cd client/
npm install
npm run serve
```

The application is running on http://localhost:8080/ 

## Database

As mentioned above, I used a mongodb database, using mongodb atlas. I chose to use this over a local
database so that I could have the option to host the application on heroku. However, since it is 
the free version I can only make up to a 100 connections before the server stops responding. I then need
to reset the IP address in the IP whitelist.

I also understand that I have put my mongodb connection string in the code. I wouldn't do this in a real world case
scenario. 

## Functionality

A poem can be sumitted and created by hitting the create button on the front page. It will send the data through a POST request
to the server where it will be stored. 

Below the form submission, a GET request fetches all the poems from the database upon a page reload. 

A DELETE request is made whenever the delete button is clicked. It fires off a request and then through the server removed the epoem 
with a maching ID. 

The PUT request is similar to the delete request, in that it fires a request and looks for the matching ID in the database upon hitting
update button. It then updates with a new object.
