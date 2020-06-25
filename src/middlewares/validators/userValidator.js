const { check, validationResult, body } = require("express-validator");

const user = {};

user.signupValidation = [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("username cannot be empty")
    .bail()
    .isLength({ min: 4, max: 24 })
    .withMessage("Minimum 4 characters, maximum 24 characters")
    .bail(),
  check("email")
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("invalid email address")
    .bail(),
  check("password")
    .not()
    .isEmpty()
    .withMessage("password cannot be empty")
    .bail()
    .isLength({ min: 6, max: 24 })
    .withMessage("password must be minimum 6 characters, maximum 24")
    .bail()
    .not()
    .equals(body("password_confirm"))
    .withMessage("passwords must be the same")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty)
      res
        .status(422)
        .render("users/register", { errors: errors.array() });
    next();
  }
];
module.exports = user;
