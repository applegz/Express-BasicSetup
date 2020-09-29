//make express lib available in this file:
const express = require('express');
const app = express();

//set up routes(api/endpoint)
app.get('/', (req, res) => {
  res.send(`
  <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `);
});

app.get('/puppies', (req, res) => {
  res.send(`
  <html>
     <head>
       <title>Puppies site</title>
     </head>
     <body>
       <h1>Hello Puppies</h1>
     </body>
    </html>
  `);
});

app.get('/kittens', (req, res) => {
  res.send(`
  <html>
     <head>
       <title>Kittens site</title>
     </head>
     <body>
       <h1>Hello Kittens</h1>
     </body>
    </html>
    `);
});

//tell app to listen for requests
const PORT = 1338;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
