'use strict';

const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const http = require('http');
const https = require('https');

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const app = express();

// Connect Database
connectDB();

app.use(compression())

//Body parser middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

// Define Routes
const dataComma = require('./routes/api/dataComma');
app.use('/dataComma', dataComma);

// Serve static assets in production

  // Set static folder
  app.use(express.static('client/build', { maxAge: 31557600 }));

  app.get('*', (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


