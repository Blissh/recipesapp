const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "bandito",
    resave: true,
    saveUninitialized: true,
  })
);

// Global variables

// Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/myrecipes.routes"));
app.use(require("./routes/recipes.routes"));
app.use(require("./routes/users.routes"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
