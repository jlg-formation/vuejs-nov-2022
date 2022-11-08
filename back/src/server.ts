console.log("About to start a server...");
import express from "express";
import morgan from "morgan";
import serveIndex from "serve-index";

import { api } from "./api";

const app = express();
const port = 3000;
const wwwDir = "..";

app.use(morgan("tiny"));

app.use("/api", api);

app.use(express.static(wwwDir));
app.use(
  serveIndex(wwwDir, {
    icons: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
