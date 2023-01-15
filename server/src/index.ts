import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import session from "express-session";
import cors from "cors";
import * as dotenv from "dotenv";
import { authRoute } from "./routes/auth";
import { signupRoute } from "./routes/signup";
import { loginRoute } from "./routes/login";

dotenv.config();
declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

const app = express();
const port = 4040;

async function start() {
  await AppDataSource.initialize();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); //parse incoming data

  // serving public file
  app.use(express.static(__dirname));

  //used for cookie DO NOT REMOVE
  const oneDay = 1000 * 60 * 60 * 24; //creating a var that stores 24 hours in milliseconds
  app.use(
    session({
      secret: `${process.env.SESSION_SECRET_KEY}`,
      saveUninitialized: true,
      cookie: {
        maxAge: oneDay,
        sameSite: "none",
        secure: false,
        httpOnly: true, //tells javascript within the browser that it can't access cookie. only the browser and the server can access cookie making it more secure
      }, //sets cookie expiration time to the oneDay var
      resave: false,
    })
  );
  app.use(authRoute);

  app.use(loginRoute);

  app.use(signupRoute);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

start();
