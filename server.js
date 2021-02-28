const express = require('express');

const port = process.env.PORT || '8000';
const app = express();
app.use('/', express.static(__dirname));
app.listen(port, () => {
  console.log(`Server started on http://127.0.0.1:${port}`);
});
