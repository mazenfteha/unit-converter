import { Request, Response, NextFunction } from "express";
import { convertLength } from './helpers/convertLength'
import { convertWeight } from './helpers/convertWeight'
import { convertTemperature } from "./helpers/convertTemperature";
import { APIError } from "./helpers/APIErrors";

// Length Convertor
export const length = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const {value , fromUnit, toUnit} = req.body;
        if (!value ||!fromUnit ||!toUnit) {
            return next(new APIError("All fields must be provided ", 404));
        }
        const result = convertLength(value, fromUnit, toUnit);
        res.status(200).json({ success: true, data: result});
    } catch (err) {
        return next(new APIError("Something went wrong", 500));
    }
}

// weight Convertor

export const weight = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const {value, fromUnit, toUnit} = req.body;
        if (!value ||!fromUnit ||!toUnit) {
            return next(new APIError("All fields must be provided ", 404));
        }
        const result = convertWeight(value, fromUnit, toUnit);
        res.status(200).json({ success: true, data: result});
    } catch (err) {
        return next(new APIError("Something went wrong", 500));
    }
}

// Temperature Convertor

export const temperature = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const {value, fromUnit, toUnit} = req.body;
        if (!value ||!fromUnit ||!toUnit) {
            return next(new APIError("All fields must be provided ", 404));
        }
        const result = convertTemperature(value, fromUnit, toUnit);
        res.status(200).json({ success: true, data: result});
    } catch (err) {
        return next(new APIError("Something went wrong", 500));
    }
}



