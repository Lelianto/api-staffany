import express, { Request, Response } from 'express';
import { Shift } from '../models/shift';

const router = express.Router()

router.get('/api', [], async (req: Request, res: Response) => {
    const shift = await Shift.find({})
    return res.status(200).send(shift)
})

router.post('/api', async (req: Request, res: Response) => {
    const { name, date, startTime, endTime } = req.body
    const shift = Shift.build({ name, date, startTime, endTime })
    await shift.save()

    return res.status(201).send(shift)
})

export { router as shiftRouter }