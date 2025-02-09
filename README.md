# The Shoppies

A React web app for the Shopify frontend 2021 Challenge. View [Demo](https://react-shoppies.netlify.app/)

## The Challenge
We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:
* Search OMDB and display the results (movies only)
* Add a movie from the search results to our nomination list
* View the list of films already nominated
* Remove a nominee from the nomination list

 ### Technical requirements
1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. pdates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.


## Tech Stack
* React
* Styled-Components
* Redux
* Apollo client
* Apollo Server
* GraphQL

## Installion & Setup
To run the app, run these commands in two separate terminal windows from the root:

```bash
cd client && npm i
```
* Copy `example.env` and create `.env` at the root of the folder and add required environment data. 

and

```bash
cd server && npm i
```
* Copy `example.env` and create `.env` at the root of the folder and add required environment data. 

After creating both `.env` in client and server, run `npm start` in both terminals