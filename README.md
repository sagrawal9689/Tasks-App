# Tasks-App

Deployed at https://task-app4.herokuapp.com/

## Description

A simle task app where users can login and add tasks.


## Built With

* Node.js
* Express.js
* ReactJS
* Redux
* MongoDB

## Demo

This application is deployed on Heroku. Please check it out :smile: [here](https://task-app4.herokuapp.com/).

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sagrawal9689/Tasks-App.git
   ```
2. Install NPM packages in the root folder
   ```sh
   cd Tasks-App
   npm install
   ```
3. Install NPM packages in frontend folder
   ```sh
   cd frontend
   npm install
   ```

## Env Variables

Create a config.env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
JWT_EXPIRES_IN= 1d

```

### Run

```
# Run backend (:5000)
npm start
cd frontend

# Run frontend (:3000)
npm start
