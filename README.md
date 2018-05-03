# Simple Server

A simple server created specifically for the [simple-blog](https://github.com/amaschell/simple-server) project.

This server was built with the Node.js framework [Express.js](https://expressjs.com/) and the database management
system [MySQL](https://www.mysql.com/).




## To run it locally on your machine

### Prerequisites

You need to have [npm](https://www.npmjs.com/) installed.

To install then all needed dependencies inside your local project, simply run:

```sh
npm install
```

### Choosing the configuration 

Inside the `simple-server/config/config.js` file, different configurations for different environments (i.e. development,
production, test) can be defined. The scripts that start the server (each with a specific environment) are defined
in `simple-server/package.json`:

```
...

"scripts": {
    "start": "NODE_ENV=development node ./app",
    "test": "NODE_ENV=test node ./app"
},

...
```
 
#### The database

Adapt the database properties in the `simple-server/config/config.js` file to match your MySQL database for your 
desired environment.

To obtain then a clean initial database setup without any entries, import the `simple-server/database/init.sql` file 
into your database.

Or, to obtain an initial state already containing some test data, import the 
`simple-server/database/init_with_test_data.sql` file into your database.


#### The e-mail messaging

To define the receiver of incoming contact form requests and to define which service should be responsible for the 
transport of these mails, edit the respective mailing properties inside the `simple-server/config/config.js` file 
for your desired environment.


### Running the server locally in development mode

To run the server then in development mode locally on your machine, just execute the following command in the root 
directory of your local project:

```sh
npm start
```




