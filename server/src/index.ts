import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import session from "express-session";
import cors from "cors";

const app = express();
const port = 4040;

async function start() {
  await AppDataSource.initialize();

  app.use(cors());

  app.use(express.json());

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
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

start();
