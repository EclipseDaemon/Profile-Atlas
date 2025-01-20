# Profile Atlas

## Description
Profile Atlas is a web application designed to manage user profiles efficiently. It allows administrators to create, update, view, and delete user profiles. The application features a seamless user interface built with React.js and a robust backend powered by Node.js, Express, and MongoDB.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Prerequisites
Before running this project, ensure the following are installed on your system:
- **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)
- **MongoDB Compass** (optional, for database visualization) - [Download MongoDB Compass](https://www.mongodb.com/products/compass)

## Repository Link
[GitHub Repository](https://github.com/EclipseDaemon/Profile-Atlas)

## File Structure
Client
Server

## How to Clone and Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/EclipseDaemon/Profile-Atlas.git

   cd Client
npm install

    cd Server
npm install

2. **After Installing all the dependencies**
   -start your express server on (localhost:3000)
   -start your react server on (localhost: 5173)
   -open your mongodbcompass application and start a connection create database.
   -update your database name with the file (Server >> db >> dbConnection.js) to  "mongodb://127.0.0.1/yourdatabasename".
   -after doing this ensure the express server is running properly and  "Database Connected !" is displayed on console.
   -once all things are set you can go to react server at end point (localhost:5173/admin) there you can add profile as you like.
   -you can see update profile on (localhost:5173) homepage and when you click on summary button you will be redirected to map navigation map.
   -if you want to delete or update profile you can go to same endpoint (localhost:5173/admin) and there you can delete or update your profile.


***Thank You***



