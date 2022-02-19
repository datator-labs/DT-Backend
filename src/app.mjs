import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3000/",
      "https://www.datator.tech",
      "https://www.datator.tech/",
      "https://www.data-tor.com",
      "https://www.data-tor.com/",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.post("/register", (req, res) => {
  console.log(
    "NEW USER: " + "EMAIL -- " + req.body.email + "\t NAME -- " + req.body.name
  );
  res.json({ msg: "Registration Successfull" });
});

app.listen(process.env.PORT, () => {
  console.log(
    "> Server started on http://" + process.env.HOST + ":" + process.env.PORT
  );
});
