import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(5000, () => {
  console.log("server 5000");
});
