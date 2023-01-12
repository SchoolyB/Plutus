import { Router } from "express";
import { User } from "../entity/User";
import { hash } from "bcrypt";

export const signupRoute = Router();

signupRoute.post("/api/signup", async (req, res, next) => {
  const {
    firstName,
    lastName,
    initialEmail,
    initialPassword,
    confirmationEmail,
    confirmationPassword,
  } = req.body;

  // VALIDATION
  //these regex determines what characters and format can be used for an email or password
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const passwordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;
  const invalidEmailError = new Error("Invalid email");
  const passwordNotProvided = new Error("Password not provided");
  const emailsDontMatch = new Error("Emails do not match");
  const passwordsDontMatch = new Error("Passwords do not match");
  const failedToRegister = new Error("Failed to sign up user");

  if (!emailRegex.test(initialEmail)) {
    //if the email doesnt match the email regex then return error
    return next(invalidEmailError);
  }
  if (!passwordRegex.test(initialPassword)) {
    //if the password doesnt match the email regex then return error
    return next(passwordNotProvided);
  }

  // CONFIRMATION
  if (initialEmail !== confirmationEmail) {
    return next(emailsDontMatch);
  }
  if (initialPassword !== confirmationPassword) {
    return next(passwordsDontMatch);
  }

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = initialEmail;
  user.password = await hash(initialPassword, 10); //bcrypt hashes users password

  try {
    await User.save(user); //can do user.save() and not pass in the user object. either or works
  } catch (error) {
    console.error(error);
    return failedToRegister;
  }
  delete user.password; //deletes the password property from the user object before its sent to the browser
  res.send(user);
});
