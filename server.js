require("dotenv").config();
const http = require("http");
const app = require("./app/app");
require('./config/dbConnect')


const PORT = process.env.PORT || 4040;

const server = http.createServer(app);
server.listen(PORT, console.log(`server listening on port ${PORT}`));

