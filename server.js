
import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();
// app listing on 4000
app.listen(process.env.PORT, () => {
    console.log("app is listing in port 4000");
  });