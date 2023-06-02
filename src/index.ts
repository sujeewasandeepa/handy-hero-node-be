import express, {Express} from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import router from "./routes/routes";

dotenv.config();

const app:Express = express();
const PORT = process.env.PORT || 4000;


// middleware
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})
