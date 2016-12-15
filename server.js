import express = from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;
// redirect all https traffic to http
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next(); // the next() function just processes the request
  }
});
// set app to use Public folders
app.use(express.static('public'));
// set up routes
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'bundle.js'))
});
// Start server
app.listen(PORT, () => {
  console.log(`The express server is running on port${PORT}`);
});
