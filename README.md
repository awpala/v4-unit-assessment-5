<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Devmountain Web - Unit Assessment 5

Open Unit Assessment 5 in Canvas to view instructions.

A previous version of this code can be found [here](https://github.com/bethtelford/helo-redo).

# AP Solution - Local Setup

This branch provides a solution following the steps outlined in the assessment instructions.

To deploy locally, `git clone`, `git checkout -b ap-solution` (change from `master` branch to `ap-solution`), and do the following in the cloned/local repository:
1. Run `npm install` to install dependencies
2. Add a new `postgresql` database in Heroku
3. Add a `.env` file in the root directory (i.e., `v4-unit-assesssment-5/`) and define the following variables:
    * `SERVER_PORT=5555`
    * `CONNECTION_STRING=...` (set to connection string from Heroku postgres database)
    * `SESSION_SECRET=...` (set to arbitrary string of alphanumeric characters)
4. Run the code in `db/seed.sql` to create the tables in Heroku, either via [SQL Tabs](http://www.sqltabs.com/) or [pgweb](https://pgweb-demo.herokuapp.com/)
5. To run the Helo application locally, run the following commands in two separate terminal instances:
    * `nodemon` (launches the Node server in the terminal)
    * `npm start` (launches the frontend React app in the browser)

LIVE DEMO: https://helo.devmountain.com