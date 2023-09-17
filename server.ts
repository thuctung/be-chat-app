import express, { Request, Response } from "express";
require("dotenv").config();

const port = process.env.PORT || 3000;
const app: express.Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server starting in port ${port}`);
});
