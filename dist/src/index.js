"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const response_1 = __importDefault(require("../response"));
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("./libs/logger");
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    (0, response_1.default)(res, 200, true, null, "Hi");
});
app.use("/api/users", require("./routes/user.route"));
app.use("/api/renungan", require("./routes/renungan.route"));
app.listen(port, () => {
    logger.info("Server running!");
});
//# sourceMappingURL=index.js.map