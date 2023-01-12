import { Router } from "express";

export const authRoute = Router();

authRoute.get("/api/auth", (req, res) => {
  console.log(req.cookies);
  return res.send(req.session.user);
});
