import express from 'express'
import { length, temperature, weight } from './unit.controllers'
import { validateData } from './middlewares/validation.middleware';
import { LengthSchema, WeightSchema, TemperatureSchema } from './schema/unit.schema';
const router = express.Router()

router.post('/length', validateData(LengthSchema),length)
router.post('/weight', validateData(WeightSchema),weight)
router.post('/temperature',validateData(TemperatureSchema) ,temperature)

export default router;
