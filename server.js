const express = require('express');

const app = express();
app.use('/', express.static(__dirname));
app.listen(process.env.PORT || '8000', () => {
  console.log('Server strted on http://127.0.0.1:8000');
});
