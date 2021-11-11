const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
// Luodaan web-palvelin ja kerrotaan siitä tieto konsolissa.
app.listen(PORT, () => {
  console.log("Listening on port " + PORT );
});

// server listening 
//server.listen(port, () => {
//  console.log(`Server running on port ${port}`);
//});