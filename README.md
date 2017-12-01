## About the Application

Tripit List is an application to help users track trip ideas they have - a bucketlist specifically focused on travels! Users are able to upload images via the Filestack API and can search locations via the Google Maps API (embedded on the webpage). Users can view all trips they've added, including those completed or yet to be complete.

Link to application - https://rinathilm.github.io/trip-list-client/

**Application home screen:**

![Alt text](https://i.imgur.com/Qw1nk3D.png)

**Location entry:**

![Alt text](https://i.imgur.com/AGt0WTX.png)

**View your trips:**

![Alt text](https://i.imgur.com/zZG2ibZ.png)

## Wireframes

![Alt text](https://i.imgur.com/pCWbygT.jpg?2)

## User Stories

- As a new user, I want to be able to sign-up and use this app
- As an existing user, I want to be able to sign-in, change my password, sign-out and use this app
- As a user, I want to be able to add trips I would like to go on and update it once completed
- As a user, I want to be able to see a complete list of trips I created

## API Info

API Github repo - https://github.com/rinathiLM/trip-list-api

Heroku deployed app - https://trip-list.herokuapp.com

## Technology

- HTML/CSS
- jQuery
- AJAX
- JavaScript
- Handlebars
- Bootstrap
- Google Places API
- Filestack API

## Development Process

Setting up the Rails API wasn't difficult, I knew that I did not want to make many resources nor have it be a complex one. I wanted to focus on integrating a 3rd party API. I was able to use two - Google and Filestack. Both have a large community so finding the documentation and tutorials wasn't difficult, understanding what the API needed and what my application had to provide was the harder part. I was able to get my project to do basic CRUD actions in two days, but the other half of my time was spent on getting the APIs to work.

I also attempted to work with Ember and Angular to create a sample application, but found it difficult to understand and organize. Knowing that the timeline for this project was quickly approaching, I decided to spend time working with an API versus a frontend framework.

## Issues & Future Enhancements

**Issues:**
- Google maps doesn't appear when site is first loaded, the screen must be expanded to show the map
- You can press enter to submit a new trip location, it doesn't require the Google search to return a location
- The 'My Trips' page displayed with Handlebars does not scroll after an event, it is apparent if there's many items on the page

**Enhancements:**
- Allow picture to be updated after trip is created
- Place edit and delete icons above picture
