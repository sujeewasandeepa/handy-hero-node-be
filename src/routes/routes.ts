import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv'; 
import { getXataClient, Employer } from "../xata";

dotenv.config();

const router:Express = express();
const xata = getXataClient();

router.get("/api/employer", async (req:Request, res:Response) => {
    const employer = await xata.db.employer.getAll();
    res.json(employer);
})

router.post("/api/employer", async (req:Request, res:Response) => {
    const employerData = req.body;
    const createdEmployer = await xata.db.employer.create({
        name: employerData.name,
        address: employerData.address,
        NIC: employerData.NIC,
        hashed_password: employerData.password,
        phone_number: employerData.phone_number, 
    });
    res.json(createdEmployer);
})

router.put("/api/employer/:id", async (req:Request, res:Response) => {
    const id = req.params.id;
    const employerData = req.body;
    const updatedEmployer = await xata.db.employer.update(id, employerData);
    res.json(updatedEmployer);
});

router.delete("/api/employer/:id", async (req:Request, res:Response) => {
    const id = req.params.id;
    const deletedEmployer = await xata.db.employer.delete(id);
    res.json(deletedEmployer);
})

export default router;
