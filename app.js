const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import the dotenv package

// Load environment variables from .env file
dotenv.config();

// Use environment variables for MongoDB URI and Port
const url = process.env.MONGO_URI || 'mongodb://host.docker.internal:27017/employeeDockerDB';
const port = process.env.PORT || 3000;

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
    console.log('employeeDB connected...');
});

app.use(express.json());

const empRouter = require('./routes/employees');
app.use('/employee', empRouter);

app.listen(port, () => {
    console.log(`Server started on port: ${port}.`);
});

