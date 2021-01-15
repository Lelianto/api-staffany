import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Shift } from '../models/shift';

const router = express.Router()

router.get('/api', [], async (req: Request, res: Response) => {
	try {
		const shift = await Shift.find({})
		console.log('success', shift)
		return res.status(200).send(shift)
	} catch (error) {
		console.log('error get', error)
		return res.status(400).send({"message":error})
	}
})

router.post('/api', async (req: Request, res: Response) => {
	try {
		const { name, date, startTime, endTime } = req.body
		const shift = Shift.build({ name, date, startTime, endTime })
		console.log('success post', shift)
		await shift.save()
	
		return res.status(201).send(shift)
	} catch (error) {
		console.log('error post', error)
		return res.status(400).send({ "message": error })
	}
})

router.delete('/api/:id', function (req, res, next) {
	try {
		Shift.findOneAndDelete({ _id: req.params.id })
			.exec()
			.then((counter: any) => res.status(201).send(res.json()))
			.catch((err: any) => next(err));
	} catch (error) {
		return res.status(400).send({ "message": error })
	}
});

export { router as shiftRouter }