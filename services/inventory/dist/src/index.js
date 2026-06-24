"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
const PORT = process.env.PORT || 4002;
const serviceName = process.env.SERVICE_NAME || "inventory-service";
app.listen(PORT, () => {
    console.log(`${serviceName} is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map