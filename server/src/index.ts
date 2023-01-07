import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import session from "express-session";
import cors from "cors";
import { compare, hash } from "bcrypt";

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

const app = express();
const port = 4040;

async function start() {
  await AppDataSource.initialize();

  app.use(cors({ origin: "http://localhost:3000" }));

  app.use(express.json());

  //used for cookkie DO NOT REMOVE
  const oneDay = 1000 * 60 * 60 * 24; //creating 24 hours in milliseconds
  app.use(
    session({
      secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
      saveUninitialized: true,
      cookie: { maxAge: oneDay },
      resave: false,
    })
  );

  app.get("/", async (req, res) => {
    const user = await User.findBy({ id: 2 });
    res.send(user);
  });

  app.post("/login", async (req, res) => {
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

  // next comes from express when used allows the program to run whatever is next when called
  app.post("/signup", async (req, res, next) => {
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
    const invalidEmailError = next(new Error("Invalid email"));
    const passwordNotProvided = next(new Error("Password not provided"));
    const emailsDontMatch = next(new Error("Emails do not match"));
    const passwordsDontMatch = next(new Error("Passwords do not match"));
    const failedToRegister = next(new Error("Failed to sign up user"));

    if (!emailRegex.test(initialEmail)) {
      //if the email doesnt match the email regex then return error
      return invalidEmailError;
    }
    if (!passwordRegex.test(initialPassword)) {
      //if the password doesnt match the email regex then return error
      return passwordNotProvided;
    }

    // CONFIRMATION
    if (initialEmail !== confirmationEmail) {
      return emailsDontMatch;
    }
    if (initialPassword !== confirmationPassword) {
      return passwordsDontMatch;
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

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

start();
