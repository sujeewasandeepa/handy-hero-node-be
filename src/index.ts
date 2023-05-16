import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv';
import { getXataClient, Employer } from "./xata";

dotenv.config();

const app:Express = express();
const PORT = process.env.PORT || 4000;

const xata = getXataClient();

// middleware
app.use(express.json());

app.get("/api/employer", async (req:Request, res:Response) => {
    const employer = await xata.db.employer.getAll();
    res.json(employer);
})

app.post("/api/employer", async (req:Request, res:Response) => {
    const employerData = req.body;
    const createdEmployer = await xata.db.employer.create(employerData);
    res.json(createdEmployer);
})

app.put("/api/employer/:id", async (req:Request, res:Response) => {
    const id = req.params.id;
    const employerData = req.body;
    const updatedEmployer = await xata.db.employer.update(id, employerData);
    res.json(updatedEmployer);
});

app.delete("/api/employer/:id", async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedEmployer = await xata.db.employer.delete(id);
    res.json(deletedEmployer);
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})