const express = require("express");
require("../src/db/conn");

const CommerceRanking = require("../src/models/commerce");
const router = require("../src/routers/ecommer")

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
});
