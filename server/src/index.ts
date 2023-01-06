import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import session from "express-session";
import cors from "cors";
import { hashSync } from "bcrypt";

const app = express();
const port = 4040;

async function start() {
  await AppDataSource.initialize();

  app.use(cors({ origin: "http://localhost:3000" }));

  app.use(express.json());

  //used for membership date DO NOT REMOVE
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
    const user = await User.findOneBy({ email });
    res.send(user?.firstName);
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
    //these regex determines what characters and format can be used for an email
    const emailRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const passwordRegex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;

    if (!emailRegex.test(initialEmail)) {
      //if the email doesnt match the email regex then return error
      return next(new Error("Invalid email"));
    }
    if (!passwordRegex.test(initialPassword)) {
      return next(new Error("Password not provided"));
    }

    // CONFIRMATION
    if (initialEmail !== confirmationEmail) {
      return next(new Error("Emails do not match"));
    }

    if (initialPassword !== confirmationPassword) {
      return next(new Error("Passwords do not match"));
    }

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = initialEmail;
    user.password = hashSync(initialPassword, 10);

    try {
      await User.save(user); //can do user.save() and not pass in the user object. either or works
    } catch (error) {
      console.error(error);
      return next(new Error("Failed to sign up user"));
    }
    delete user.password; //deletes the password property from the user object before its sent to the browser
    res.send(user);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

start();
