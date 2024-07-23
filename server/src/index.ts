import express, { Response, Request } from "express";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
