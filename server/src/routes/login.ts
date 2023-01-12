import { Router } from "express";
import { User } from "../entity/User";
import { compare } from "bcrypt";

export const loginRoute = Router();

loginRoute.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email },
    select: { email: true, password: true },
  });

  const loginError = {
    //creating an error object that has a message a a boolean of "ok"
    message: "invalid username or password",
    ok: false,
  };
  if (!user) {
    //if not a user in the database return the loginError object that contains a message and a boolean
    return res.status(401).send(loginError);
  }
  const valid = await compare(password, user.password!); //creating a variable called valid. valid uses the compare() function built in bcrypt. cwe pass in password and user.password to compare the two parmas
  if (!valid) {
    // if the password entered is not a valid match to the password  stored in the DB return the loginError object that contains a message and a boolean
    return res.status(401).send(loginError);
  }
  const fullUser = await User.findOneByOrFail({ email });
  req.session.user = fullUser;
  req.session.save();
  res.send(fullUser);
});
