import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGOURI = process.env.MONGOURI;

function DBconnect() {
  mongoose
    .connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(
        "----------------------------------------------------------------"
      );
      console.log(`Db Connected`);
      console.log(
        "----------------------------------------------------------------"
      );
    })
    .catch((err) => {
      console.log(
        "----------------------------------------------------------------"
      );
      console.log("Error: ");
      console.log(err.message);
      console.log(
        "----------------------------------------------------------------"
      );
    });
}

export default DBconnect;
