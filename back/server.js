const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: "back/config/config.env" });

const server = app.listen(process.env.PORT, () => {
  console.log(
    `servidor conectado PUERTO :${process.env.PORT} en modo: ${process.env.NODE_ENV}`
  );
});
