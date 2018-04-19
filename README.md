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

### Adapting needed config files 

#### Configuring the database

Inside the `simple-server/config/database.js` file, the configuration parameters for
your MySQL database need to be specified by editing the following inside the 
constructor:

```javascript
// Define the user name and the password of your database here!
this.pool = mysql.createPool({
    connectionlimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'SimpleServer'
});
```

To obtain a clean initial database setup without any entries, import the `simple-server/database/init.sql` file 
in your database.

To obtain an initial state already containing some test data, import the 
`simple-server/database/init_with_test_data.sql` file 
in your database.


#### Configuring the contact form messaging

To define the receiver of incoming contact form requests and to define which service should be responsible for the 
transport of these mails, edit the following inside the `simple-server/config/mails.js` file:

```javascript
// Insert the transporter e-mail here!
module.exports.TRANSPORTER_MAIL = '';

// Insert the password of the transporter e-mail here!
module.exports.TRANSPORTER_PASSWORD = '';

// Insert the service for the defined transporter e-mail here (E.g. 'gmail')!
module.exports.TRANSPORTER_SERVICE = '';

// Insert here the e-mail address that should always receive the contact form mails!
module.exports.RECEIVER_MAIL = '';
```


### Running the server locally

To run the server then locally on your machine, just execute the following command in the root directory of 
your local project:

```sh
node app.js
```




