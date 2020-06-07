require("dotenv").config();

const app = require("./server.js");
require("./database");

//Server listening
app.listen(app.get("port"), () =>
  console.log(`App server listening on port`, app.get("port"))
);
