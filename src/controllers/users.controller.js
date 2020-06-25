const User = require("../models/User");
const passport = require('passport');
const userctrl = {};

// rendering

userctrl.renderSignup = (req, res) => {
  res.render("users/register");
};

userctrl.renderSignin = (req, res) => {
  res.render("users/login");
};

userctrl.validateUser = passport.authenticate('local', {
  failureRedirect: '/signin',
  successRedirect: '/recipes',
  failureFlash: true
});

userctrl.newUser = async (req, res) => {
  const { name, email, password, password_confirm } = req.body;
  const rol = "user";
  const errors = [];
  const username = await User.findOne({ name: name });
  const emailUser = await User.findOne({ email: email });

  if (emailUser) {
    errors.push({ text: "Email already in use" });
  }
  if (username) {
    errors.push({ text: "Username already in use" });
  }
  if (password != password_confirm) {
    errors.push({ text: "Passwords do not match" });
  }
  // Save the user
  if (errors.length > 0) {
    res.redirect("/signup", { errors });
  } else {
    const newUser = new User({ name, email, password, rol });
    newUser.password = await newUser.encryptPass(password);
    await newUser.save();
    req.flash("success_msg", "User registered succesfully");
    res.redirect("/signin");
  }
};

userctrl.logout = (req, res) => {
  req.logout();
  req.flash('success_msg', "You'r loged out");
  res.redirect('/');
};

module.exports = userctrl;
