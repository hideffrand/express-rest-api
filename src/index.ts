require("dotenv").config();
import express, { Response, Request } from "express";
import SendResponse from "../response";

const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("./libs/logger");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  SendResponse(res, 200, true, null, "Hi");
});

app.get("/ping", (req: Request, res: Response) => {
  SendResponse(res, 200, true, null, "pong!");
});

app.use("/api/users", require("./routes/user.route"));
app.use("/api/renungan", require("./routes/renungan.route"));

app.listen(port, () => {
  logger.info("Server running!");
});
