import express from "express";
import studentsRouter from "./routes/students.js";
import cors from "cors";



const app = express();
const port = 3001;

//* cors Mid
app.use(cors({ origin: 'http://localhost:3000' })); 

//Read request.body on json
app.use(express.json());

//* Request :
app.get("/", (request, response) => {
  response.send("welcome");
});

//* Routes :
app.use("/students", studentsRouter);

//* Working server :
app.listen(port, () => console.log(`the server is runing on port ${port}!!!`));
