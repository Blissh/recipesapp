const User = require("../models/User");

const userctrl = {};

// rendering

userctrl.renderSignup = (req, res) => {
  res.render("users/register");
};

userctrl.renderSignin = (req, res) => {
  res.render("users/login");
};

userctrl.validateUser = () => {
  // passport implementation
};

userctrl.newUser = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  const rol = "user";
  console.log(name, email, password, confirm_password);
  if (password != confirm_password) {
    errors.push({ text: "Passwords don't match." });
  }

  if (password.length < 6) {
    errors.push({ text: "Passwords must be at least 6 characters." });
  }

  if (errors.length > 0) {
    res.render("/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    // email validation
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      //   req.flash("error_msg", "Email already in use.");
      console.log("email in use");
      res.redirect("/signup");
    } else {
      // Save the user
      const newUser = new User({ name, email, password, rol });
      console.log(newUser);
      newUser.password = await newUser.encryptPass(password);
      await newUser.save();
      console.log("registered sucesfuly");
      //   req.flash("success_msg", "You are registered.");
      res.redirect("/singin");
    }
  }
};

module.exports = userctrl;
