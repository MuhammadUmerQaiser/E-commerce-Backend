//SIGN UP VALIDATION
exports.userSignUpValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req.check("email", "Email is required").notEmpty();
  req
    .check("email", "Email must be between 8 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
      min: 8,
      max: 32,
    });

  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must containt at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};

//SIGN IN VALIDATION
exports.userSignInValidator = (req, res, next) => {
  req.check("email", "Email is required").notEmpty();
  req.check("password", "Password is required").notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.categoryCreateValidator = (req, res, next) => {
  req.check("name", "Name is Required").notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
