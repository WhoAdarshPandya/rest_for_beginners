const express = require("express");
const routes = require("./routes/routes");
const PORT = process.env.PORT || 2002;

const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
