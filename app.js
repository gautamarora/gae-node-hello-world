const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!!!').end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
